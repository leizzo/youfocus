import React, { useState, useEffect } from 'react';

import { ELEMENT_SELECTOR, Button } from '@yt-focus/ui';

export function Toolbar() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (enabled) {
      ELEMENT_SELECTOR.youtubeWrapper.classList.add('open-yt-focus-options');
    } else {
      ELEMENT_SELECTOR.youtubeWrapper.classList.remove('open-yt-focus-options');
    }
  });

  return (
    <>
      <Button onClick={() => setEnabled(!enabled)} text={chrome.i18n.getMessage('toolbar')} />
      {enabled && (
      <div
        className="w-full h-screen absolute left-0 top-0"
        onClick={() => setEnabled(!enabled)}
        aria-hidden
      />
      )}
    </>
  );
}

export default Toolbar;
