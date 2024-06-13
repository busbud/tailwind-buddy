import { expect, test, describe } from 'vitest'
import CVA from "./configs/cva.mjs"
import TCA from "./configs/tca.mjs"
import TV from "./configs/tv.mjs"
// import { twMerge } from "tailwind-merge";


describe("validate output between libs", () => {
    test("twMerge enable", () => {

        const tv_output = TV.noSlotsAndCompoundNoTwMerge.avatar({ size: "md" })
        // console.log(TV.noSlotsNoTwMerge.avatar({ size: "md" }))
        // console.log(TCA.noSlotsNoTwMerge.avatar().root({ size: "md" }))
        // console.log(CVA.noSlotsNoTwMerge.avatar({ size: "md" }))
        const tca_output = TCA.noSlotsAndCompoundNoTwMerge.avatar.root({ size: "md" });
        const cva_output = CVA.noSlotsAndCompoundNoTwMerge.avatar({ size: "md" });

        // console.log(TCA.noSlotsAndCompoundNoTwMerge.avatar({ size: "md" }))
        expect(tv_output, tca_output, cva_output).toBe(tv_output)

        // .add("TV without slots & tw-merge (disabled)", function () {
        //     TV.noSlotsNoTwMerge.avatar({ size: "md" });
        //   })
        //   .add("TCA without slots & tw-merge (disabled)", function () {
        //     TCA.noSlotsNoTwMerge.avatar({ size: "md" });
        //   })
        //   .add("CVA without slots & tw-merge (disabled)", function () {
        //     CVA.noSlotsNoTwMerge.avatar({ size: "md" });
        //   })
        //   .add("TV without slots & tw-merge (enabled)", function () {
        //     TV.noSlots.avatar({ size: "md" });
        //   })
        //   .add("TCA without slots & tw-merge (enabled)", function () {
        //     TCA.noSlots.avatar({ size: "md" });
        //   })
        //   .add("CVA without slots & tw-merge (enabled)", function () {
        //     twMerge(CVA.noSlotsNoTwMerge.avatar({ size: "md" }));
        //   })

    })
})