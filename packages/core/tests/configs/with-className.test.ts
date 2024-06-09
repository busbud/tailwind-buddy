import { describe, expect, test } from 'vitest'
import { simpleCompoundComponent, simpleCompoundComponentWithoutTwMerge } from "../../src/configs/simple-compound"
import { twMerge } from "tailwind-merge"

describe('test with class name', () => {

    const { root, children } = simpleCompoundComponent()
    const { root: rootWithoutTwMerge, children: childrenWithoutTwMerge } = simpleCompoundComponentWithoutTwMerge()
    
    describe("defaults values", () => {
        
        test("root", () => {
            const full_str = "text-red-100 text-red-200 text-purple-500"
            const options = {
                className: "text-purple-500"
            }

            expect(rootWithoutTwMerge({}, options)).toBe(full_str)
            expect(root({}, options)).toBe(twMerge(full_str))
        })

        test("children", () => {
            const full_str = "text-blue-100 text-blue-200 text-purple-500"
            const options = {
                className: "text-purple-500"
            }

            expect(childrenWithoutTwMerge({}, options)).toBe(full_str)
            expect(children({}, options)).toBe(twMerge(full_str))
        })
    })

    describe("with compound variants", () => {
        const options = {
            className: "text-purple-500",
            disabled: true
        }

        test("root", () => {
            const full_str = "text-red-100 text-red-200 text-red-300 text-purple-500"

            expect(rootWithoutTwMerge({}, options)).toBe(full_str)
            expect(root({}, options)).toBe(twMerge(full_str))
        })

        test("children", () => {
            const full_str = "text-blue-100 text-blue-200 text-purple-500"

            expect(childrenWithoutTwMerge({}, options)).toBe(full_str)
            expect(children({}, options)).toBe(twMerge(full_str))
        })

        test("root with secondary color", () => {
            const full_str = "text-red-100 text-green-100 text-red-300 text-green-200 text-purple-500"

            expect(rootWithoutTwMerge({ color: "secondary" }, options)).toBe(full_str)
            expect(root({ color: "secondary" }, options)).toBe(twMerge(full_str))
        })
    })
})