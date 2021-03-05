import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, Image } from 'react-native'
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import Clipboard from '@react-native-community/clipboard';

const CardContent = ({ toggleModel, Stores }) => {

    clipboardhandler = (code) => {
        Clipboard.setString(code);
        console.log("Code.", code, ".");
    }
    //console.log("STores Details From card:", Stores)
    return (
        <View style={styles.rootView}>
            <View style={styles.containerView} >
                <View style={styles.notch}></View>
                <TouchableOpacity style={styles.close_btn} onPress={toggleModel} >
                    <AntDesignIcon name="closecircleo" size={15} color='white' />
                </TouchableOpacity>

                <View style={styles.content_view}>
                    <View style={styles.img_box}>
                        <Image style={styles.Img} source={{
                            uri: Stores?.store?.logo
                        }} />
                    </View>
                    <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{Stores?.title}</Text>
                    <Text style={{ color: 'orange' }}>{Stores?.store?.cashback_string}</Text>
                    <View style={{ alignItems: "center" }}>
                        <Text style={{ fontSize: 12 }}>PromoCode is Required</Text>
                        <Text style={{ fontSize: 12 }}>The Deal applies to a specific group of goods</Text>
                    </View>
                    {/* if code == null  */}
                    <View style={styles.code}>
                        {Stores?.code == 'No Vouchercode required' ? <View onPress={() => { clipboardhandler(Stores.code) }} style={styles.coupon_view}>
                            <Text style={{ fontSize: 12, color: '#E6936B' }}>{Stores?.code}</Text>
                        </View> : null}

                        {Stores?.code != null && Stores?.code != 'No Vouchercode required' ? <TouchableOpacity onPress={() => { clipboardhandler(Stores.code) }} style={styles.coupon_view}>
                            <Text style={{ fontSize: 12, color: '#E6936B' }}>{Stores?.code}</Text>
                        </TouchableOpacity>
                            : null}
                        <View  ><Text style={{ fontSize: 12 }}>{Stores?.expiry_date}</Text></View>
                    </View>
                    <TouchableOpacity style={styles.shop_now_btn}>
                        <Text style={{ color: 'white' }}>Shop Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
export default CardContent

const styles = StyleSheet.create({
    rootView: {
        height: "45%",
        backgroundColor: "white",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,

    },
    containerView: {
        height: "100%",
        width: "100%",
        //justifyContent: 'space-evenly'
        //backgroundColor: 'yellow'
    },
    notch: {
        alignSelf: 'center',
        height: 3,
        width: 50,
        borderRadius: 10,
        backgroundColor: 'grey',
        marginTop: 5,
    },
    close_btn: {
        alignSelf: 'flex-end',
        marginRight: 10,
        backgroundColor: '#E6936B',
        borderRadius: 10,
        height: 23,
        width: 23,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content_view: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center'
        //backgroundColor: 'black',
    },
    Img: {
        height: 55,
        width: 130,
        borderRadius: 10
    },
    img_box: {
        height: 55,
        width: 130,
        //elevation: 5,
        borderRadius: 15,
        backgroundColor: 'white',
        ...Platform.select({
            ios: {
                shadowColor: 'rgba(0,0,0,0.5)',
                shadowOffset: { width: 0.5, height: 1 },
                shadowOpacity: 0.5
            },
            android: {
                elevation: 10
            },
        })

    },
    code: {
        flexDirection: 'row',
        //backgroundColor: 'yellow',
        marginTop: 20,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%'
    },
    coupon_view: {
        height: 25,
        width: 150,
        borderColor: '#E6936B',
        borderWidth: 1,
        //marginHorizontal: 30,
        borderRadius: 10,
        backgroundColor: '#ffd9cd',
        borderStyle: 'dashed',
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    shop_now_btn: {
        width: 300,
        height: 40,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginTop: 20,
        ...Platform.select({
            ios: {
                shadowColor: 'rgba(0,0,0,0.5)',
                shadowOffset: { width: 0.5, height: 1 },
                shadowOpacity: 0.5
            },
            android: {
                elevation: 10
            },
        })

    }
})