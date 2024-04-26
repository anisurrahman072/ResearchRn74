/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
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

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={styles.container}>
			<View
				style={{
					flexDirection: 'row',
					backgroundColor: 'olive',
					width: 395,
					height: 300
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
						alignItems: 'center'
					}}>
					<View
						style={{
							backgroundColor: 'green',
							width: 80,
							height: 150,
							marginLeft: 50
						}}
					/>
					<View
						style={{
							backgroundColor: 'pink',
							width: 80,
							height: 150,
							marginLeft: 50
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
    alignItems: 'center'
  },
});

export default App;
