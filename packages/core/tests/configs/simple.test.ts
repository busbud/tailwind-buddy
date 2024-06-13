import { describe, expect, test } from 'vitest'
import { simpleComponent } from '../setup/simple-with-slots'

describe('test simple config', () => {

    const { root, label, definition } = simpleComponent

    describe("defaults values", () => {
        test("root", () => {
            const root_full_str = /** @tw */ "text-red-100 text-red-200 bg-red-500 text-lg"
            expect(root()).toBe(root_full_str)
        })

        test("label", () => {
            const children_full_str = /** @tw */ "text-blue-100 text-blue-200 bg-red-500 text-sm"
            expect(label()).toBe(children_full_str)
        })
    })

    describe("with variants other than default", () => {
        test("root", () => {
            const root_full_str = /** @tw */ "text-red-100 text-red-200 bg-red-500 text-md"
            expect(root({ size: "medium" })).toBe(root_full_str)
        })

        test("label", () => {
            const children_full_str = /** @tw */ "text-blue-100 text-blue-200 bg-green-500 text-sm"
            expect(label({ color: "secondary" })).toBe(children_full_str)
        })
    })

    describe("with variants value not existing should not even take default", () => {
        test("root", () => {
            const root_full_str = /** @tw */ "text-red-100 text-red-200 bg-red-500 text-lg"
            
            // @ts-expect-error
            expect(root({ expectedNotFound: "tertiary" })).toBe(root_full_str)
        })
    })
})