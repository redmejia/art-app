import React from "react";
import { StyleSheet, View } from "react-native";

export type CardProps = {
    Image?: JSX.Element;
    Title?: React.ReactNode;
    Description?: React.ReactNode;
    BorderStyle?: object;
    ImageStyle?: object;
    BodyStyle?: object;
}

export const Card = ({ Image, Title, Description, BorderStyle, BodyStyle, }: CardProps) => {
    return (
        <View style={{ ...styles.card, ...BorderStyle }}>
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
        height: 200,
        width: 200,
        padding: 8,
        borderColor: 'black',
        borderWidth: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
})