import { useEffect, useState } from 'react';

import { Button } from '@youfocus/ui';
import { ELEMENT_SELECTOR, getMessage } from '@youfocus/utils';

export function Toolbar() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (enabled) {
      ELEMENT_SELECTOR.youtubeWrapper.classList.add('open-yt-focus-options');
      ELEMENT_SELECTOR.html.classList.add('overflowhidden');
    } else {
      ELEMENT_SELECTOR.youtubeWrapper.classList.remove('open-yt-focus-options');
      ELEMENT_SELECTOR.html.classList.remove('overflowhidden');
    }
  });

  return (
    <>
      <Button onClick={() => setEnabled(!enabled)} text={getMessage('toolbar')} />
      {enabled && (
      <div
        className="w-full h-screen fixed left-0 top-0"
        onClick={() => setEnabled(!enabled)}
        aria-hidden
      />
      )}
    </>
  );
}

export default Toolbar;
