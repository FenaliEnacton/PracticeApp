import React, { useState } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { HeaderLoader } from '../../Componants/Home/Loader';


const StoreHeader = ({ Top_store, Store_Id, Title, loderStatus }) => {
    const [Id, setId] = useState(null);

    const onPressHandler = (id) => {
        //console.log("id", id)
        setId(id)
    }
    return (
        <View style={styles.Container}>
            <View style={{ flex: 0.4 }}>
                <Text style={{ fontWeight: 'bold' }}>{Title}</Text>
            </View>
            <View style={{ flex: 0.6 }}>

                {loderStatus ? <HeaderLoader /> :
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={Top_store}
                        keyExtractor={(item, index) => (index.toString())}
                        renderItem={({ item }) => {
                            // console.log("Id", item.id)
                            return (
                                <TouchableOpacity onPress={() => { Store_Id(item.id); onPressHandler(item.id) }}>
                                    <Text style={{ paddingHorizontal: 15, color: 'grey' }}>{item.name}</Text>

                                    {item.id == Id ? <View style={styles.Line}></View> : null}
                                    {/* <Text>{index.toString()}</Text> */}
                                </TouchableOpacity>
                            )
                        }}
                    />
                }
            </View>
        </View>
    )
}
export default StoreHeader
const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 5,
        flex: 1,
        //backgroundColor: 'pink',
        width: '97 %'
    },
    Line: {
        height: 2,
        width: 20,
        alignSelf: "center",
        backgroundColor: 'black',
        marginTop: 2
    }
})