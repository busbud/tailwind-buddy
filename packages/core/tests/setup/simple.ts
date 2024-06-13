import { tca } from "../../src/tca";

interface MyComponent {
  disabled?: boolean
}

export const simpleConfiguration = tca({
    slots: {
      root: "text-red-100 text-red-200",
      label: "prout"
    },
    "variants": {
      "color": {
        "primary": "bg-red-500",
        "secondary": "bg-green-500"
      }
    },
    defaultVariants: {
      color: "primary"
    }
})

export const simpleConfigurationWithSlots = tca({
  slots: {
    "root": "text-red-100 text-red-200",
    label: "text-blue-100 text-blue-200",
  },
  "variants": {
    "color": {
      "primary": {
        "label": "bg-red-500",
        "root": "bg-red-500"
      },
      "secondary": "bg-green-500"
    }
  },
  defaultVariants: {
    "color": "secondary",
  },
  "compoundVariants": [
    {
      "conditions": {
        "color": ["primary", "secondary"],
      },
      "class": "text-red-100 text-red-200"
    }
  ]
})

// export const simpleComponent = tca(simpleConfiguration)
