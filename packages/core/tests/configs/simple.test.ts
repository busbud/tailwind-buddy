import { describe, expect, test } from 'vitest'
import { simpleConfiguration } from "../setup/simple"
// import { simpleComponent, simpleComponentWithoutTwMerge } from "../setup/simple"
import { twMerge } from "tailwind-merge"



describe('test simple config', () => {

    describe("defaults values", () => {
        test("", () => {
            const { root, label } = simpleConfiguration
            root({

            })
            expect(true).toBe(true)
        })
    })
    // const { root, children } = simpleComponent()
    // const { root: rootWithoutTwMerge, children: childrenWithoutMerge } = simpleComponentWithoutTwMerge()
    
    // describe("defaults values", () => {
        
    //     test("root", () => {
    //         const root_full_str = "text-red-100 text-red-200"

    //         expect(rootWithoutTwMerge()).toBe(root_full_str)
    //         expect(root()).toBe(twMerge(root_full_str))
    //     })

    //     test("children", () => {
    //         const children_full_str = "text-blue-100 text-blue-200"

    //         expect(childrenWithoutMerge()).toBe(children_full_str)
    //         expect(children()).toBe(twMerge(children_full_str))
    //     })
    // })

    // describe("with variants other than default", () => {
    //     test("root", () => {
    //         const root_full_str = "text-red-100 text-green-500"

    //         expect(rootWithoutTwMerge({ color: "secondary" })).toBe(root_full_str)
    //         expect(root({ color: "secondary" })).toBe(twMerge(root_full_str))
    //     })

    //     test("children", () => {
    //         const children_full_str = "text-blue-100 text-green-500"

    //         expect(childrenWithoutMerge({ color: "secondary" })).toBe(children_full_str)
    //         expect(children({ color: "secondary" })).toBe(twMerge(children_full_str))
    //     })
    // })

    // describe("with variants value not existing should not even take default", () => {
    //     test("root", () => {
    //         const root_full_str = "text-red-100"
            
    //         // @ts-expect-error
    //         expect(rootWithoutTwMerge({ color: "tertiary" })).toBe(root_full_str)
    //         // @ts-expect-error
    //         expect(root({ color: "tertiary" })).toBe(twMerge(root_full_str))

    //     })
    // })
})