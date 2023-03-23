import React from "react";
import { StyleSheet, View } from "react-native";

export type CardProps = {
    Image?: React.ReactNode;
    Title?: React.ReactNode;
    Description?: React.ReactNode;
    CardStyle?: object;
    ImageStyle?: object;
    BodyStyle?: object;
}

const Card = ({ Image, Title, Description, CardStyle, BodyStyle, }: CardProps) => {
    return (
        <View style={{ ...styles.card, ...CardStyle }}>
            <View>
                {Image}
            </View>
            <View style={BodyStyle}>
                {Title}
                {Description}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        height: 430,
        width: 370,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default Card;