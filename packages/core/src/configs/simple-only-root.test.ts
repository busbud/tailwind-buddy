import { describe, expect, test } from 'vitest'
import { simpleComponent, simpleComponentWithoutTwMerge } from "./simple-only-root"
import { twMerge } from "tailwind-merge"

describe('test simple config', () => {

    const { root } = simpleComponent()
    const { root: rootWithoutTwMerge } = simpleComponentWithoutTwMerge()
    
    describe("defaults values", () => {
        
        test("root", () => {
            const root_full_str = "text-red-100 text-red-200"

            expect(rootWithoutTwMerge()).toBe(root_full_str)
            expect(root()).toBe(twMerge(root_full_str))
        })
    })

    describe("with variants other than default", () => {
        test("root", () => {
            const root_full_str = "text-red-100 text-green-500"

            expect(rootWithoutTwMerge({ color: "secondary" })).toBe(root_full_str)
            expect(root({ color: "secondary" })).toBe(twMerge(root_full_str))
        })
    })

    describe("with variants value not existing should not even take default", () => {
        test("root", () => {
            const root_full_str = "text-red-100"
            
            // @ts-expect-error
            expect(rootWithoutTwMerge({ color: "tertiary" })).toBe(root_full_str)
            // @ts-expect-error
            expect(root({ color: "tertiary" })).toBe(twMerge(root_full_str))

        })
    })
})