import React, { useState } from 'react';
import { Switch } from '@headlessui/react';
import { classNames } from '../../../helpers';

export default function SwitchBase() {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={classNames(
        enabled ? 'bg-red-600 ' : 'bg-zinc-400',
        'relative inline-flex h-6 w-11 items-center rounded-full',
      )}
    >
      <span className="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        className={
          classNames(
            enabled ? 'translate-x-6' : 'translate-x-1',
            'inline-block h-4 w-4 transform rounded-full bg-white transition',
          )
}
      />
    </Switch>
  );
}
