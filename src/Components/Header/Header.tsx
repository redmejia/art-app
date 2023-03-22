import {View, FlatList, StyleSheet } from "react-native"
import SmCard from "../Utils/Card/SmCard"
type Mockdata = {
	src: any | undefined,
	title: string,
}

const data: Mockdata[] = [
	{ src: require('../public/steve-johnson-1.png'), title: 'Pastel' },
	{ src: require('../public/steve-johnson-2.png'), title: 'Acrylic' },
	{ src: require('../public/dan-farrell-3.png'), title: 'Pastel' },
	{ src: require('../public/dan-farrell-4.png'), title: 'Abstract' },
    { src: require('../public/05.png'), title: 'Graffiti' }
]

const Header = (): JSX.Element => {
    return (
        <FlatList
            horizontal={true}
            data={data}
            renderItem={({ item }) =>
                <View style={{ marginLeft: 20 }}>
                    <SmCard
                        Title={item.title}
                        Src={item.src}
                        TitleStyle={styles.textTitle}
                    />
                </View>
            }
        />
    )
}
const styles = StyleSheet.create({
    textTitle: {
		fontWeight: '100',
		fontSize: 28,
		color: '#fff'
	},
})

export default Header;