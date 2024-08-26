/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'olive',
          width: 395,
          height: 300,
        }}>
        <View
          style={{
            flexDirection: 'row-reverse',
            // flexDirection: 'row',
            backgroundColor: 'dodgerblue',
            flex: 1,
            marginLeft: 100,
            marginRight: 20,
            marginVertical: 20,
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: 'green',
              width: 80,
              height: 150,
              marginLeft: 50,
            }}
          />
          <View
            style={{
              backgroundColor: 'pink',
              width: 80,
              height: 150,
              marginLeft: 50,
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightsteelblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
