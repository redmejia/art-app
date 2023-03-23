import { StyleSheet, View } from "react-native"


type DividerProps = {
    Styles?: object
}


const Divider = ({ Styles }: DividerProps) => {
    return <View style={{ ...styles.divider, ...Styles }} />
}

const styles = StyleSheet.create({
    divider: {
        backgroundColor: '#fff',
        height: 20,
        shadowColor: '#999999',
        shadowOffset: { height: 3, width: -1 },
        shadowOpacity: .25,
        // shadowRadius: 90,
    }
})

export default Divider;

