/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';

function App() {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.flexItem} />
        <View style={styles.flexItem} />
        <View style={styles.flexItem} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightpink',
  },
  innerContainer: {
    flexDirection: 'row',
    width: 200,
    height: 200,
    justifyContent: 'space-between',
    gap: '10%', // This is the new gap property
  },
  flexItem: {
    flex: 1,
    backgroundColor: 'dodgerblue',
  },
});

export default App;
