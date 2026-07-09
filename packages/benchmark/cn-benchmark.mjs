// Before/after benchmark for the `cn` helper.
//
//   before: clsx + tailwind-merge   ->  twMerge(clsx(inputs))
//   after:  cnfast                  ->  export { cn } from "cnfast"
//
// Workloads are harvested from real call sites in this repo (vuelib / vuelib-tailwind4
// Button variants + the shadcn-style override pattern) so the numbers reflect actual
// per-render cost, not synthetic strings.
import Benchmark from "benchmark";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { cn as cnFast } from "cnfast";

// --- before: the exact implementation currently in packages/*/src/lib/utils.ts ---
const legacyCn = (...inputs) => twMerge(clsx(inputs));

// --- workloads (args pre-built so we only measure the cn call itself) ---
const isActive = true;
const isLarge = true;

const workloads = {
  // vuelib CustomButton.vue: cn(root({ appearance, isDisabled, size, variant }))
  // root() default output contains duplicated bg-red-500 (slot + variant + compound).
  "single string (vuelib root)": [
    "bg-red-500 bg-red-500 w-[100px] h-[100px] bg-red-500",
  ],

  // slot output + consumer className override with conflicts (bg / width / radius).
  "override (slot + className)": [
    "bg-red-500 w-[100px] h-[100px] rounded-md font-medium",
    "bg-blue-500 w-[200px] rounded-lg",
  ],

  // shadcn-style: strings + boolean + object + falsy values + undefined/null.
  "shadcn mixed (strings+obj+bool)": [
    "px-2 py-1 text-sm bg-red-500 rounded-md font-medium",
    "px-4 bg-blue-500",
    { "text-lg": isLarge, "font-bold": false, "text-white": true },
    isActive && "rounded-lg",
    undefined,
    null,
  ],

  // larger realistic component: ~20 base classes + a heavy override set.
  "large component (20+ classes)": [
    "flex items-center justify-between gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-lg border border-gray-200 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors",
    "px-6 py-3 text-base font-bold text-white bg-blue-600 rounded-xl border-transparent shadow-md hover:bg-blue-700",
    { "disabled:opacity-50": true, "cursor-pointer": isActive },
  ],
};

// --- parity: cnfast must be byte-identical to legacy (per cnfast's promise) ---
let parityFailures = 0;
for (const [name, args] of Object.entries(workloads)) {
  const a = legacyCn(...args);
  const b = cnFast(...args);
  if (a !== b) {
    parityFailures++;
    console.error(`[PARITY FAIL] ${name}\n  legacy : ${JSON.stringify(a)}\n  cnfast : ${JSON.stringify(b)}`);
  }
}
if (parityFailures > 0) {
  console.error(`\n${parityFailures} workload(s) produced different output. Aborting benchmark.`);
  process.exit(1);
}
console.log(`\n[PARITY OK] all ${Object.keys(workloads).length} workloads byte-identical between legacy and cnfast\n`);

// --- benchmark ---
const suite = new Benchmark.Suite();

for (const [name, args] of Object.entries(workloads)) {
  suite.add(`BEFORE (clsx+twMerge) | ${name}`, function () {
    legacyCn(...args);
  });
  suite.add(`AFTER  (cnfast)       | ${name}`, function () {
    cnFast(...args);
  });
}

const results = [];

suite
  .on("cycle", function (event) {
    const t = event.target;
    results.push({ name: t.name, hz: t.hz, rme: t.stats.rme, samples: t.stats.sample.length });
    console.log(String(t));
  })
  .on("complete", function () {
    console.log("\n--- summary (ops/sec, higher = faster) ---");
    // group by workload and compute speedup
    const byWorkload = {};
    for (const r of results) {
      const sep = r.name.indexOf("|");
      const impl = r.name.slice(0, sep).trim();
      const workload = r.name.slice(sep + 1).trim();
      const key = impl.startsWith("BEFORE") ? "before" : "after";
      (byWorkload[workload] ??= {})[key] = r;
    }
    console.log(
      "workload".padEnd(28) +
        "before ops/sec".padStart(18) +
        "after ops/sec".padStart(18) +
        "speedup".padStart(12),
    );
    for (const [w, g] of Object.entries(byWorkload)) {
      const before = g.before;
      const after = g.after;
      const speedup = after.hz / before.hz;
      console.log(
        w.padEnd(28) +
          fmt(before).padStart(18) +
          fmt(after).padStart(18) +
          `${speedup.toFixed(2)}x`.padStart(12),
      );
    }
  })
  .run({ async: true });

function fmt(r) {
  return `${(r.hz).toLocaleString("en-US", { maximumFractionDigits: 0 })} ±${r.rme.toFixed(2)}%`;
}
