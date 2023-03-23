
import {
    SafeAreaView,
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Platform,
    StyleSheet
} from "react-native";
import Header from "../Header/Header";
import Event from "../Event/Event";
import SxCard from "../Utils/Card/SxCard";
import NewPieces from "../NewPieces/NewPieces";


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


const Home = (): JSX.Element => {

    const TopFourArtist = artistData.map(a => (
        <Render key={a.name} name={a.name} description={a.description} />
    ))

    return (
        
            <SafeAreaView
                style={styles.container}
            >
                <View style={styles.topOptionArt} >
                    <Header />
                </View>
                <ScrollView
                    style={{ paddingBottom: 10 }}
                >

                    <Text style={styles.textArtist}>Upcoming Event</Text>

                    <View style={styles.containerDos} >
                        <Event />
                    </View>
                    <Text style={styles.textArtist}>Artists</Text>
                    <View style={styles.containerArtist}>
                        <ScrollView horizontal={true} >
                            {TopFourArtist}
                        </ScrollView>
                    </View>

                    <Text style={styles.textArtist}>New Art</Text>
                    {/* <View style={styles.containerNewArt}> */}
                    <NewPieces />
                    {/* </View> */}

                </ScrollView>
            </SafeAreaView>

    )
}


export default Home;

const styles = StyleSheet.create({
    container: {
        backgroundColor : '#fff',
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
