import PropTypes from 'prop-types';

import { ButtonBase } from './Button';

/**
 *
 * @param {string} variant | secondary | outlined | link
 * @param {string} size | large | small
 * @param {Function} onClick
 * @param {string} text
 * @param {string} href
 * @returns
 */
export function Button({
  variant, size, onClick, text, href, target,
}) {
  switch (variant) {
    case 'link':
      return <a href={href} rel="noreferrer" target={target} className="hover:text-red-500">{text}</a>;
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
  href: PropTypes.string,
  onClick: PropTypes.func,
  target: PropTypes.string,
};

Button.defaultProps = {
  variant: null,
  onClick: () => {},
  size: null,
  href: null,
  target: null,
};

export default Button;
