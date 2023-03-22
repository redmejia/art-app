import { StyleSheet, View, Text } from "react-native";

export type SxCardProps = {
    Name?: string;
    Description?: string;
}

const SxCard = ({ Name, Description }: SxCardProps) => {
    return (
        <View
            style={[styles.container, styles.containerDirection]}
        >
            <View
                style={styles.box}
            />
            <View style={styles.boxInfo}>
                <Text style={styles.textName}>{Name}</Text>
                <Text style={styles.textDescription}>{Description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'red',
        alignItems: 'center',
    },
    containerDirection: {
        flexDirection: 'row',
    },
    box: {
        height: 60,
        width: 60,
        backgroundColor: '#CAD2DB',
        borderRadius: 10,
    },
    boxInfo: {
        margin : 5,
        width : 250,
        
        borderWidth : 1,
        borderColor : '#A74592',
        borderTop: 20,
        borderTopEndRadius : 20,
        borderBottomLeftRadius : 20,
    },
    textName: {
        marginLeft: 20,
        fontSize: 25,
        fontWeight: "400"
    },
    textDescription : {
        marginLeft : 20,
        fontSize : 15,
        fontWeight: "300"
    }
})

export default SxCard;