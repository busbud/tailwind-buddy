import Benchmark from "benchmark";

const suite = new Benchmark.Suite();

import * as CVA from "./configs/cva.mjs";
import {
  noSlotsAndCompoundNoTwMergeNoResponsive,
  slotsAndCompoundNoTwMergeNoResponsive,
} from "./configs/tailwindbuddy.mjs";
import * as TV from "./configs/tv.mjs";
import { twMerge } from "./configs/twMerge.config.mjs";

suite
  // TV - slots false - twMerge no - compound yes
  .add("TV - slots false - twMerge no - compound yes", function () {
    TV.noSlotsAndCompoundNoTwMergeNoResponsive.avatar({ size: "md" });
  })
  .add("CVA - slots false - twMerge no - compound yes", function () {
    CVA.noSlotsAndCompoundNoTwMergeNoResponsive.avatar({ size: "md" });
  })
  .add("TAILWINDBUDDY - slots false - twMerge no - compound yes", function () {
    noSlotsAndCompoundNoTwMergeNoResponsive.avatar.root({
      size: "md",
    });
  })

  //  TV - slots false - twMerge yes - compound yes
  .add("TV - slots false - twMerge yes - compound yes", function () {
    TV.noSlotsCompound.avatar({ size: "md" });
  })
  .add("CVA - slots false - twMerge yes - compound yes", function () {
    twMerge(CVA.noSlotsAndCompoundNoTwMergeNoResponsive.avatar({ size: "md" }));
  })
  .add("TAILWINDBUDDY - slots false - twMerge yes - compound yes", function () {
    twMerge(
      slotsAndCompoundNoTwMergeNoResponsive.avatar.root({
        size: "md",
      })
    );
  })

  .on("cycle", function (event) {
    console.log(String(event.target));
  })
  .on("complete", function () {
    console.log("Fastest is " + this.filter("fastest").map("name"));
  })
  .run({ async: true });
