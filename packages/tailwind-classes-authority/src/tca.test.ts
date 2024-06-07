import { describe, expect, test } from 'vitest'
import { full, fullWithoutTwMerge } from "./configs/full"
import { twMerge } from "tailwind-merge"

describe('test tv', () => {

    const { root, cat } = full()
    const { root: rootWithoutTwMerge, cat: catWithoutMerge } = fullWithoutTwMerge()
    
    test("root slot", () => {
        const options = {
            color: "success"
        }
        const str = root(options)
        const str_second = rootWithoutTwMerge(options)

        const expectedFullStr = "font-extrabold bg-red-100 bg-red-400 bg-red-500"

        expect(str_second).toBe(expectedFullStr)
        expect(str).toBe(twMerge(expectedFullStr))
    })

    test("cat slot", () => {
        const options = {
            disabled: true
        }
        const str = cat(options)
        const str_second = catWithoutMerge(options)

        const expectedFullStr = "text-blue-100 text-blue-200 text-blue-500"

        expect(str_second).toBe(expectedFullStr)
        expect(str).toBe(twMerge(expectedFullStr))
    })

    test("cat slot with coumpound class string", () => {
        const options = {
            disabled: false
        }

        const str = cat(options)
        const str_second = catWithoutMerge(options)

        const expectedFullStr = "text-blue-100 text-blue-200 text-blue-400 text-blue-600"

        expect(str_second).toBe(expectedFullStr)
        expect(str).toBe(twMerge(expectedFullStr))
    })
})