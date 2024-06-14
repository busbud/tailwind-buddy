import { describe, expect, test } from 'vitest'
import { simpleResponsiveComponent } from "../setup/simple-responsive"


declare global {
    interface GlobalScreens {
        screens: ["lg"];
    }
}

describe('test resposive simple config', () => {

    const { root } = simpleResponsiveComponent
    describe("responsive values", () => {
        test("root", () => {
            const root_full_str = /** @tw */ "text-red-100 text-xl md:text-5xl md:leading-tight text-blue-200"
            expect(root({
                "size": {
                    "initial": "small",
                    "md": "extralarge"
                },
                "color": "secondary"
            })).toBe(root_full_str)
        })
    })
})