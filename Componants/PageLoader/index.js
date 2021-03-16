import React from 'react';
import { View, StyleSheet } from 'react-native';
import LoaderKit from 'react-native-loader-kit'

export default PageLoader = () => {
    return (
        <View style={{ position: 'absolute', top: -140, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(52, 52, 52, 0.5)' }}>
            <LoaderKit
                style={{ width: 50, height: 50 }}
                name={'BallSpinFadeLoader'} // Optional: see list of animations below
                size={50} // Required on iOS
                color={'white'} // Optional: color can be: 'red', 'green',... or '#ddd', '#ffffff',...
            />
        </View>
    )
}
