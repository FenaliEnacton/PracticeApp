import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Dimensions, StyleSheet, Image, TouchableOpacity, Platform, TouchableNativeFeedback } from 'react-native'
import { connect } from 'react-redux'
import { Request_store_detail, Request_store_data } from '../../redux/Actions/StoreAction'
import Icon from 'react-native-vector-icons/AntDesign';
import Search from 'react-native-vector-icons/Ionicons';
import Down from 'react-native-vector-icons/Entypo';
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
            loading: true,
            initialCBRates: []

        };
    }


    componentDidMount() {
        //this.props.request_store();
        this.setState({ store: this.props.route.params?.itemId?.store })
        //this.setState({ initialCBRates: this.props.route.params?.itemId?.store?.cashback?.slice(0, 2) })
        // console.log("CDMount", this.props.route.params);
    }

    componentDidUpdate(prevProps, preState) {
        //console.log("cdm", store)

        if (preState.initialCBRates == this.state.initialCBRates) {
            console.log("cdm CALLED")
            this.setState({ initialCBRates: this.props.route.params?.itemId?.store?.cashback?.slice(0, 2) })
        }
    }

    view_More = () => {
        this.setState({ initialCBRates: this.props.route.params?.itemId?.store?.cashback })
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
                        <Text style={{ fontWeight: 'bold' }}>{this.state.store?.confirm_duration}</Text>
                    </View>
                    <View style={styles.mid_child}>
                        <Text>Paid Within</Text>
                        <Text style={{ fontWeight: 'bold' }}>{this.state.store?.confirm_days}</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly' }}>
                        <Text>Missing Cashback</Text>
                        {
                            this.state.store?.is_claimable ? <Text style={{ fontWeight: 'bold' }}>Allowed ✔️</Text> : <Text>Not Allowed</Text>}
                    </View>
                </View>
                <View style={styles.cashback_rate}>
                    <Text style={{ fontWeight: 'bold' }}>Cashback Rates</Text>
                    <View style={styles.category_box}>
                        <FlatList
                            data={this.state.initialCBRates}
                            style={styles.flatlist_view}
                            keyExtractor={(item, index) => (index.toString())}
                            renderItem={({ item }) => {
                                // console.log("Id", item.id)
                                return (
                                    <View style={{ maxHeight: 150, minHeight: 40, justifyContent: 'space-between', alignItems: 'center', borderBottomColor: 'lightgrey', borderBottomWidth: 0.7, flexDirection: 'row' }}>
                                        <Text style={{ flex: 0.9, marginLeft: 10 }}>{item.title}</Text>
                                        <Text style={{ flex: 0.1, marginRight: 5, color: '#E6936B', textAlign: 'center' }}>{item.cashback}</Text>
                                    </View>
                                )
                            }}
                        />
                    </View>
                    {this.state.store?.cashback?.length > 2 ? <TouchableOpacity onPress={() => this.view_More()} style={styles.View_more}>
                        <Text>View More</Text>
                        <Down name={'chevron-down'} size={20} />
                    </TouchableOpacity> : null}
                </View>
                <View style={styles.cashback_rate}>
                    <Text style={{ fontWeight: 'bold' }}>Coupons & Offers</Text>
                </View>
                <View>
                    <View style={styles.Coupons_Card}></View>
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
        borderRadius: 5,
        resizeMode: 'contain'
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
    },
    cashback_rate: {
        marginTop: 20,
        marginHorizontal: 10,

    },
    flatlist_view: {
        maxHeight: 200
    },
    category_box: {
        //height: 20,
        marginTop: 10,
        borderRadius: 5,
        backgroundColor: 'white',
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
    View_more: {
        height: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E6936B',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
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
    Coupons_Card: {
        height: 120,
        width: 170,
        backgroundColor: 'pink',
        marginRight: 10,
        paddingLeft: 13,
        paddingTop: 12,
        borderRadius: 10,
    }
})


export default StoresDetails;