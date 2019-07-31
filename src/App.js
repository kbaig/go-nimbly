import React from 'react';
import { CssBaseline } from '@material-ui/core';

import Head from './components/Head';
import Heading from './components/Heading';
import Main from './components/Main';

const App = () => (
  <>
    <Head />
    <CssBaseline />

    <Heading>Go Nimbly Code Test</Heading>
    <Main />
  </>
);

export default App;
