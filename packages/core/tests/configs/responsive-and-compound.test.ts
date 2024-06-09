import { describe, expect, test } from 'vitest'
import { twMerge } from "tailwind-merge"
import { responsiveAndCompoundComponent, responsiveAndCompoundComponentWithoutTwMerge } from '../../src/configs/responsive-and-compound'

describe('test resposive simple config', () => {

    const { root } = responsiveAndCompoundComponent()
    const { root: rootWithoutTwMerge } = responsiveAndCompoundComponentWithoutTwMerge()
    
    describe("responsive values", () => {
        test("with compound", () => {
            const root_full_str = /** @tw */ "text-red-100 text-5xl leading-tight bg-red-500 text-blue-500"
            expect(rootWithoutTwMerge({
                size: "extralarge"
            })).toBe(root_full_str)
            expect(root({
                size: "extralarge"
            })).toBe(twMerge(root_full_str))
        })

        test("with compound and responsive", () => {
            const root_full_str = /** @tw */ "text-red-100 text-xl lg:text-5xl lg:leading-tight lg:bg-red-500 lg:text-blue-500"
            expect(rootWithoutTwMerge({
                size: {
                    "initial": "small",
                    "lg": "extralarge"
                }
            })).toBe(root_full_str)
            expect(root({
                size: {
                    "initial": "small",
                    "lg": "extralarge"
                }
            })).toBe(twMerge(root_full_str))
        })
    
        test("with other props", () => {

            const root_full_str = /** @tw */ "text-red-100 text-xl md:text-4xl lg:text-xl xl:text-5xl xl:leading-tight xl:bg-red-500 xl:text-blue-500 lg:bg-gray-500 lg:border-red-500"
            expect(rootWithoutTwMerge({
                size: {
                    "initial": "small",
                    "md": "large",
                    "lg": "small",
                    "xl": "extralarge"
                }
            }, {
                disabled: true
            })).toBe(root_full_str)
            expect(root({
                size: {
                   "initial": "small",
                    "md": "large",
                    "lg": "small",
                    "xl": "extralarge"
                }
            }, {
                disabled: true
            })).toBe(twMerge(root_full_str))
        })

        test("with other props", () => {

            const root_full_str = /** @tw */ "text-red-100 text-xl md:text-4xl lg:text-xl xl:text-5xl xl:leading-tight xl:bg-red-500 xl:text-blue-500 lg:bg-gray-500 lg:border-red-500 border-black"
            expect(rootWithoutTwMerge({
                size: {
                    "initial": "small",
                    "md": "large",
                    "lg": "small",
                    "xl": "extralarge"
                }
            }, {
                disabled: true,
                className: /** @tw */ "border-black"
            })).toBe(root_full_str)
            expect(root({
                size: {
                   "initial": "small",
                    "md": "large",
                    "lg": "small",
                    "xl": "extralarge"
                }
            }, {
                disabled: true,
                className: /** @tw */ "border-black"
            })).toBe(twMerge(root_full_str))
        })
    })

    
})