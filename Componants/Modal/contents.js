import React from 'react'
import { FlatList, View, Image, Text, Platform, Animated, ImageBackground, StyleSheet, Dimensions, ScrollView, TouchableOpacity, Button } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { routerList } from '../../assets/Themes/RouterList';
const winHeight = Dimensions.get('window').height
const winWidth = Dimensions.get('window').width
const ModelHeight = (winHeight * 80) / 100;
const ButtonHeight = (ModelHeight * 7) / 100;

const Contents = ({ toggleModel }) => {
    return (

        <>
            <View style={styles.modalView}>
                <TouchableOpacity style={styles.close_btn} onPress={() => toggleModel()}>
                    <View style={{ alignSelf: 'center', justifyContent: 'center' }}>
                        <Icon name={"closecircleo"} color={'white'} size={15} />
                    </View>
                </TouchableOpacity>

                <Text style={{ fontWeight: 'bold', alignItems: 'center', fontSize: 15 }}>Sign In or Join Now</Text>

                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: '#1F2732' }]}>
                        <Text style={{ fontSize: 15, color: 'white', fontWeight: 'bold' }}> Sign In </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: '#E6936B' }]}>
                        <Text style={{ fontSize: 15, color: 'white', fontWeight: 'bold' }}> Sign Up </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.Bottom_view}>
                    <FlatList
                        data={routerList}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.bottom_content}>
                                    <Image source={item.icon} style={styles.icon} />
                                    <Text style={{ marginLeft: 15, fontSize: 17, color: '#000000' }}>{item.title}</Text>
                                </View>
                            )
                        }}
                    />
                </View>

            </View>
        </>
    )
}
export default Contents;

const styles = StyleSheet.create({
    modalView: {
        height: ModelHeight,
        width: '100%',
        //margin: 20,
        backgroundColor: "white",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: "center",
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
        })
    },
    button: {
        height: ButtonHeight,
        width: 130,
        borderRadius: 20,
        alignItems: 'center',
        //elevation: 5,
        justifyContent: 'center',
        marginHorizontal: 15,
    },
    close_btn: {
        height: 30,
        width: 30,
        //height: 20,
        justifyContent: 'center',
        alignSelf: 'flex-end',
        //alignItems: 'center',
        backgroundColor: '#E6936B',
        borderRadius: 50,
        marginRight: 10,
        marginTop: 10
    },
    Bottom_view: {
        marginLeft: 30,
        marginTop: 20,
        //justifyContent: 'flex-start',
        alignSelf: 'flex-start',
        //backgroundColor: 'black'
    },
    icon: {
        height: 20,
        width: 20,
    },
    bottom_content: {
        width: winWidth - 60,
        height: 40,
        //backgroundColor: 'red',
        flexDirection: 'row',
        // marginVertical: 5,
        alignItems: 'center',
        borderBottomColor: '#e1e6e9',
        borderBottomWidth: 1
    },
})

