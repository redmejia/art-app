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
	Text,
	View,
	TouchableOpacity,
	ScrollView,
	SafeAreaView
} from 'react-native';
// import SmCard from './src/Components/Utils/Card/SmCard';
import SxCard from './src/Components/Utils/Card/SxCard';
import Header from './src/Components/Header/Header';
import Event from './src/Components/Event/Event';
import NewPieces from './src/Components/NewPieces/NewPieces';
import Room from './src/Components/AuctionRoom/Room';


type Artists = {
	name: string;
	description: string;
}




const artistData: Artists[] = [
	{ name: "Reynaldo", description: "Developer" },
	{ name: "Jose", description: "Developer" },
	{ name: "Sofia", description: "Developer" },
	{ name: "Sonia", description: "Developer" },
]

const Render = ({ name, description }: Artists) => {
	return (
		<TouchableOpacity key={name}
			style={styles.artistButton}
			onPress={() => {
				null
			}}
		>
			<SxCard
				Name={name}
				Description={description}
			/>

		</TouchableOpacity>
	)
}


function App(): JSX.Element {
	const TopFourArtist = artistData.map(a => (
		<Render key={a.name} name={a.name} description={a.description} />
	))
	return (

		// <View
		// style={[
		// 	styles.container,
		// 	styles.containerDirection,
		// ]}
		// 	>
		// <View>
		// <SafeAreaView
		// 	style={{ flex: 1 }}
		// >
		// 	<View style={styles.topOptionArt} >
		// 		<Header />
		// 	</View>
		// 	<ScrollView
		// 		style={{ paddingBottom: 10 }}
		// 	>

		// 		<Text style={styles.textArtist}>Upcoming Event</Text>

		// 		<View style={styles.containerDos} >
		// 			<Event />
		// 			{/* <View style={styles.artistList} >
		// 				<FlatList
		// 					horizontal={false}
		// 					data={artistData}
		// 					renderItem={({ item }) => <Render name={item.name} description={item.description} />}
		// 				/>

		// 			</View> */}

		// 			{/* <SxCard
		// 				Name={"ME"}
		// 				Description={"description"}
		// 			/> */}
		// 		</View>
		// 		<Text style={styles.textArtist}>Artists</Text>
		// 		<View style={styles.containerArtist}>
		// 			<ScrollView horizontal={true} >
		// 				{TopFourArtist}
		// 			</ScrollView>
		// 		</View>

		// 		<Text style={styles.textArtist}>New Art</Text>
		// 		{/* <View style={styles.containerNewArt}> */}
		// 			<NewPieces/>
		// 		{/* </View> */}

		// 		{/* <View style={{ flex: 2, backgroundColor: '#fff' }} >
		// 		<ScrollView 
		// 			horizontal={true}
		// 		>
		// 			<View
		// 				style={{ padding: 23 }}
		// 			>

		// 				<SxCard
		// 					Name={"ME"}
		// 					Description={"description"}
		// 				/>
		// 			</View>
		// 			<View
		// 				style={{ padding: 23 }}

		// 			>

		// 				<SxCard
		// 					Name={"ME"}
		// 					Description={"description"}
		// 				/>
		// 				<SxCard
		// 					Name={"ME"}
		// 					Description={"description"}
		// 				/>
		// 			</View>
		// 		</ScrollView>
		// 	</View> */}



		// 	</ScrollView>
		// </SafeAreaView>

		// </View>
		<Room />

		// </View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// padding: 20,
		// margin : 10,
	},
	containerDos: {
		flex: 2,
		alignItems: 'center',
		justifyContent: 'center',
		// backgroundColor: 'blue',
		paddingTop: 10,
		// margin : 20
	},
	containerArtist: {
		flex: 2,
		alignItems: 'center',
		justifyContent: 'center',
		// backgroundColor: 'blue',
		padding: 10,
	},
	containerNewArt: {
		// flex : 1,
		alignItems: 'center',
		justifyContent: 'center',
		// alignContent : 'center'
	},
	containerDirection: {
		// height: 40,
		flexDirection: 'column',
	},
	topOptionArt: {
		// flex: 2,
		// borderBottomLeftRadius: 30,
		borderBottomRightRadius: 30,
		backgroundColor: '#A74592',
		// marginTop: Platform.OS === 'ios' ? 50 : 0,
		padding: Platform.OS === 'ios' ? 15 : 12,
	},

	textArtist: {
		padding: 10,
		fontWeight: '300',
		fontSize: 20,
		color: '#000',
		// backgroundColor: 'red'
	},
	// artists
	artistList: {
		width: 360,
		// height: 480,
		// alignItems: 'center',
		// backgroundColor : 'black',
		// padding : 50,
	},
	artistButton: {
		padding: Platform.OS === 'ios' ? 3 : 0,
	}
});

export default App;
