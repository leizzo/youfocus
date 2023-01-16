import React, { useState } from 'react';
import { Switch } from '@headlessui/react';
import { classNames } from '../../../helpers';
/**
 *
 * @param {onChange} onChange function
 * @returns
 */
export default function SwitchBase({ text, checked, onChange }) {
  const [enabled, setEnabled] = useState(checked);

  const onEnabledChanged = () => {
    setEnabled(!enabled);
    onChange();
  };

  return (
    <Switch.Group>
      <div className="flex items-center">
        <Switch
          checked={enabled}
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
