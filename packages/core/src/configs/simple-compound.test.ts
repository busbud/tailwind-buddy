import { describe, expect, test } from 'vitest'
import { simpleCompoundComponent, simpleCompoundComponentWithoutTwMerge } from "./simple-compound"
import { twMerge } from "tailwind-merge"

describe('test simple config', () => {

    const { root, children } = simpleCompoundComponent()
    const { root: rootWithoutTwMerge, children: childrenWithoutTwMerge } = simpleCompoundComponentWithoutTwMerge()
    
    describe("defaults values", () => {
        
        test("root", () => {
            const full_str = "text-red-100 text-red-200"

            expect(rootWithoutTwMerge()).toBe(full_str)
            expect(root()).toBe(twMerge(full_str))
        })

        test("children", () => {
            const full_str = "text-blue-100 text-blue-200"

            expect(childrenWithoutTwMerge()).toBe(full_str)
            expect(children()).toBe(twMerge(full_str))
        })
    })

    describe("with variants other than default", () => {
        test("root", () => {
            const full_str = "text-red-100 text-green-100"

            expect(rootWithoutTwMerge({ color: "secondary" })).toBe(full_str)
            expect(root({ color: "secondary" })).toBe(twMerge(full_str))
        })

        test("children", () => {
            const full_str = "text-blue-100 text-green-100"

            expect(childrenWithoutTwMerge({ color: "secondary" })).toBe(full_str)
            expect(children({ color: "secondary" })).toBe(twMerge(full_str))
        })
    })

    describe("with variants value not existing should not even take default", () => {
        test("root", () => {
            const full_str = "text-red-100"
            
            // @ts-expect-error
            expect(rootWithoutTwMerge({ color: "tertiary" })).toBe(full_str)
            // @ts-expect-error
            expect(root({ color: "tertiary" })).toBe(twMerge(full_str))

        })

        test("children", () => {
            const full_str = "text-blue-100"
            
            // @ts-expect-error
            expect(childrenWithoutTwMerge({ color: "tertiary" })).toBe(full_str)
            // @ts-expect-error
            expect(children({ color: "tertiary" })).toBe(twMerge(full_str))

        })
    })

    describe("with compound variants and default", () => {
        test("root", () => {
            const full_str = "text-red-100 text-red-200 text-red-300"

            expect(rootWithoutTwMerge({}, { disabled: true })).toBe(full_str)
            expect(root({}, { disabled: true })).toBe(twMerge(full_str))
        })

        test("children", () => {
            const full_str = "text-blue-100 text-blue-200"

            expect(childrenWithoutTwMerge({}, { disabled: true })).toBe(full_str)
            expect(children({}, { disabled: true })).toBe(twMerge(full_str))
        })

        test("root with secondary color", () => {
            const full_str = "text-red-100 text-green-100 text-red-300 text-green-200"

            expect(rootWithoutTwMerge({ color: "secondary" }, { disabled: true })).toBe(full_str)
            expect(root({ color: "secondary" }, { disabled: true })).toBe(twMerge(full_str))
        })
    })
})