import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect, useState } from 'react';
import 'react-native-reanimated';
import Onboarding from '@/components/Onboarding';
import { useColorScheme } from '@/hooks/useColorScheme';
import AsyncStorage from '@react-native-async-storage/async-storage';
 
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded,setloaded] = useState(true)
  const [isVisited, setIsVisited] = useState(false);
  const [fontloaded] = useFonts({
    poppins: require('../assets/fonts/poppinsreg.ttf'),
  });

  const CheckisVisited = () => {
    
     AsyncStorage.getItem('isVisited').then((value) => {
       if (value === 'true') {
         setIsVisited(true)
         setloaded(false)
       }
     })
  }

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
    CheckisVisited()

  }, [fontloaded,isVisited]);

  if (!fontloaded) {
    return null;
  }

  if (!isVisited && loaded) {
     return (
      <Onboarding setIsVisited={setIsVisited} />
     )
  }
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
