import { describe, expect, test } from 'vitest'
import { simpleComponent, simpleComponentWithoutTwMerge } from "./simple"
import { twMerge } from "tailwind-merge"

describe('test simple config', () => {

    const { root, children } = simpleComponent()
    const { root: rootWithoutTwMerge, children: childrenWithoutMerge } = simpleComponentWithoutTwMerge()
    
    describe("default values", () => {
        expect(root({
            "color": "primary",
        }, {
            
        })).toBe("text-red-100 text-red-200")
    })
    // test("root slot", () => {
    //     const options = {
    //         color: "success"
    //     }
    //     const str = root(options)
    //     const str_second = rootWithoutTwMerge(options)

    //     const expectedFullStr = "font-extrabold bg-red-100 bg-red-400 bg-red-500"

    //     expect(str_second).toBe(expectedFullStr)
    //     expect(str).toBe(twMerge(expectedFullStr))
    // })
})