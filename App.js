import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button, StyleSheet } from 'react-native';

const Screen1 = ({ onNext }) => (
  <View style={styles.screenContainer}>
    <Text style={styles.title}>Welcome to Screen 1</Text>
    <Button title="Go to Screen 2" onPress={onNext} />
  </View>
);

const Screen2 = ({ onNext }) => (
  <View style={styles.screenContainer}>
    <Text style={styles.title}>You are on Screen 2</Text>
    <Button title="Back to Screen 1" onPress={onNext} />
  </View>
);

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Screen1');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Screen1':
        return <Screen1 onNext={() => setCurrentScreen('Screen2')} />;
      case 'Screen2':
        return <Screen2 onNext={() => setCurrentScreen('Screen1')} />;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderScreen()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});