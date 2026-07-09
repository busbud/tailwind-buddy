# Benchmarks

We do compare our library against `cva` amd `tailwind-variants`

To run them:

`pnpm install`

inside core folder:
`pnpm build`

come back to benchmark folder and run
`node benchmarks.mjs`

## `cn` helper benchmark (`cn-benchmark.mjs`)

Measures the `cn` utility that consumers use to merge classes, comparing the
legacy `clsx` + `tailwind-merge` implementation against the drop-in `cnfast`.

Workloads are harvested from real call sites in this repo (vuelib Button
variants + the shadcn-style override pattern). A parity guard asserts
byte-identical output before every run.

Run it from the benchmark folder:

`node cn-benchmark.mjs`

## Test

`pnpm test`
To make sure we do have the same outputs between library

## Our current benchmarks. TCA is our library At this time we had another name

<img width="825" alt="Image" src="https://github.com/user-attachments/assets/f78bf646-363d-4876-8477-0cc638dfd217" />
