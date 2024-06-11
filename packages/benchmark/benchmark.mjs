import Benchmark from "benchmark";

const suite = new Benchmark.Suite();

import CVA from "./configs/cva.mjs"
import TCA from "./configs/tca.mjs"
import TV from "./configs/tv.mjs"
import { twMerge } from "./configs/twMerge.config.mjs"

suite
    // twMerge disabled
    .add("TV without slots & tw-merge (disabled)", function () {
        TV.noSlotsAndCompoundNoTwMerge.avatar({ size: "md" });
    })
    .add("CVA without slots & tw-merge (disabled)", function () {
        CVA.noSlotsAndCompoundNoTwMerge.avatar({ size: "md" });
    })
    .add("TCA without slots & tw-merge (disabled)", function () {
        TCA.noSlotsAndCompoundNoTwMerge.avatar({ size: "md" });
    })

    // twMerge enabled
    .add("TV without slots & tw-merge (enabled)", function () {
        TV.noSlotsNoCompound.avatar({ size: "md" });
    })
    .add("CVA without slots & tw-merge (enabled)", function () {
        twMerge(CVA.noSlotsAndCompoundNoTwMerge.avatar({ size: "md" }));
    })
    .add("TCA without slots & tw-merge (enabled)", function () {
        twMerge(TCA.noSlotsAndCompoundNoTwMerge.avatar({ size: "md" }));
    })

    .on("cycle", function (event) {
        console.log(String(event.target));
    })
    .on("complete", function () {
        console.log("Fastest is " + this.filter("fastest").map("name"));
    })
    .run({async: true});
