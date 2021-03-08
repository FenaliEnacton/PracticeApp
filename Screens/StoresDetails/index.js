import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Dimensions, StyleSheet, Image, TouchableOpacity, Platform, TouchableNativeFeedback } from 'react-native'
import { connect } from 'react-redux'
import { Request_store_detail } from '../../redux/Actions/StoreAction'
import Icon from 'react-native-vector-icons/AntDesign';
import Search from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity as Button } from 'react-native-gesture-handler'


const winHeight = Dimensions.get('screen').height
const winWidth = Dimensions.get('screen').width
const ContainerHeight = (winHeight * 18) / 100;
const childHeight = (ContainerHeight * 15) / 100;
const box_height = (winHeight * 19) / 100
const box_width = (winWidth * 80) / 100
const Mid_height = (winHeight * 5) / 100


class StoresDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            store: {},
            loading: true
        };
    }


    componentDidMount() {
        this.props.request_store();
        console.log("CDMount")
    }

    componentDidUpdate(prevProps, preState) {

        if (preState.store == this.state.store) {
            console.log("CDU")
            for (const key in this.props.Stores) {
                for (const val of this.props.Stores[key]) {
                    if (this.props.route.params?.itemId == val.id) {
                        this.setState({ store: val, loading: false });
                    }
                }
            }
        }
    }

    render() {
        return (
            <View>
                {/* <Text>STores More Details</Text>
                <Text>{this.props.route.params?.itemId}</Text>
                <Button title='stores' onPress={() => stores_by_id()} />
                <Button title='click' onPress={() => this.props.request_store()}></Button>
                <Text>{this.state.store?.name}</Text> */}

                <View style={styles.header}>
                    <View style={styles.child_header}>
                        <TouchableOpacity onPress={() => { this.props.navigation.goBack() }}>
                            <Icon name={'left'} size={20} color={'white'} />
                        </TouchableOpacity>
                        <View style={{ alignItems: 'center', flex: 1 }}>
                            <Text style={{ color: 'white' }}>{this.state.store?.name}</Text>
                        </View>
                        <Search name={'search'} size={20} color={'white'} />
                    </View>
                    <View style={styles.box}>

                        <View style={styles.img_view}>
                            <Image style={styles.Img} source={{
                                uri: this.state.store?.logo
                            }} />
                        </View>
                        <Text style={{ color: '#E6936B', fontSize: 13 }}>{this.state.store?.cashback_string}</Text>

                        {Platform.select == 'ios' ? <TouchableOpacity>
                            <Text style={{ color: 'white' }}>Shop Now</Text>

                        </TouchableOpacity> :
                            <Button style={styles.shop_now}>
                                <Text style={{ color: 'white' }}>Shop Now</Text>
                            </Button>
                        }
                        <View style={{ flexDirection: 'row', width: box_width, justifyContent: 'space-between' }}>
                            <Text style={[styles.text, { marginLeft: 10 }]}> How It Works </Text>
                            <Text style={[styles.text, { marginRight: 10 }]}> Terms & Conditions </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.mid_view}>
                    <View style={styles.mid_child}>
                        <Text>Tracked Within</Text>
                        <Text style={{ color: "grey" }}>{this.state.store?.confirm_duration}</Text>
                    </View>
                    <View style={styles.mid_child}>
                        <Text>Paid Within</Text>
                        <Text style={{ color: "grey" }}>{this.state.store?.confirm_days?.slice(0, -9)}</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly' }}>
                        <Text>Missing Cashback</Text>
                        {this.state.loading ? <Text></Text> :
                            this.state.store?.is_claimable ? <Text style={{ color: "grey" }}>Allowed ✔️</Text> : <Text>Not Allowed</Text>}

                    </View>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        height: ContainerHeight,
        backgroundColor: '#1F2732',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        position: 'relative',

    },
    child_header: {
        height: childHeight,
        marginHorizontal: 7,
        //backgroundColor: 'yellow',
        marginTop: 30,
        flexDirection: 'row'
    },
    box: {
        height: box_height,
        width: box_width,
        backgroundColor: 'white',
        position: 'absolute',
        top: ContainerHeight / 2,
        left: winWidth / 10,
        borderRadius: 10,
        justifyContent: 'space-evenly',
        alignItems: 'center',
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
        zIndex: 1
    },
    img_view: {
        height: 50,
        width: 120,
        backgroundColor: 'white',
        borderRadius: 5,
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
    Img: {
        height: 50,
        width: 120,
        borderRadius: 5
    },
    text: {
        color: 'grey',
        fontSize: 12
    },
    shop_now: {
        height: (box_height * 18) / 100,
        width: (box_width * 55) / 100,
        backgroundColor: '#1F2732',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',

    },
    mid_view: {
        height: Mid_height,
        //backgroundColor: 'pink',
        marginTop: (box_height / 2) + 20,
        flexDirection: 'row',
        justifyContent: 'space-evenly'

    },
    mid_child: {
        flex: 1,
        borderRightWidth: 1,
        borderRightColor: 'black',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    }
})

const X = (state) => {
    return {
        Stores: state.StoreReducer.data
    }
}

const Y = (dispatch) => {
    return {
        request_store: () => dispatch(Request_store_detail())
    }
}
export default connect(X, Y)(StoresDetails);