# Tailwind classes authority 🎨

You are looking for the [documentation go here](#documentation)

## What it is ?

This library is highly opinonated inspired on the object definition by [tailwind-variants](https://github.com/nextui-org/tailwind-variants). 

## What this library is trying to solve ?

First we wanted a solution that can be framework agnostic. To achieve that we need something that build string and receive parameters that do not care if you are from react, vue, vanilla JS.

We found solution that was really close to our needs. [tailwind-variants](https://github.com/nextui-org/tailwind-variants)

The promise of this library was great:
- Responsive props
- Having compound variant that override classes.
- Typescript auto complete is pretty good overhall
- Not so much configurations to work with it

But the reality is different:
- The package is not super actively maintained.
- Dealing with some complex use case seems inconsistent or not working like:
    - We can't mix regular props with, variant props, with responsive variant props. Basically 
    - working with responsive props and compoundsVariants are just not working
    - composing configuration seems to broke typings
    - when you make responsive variants it makes all of them responsive
    - can't interact with other kinds of props inside the compounds conditions

## How do tried to solve this

First we focus on that every features is working:
- variants
- responsive variants
- slots
- make it fast
- compound variants
- compounds variants + responsive variants
- compounds can interact with kind of props than variants values

Worth mentionning that we still do not support extends. [Check the github discussion](https://github.com/flozero/tailwind-classes-authority/discussions/1) to participate how you would expect to have it working.

## What would need to be improved

We will create few github issues with good first issue label. 

## Documentation

If you need like a cookbook Have a look at:
- [Our tests](packages/core/tests/configs) or [Our utils tests](packages/core/tests/utils/)
- [The test configs that our tests are usings](packages/core/tests/setup)

### Installation

```
pnpm add tailwind-classes-authority
```

You may need to add `tailwind-merge` if so.

```
pnpm add tailwind-merge
```

### Setup your tailwind types and screens

If you are extending / overriding tailwind screens config

You will need to setup as we have done [inside our tailwind.config test](./packages/ui/tailwind.config.ts)

```js
    export type Screens = "lg" | "xl"
    export const screens: Screens[] = ["lg", "xl"]
```

We will need that later to handle responsive props and having a single source of truth.

### Build your first component

We will use our [label component](./packages/ui/src/components/Label/Label.types.ts) as reference.

Generally you will want to start by creating the types of your component

#### We will need to define the slots we will find. By default you will always have a root slot.

```js
export type Slots = "root"
```

#### Define what variants we will find

```js
export interface Variants {
  fontWeight?: string
  size?: ResponsiveVariants<"small" | "large", Screens>
}
```

You will see that a variant can be responsive or not. This will impact how we will use props on the component. You can omit the Screen generic parameter if you didn't override default tailwind screens.

#### Defining component Props

```js
export interface LabelProps
  extends React.HTMLAttributes<HTMLBaseElement>,
  Variants {
  /** The component used for the root node. Either a string to use a HTML element or a component. */
  as?: React.ElementType;
}
```

#### Creating variant configuration type

```js
export type VariantConfiguration = TCA_VARIANT_DEFINITION<Slots, Variants, LabelProps>
```

This config will help us type our variantConfiguration. 

Basically Slots will tell the object what we will need to find as slots.

What variants need to be defined.

What other props compounds will use to create conditions here we put any props the component can receive but you can restrict it. 

### Defining variant configuration

```js
export const labelVariantsConfigurations: VariantConfiguration = {
    "slots": {
        "root": /** @tw */ "text-blue-500"
    },
    "variants": {
        "size": {
            "default": "small",
            "values": {
                "small": /** @tw */ "text-sm",
                "large": /** @tw */ "text-7xl"
            }
        },
        "fontWeight": {
            "default": "xxl",
            "values": {
                xxl: {
                    "root": /** @tw */ "font-extrabold"
                }
            }
        }
    }
}


export const labelVariants = tca(labelVariantsConfigurations)
```

We want to have auto complete from tailwind. We tried other solution but it was crashing our IDE. We decided to use something that works until we find something better using `/** @tw */`

If you want to have this update your vscode settings with this.

```json
{
  "editor.quickSuggestions": {
    "strings": "on"
  },
  "css.validate": false,
  "editor.inlineSuggest.enabled": true,
  "tailwindCSS.classAttributes": [
    "class",
    "className",
    ".*Styles.",
    ".*Classes."
  ],
  "tailwindCSS.experimental.classRegex": [
    "@tw\\s\\*\/\\s+[\"'`]([^\"'`]*)"
  ]
}
```

Key take aways:
- As you will see with typescript. You will have to define all the slots. 
- You will also have to define the default values of variants
- the values from variants can received a string that means all slots will receive this values otherwise define the slots
- for compounds same rule expect its for class.

### Apply it inside the component

Now what you have everything defined. lets check [our component](./packages/ui/src/components/Label/Label.tsx).

```js
const { root } = labelVariants();
```

You will apply elements like this

```js
className={root({
    fontWeight,
    size,
}, {
    className,
    disabled
})}
```

The first object will take variants values

the second object will take any other props and also the `className`. The `className` will override everything else. Check [How override works](#how-override-works) if you want to understand a bit more.

### How override works

Override will works in this order:
- slots values
- variants values
- compound class when condition meet
- className override

Basically we put everything in a long string in this order and let tailwind-merge do its job.

### Simple slots Configuration

Check [this config](./packages/core/tests/setup/simple.ts)

