import React from 'react'
import { AppImage } from '@assets/Images'
import { FlatList, View, Image, Text, Animated, ImageBackground, StyleSheet, Dimensions, ScrollView, TouchableOpacity, Button } from 'react-native';
const winWidth = Dimensions.get('window').width
const winHeight = Dimensions.get('window').height
const footerHeight = (winHeight * 8) / 100;

const Footer = ({ navigation, state }) => {
    // console.log(" Footer State ", state)
    return (
        <View style={styles.Container}>
            <View style={styles.tab}>

                <TouchableOpacity style={{ flex: 1 }} onPress={() => { navigation.navigate('Home') }}>
                    {state.index == 0 ? <Image style={styles.Img} source={AppImage.route_Home} /> :
                        <Image style={styles.Img} source={AppImage.route_Home_selected} />

                    }
                </TouchableOpacity>

                <TouchableOpacity style={{ flex: 1 }} onPress={() => { navigation.navigate("AllStores") }}>
                    {state.index == 1 ? <Image style={styles.Img} source={AppImage.route_AllStores} /> :
                        <Image style={styles.Img} source={AppImage.route_AllStores_selected} />
                    }
                </TouchableOpacity>

                <TouchableOpacity style={{ flex: 1 }} onPress={() => { navigation.navigate("Login") }}>
                    {state.index == 2 ? <Image style={styles.Img} source={AppImage.route_UserDashboard} /> :
                        <Image style={styles.Img} source={AppImage.route_UserDashboard_selected} />
                    }
                </TouchableOpacity>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        height: footerHeight,
        width: winWidth,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    tab: {
        borderRadius: 10,
        // margin: 10,
        backgroundColor: 'white',
        width: winWidth - 30,
        height: footerHeight - 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        ...Platform.select({
            ios: {
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2
                },
                shadowOpacity: 0.25,
                shadowRadius: 4,
            },
            android: {
                elevation: 5,
            }
        }),
        flexDirection: 'row',
    },
    Img: {
        height: 20,
        width: 20,
        alignSelf: 'center'
    }
})
export default Footer;