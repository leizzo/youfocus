import React, { useState, useEffect } from 'react';

import { ELEMENT_SELECTOR } from '../helpers';
import Button from '../components/ui/Button';

export default function Toolbar() {
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
      <Button onClick={() => setEnabled(!enabled)} text="YT FOCUS" />
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
