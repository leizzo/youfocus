import { ButtonRoundedBase } from './Button';

/**
 *
 * @param {variant} variant
 * @returns
 */
export default function Button({ ...props }) {
  switch (props.variant) {
    case 'secondary':
      return <ButtonRoundedBase {...props} />
    case 'link':
      return <ButtonRoundedBase {...props} />
    default:
      return <ButtonRoundedBase {...props} />
  }
}
