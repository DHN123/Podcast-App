/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { Box, UtilityThemeProvider } from 'react-native-design-utility';
import { theme } from './src/constants/theme'
import MainNavigation from './src/navigations/MainNavigation';

// declare var global: {HermesInternal: null | {}}; 

const App = () => {
  return (
    <UtilityThemeProvider theme={ theme }>
        <Box f={ 1 }>
          <MainNavigation/>
        </Box>
    </UtilityThemeProvider>
  );
};

export default App;
