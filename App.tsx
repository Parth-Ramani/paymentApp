import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {MD3LightTheme as DefaultTheme, PaperProvider} from 'react-native-paper';
import BottomNavigation from './src/Navigation/BottomNavigation';
import {NavigationContainer} from '@react-navigation/native';
import Billings from './src/components/Billings';
import Analytics from './src/components/Analytics';
import Achivements from './src/components/Achivements';
import Linearbtn from './src/components/Linearbtn';
import Referral from './src/components/Referral';
import Earn from './src/components/Earn';
import OnBoarding1 from './src/screens/OnBoarding1';
import OnBoarding2 from './src/components/OnBoarding2';
import OnBoarding3 from './src/components/OnBoarding3';
import Login from './src/screens/Login';
// const setUpFonts = (fonts) => {
//   let fontsObj = {}
//   Object.entries(fonts)?.forEach(([key, obj]) => {
//     if (key?.includes("Large")) fontsObj[key] = { ...obj, fontFamily: "Inter-Bold" }
//     if (key?.includes("Medium")) fontsObj[key] = { ...obj, fontFamily: "Inter-Medium" }
//     else {
//       fontsObj[key] = { ...obj, }
//     }
//   })
//   return fontsObj
// }
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    onSurface: 'rgba(75, 22, 76, 1)',
    primaryContainer: 'rgba(75, 22, 76, 1)',
    onPrimaryContainer: '#FFF',
    surface: '#DD88CF',
  },
  // fonts: setUpFonts(DefaultTheme.fonts)
};
console.log(theme);
const App = () => {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        {/* <BottomNavigation /> */}
<Achivements/>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
