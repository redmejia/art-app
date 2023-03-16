import { Image, StyleSheet, Text, View } from "react-native"

export type SmCardProps = {
    Title?: string,
    Src?: any | undefined,
    ImageStyle?: object,
    ImageContainer?: object,
    TitleStyle?: object,
}

const SmCard = ({ Title, Src, ImageContainer, ImageStyle, TitleStyle }: SmCardProps): JSX.Element => {
    return (
        <View style={{
            ...styles.imageContainer,
            ...ImageContainer
        }}
        >

            <Text style={{
                ...styles.textTitle,
                ...TitleStyle
            }}
            >{Title}</Text>
            <Image
                style={{
                    ...styles.imageStyle,
                    ...ImageStyle
                }}
                source={Src}
            />
        </View>
    )
}

export default SmCard;

const styles = StyleSheet.create({
    imageContainer: {
        display: 'flex',
        // flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center',
        height: '100%',
    },
    imageStyle: {
        height: 220,
        width: 150,
        borderWidth: 0,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },

    textTitle: {
        fontWeight: '200',
        fontSize: 20,
        textAlign: 'center'
    }
})

