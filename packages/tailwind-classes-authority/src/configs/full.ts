import { tca } from "../tca";

const defaultConfiguration ={
  "slots": {
      "root": "font-extrabold bg-red-100",
      "cat": "text-blue-100"
  },
  "variants": {
    "color": {
      "default": "primary",
      "values": {
        "primary": {
          "root": "bg-red-200",
          "cat": "text-blue-200"
        },
        "secondary": {
          "root": "bg-red-300"
        },
        "success": {
          "root": "bg-red-400",
          "cat": "text-blue-300"
        }
      }
    },
    "disabled": {
      "default": "true",
      "values": {
        "true": {
          "root": "bg-red-500"
        },
        "false": {
          "cat": "text-blue-400"
        }
      }
    }
  },
  "compoundVariants": [
    {
      "conditions": {
        "color": ["secondary", "primary"],
        "disabled": true,
      },
      "class": {
        "root": "bg-red-600",
        "cat": "text-blue-500"
      }
    },
    {
      "conditions": {
        "disabled": false,
      },
      "class": "text-blue-600"
    }
  ]
}
export const full = tca(defaultConfiguration)
export const fullWithoutTwMerge = tca(defaultConfiguration, {
  "tailwindMergeDisabled": true
})
