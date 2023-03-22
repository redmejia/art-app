import { View, Text, Image, StyleSheet } from "react-native";

export type NewPieces = {
    Id?: number;
    PieceName?: string;
    Artist?: string;
    Url?: any | undefined;
}

const Render = ({ Id, PieceName, Artist, Url }: NewPieces) => {
    return (

        <View style={styles.column}>
            <Image
                style={styles.image}
                source={Url}
            />

            <Text style={styles.textCenterArt}>{PieceName}</Text>
            <Text style={styles.textCenterArtist}>{Artist}</Text>

        </View>
    );
}

const newPieces: NewPieces[] = [
    { Id: 1, PieceName: "One", Artist: "Reynaldo", Url: require('../public/New/01.png') },
    { Id: 2, PieceName: "Two", Artist: "Jose", Url: require('../public/New/02.png') },
    { Id: 3, PieceName: "Three", Artist: "Jose", Url: require('../public/New/03.png') },
    { Id: 4, PieceName: "Four", Artist: "Jose", Url: require('../public/New/04.png') },
    { Id: 5, PieceName: "Five", Artist: "Jose", Url: require('../public/New/04.png') },

]
const NewPieces = () => {
    const newArt = newPieces.map(a => {
        return <Render Id={a.Id} Artist={a.Artist} PieceName={a.PieceName} Url={a.Url} />
    })
    return (

        <View style={styles.container}>
            <View style={styles.row}>
                {newArt}
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
        // borderWidth: 1,
        // borderColor: 'red',
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    column: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '50%',
        // borderWidth: 1,
        // borderColor: 'blue',
    },
    image: {
        width: 150,
        height: 150,
        margin: 5,
        // resizeMode: 'contain',
        // borderRadius: 15,
    },
    textCenterArt: {
        textAlign: 'center',
        fontSize: 19,
        fontWeight : '400'

    },
    textCenterArtist: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight : '200'
        
    },

})

export default NewPieces;