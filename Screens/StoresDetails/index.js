import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { Request_store_detail } from '../../redux/Actions/StoreAction'


class StoresDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            props: props,
            store: {},
            loading: true
        };
    }

    componentDidMount() {
        this.state.props.request_store();
    }

    componentDidUpdate(prevProps, preState) {
        // console.log("PrevProps:", preState);
        // console.log("CurrentProps:", this.state);
        if (preState.store == this.state.store) {
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
                <Text>STores More Details</Text>
                <Text>{this.props.route.params?.itemId}</Text>
                <Button title='stores' onPress={() => stores_by_id()} />
                <Button title='click' onPress={() => this.props.request_store()}></Button>
                <Text>{this.state.store?.name}</Text>
            </View>
        )
    }
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
export default connect(X, Y)(StoresDetails);