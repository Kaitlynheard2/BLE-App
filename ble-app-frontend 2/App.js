import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import  globalStyles  from './Style/globalStyles';
import AppLoading from 'expo-app-loading';
import Splash  from './screens/splash';
import SignalData from './screens/signalData';
import Graph from "./components/graph";


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
/*<Splash></Splash>*/

export default function App() {
  
  
  return (
   <SignalData></SignalData>
  );
}

