import { useRoute } from "@react-navigation/native";
import { Image, StyleSheet, Text, View } from "react-native";
import { useArt } from "../../Graphql/ghplHook/useArt";
import DataHandler from "../HandleDataState/DataHandler";
import { Spiner } from "../Utils/Spiner/Spiner";
import Card from "../Utils/Card/Card";

export const Details = (): JSX.Element => {

    const params: any = useRoute()
    const { art_id } = params.params

    const { art, loading, error } = useArt(art_id as string)

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
        <View style={styles.container}>
            <Card
                CardStyle={styles.cardStyle}
                Image={
                    <Image
                        style={styles.imageStyle}
                        source={{ uri: art.photo_url }}
                    />
                }
                Title={
                    <Text style={styles.textTitle}>{art.artist?.name}</Text>
                }
                Description={
                    <Text style={styles.textDescription}>{art.art_description}</Text>
                }

            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f2f2f2'
    },
    cardStyle: {
        backgroundColor: '#ffffff',
        borderColor: '#f2f2f2',
        borderWidth: 1,
        borderRadius: 10,
        height: 550,
        borderBottomColor : '#A74592', 
        borderBottomWidth : 2
    },
    imageStyle: {
        margin: 10,
        height: 320,
        width: 350,
        resizeMode: 'contain',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textTitle: {
        textAlign: 'center',
        color: '#000',
        fontWeight: '700',
        fontSize: 25,
    },
    textDescription: {
        textAlign: 'center',
        color: '#000',
        fontWeight: '300',
        fontSize: 16,
    }
})