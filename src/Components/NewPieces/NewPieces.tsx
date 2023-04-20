import { View, Text, Image, StyleSheet } from "react-native";
import { useArtsList } from "../../Graphql/ghplHook/useArtists";
import { Art } from "../../Graphql/types";

const Render = ({ art_id, artist, art_description, photo_url }: Art) => {

    return (
        <View style={styles.column} key={art_id}>
            <Image
                key={art_id}
                style={styles.image}
                source={{ uri: photo_url }}
            />
            <Text style={styles.textCenterArt}>{artist?.name}</Text>
            <Text style={styles.textCenterArtist}>{art_description}</Text>
        </View>
    );
}


const NewPieces = () => {

    const { newArtList, loading, error } = useArtsList()

    if (loading) {
        return (
            <Text>Loading...</Text>
        )
    }

    if (error) {
        console.log(error);

        return (
            <Text>Error  </Text>
        )
    }

    const newArt = newArtList.map((a: Art) => {
        return (
            <Render
                key={a.art_id}
                art_id={a.art_id}
                artist={a.artist}
                art_description={a.art_description}
                photo_url={a.photo_url}
            />
        )
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
        color: 'black',
        textAlign: 'center',
        fontSize: 19,
        fontWeight: '400'
    },
    textCenterArtist: {
        color: 'black',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '200'

    },

})

export default NewPieces;