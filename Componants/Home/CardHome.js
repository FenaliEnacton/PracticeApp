import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, Dimensions } from 'react-native'
import CardLoader from '../../Componants/Home/Loader';
import { Request_store_detail, Request_store_data, Request_Filter_data } from '../../redux/Actions/StoreAction'
import Modal from '../Modal'
import CardContent from '../Modal/cardContent'
import { useSelector, useDispatch } from 'react-redux'
import { StoreReducer } from '../../redux/Reducers/StoreReducer'

const winHeight = Dimensions.get('screen').height
const winWidth = Dimensions.get('screen').width
const ContainerHeight = (winHeight * 20) / 100
const BoxWidth = (winWidth * 50) / 100

function CardHome({ Top_store, Top_Offers, colorCode, card_Id, card_more_detail, navigation, }) {
    const dispatch = useDispatch();
    const Stores = useSelector(state => state.StoreReducer.data)
    const loader = useSelector(state => state.StoreReducer.CardLoader)
    useEffect(() => {
        // if (togglePageLoader != null) {
        //     if (loader) {
        //         togglePageLoader(true);
        //     }
        //     else {
        //         togglePageLoader(false);
        //     }
        // }

    }, []);

    const COLORS_SETS = {
        2: [
            '#CCE6F6',
            '#DDE6E1',
            '#F2AF5F',
            '#E9D783',
            '#4AA4BA80',
            '#F5F6FA',
            '#0000000D',
            '#E6936B40',
            '#C0C0C0',
            '#0000001A',
        ],
        4: [
            '#F5F6FA',
            '#0000000D',
            '#E6936B40',
            '#CCE6F6',
            '#E9D783',
            '#4AA4BA80',
            '#DDE6E1',
            '#F2AF5F', // remove this
            '#C0C0C0',
            '#0000001A',
        ],
        8: [
            '#E9D783',
            '#4AA4BA80',
            '#DDE6E1',
            '#F2AF5F', // remove this
            '#C0C0C0',
            '#0000001A',
            '#F5F6FA',
            '#0000000D',
            '#E6936B40',
            '#CCE6F6',
        ],
    };

    const [Model, setModel] = useState(false)
    const toggleModel = () => {
        setModel(!Model)
        //console.log("toggleModel")
    }
    // for (const key of COLORS_SETS) {
    //     //setcolor(key)
    //     console.log("Colors :", COLORS_SETS)
    // }
    const More_Info = (id) => {


        dispatch(Request_store_detail(id, navigation));
        // dispatch(Request_Filter_data([],
        //     [id],
        //     'popular',
        //     1,
        //     null,
        //     null,
        //     navigation
        // ))

        //console.log("Loading..", loader)
        // var res = Stores.store
        // console.log("object", res)
        // navigation.navigate('StoresDetails', { itemId: res })
        // console.log("Stores:", Stores);
        // if (Stores != []) {

        //     const pro = new Promise((resolve, reject) => {
        //         dispatch(Request_store_detail(id));                
        //         resolve(Stores.store)
        //     }).then((data) => {
        //         navigation.navigate('StoresDetails', { itemId: data })
        //     })
        // }



    }
    return (
        <View style={styles.Container}>
            <FlatList
                //style={styles.Container}
                showsHorizontalScrollIndicator={false}
                horizontal
                data={Top_store}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => {

                    //console.log("Top_sTORE FLATLIST::::", item)
                    //console.log("Color Set", COLORS_SETS[2][index % COLORS_SETS[2].length])
                    return (
                        <TouchableOpacity onPress={() => { More_Info(item.id) }} style={[styles.Card, { backgroundColor: COLORS_SETS[2][index % COLORS_SETS[2].length] }]}>
                            <View style={styles.img_view}>
                                <Image style={styles.Img} source={{
                                    uri: item.logo
                                }} />
                            </View>
                            <View style={styles.text}>
                                <Text style={{ fontSize: 12, fontWeight: 'bold' }}>{item.name}</Text>
                                <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#E6936B' }}>{item.cashback_string}</Text>

                            </View>
                        </TouchableOpacity>
                    )
                }}
            />

            <FlatList
                //style={styles.Container}
                showsHorizontalScrollIndicator={false}
                horizontal
                data={Top_Offers}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => {
                    //console.log("Top_sTORE FLATLIST::::", item)
                    return (

                        <TouchableOpacity onPress={() => { toggleModel(); card_Id(item.id) }} style={[styles.Card, { backgroundColor: COLORS_SETS[colorCode][index % COLORS_SETS[4].length] }]}>
                            <View style={styles.img_view}>
                                <Image style={styles.Img} source={{
                                    uri: item.store.logo
                                }} />
                            </View>
                            <View style={styles.text}>
                                <Text style={{ fontSize: 12, fontWeight: 'bold' }}>{item.store.name}</Text>
                                <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#E6936B' }}>{item.store.cashback_string}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />

            <Modal toggle={Model} toggleModel={toggleModel} Content={CardContent} top_stores={card_more_detail} />

        </View>
    )
}
// const X = (state) => {
//     return {
//         Stores: state.StoreReducer?.stores,
//         Loader: state.StoreReducer?.loading
//     }
// }

// const Y = (dispatch) => {
//     return {
//         fetch_Stores: (id) => dispatch(Request_store_detail(id))
//     }
// }
export default CardHome
const styles = StyleSheet.create({
    Container: {
        height: 140,
        width: '97 %',
        alignSelf: 'center',
        margin: 10,
        //paddingRight: 5,
        //backgroundColor: 'black'
    },
    Card: {
        height: 120,
        width: 170,
        // backgroundColor: 'pink',
        marginRight: 10,
        paddingLeft: 13,
        paddingTop: 12,
        borderRadius: 10,


    },

    Img: {
        height: 45,
        width: 130,
        borderRadius: 10
    },
    img_view: {
        height: 45,
        width: 130,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: 'white'
    },
    text: {
        //justifyContent: 'space-evenly',
        height: ContainerHeight / 2,
        marginVertical: 10
        //alignItems: 'center',
        //marginTop: 15,
        //backgroundColor: 'yellow'
    }
})