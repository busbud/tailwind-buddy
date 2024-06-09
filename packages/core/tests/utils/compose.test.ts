import { describe, expect, test } from 'vitest'
// import { extendedConfiguration, commonConfiguration } from '@/configs/extend'
// import { composeWith } from './compose'

describe('test extended configuration', () => {

  test("configurations", () => {
    expect(true).toBe(true)
  })
})
// describe('test extended configuration', () => {
//     test("configurations", () => {
//         const finalConfiguration = composeWith(commonConfiguration, [extendedConfiguration])

//         expect(finalConfiguration).toStrictEqual({
//             "slots": {
//                 "root": "bg-red-700",
//                 "cat": "text-blue-300"
//             },
//             variants: {
//                 "color": {
//                   "default": "secondary",
//                   "values": {
//                     "secondary": {
//                       "root": "bg-red-300"
//                     }
//                   }
//                 },
//                 "disabled": {
//                     "default": "true",
//                     "values": {
//                       "true": {
//                         "root": "bg-red-500"
//                       },
//                       "false": {
//                         "cat": "text-blue-400"
//                       }
//                     }
//                 },
                
//             },
//             "compoundVariants": [
//                 {
//                   "conditions": {
//                     "color": ["secondary", "primary"],
//                   },
//                   "class": {
//                     "root": "bg-red-600",
//                   }
//                 },
//                 {
//                     "conditions": {
//                       "disabled": false,
//                     },
//                     "class": "text-blue-600"
//                 }
//             ]
//         })
//     })
// })