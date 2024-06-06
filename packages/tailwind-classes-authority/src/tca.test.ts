// sum.test.js
import { describe, expect, test } from 'vitest'
import { miniAndCoumpounds } from "./configs/miniAndCoumpound"

describe('test tv', () => {
    const { root, cat } = miniAndCoumpounds()

    test("root slot", () => {
        const str = root({color: "success", disabled: true})
        const str_second = root({color: "success", disabled: false})
        const str_third = root({color: "secondary", disabled: true})
        const str_fourth = root({color: "secondary", disabled: false})

        expect(str).toBe("font-weight-extra-bold text-white-100 text-size-600 py-150 px-400 rounded-full active:opacity-80 bg-purple-500 hover:bg-purple-700 opacity-50 bg-gray-500 pointer-events-none bg-green-100 text-green-700 dark:text-green-800")
        expect(str_second).toBe("font-weight-extra-bold text-white-100 text-size-600 py-150 px-400 rounded-full active:opacity-80 bg-purple-500 hover:bg-purple-700 opacity-50 bg-gray-500 pointer-events-none")
        expect(str_third).toBe("font-weight-extra-bold text-white-100 text-size-600 py-150 px-400 rounded-full active:opacity-80 bg-purple-500 hover:bg-purple-700 opacity-50 bg-gray-500 pointer-events-none text-slate-400 bg-slate-200 dark:bg-slate-800 opacity-100")
        expect(str_fourth).toBe("font-weight-extra-bold text-white-100 text-size-600 py-150 px-400 rounded-full active:opacity-80 bg-purple-500 hover:bg-purple-700 opacity-50 bg-gray-500 pointer-events-none")
    })

    test("cat slot", () => {
        const str = cat({ disabled: true})
        const str_second = cat({ disabled: true, color: "primary"})
        expect(str).toBe("text-red-500 bg-orange-500")
        expect(str_second).toBe("text-red-500 bg-orange-500")
    })
})