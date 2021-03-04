import React from 'react'
import {
    StyleSheet,
    Dimensions, Platform,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    bg_image: {
        width: windowWidth,
        height: windowHeight,
        resizeMode: 'contain',
        flex: 1,
    },
    close_btn_view: {
        justifyContent: 'flex-end',
        marginRight: 10,
        marginTop: 5,
        alignItems: 'flex-end'
    },
    child_footer: {
        //backgroundColor: 'yellow',
        margin: 10,
        width: windowWidth - 70,
        alignSelf: 'center'
    },
    close_btn: {
        width: 25,
        height: 25,

        //resizeMode: '',
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,

    },
    social_icons: {
        resizeMode: 'contain',
        height: 15,
        width: 15,
        alignSelf: 'center',
    },
    header_text: {

        fontSize: 15,
        fontWeight: 'bold',
        alignSelf: 'center'
        //paddingLeft: 120,

    },
    sociallogin: {
        height: 35,
        width: windowWidth - 120,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: '#fff',
        justifyContent: 'space-evenly',
        marginVertical: 10,
        alignSelf: 'center',
        ...Platform.select({
            ios: {
                shadowColor: 'rgba(0,0,0,0.5)',
                shadowOffset: { width: 0.5, height: 1 },
                shadowOpacity: 0.5
            },
            android: {
                elevation: 5
            },
        }),
    },
    social_button: {
        height: 30,
        width: 30,
        borderRadius: 15,
        //marginHorizontal: 10,
        justifyContent: 'center',
        backgroundColor: '#fff',
        ...Platform.select({
            ios: {
                shadowColor: 'rgba(0,0,0,0.5)',
                shadowOffset: { width: 0.5, height: 1 },
                shadowOpacity: 0.5
            },
            android: {
                elevation: 5
            },
        }),
    },
    or_view: {
        flexDirection: 'row',
        width: 200,
        height: 30,
        alignSelf: 'center',
        marginTop: 10,
        justifyContent: 'space-evenly'
    },
    or_text: {
        fontSize: 12,
        color: 'grey',
        fontWeight: 'bold',

        alignSelf: 'center',
        marginHorizontal: 15
    },
    line: {
        height: 1,
        width: windowWidth / 2 - 100,
        backgroundColor: 'lightgrey',
        alignSelf: 'center',
    },
    or_view: {
        //  justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 5,
        //backgroundColor: 'yellow'
    },
    footer_text: {
        fontWeight: 'bold',
        fontSize: 10,

        marginTop: 5,
    },
    input: {

        height: 40,
        borderRadius: 5,
        fontSize: 25,
        width: windowWidth - 70,
        backgroundColor: 'white',
        marginTop: 8,
        flexDirection: 'row',
        ...Platform.select({
            ios: {
                shadowColor: 'rgba(0,0,0,0.5)',
                shadowOffset: { width: 0.5, height: 1 },
                shadowOpacity: 0.5
            },
            android: {
                elevation: 5
            },
        }),
    },
    signin: {
        width: windowWidth - 70,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginTop: 20,

        backgroundColor: '#E6936B',
        ...Platform.select({
            ios: {
                shadowColor: 'rgba(0,0,0,0.5)',
                shadowOffset: { width: 0.5, height: 1 },
                shadowOpacity: 0.5
            },
            android: {
                elevation: 5
            },
        }),
    },
    button_text: {
        fontSize: 15,
        color: 'white',
    }
})