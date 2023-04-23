import { ApolloError } from "@apollo/client";
import { Platform, StyleSheet, Text, View } from "react-native";

export type HandlerProps = {
    IsLoading?: boolean;
    IsError?: ApolloError; // Apollo error network
    LoadingDisplay?: JSX.Element;
    ErrorDisplay?: JSX.Element;
}

const DataHandler = ({ IsLoading, LoadingDisplay, ErrorDisplay }: HandlerProps) => {


    return (
        <View
            style={styles.continer}
        >
            {
                IsLoading ?
                    <View>
                        {LoadingDisplay}
                    </View>
                    :
                    <View>
                        <Text style={styles.textNetConnection}>Connection Faild</Text>
                        {ErrorDisplay}
                    </View>
            }
        </View>
    )
}


const styles = StyleSheet.create({
    continer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textNetConnection: {
        padding: 10,
        fontSize: 20,
        fontWeight: Platform.OS === "ios" ? "300" : "500",
    }
})

export default DataHandler;

