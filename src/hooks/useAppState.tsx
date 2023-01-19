import React, {useEffect, useRef} from 'react';
import {AppState} from 'react-native';

export const useAppState = () => {
  const appState = useRef(AppState.currentState);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      appState.current = nextAppState;
    });
    return () => {
      subscription.remove();
    };
  }, []);

  return {
    appState,
  };
};
