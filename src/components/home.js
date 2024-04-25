import {useMemo} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  Button,
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
} from 'react-native';

export default function Home({navigation: {navigate}}) {
  // Render the paragraph
  return (
    <View>
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
          }}>
          <View
            style={{
              backgroundColor: 'green',
              width: 100,
              height: 150,
              marginLeft: 50,
            }}
          />
          <View
            style={{
              backgroundColor: 'pink',
              width: 100,
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
  },
});
