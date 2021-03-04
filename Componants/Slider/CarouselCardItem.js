import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

const height = Dimensions.get("window").height;
const perSlider = (height * 20) / 100;

const CarouselCardItem = ({ item, index }) => {
    //console.log("Img Url:", item.imgUrl)
    return (
        <View style={styles.container} key={index}>
            <Image
                source={item.imgUrl}
                style={styles.image}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'white',
        borderRadius: 20,
        width: "100%",

        height: "100%"
    },
    image: {
        width: "89%",
        height: "100%",
        borderRadius: 10
    },
    header: {
        color: "#222",
        fontSize: 28,
        fontWeight: "bold",
        paddingLeft: 20,
        paddingTop: 20
    },
    body: {
        color: "#222",
        fontSize: 18,
        paddingLeft: 20,
        paddingLeft: 20,
        paddingRight: 20
    }
})

export default CarouselCardItem