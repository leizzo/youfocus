import { conditionalRemove } from '@youfocus/utils';
import { useEffect } from 'react';
import Footer from '../components/footer.component';
import { SwitchGroup } from '../components/switch-group.component';
import { useMutationObserver } from '../hooks/use-mutation-observer.hook';
import { useRouter } from '../hooks/use-router.hook';
import { useSettingsContext } from '../hooks/use-settings.hook';

let oldHref = document.location.href;
const mutationSelector = document.querySelector('body');

export function Content() {
  const { settings, updateSettings } = useSettingsContext();
  const [updateRoute] = useRouter((state) => [state.updateRoute]);

  useMutationObserver(
    mutationSelector,
    () => {
      if (oldHref !== document.location.href) {
        oldHref = document.location.href;
        updateRoute(document.location);
      }
    },
  );

  useEffect(() => {
    useRouter.subscribe(({ route }) => {
      if (route.pathname === '/watch') {
        conditionalRemove(settings);
      }
    });
  }, [settings]);

  return (
    <div className="flex flex-wrap w-full">
      <SwitchGroup data={settings} onChanged={updateSettings} />
      <Footer />
    </div>
  );
}

export default Content;
