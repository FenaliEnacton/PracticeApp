import React from 'react';
import Modal from 'react-native-translucent-modal';
import { FlatList, View, Image, Text, Animated, ImageBackground, StyleSheet, Dimensions, ScrollView, TouchableOpacity, Button } from 'react-native';
import Contents from './contents';


const winWidth = Dimensions.get('window').width
const winHeight = Dimensions.get('window').height
const ModelHeight = (winHeight * 70) / 100;
const ButtonHeight = (ModelHeight * 7) / 100;


const Model = ({ toggle, toggleModel, Content, top_stores }) => {
    return (
        <View >
            <Modal
                animationType="fade"
                transparent={true}
                onRequestClose={() => { }}
                visible={toggle}>
                <View style={styles.modal}>
                    <Content toggleModel={toggleModel} Stores={top_stores} />
                    {/* <Content /> */}
                </View>
            </Modal>
        </View>

    )
}
const styles = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: "flex-end",
        //alignItems: "center",
        backgroundColor: '#000000AA',
        //marginTop: 22
    },

})


export default Model
