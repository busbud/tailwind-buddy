import { expect, test, describe } from 'vitest'
import * as CVA from "./configs/cva.mjs"
import * as TAILWINDBUDDY from "./configs/tailwindbuddy.mjs"
import * as TV from "./configs/tv.mjs"
import { twMerge } from "./configs/twMerge.config.mjs"

describe("validate output between libs", () => {
    test("slots false - twMerge no - compound yes", () => {
        expect(
            TV.noSlotsAndCompoundNoTwMergeNoResponsive.avatar({ size: "md" })
        ).toBe(
            CVA.noSlotsAndCompoundNoTwMergeNoResponsive.avatar({ size: "md" })
        )
        expect(
            CVA.noSlotsAndCompoundNoTwMergeNoResponsive.avatar({ size: "md" })
        ).toBe(
            TAILWINDBUDDY.noSlotsAndCompoundNoTwMergeNoResponsive.avatar.root({ size: "md" })
        )
    })

    test("slots false - twMerge yes - compound yes", () => {
        expect(
            TV.noSlotsCompound.avatar({ size: "md" })
        ).toBe(
            twMerge(CVA.noSlotsAndCompoundNoTwMergeNoResponsive.avatar({ size: "md" }))
        )
        expect(
            twMerge(CVA.noSlotsAndCompoundNoTwMergeNoResponsive.avatar({ size: "md" }))
        ).toBe(
            twMerge(TAILWINDBUDDY.noSlotsAndCompoundNoTwMergeNoResponsive.avatar.root({ size: "md" }))
        )
    })
})