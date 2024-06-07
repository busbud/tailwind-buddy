import { describe, expect, test } from 'vitest'
import { generateAllSafeList } from './tailwind-utils'
import {
    smallConfiguration
} from "../configs/full"

describe('test tv', () => {

    test("slot", () => {
        const expectedOutput = "bg-red-100 bg-red-300 bg-red-600 sm:bg-red-100 md:bg-red-100 lg:bg-red-100 xl:bg-red-100 sm:bg-red-300 md:bg-red-300 lg:bg-red-300 xl:bg-red-300 sm:bg-red-600 md:bg-red-600 lg:bg-red-600 xl:bg-red-600"
        expect(generateAllSafeList(
            [smallConfiguration],
            ["sm", "md", "lg", "xl"]
        )).toBe(expectedOutput)
    })
})