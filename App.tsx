/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  FlatList,
  Platform,
  StyleSheet,
  View,
} from 'react-native';
import SmCard from './src/Components/Utils/Card/SmCard';

type Mockdata = {
  src: any | undefined,
  title: string,
}


const data: Mockdata[] = [
  { src: require('../ArtApp/src/Components/public/steve-johnson-1.png'), title: 'Pastel' },
  { src: require('../ArtApp/src/Components/public/steve-johnson-2.png'), title: 'Acrylic' },
  { src: require('../ArtApp/src/Components/public/dan-farrell-3.png'), title: 'Pastel' },
  { src: require('../ArtApp/src/Components/public/dan-farrell-4.png'), title: 'Abstract' }
]


function App(): JSX.Element {
  return (
    <View
      style={[
        styles.container,
        styles.containerDirection,
      ]}>
      <View style={styles.topOptionArt} >
        <FlatList
          horizontal={true}
          data={data}
          renderItem={({ item }) =>
            <View style={{ marginLeft: 20 }}>
              <SmCard
                Title={item.title}
                Src={item.src}
                TitleStyle={styles.textTitle}
              />
            </View>
          }
        />
      </View>
      <View style={{ flex: 2, backgroundColor: '#fff' }} />
      <View style={{ flex: 3, backgroundColor: '#fff' }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
  },
  containerDirection : {
      flexDirection: 'column',
  },
  topOptionArt: {
    flex: 3,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: '#A74592',
    marginTop: Platform.OS === 'ios' ? 50 : 0,
    padding: Platform.OS === 'ios' ? 10 : 10,
  },
  textTitle: {
    fontWeight: '100',
    fontSize: 28,
    color: '#fff'
  },

});

export default App;
