import { describe, expect, test } from 'vitest'
import { responsiveAndCompoundComponent } from '../setup/responsive-and-compound'

describe('test resposive simple config', () => {

    const { root } = responsiveAndCompoundComponent
    
    describe("responsive values", () => {
        test("with compound and responsive", () => {
            const root_full_str = /** @tw */ "text-red-100 text-xl lg:text-5xl lg:leading-tight lg:bg-red-500 lg:text-blue-500"
            expect(root({
                size: {
                    "initial": "small",
                    "lg": "extralarge"
                }
            })).toBe(root_full_str)
        })
    
        test("with other props", () => {
            const root_full_str = [
                "text-red-100",
                "text-xl", 
                "md:text-4xl", 
                "lg:text-xl", 
                "xl:text-5xl", 
                "xl:leading-tight", 
                "xl:bg-red-500", 
                "xl:text-blue-500", 
                "bg-gray-500", 
                "border-red-500",
                "lg:bg-gray-500", 
                "lg:border-red-500"
            ].join(" ")
            
            expect(root({
                size: {
                   "initial": "small",
                    "md": "large",
                    "lg": "small",
                    "xl": "extralarge"
                },
                disabled: true
            })).toBe(root_full_str)
        })

        test("with other props", () => {

            const root_full_str = [
                "text-red-100",
                "text-xl",
                "md:text-4xl",
                "lg:text-xl",
                "xl:text-5xl",
                "xl:leading-tight", 
                "xl:bg-red-500", 
                "xl:text-blue-500", 
                "bg-gray-500", 
                "border-red-500",
                "lg:bg-gray-500", 
                "lg:border-red-500", 
                "border-black"
            ].join(" ")

            expect(root({
                size: {
                   "initial": "small",
                    "md": "large",
                    "lg": "small",
                    "xl": "extralarge"
                },
                disabled: true,
                className: /** @tw */ "border-black"
            })).toBe(root_full_str)
        })
    })

    
})