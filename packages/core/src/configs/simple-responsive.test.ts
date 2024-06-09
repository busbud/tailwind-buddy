import { describe, expect, test } from 'vitest'
import { simpleResponsiveComponent, simpleResponsiveComponentWithoutTwMerge } from "./simple-responsive"
import { twMerge } from "tailwind-merge"

describe('test resposive simple config', () => {

    const { root } = simpleResponsiveComponent()
    const { root: rootWithoutTwMerge } = simpleResponsiveComponentWithoutTwMerge()
    
    describe("responsive values", () => {
        test("root", () => {
            const root_full_str = /** @tw */ "text-red-100 text-xl md:text-5xl md:leading-tight"
            expect(rootWithoutTwMerge({
                "size": {
                    "initial": "small",
                    "md": "extralarge"
                }
            })).toBe(root_full_str)
            expect(root({
                "size": {
                    "initial": "small",
                    "md": "extralarge"
                }
            })).toBe(twMerge(root_full_str))
        })
    })

    // describe("with variants other than default", () => {
    //     test("root", () => {
    //         const root_full_str = "text-red-100 text-green-500"

    //         expect(rootWithoutTwMerge({ color: "secondary" })).toBe(root_full_str)
    //         expect(root({ color: "secondary" })).toBe(twMerge(root_full_str))
    //     })
    // })

    // describe("with variants value not existing should not even take default", () => {
    //     test("root", () => {
    //         const root_full_str = "text-red-100"
            
    //         // @ts-expect-error
    //         expect(rootWithoutTwMerge({ color: "tertiary" })).toBe(root_full_str)
    //         // @ts-expect-error
    //         expect(root({ color: "tertiary" })).toBe(twMerge(root_full_str))

    //     })
    // })
})