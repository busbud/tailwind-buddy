import { describe, expect, test } from "vitest"
import { generateSafeList } from '../../src/utils/tailwind-utils'
import { simpleConfiguration } from "../setup/simple"
import { simpleCompoundConfiguration } from "../setup/simple-compound"

describe('safelist', () => {
    test("without compounds", () => {
        const str = [
            "text-red-100",
            "text-blue-100",
            "text-red-200",
            "text-blue-200",
            "text-green-500",
            "sm:text-red-100",
            "md:text-red-100",
            "lg:text-red-100",
            "xl:text-red-100",
            "sm:text-blue-100",
            "md:text-blue-100",
            "lg:text-blue-100",
            "xl:text-blue-100",
            "sm:text-red-200",
            "md:text-red-200",
            "lg:text-red-200",
            "xl:text-red-200",
            "sm:text-blue-200",
            "md:text-blue-200",
            "lg:text-blue-200",
            "xl:text-blue-200",
            "sm:text-green-500",
            "md:text-green-500",
            "lg:text-green-500",
            "xl:text-green-500",
            
          ]
          const generate_str = generateSafeList(
            [simpleConfiguration],
            ["sm", "md", "lg", "xl"]
        )
        expect(generate_str).toStrictEqual(str)
    })

    test("with compounds", () => {
      const str = [
          "text-red-100",
          "text-blue-100",
          "text-red-200",
          "text-blue-200",
          "text-green-100",
          "text-red-300",
          "text-green-200",
          "sm:text-red-100",
          "md:text-red-100",
          "lg:text-red-100",
          "xl:text-red-100",
          "sm:text-blue-100",
          "md:text-blue-100",
          "lg:text-blue-100",
          "xl:text-blue-100",
          "sm:text-red-200",
          "md:text-red-200",
          "lg:text-red-200",
          "xl:text-red-200",
          "sm:text-blue-200",
          "md:text-blue-200",
          "lg:text-blue-200",
          "xl:text-blue-200",
          "sm:text-green-100",
          "md:text-green-100",
          "lg:text-green-100",
          "xl:text-green-100",
          "sm:text-red-300",
          "md:text-red-300",
          "lg:text-red-300",
          "xl:text-red-300",
          "sm:text-green-200",
          "md:text-green-200",
          "lg:text-green-200",
          "xl:text-green-200",
        ]

        const generate_str = generateSafeList(
          [simpleCompoundConfiguration],
          ["sm", "md", "lg", "xl"]
      )
      expect(generate_str).toStrictEqual(str)
  })
})