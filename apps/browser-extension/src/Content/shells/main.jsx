import React from 'react';
import Toolbar from './toolbar';
import ContentShell from './content';
import { OptionsContextProvider } from '../context/options';

function ToolbarWrapper() {
  return (
    <OptionsContextProvider>
      <Toolbar />
    </OptionsContextProvider>
  );
}

function ContentWrapper() {
  return (
    <OptionsContextProvider>
      <ContentShell />
    </OptionsContextProvider>
  );
}

const App = () => {};

App.Toolbar = ToolbarWrapper;
App.Content = ContentWrapper;

export default App;
