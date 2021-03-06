import React, { useEffect, useState, Component } from 'react'
import { FlatList, View, Text, Animated, ImageBackground, StyleSheet, Dimensions, ScrollView, TouchableOpacity, Button } from 'react-native';
import Header from './Header';

import StoreHeader from '../../Componants/Home/StoreHeader';
import { useSelector, useDispatch, connect } from 'react-redux'
import { Fetch_store_data, Request_store_data } from '../../redux/Actions/StoreAction'
import CardHome from '../../Componants/Home/CardHome';
import CardLoader, { HeaderLoader } from '../../Componants/Home/Loader';
import Modal from '../../Componants/Modal';
import Carousel from 'react-native-snap-carousel';
import CarouselCards from '../../Componants/Slider/CarouselCards'
import Contents from '../../Componants/Modal/contents';
import CardContent from '../../Componants/Modal/cardContent';
import LoaderKit from 'react-native-loader-kit'
import PageLoader from '../../Componants/PageLoader';

const winHeight = Dimensions.get('screen').height
const winWidth = Dimensions.get('screen').width
const ContainerHeight = (winHeight * 30) / 100;
const ModelHeight = (winHeight * 70) / 100;
//const offset = useState(new Animated.Value(0))[0];

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

            Store_Id: {},
            Top_store: {},
            Id: 0,
            flag: 0,
            Card_Id: {},
            Top_offers: {},
            Offer_Id: {},
            Top_Deals: {},
            Deal_Id: {},
            Category: {},
            offset: new Animated.Value(0),
            isPageLoader: false,

        }
        // console.log('Constructor called....');

    }

    componentDidMount() {
        if (this.state.flag == 0) {

            this.props.fetch_Stores();
            this.setState({ flag: 1 })
        }
        //console.log('Loading state CDM:', this.props.Loader);
    }

    componentDidUpdate(prevProps, preState) {
        if (prevProps.Stores?.data !== this.props.Stores?.data) {
            // console.log('Componanat did Update called....');
            this.setState({ Store_Id: this.props.Stores?.data?.data['procash/top-stores']?.categories[0].stores })
            this.setState({ Top_store: this.props.Stores?.data?.data['procash/top-stores']?.categories });
            this.setState({ Top_offers: this.props?.Stores?.data?.data['procash/top-offers']?.categories })
            this.setState({ Offer_Id: this.props?.Stores?.data?.data['procash/top-offers']?.categories[0]?.coupons })
            this.setState({ Top_Deals: this.props.Stores?.data?.data['procash/top-deals']?.categories })
            this.setState({ Deal_Id: this.props.Stores?.data?.data['procash/top-deals']?.categories[0]?.deals })
            //this.setState({ Category: this.props.Stores?.data?.data['procash/categories']?.StoreCategory})
            //this.setState({ offset: new Animated.Value(0) })
        }
    }



    Store_Id_fun = (id) => {

        this.state.Id = id;
        let stores = this.state.Top_store;
        for (const key of stores) {
            if (key?.id == id) {
                this.setState({ Store_Id: key.stores })
            }
        }
    }

    Offers_Id_fun = (id) => {
        //console.log("Offers", this.state.Top_offers);
        let offers = this.state.Top_offers;
        for (const key of offers) {
            if (key.id == id) {
                //console.log("key", key)
                this.setState({ Offer_Id: key?.coupons })
            }
        }
    }

    Deals_Id_fun = (id) => {
        let deals = this.state.Top_Deals;
        for (const key of deals) {
            if (key.id == id) {
                this.setState({ Deal_Id: key?.deals })
            }
        }
    }

    card_More_detail = (id) => {
        //console.log("id of stores", id);
        //console.log("stores", this.state.Store_Id);
        for (const key of this.state.Store_Id) {
            if (key.id == id) {
                this.setState({ Card_Id: key })
                //console.log("card Details", key)
            }
        }
    }

    offers_More_detail = (id) => {
        // console.log("id of Offer", id);
        //console.log("stores", this.state.Store_Id);
        for (const key of this.state.Offer_Id) {
            if (key.id == id) {
                this.setState({ Card_Id: key })
                //console.log("Offer Details", key)
            }
        }
    }

    Deals_more_detail = (id) => {
        // console.log("id of Deals", id);
        for (const key of this.state.Deal_Id) {
            if (key.id == id) {
                this.setState({ Card_Id: key })
                //console.log("Deals Details", key)
            }
        }
    }

    togglePageLoader = (val) => {
        //console.log("Before LoaderVal:", this.state.isPageLoader);
        this.setState({ isPageLoader: val });
        //console.log("After LoaderVal:", this.state.isPageLoader);
    }

    _renderItem({ item }) {
        return (
            <View style={styles.itemContainer}>
                <Text style={styles.itemLabel}>{`Item ${item}`}</Text>
            </View>
        );
    }



    render() {
        const WelcomeOpacity = this.state.offset.interpolate({
            inputRange: [0, 20],
            outputRange: [1, 0],
            extrapolate: 'clamp'
        });
        // return (
        //     <PageLoader />
        // )
        return (

            <View style={{ flex: 1 }}>

                {/* <LoaderKit
                    style={{ width: 50, height: 50 }}
                    name={'BallPulse'} // Optional: see list of animations below
                    size={50} // Required on iOS
                    color={'red'} // Optional: color can be: 'red', 'green',... or '#ddd', '#ffffff',...
                /> */}
                <Header animatedValue={this.state.offset} />
                <ScrollView onScroll={Animated.event([
                    {
                        nativeEvent: {
                            contentOffset: {
                                y: this.state.offset,

                            }
                        }
                    }
                ],
                    { useNativeDriver: false }
                )}
                    scrollEventThrottle={16}
                    showsVerticalScrollIndicator={false}
                    scrollEnabled={!this.props.CardLoader}
                    bounces={false}
                    bouncesZoom={false}>
                    <View style={styles.header}>
                        <TouchableOpacity>
                            <Animated.View style={[styles.search, { opacity: WelcomeOpacity }]}>
                                <Text style={{ color: 'grey', alignSelf: 'center' }}>Search Cashback, Stores, Categories</Text>
                            </Animated.View>
                        </TouchableOpacity>
                        <View style={styles.image_view}>
                            <CarouselCards />
                        </View>
                    </View>


                    <StoreHeader loderStatus={this.props.Loader} Title={"Stores"} Top_store={this.state.Top_store} Store_Id={(id) => this.Store_Id_fun(id)} />

                    {this.props.Loader ? <CardLoader /> :

                        <CardHome Top_store={this.state.Store_Id}
                            Top_offers={null}
                            card_Id={(id) => this.card_More_detail(id)}
                            navigation={this.props.navigation}
                        />
                    }
                    <StoreHeader loderStatus={this.props.Loader}
                        Title={"View Offers By Categories"}
                        Top_store={this.state.Top_offers}
                        Store_Id={(id) => this.Offers_Id_fun(id)} />

                    {this.props.Loader ? <CardLoader /> :
                        <CardHome Top_Offers={this.state.Offer_Id}
                            colorCode={4}
                            Top_store={null}
                            card_Id={(id) => this.offers_More_detail(id)}
                            card_more_detail={this.state.Card_Id}
                        />
                    }
                    <StoreHeader loderStatus={this.props.Loader} Title={"Deals"} Top_store={this.state.Top_Deals} Store_Id={(id) => this.Deals_Id_fun(id)} />
                    {this.props.Loader ? <CardLoader /> :
                        <CardHome Top_Offers={this.state.Deal_Id}
                            colorCode={8}
                            Top_store={null}
                            card_Id={(id) => this.Deals_more_detail(id)}
                            card_more_detail={this.state.Card_Id}
                        />
                    }

                    {this.props.CardLoader && this.props.FilterLoader ?
                        <PageLoader /> : null
                    }

                </ScrollView>
            </View>
        )
    }
}
const X = (state) => {
    return {
        Stores: state.StoreReducer?.stores,
        Loader: state.StoreReducer?.loading,
        CardLoader: state.StoreReducer?.CardLoader,
        FilterLoader: state.StoreReducer?.filterLoader
    }
}

const Y = (dispatch) => {
    return {
        fetch_Stores: () => dispatch(Request_store_data())
    }
}
export default connect(X, Y)(Home)

const styles = StyleSheet.create({

    header: {
        height: ContainerHeight,
        backgroundColor: '#1F2732',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    search: {
        alignSelf: "center",
        height: 37,
        width: winWidth - 25,
        borderRadius: 10,
        backgroundColor: 'white',
        justifyContent: 'center',

        ...Platform.select({
            ios: {
                shadowColor: 'rgba(0,0,0,0.5)',
                shadowOffset: { width: 0.5, height: 1 },
                shadowOpacity: 0.5
            },
            android: {
                elevation: 10
            },
        }),

    },
    image_view: {
        height: ContainerHeight - 75,
        width: "94%",
        alignSelf: 'center',
        backgroundColor: '#1F2732',
        borderRadius: 10,
        marginTop: 9,
    },


})

