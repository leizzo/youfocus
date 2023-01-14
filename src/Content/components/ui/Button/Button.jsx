import { classNames } from "../../../helpers"

/**
 * Button Rounded Base
 * @param {*} param0
 * @returns
 */
export function ButtonRoundedBase({ ...props }) {
  return (
    <>
      <button {...props}
        className={
          classNames('inline-flex items-center justify-center whitespace-nowrap focus-visible:outline-none disabled:cursor-not-allowed disabled:shadow-none',
            // Large Size
            props.size === 'large'
              ? 'h-12 gap-2 px-6'
                // Small Size
              : props.size === 'small'
                ? 'h-8 gap-2 px-4'
                // Default Size
                : 'h-10 gap-2 px-5',
            'rounded',
            'text-sm font-medium tracking-wide text-white',
            'transition duration-300 bg-red-500 hover:bg-red-600 focus:bg-red-700 disabled:border-red-300 disabled:bg-red-300')
        }>
        {props.children}
      </button>
    </>
  )
}
