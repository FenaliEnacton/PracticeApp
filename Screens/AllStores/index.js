import React, { useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import { Request_store_detail } from '../../redux/Actions/StoreAction'

const AllStores = (props) => {

    return (
        <View>
            <Text>All Stores</Text>
            <Button title='click' onPress={() => props.request_store()}></Button>
        </View>
    )
}
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
export default connect(X, Y)(AllStores);
