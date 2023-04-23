import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Divider from "../Utils/Divider/Divider";
import Card from "../Utils/Card/Card";
import { useNewArt } from "../../Graphql/ghplHook/useNewArt";
import DataHandler from "../HandleDataState/DataHandler";
import { Spiner } from "../Utils/Spiner/Spiner";
import { Art } from "../../Graphql/types";



const Render = ({art_id, artist, art_description, photo_url } : Art) => {

    return (
        <View
            key={art_id}
            style={{ marginTop: 20 }}
        >
            <Card
                CardStyle={styles.cardStyle}
                BodyStyle={styles.bodyStyle}
                Image={
                    <Image
                        style={styles.imageStyle}
                        source={{uri:photo_url}}
                    />}
                Title={
                    <Text style={styles.textTitle}>{artist?.name}</Text>
                }
                Description={
                    <Text style={styles.textDescription}>{art_description}</Text>
                }
            />
        </View>
    )
}




const Room = (): JSX.Element => {

    const { newArt, loading, error } = useNewArt();

    if (loading || error) {
        return (
            <DataHandler
                IsLoading={loading}
                // IsError={error}
                LoadingDisplay={
                    <Spiner Size="large" Color="#A74592" />
                }
                ErrorDisplay={
                    <Spiner Size="large" Color="red" />
                }
            />
        )
    }

    

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
                    data={newArt}
                    renderItem={({ item }) => <Render
                        art_id={item.art_id}
                        artist={item.artist}
                        art_description={item.art_description}
                        photo_url={item.photo_url}
                        />
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