import { useState, useEffect } from "react"

import { ELEMENT_SELECTOR } from "../helpers";
import Button from "../components/ui/Button";

export default function toolbar() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    if (enabled) {
      ELEMENT_SELECTOR.youtubeWrapper.classList.add('open-yt-focus-options');
    } else {
      ELEMENT_SELECTOR.youtubeWrapper.classList.remove('open-yt-focus-options');
    }
  });


  return <>
    <Button size="small" onClick={() => setEnabled(!enabled)}>
      YT FOCUS ENABLED
    </Button>
    {enabled && <div className="w-full h-screen absolute left-0 top-0" onClick={() => setEnabled(!enabled)}></div>}
  </>
}
