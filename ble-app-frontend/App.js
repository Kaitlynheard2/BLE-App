import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import  globalStyles  from './Style/globalStyles';
import AppLoading from 'expo-app-loading';
import splash  from './screens/splash'

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  
  
  return (
    <SafeAreaView>
    <splash></splash>

      <Card style={globalStyles.predictionCard}></Card>
    </SafeAreaView>
  );
}

