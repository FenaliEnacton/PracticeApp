import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    Image,
    StatusBar
} from 'react-native';
import { styles } from '../styles';
import LoginWith from '../LoginWith';
import { AppImage } from '@assets/Images';
import { useSelector, useDispatch } from 'react-redux'
import { Request_user_login } from '../../../redux/Actions/UserAuthAction';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const dispatch = useDispatch();

    // useEffect(() => {
    //     AsyncStorage.getItem('Auth')
    //         .then((data) => {
    //             //AsyncStorage.removeItem('Auth')
    //             console.log("USeEFFECT:", data);
    //             if (data != "0") {
    //                 navigation.navigate("Home")
    //             }
    //         })
    // })
    const LoginHandler = () => {
        dispatch(Request_user_login(Email, Password));
        AsyncStorage.getItem('Auth')
            .then((data) => {
                //console.log("LoginHandler:", data);
                if (data != "0") {
                    navigation.navigate("Home")
                }
            })
    }
    return (
        <>
            <View style={styles.container}>
                <ImageBackground style={styles.bg_image} source={AppImage.auth_bg_image} />
                <View style={styles.footer}>

                    <TouchableOpacity style={styles.close_btn_view} onPress={() => { console.log("navigation:", navigation); navigation.goBack(); }}>
                        <Image style={styles.close_btn} source={AppImage.close_icon_img} />
                    </TouchableOpacity>
                    <View style={styles.child_footer}>
                        <Text style={styles.header_text}>Welcome Back</Text>

                        <LoginWith styles={styles} />

                        <View style={styles.or_view}>
                            <View style={styles.line}></View>
                            <Text style={styles.or_text}>OR</Text>
                            <View style={styles.line}></View>
                        </View>

                        <Text style={styles.footer_text}>Email</Text>
                        <View style={styles.input}>
                            {/* <AntDesign name="user" size={25} /> */}
                            <TextInput style={{ paddingLeft: 10, flex: 1 }} onChangeText={setEmail} />
                        </View>

                        <Text style={[styles.footer_text, { paddingTop: 15 }]}>Password</Text>
                        <View style={styles.input}>
                            <TextInput style={{ paddingLeft: 10, flex: 1 }} secureTextEntry={true} onChangeText={setPassword} />
                        </View>

                        <Text style={{ alignSelf: 'flex-end', fontSize: 10, color: 'grey', marginTop: 5 }}>Forgot Password</Text>


                        <TouchableOpacity style={styles.signin} onPress={() => LoginHandler()} >
                            <Text style={styles.button_text}>Login</Text>
                        </TouchableOpacity>

                        <View style={{ paddingTop: 15, alignSelf: 'center', flexDirection: 'row' }}>
                            <Text >Don't have an account?</Text>
                            <Text style={{ color: '#fca8a8' }} onPress={() => navigation.navigate('SignUp')}> Sign UP</Text>
                        </View>
                    </View>
                </View>
                {/* <View style={styles.overlay} /> */}
            </View>

        </>
    )
}
export default Login;

