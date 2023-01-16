import React from 'react';
import PropTypes from 'prop-types';

import ButtonBase from './Button';

/**
 *
 * @param {variant} variant | secondary | outlined
 * @param {size} size | large | small
 * @param {onClick} onClick
 * @param {text} text
 * @returns
 */
function Button({
  variant, size, onClick, text,
}) {
  switch (variant) {
    case 'secondary':
      break;
    default:
      return (
        <ButtonBase
          size={size}
          onClick={onClick}
          text={text}
        />
      );
  }
}

Button.propTypes = {
  variant: PropTypes.string,
  size: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  variant: null,
  onClick: () => {},
  size: null,
};

export default Button;
