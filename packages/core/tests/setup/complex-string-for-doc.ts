import { compose } from "../../src/tailwind-buddy";

export const fooVariants = compose({
  slots: {
    root: `
        hover:border-blue-500
        hover:border-solid
        hover:bg-white
        hover:text-blue-500
        
        ${/* Some comment here */ ""}
        group
        w-full
        flex
        flex-col
        items-center ${/* And some comment here */ ""}
        justify-center
        rounded-md
        border-2
        border-dashed
        border-slate-300
        text-sm
        leading-6
        text-slate-900
        font-medium
        py-3
      `,
  },
  defaultVariants: {},
})();
