import PropTypes from 'prop-types';

import { classNames } from '../../utils/classNames';

/**
 * Button Base
 * @param {size} size | large | small
 * @param {onClick} onClick Function
 * @returns
 */
export function ButtonBase({ size, text, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        classNames(
          'inline-flex items-center justify-center whitespace-nowrap focus-visible:outline-none disabled:cursor-not-allowed disabled:shadow-none',
          // Large Size
          size === 'large'
          && 'h-12 gap-2 px-6 text-lg',
          // Small Size
          size === 'small'
          && 'h-8 gap-2 px-4 text-xs',
          // Default Size
          !size && 'h-10 gap-2 px-5 text-sm ',
          'rounded',
          'font-medium tracking-wide text-white',
          'transition duration-300 bg-red-500 hover:bg-red-600 focus:bg-red-700 disabled:border-red-300 disabled:bg-red-300',
        )
      }
    >
      {text}
    </button>
  );
}

ButtonBase.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string,
};

ButtonBase.defaultProps = {
  onClick: () => {},
  text: null,
  size: null,
};

export default ButtonBase;
