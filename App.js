/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        This is{' '}
        <Image
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
          style={styles.image}
        />{' '}
        an example of inline view with textAlign center.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'paleturquoise',
  },
  text: {
    textAlign: 'center', // This now works correctly with inline views
    fontSize: 28,
    color: 'saddlebrown',
    fontWeight: '900',
  },
  image: {
    width: 50,
    height: 50,
  },
});

export default App;
