import ToolbarShell from './toolbar';
import ContentShell from './content';
import { OptionsContextProvider } from '../context/options'

function ToolbarWrapper() {
  return <>
    <OptionsContextProvider>
      <ToolbarShell />
    </OptionsContextProvider>
  </>
}

function ContentWrapper() {
  return <>
    <OptionsContextProvider>
      <ContentShell />
    </OptionsContextProvider>
  </>
}

function App() {
  return <></>
}

App.Toolbar = ToolbarWrapper;
App.Content = ContentWrapper;

export default App;
