import { useState } from "react";
import { useFonts } from 'expo-font';

export function FontLoader({
    children,
    fallback,
  }: {
    children?: React.ReactNode;
    fallback?: React.ReactNode;
  }) {
    const hasFallback = !!fallback;
    const [forceFallback, setForceFallback] = useState(hasFallback);
  

    const [loaded, error] = useFonts({
        SuperCartoon: require('./assets/fonts/SuperCartoon.ttf'),
    });
    
    if(!loaded) {
        return fallback
    }

    return children;
  }
  