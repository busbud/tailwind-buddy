import { describe, expect, test } from 'vitest'
import { simpleComponent } from "../setup/simple-only-root"

describe('test simple config', () => {
    const { root } = simpleComponent()
    
    describe("defaults values", () => {
        test("root", () => {
            const root_full_str = "text-red-100 text-red-200"
            expect(root()).toBe(root_full_str)
        })
    })

    describe("with variants other than default", () => {
        test("root", () => {
            const root_full_str = "text-red-100 text-green-500"
            expect(root({ color: "secondary" })).toBe(root_full_str)
        })
    })

    describe("with variants value not existing should not even take default", () => {
        test("root", () => {
            const root_full_str = "text-red-100"
            // @ts-expect-error
            expect(root({ color: "tertiary" })).toBe(root_full_str)
        })
    })
})