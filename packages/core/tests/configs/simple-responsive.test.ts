import { describe, expect, test } from 'vitest'
import { simpleResponsiveComponent, simpleResponsiveComponentWithoutTwMerge } from "../setup/simple-responsive"
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
})