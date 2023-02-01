import { Switch } from '@headlessui/react';
import { classNames } from '@youfocus/utils';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

/**
 * Switch
 * @type {Object}
 * @property {string} text
 * @property {boolean} checked
 * @property {function} onChange
 */
export function SwitchBase({ text, checked, onChange }) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(checked);
  }, [checked]);

  const onEnabledChanged = () => {
    setEnabled(!enabled);
    onChange();
  };

  return (
    <Switch.Group>
      <div className="flex items-center">
        <Switch
          checked={checked}
          onChange={onEnabledChanged}
          className={classNames(
            enabled ? 'bg-red-600 ' : 'bg-zinc-400',
            'relative inline-flex h-4 w-8 items-center rounded-full',
          )}
        >
          <span className="sr-only">Use setting</span>
          <span
            aria-hidden="true"
            className={
            classNames(
              enabled ? 'translate-x-4' : 'translate-x-1',
              'inline-block h-3 w-3 transform rounded-full bg-white transition',
            )
          }
          />
        </Switch>
        <Switch.Label className="ml-2 cursor-pointer">{text}</Switch.Label>
      </div>
    </Switch.Group>
  );
}

SwitchBase.propTypes = {
  text: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

SwitchBase.defaultProps = {
  text: null,
  checked: false,
  onChange: null,
};

export default SwitchBase;
