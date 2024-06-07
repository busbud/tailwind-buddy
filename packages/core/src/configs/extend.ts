export const commonConfiguration = {
    "slots": {
      "root": "bg-red-100",
    },
    variants: {
      "color": {
        "default": "secondary",
        "values": {
          "secondary": {
            "root": "bg-red-300"
          }
        }
      }
    },
    "compoundVariants": [
      {
        "conditions": {
          "color": ["secondary", "primary"],
        },
        "class": {
          "root": "bg-red-600",
        }
      }
    ]
}

export const extendedConfiguration = {
    "slots": {
      "root": "bg-red-700",
      "cat": "text-blue-300"
    },
    "variants": {
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
          "disabled": false,
        },
        "class": "text-blue-600"
      }
    ]
}
