import { Image, StyleSheet, View, Text } from "react-native"

const Event = (): JSX.Element => {
    return (
        <View
            style={styles.container}
        >
            <Image
                style={styles.imageStyle}
                source={require('../public/Event2.png')}
            />
            <Text style={styles.textEventDay}>8.13.23</Text>
        </View>
    )
}

export default Event;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
    },
    imageStyle: {
        width: 350,
        borderRadius : 40
    },
    textEventDay: {
        position: 'relative',
        fontSize: 42,
        textAlign: 'center',
    },

    image: {
        flex: 1,
        // resizeMode: 'cover',
        // justifyContent: 'center',
        // alignSelf :'stretch'
    },
    text: {
        color: 'white',
        fontSize: 42,
        fontWeight: 'bold',
        textAlign: 'center',
        // backgroundColor: '#000000a0',
    },
})