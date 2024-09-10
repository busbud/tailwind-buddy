import { compose, options } from "./configs/tailwindbuddy.mjs";
import { performance } from "perf_hooks";

// const ITERATIONS = 100000;

// function runTest(name, func) {
//   const start = performance.now();
//   for (let i = 0; i < ITERATIONS; i++) {
//     func();
//   }
//   const end = performance.now();
//   console.log(`${name}: ${end - start} ms`);
// }

const { root } = compose(options);

// Test TAILWINDBUDDY
// const { root } = TAILWINDBUDDY.noSlotsAndCompoundNoTwMergeNoResponsive.avatar;

console.log(
  root({
    size: "lg",
    variant: "circle",
    color: "primary",
    className: "custom-class",
  })
);

// runTest("TAILWINDBUDDY - Simple", () => {
//   root({ size: "md" });
// });

// runTest("TAILWINDBUDDY - Complex", () => {
//   root({
//     size: "lg",
//     variant: "circle",
//     color: "primary",
//     className: "custom-class",
//   });
// });
