import Benchmark from "benchmark";

const suite = new Benchmark.Suite();

import * as CVA from "./configs/cva.mjs"
import * as TCA from "./configs/tca.mjs"
import * as TV from "./configs/tv.mjs"
import { twMerge } from "./configs/twMerge.config.mjs"

suite

    // TV - slots false - twMerge no - compound yes
    .add("TV - slots false - twMerge no - compound yes", function () {
        TV.noSlotsAndCompoundNoTwMergeNoResponsive.avatar({ size: "md" });
    })
    .add("CVA - slots false - twMerge no - compound yes", function () {
        CVA.noSlotsAndCompoundNoTwMergeNoResponsive.avatar({ size: "md" });
    })
    .add("TCA - slots false - twMerge no - compound yes", function () {
        TCA.noSlotsAndCompoundNoTwMergeNoResponsive.avatar.root({ size: "md" });
    })

    //  TV - slots false - twMerge yes - compound yes
    .add("TV - slots false - twMerge yes - compound yes", function () {
        TV.noSlotsCompound.avatar({ size: "md" });
    })
    .add("CVA - slots false - twMerge yes - compound yes", function () {
        twMerge(CVA.noSlotsAndCompoundNoTwMergeNoResponsive.avatar({ size: "md" }));
    })
    .add("TCA - slots false - twMerge yes - compound yes", function () {
        twMerge(TCA.noSlotsAndCompoundNoTwMergeNoResponsive.avatar.root({ size: "md" }));
    })

    // TV - slots true - twMerge yes - compound yes => CVA do not support slots
    .add("TV - slots true - twMerge yes - compound yes", function () {
        TV.slotsCompoundResponsive.avatar({ size: "md" });
    })
    .add("TCA - slots true - twMerge no - compound yes", function () {
        twMerge(TCA.slotsAndCompoundNoTwMergeResponsive.avatar.root({ size: "md" }));
    })

    .on("cycle", function (event) {
        console.log(String(event.target));
    })
    .on("complete", function () {
        console.log("Fastest is " + this.filter("fastest").map("name"));
    })
    .run({async: true});
