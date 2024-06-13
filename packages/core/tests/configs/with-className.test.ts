import { describe, expect, test } from 'vitest'
import { simpleComponent } from "../setup/simple-with-slots"

describe('test with class name', () => {
    const { root, label } = simpleComponent
    
    describe("defaults values", () => {
        test("root", () => {
            const full_str = /** @tw */ "text-red-100 text-red-200 bg-red-500 text-lg text-purple-500"
            const options = {
                className: /** @tw */ "text-purple-500"
            }
            expect(root(options)).toBe(full_str)
        })

        test("label", () => {
            const full_str = /** @tw */ "text-blue-100 text-blue-200 bg-red-500 text-sm text-orange-500"
            const options = {
                className: /** @tw */ "text-orange-500"
            }
            expect(label(options)).toBe(full_str)
        })
    })
})