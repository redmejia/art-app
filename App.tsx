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
        {
          flexDirection: 'column',
        },
      ]}>
      <View style={{
        flex: 3,
        // backgroundColor : 'red',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        backgroundColor: '#A74592',
        marginTop: Platform.OS === 'ios' ? 50 : 0,
        padding: Platform.OS === 'ios' ? 10 : 10,
      }} >
        <FlatList
          horizontal={true}
          data={data}
          renderItem={({ item }) =>
            <View style={{ marginLeft: 15 }}>
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
  containerTop: {
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: Platform.OS === 'ios' ? 40 : 10,
    // flex: 1,
    // alignItems: 'center',
    // alignContent: 'center',
    // justifyContent: 'center'
  },
  cardBody: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center'
  },
  cardTitle: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '900',
  },
  textDescription: {
    textAlign: 'left',
    fontSize: 15,
    fontWeight: '400'
  },
  borderCard: {
    paddingBottom: 79,
    height: 286,
    width: 150,
    borderWidth: 1,
    // flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // height: '100%',
  },
  textTitle: {
    fontWeight: '400',
    fontSize: 28,
    color: '#fff'
  },
  imageStyle: {
    height: 220,
    width: 150,
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  }
});

export default App;
