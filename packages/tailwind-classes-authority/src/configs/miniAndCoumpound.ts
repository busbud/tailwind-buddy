import { tca } from "../tca";

export const miniAndCoumpounds = tca({
    "slots": {
        "root": "font-weight-extra-bold text-color-static-white-glass text-size-600 py-150 px-4 rounded-full active:opacity-80",
        "cat": ""
    },
    "variants": {
      "color": {
        "default": "primary",
        "values": {
          "primary": {
            "root": "bg-blue-500 hover:bg-blue-700",
            "cat": "text-red-500"
          },
          "secondary": {
            "root": "bg-purple-500 hover:bg-purple-700"
          },
          "success": {
            "root": "bg-purple-500 hover:bg-purple-700"
          }
        }
      },
      "disabled": {
        "default": "true",
        "values": {
          "true": {
            "root": "opacity-50 bg-gray-500 pointer-events-none"
          }
        }
      }
    },
    "compoundVariants": [
      {
        "color": "success",
        "disabled": true,
        "class": {
          "root": "bg-green-100 text-green-700 dark:text-green-800",
          "cat": "bg-black"
        }
      },
      {
        "color": ["primary", "secondary"],
        "disabled": true,
        "class": { 
          "root":  "text-slate-400 bg-slate-200 dark:bg-slate-800 opacity-100",
        }
      },
      {
        "disabled": true,
        "class": { 
          "cat":  "bg-orange-500"
        }
      }
    ]
}, {
  responsive: true
})
