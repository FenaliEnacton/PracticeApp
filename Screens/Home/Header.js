import React, { useEffect, useState } from 'react'
import { View, Animated, Text, Dimensions, StyleSheet, ImageBackground, TouchableOpacity, Image, Platform, TextInput } from 'react-native';
import { AppImage } from '@assets/Images'
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Modal from '../../Componants/Modal'
import Contents from '../../Componants/Modal/contents'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const winHeight = Dimensions.get('screen').height
const winWidth = Dimensions.get('screen').width
const ContainerHeight = 65
const ViewHeight = (winHeight * 6) / 100


const Header = ({ animatedValue, ToggleModel }) => {
    const insets = useSafeAreaInsets();
    const headerOpacity = animatedValue.interpolate({
        inputRange: [0, 50],
        outputRange: [0, 1],
        extrapolate: 'clamp'
    });
    const WelcomeOpacity = animatedValue.interpolate({
        inputRange: [0, 50],
        outputRange: [1, 0],
        extrapolate: 'clamp'
    });
    const [TModel, setTModel] = useState(false)
    const toggleModel = () => {
        setTModel(!TModel)
        //console.log("toggleModel")
    }


    return (
        <View style={[styles.container, { marginTop: insets.top + 10 }]}>
            <View style={styles.h_view}>
                <TouchableOpacity onPress={() => { toggleModel() }}>
                    <Image style={styles.icon} source={AppImage.menu_icon} />
                </TouchableOpacity>

                <Animated.View style={[styles.welcom_view, { opacity: WelcomeOpacity }]}>
                    <Text style={{ color: 'white' }}>Welcome to</Text>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}>MultiCashback</Text>
                </Animated.View>

                <Animated.View style={[styles.search_view, { opacity: headerOpacity }]}>
                    <TouchableOpacity style={styles.search}>
                        <Text style={{ color: 'grey', alignSelf: 'center' }}>Search Cashback, Stores, Categories</Text>
                    </TouchableOpacity>
                </Animated.View>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon
                        name={'wallet'}
                        size={20}
                        color={'white'}
                    />
                    <Text style={{ color: 'white', paddingLeft: 5, fontWeight: 'bold' }}>00.00</Text>
                </View>

            </View>
            <Modal toggle={TModel} toggleModel={toggleModel} Content={Contents} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: ContainerHeight,
        width: winWidth,
        backgroundColor: '#1F2732',
        alignItems: 'center',
        justifyContent: 'center'
        // position: 'absolute',
        // top: 0,

        //flex: 1
    },
    bg_image: {
        width: winWidth,
        height: '100%',
        marginHorizontal: 0,
        resizeMode: 'cover',
        zIndex: 9999,
    },
    h_view: {
        height: ViewHeight,
        width: winWidth,
        //backgroundColor: 'lightblue',
        //paddingVertical: 20,
        //paddingTop: 15,
        flexDirection: 'row',
        position: "absolute",
        top: 0,
        alignItems: "center",
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: 8
        // flex: 1
    },
    icon: {
        height: 25,
        width: 25,
        resizeMode: 'contain',
        marginLeft: 10,
        alignContent: 'center',

    },
    welcom_view: {
        position: 'absolute',
        marginHorizontal: 15,
        left: 35,
        opacity: 1,
        //alignItems: 'center'
        justifyContent: 'center',
        width: 140
    },
    search_view: {
        // position: 'relative',
        marginHorizontal: 15,
        opacity: 0,
        marginVertical: 5,
        justifyContent: 'center'
    },
    search: {
        height: ViewHeight - 5,
        width: winWidth - 130,
        borderRadius: 10,
        backgroundColor: 'white',
        justifyContent: 'center',
        // ...Platform.select({
        //     ios: {
        //         shadowColor: 'rgba(0,0,0,0.5)',
        //         shadowOffset: { width: 0.5, height: 1 },
        //         shadowOpacity: 0.5
        //     },
        //     android: {
        //         elevation: 10
        //     },
        // }),
    },
})
export default Header