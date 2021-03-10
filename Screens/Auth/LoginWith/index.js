import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import { AppImage } from '@assets/Images';

import { AccessToken, LoginManager } from 'react-native-fbsdk';
import { UserFBLOgin } from '../../../redux/Services/apis'
import { useDispatch, useSelector } from 'react-redux'
import { Success_user_fb_login } from '../../../redux/Actions/UserAuthAction'
const LoginWith = ({ styles }) => {

    const dispatch = useDispatch();
    const state = useSelector(state => state.UserReducer.user);

    const FBLogin = () => {
        LoginManager.logInWithPermissions(["public_profile", "email"]).then(
            function (result) {
                if (result.isCancelled) {
                    //console.log("Login cancelled");
                } else {
                    AccessToken.getCurrentAccessToken().then(
                        (data) => {
                            //console.log(data.accessToken.toString());
                            UserFBLOgin(data.accessToken.toString()).then((data) => {
                                console.log("Data:", data);
                                dispatch(Success_user_fb_login(data));
                            })
                        }
                    )
                    // console.log(
                    //     "Login success with permissions: " +
                    //     result.grantedPermissions.toString()
                    // );
                }
            },
            function (error) {
                console.log("Login fail with error: " + error);
            }
        );
    }

    return (

        <View style={styles.sociallogin}>
            <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Login with </Text>
            {/* <View style={{ flexDirection: 'row' }}> */}
            <TouchableOpacity style={styles.social_button} onPress={FBLogin} >
                <Image style={styles.social_icons} source={AppImage.facebook_sign_in_icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.social_button} onPress={() => { console.log("UserData:", state); }}>
                <Image style={styles.social_icons} source={AppImage.google_sign_in_icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.social_button}>
                <Image style={styles.social_icons} source={AppImage.apple_sign_in_icon} />
            </TouchableOpacity>
            {/* </View>  */}
        </View>
    )
}
export default LoginWith