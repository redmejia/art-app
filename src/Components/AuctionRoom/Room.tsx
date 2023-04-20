import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Divider from "../Utils/Divider/Divider";
import Card from "../Utils/Card/Card";


type AutionPieces = {
    Src?: string | any | undefined,
    Artist?: string,
    Description?: string,
}

const data: AutionPieces[] = [
    { Src: require('../public/New/02.png'), Artist: 'Reynaldo', Description: "4\" x 4\"" },
    { Src: require('../public/New/03.png'), Artist: 'Jose', Description: "8\" x 8\"", },
    { Src: require('../public/New/03.png'), Artist: 'Sonia', Description: "10\" x 10\"", },
    { Src: require('../public/New/02.png'), Artist: 'Nicolle', Description: "6\" x 6\"", },
    { Src: require('../public/New/04.png'), Artist: 'Cristina', Description: "6\" x 6\"" },
]

const Render = (p: AutionPieces) => {

    return (
        <View
            key={p.Artist}
            style={{ marginTop: 20 }}
        >
            <Card
                CardStyle={styles.cardStyle}
                BodyStyle={styles.bodyStyle}
                Image={
                    <Image
                        style={styles.imageStyle}
                        source={p.Src}
                    />}
                Title={
                    <Text style={styles.textTitle}>{p.Artist}</Text>
                }
                Description={
                    <Text style={styles.textDescription}>{p.Description}</Text>
                }
            />
        </View>
    )
}




const Room = (): JSX.Element => {

    return (
        <SafeAreaView
            style={styles.container}
        >
            <Text style={styles.welcomeText}>Welcome</Text>
            <Divider Styles={styles.divider} />
            <View
                style={styles.artContainer}
            >
                <FlatList
                    data={data}
                    renderItem={({ item }) => <Render
                        Artist={item.Artist}
                        Description={item.Description}
                        Src={item.Src} />
                    }
                />
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#f2f2f2'
        backgroundColor: '#fff'

    },
    divider: {
        backgroundColor: "#f2f2f2"
    },
    welcomeText: {
        color: '#000',
        fontWeight: '300',
        textAlign: 'center',
        fontSize: 40,
    },
    artContainer: {
        flex: 1,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',

    },
    cardStyle: {
        backgroundColor: '#ffffff',
        borderColor: '#f2f2f2',
        borderWidth: 1,
        borderRadius: 10,
    },
    bodyStyle: {
        borderColor: '#8c8c8c',
        borderWidth: 1,
        height: 75,
        width: 350,
        padding: 8,
        borderRadius: 30,
    },
    imageStyle: {
        height: 320,
        width: 350,
        resizeMode: 'contain',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textTitle: {
        textAlign: 'center',
        color: '#000',
        fontWeight: '700',
        fontSize: 20,
    },
    textDescription: {
        textAlign: 'center',
        color: '#000',
        fontWeight: '600',
        fontSize: 16,
    }

})
export default Room;