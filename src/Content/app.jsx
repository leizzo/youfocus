import Toolbar from './components/toolbar';
import Content from './components/content';
import { OptionsContextProvider } from './context/options'

function ToolbarWrapper() {
  return <>
    <OptionsContextProvider>
      <Toolbar />
    </OptionsContextProvider>
  </>
}

function ContentWrapper() {
  return <>
    <OptionsContextProvider>
      <Content />
    </OptionsContextProvider>
  </>
}

function App() {
  return <></>
}

App.Toolbar = ToolbarWrapper;
App.Content = ContentWrapper;

export default App;
