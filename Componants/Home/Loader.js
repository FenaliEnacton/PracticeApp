import React from 'react'
import { FlatList, View, Dimensions, StyleSheet } from 'react-native';
import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native"
const winHeight = Dimensions.get('screen').height
const winWidth = Dimensions.get('screen').width
const ContainerHeight = (winHeight * 15) / 100
const BoxWidth = (winWidth * 45) / 100

function Loader() {
    const load = [1, 2, 3, 4];

    return (
        <FlatList
            data={load}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => {
                return (
                    <View style={styles.Card}>
                        <ContentLoader
                            speed={2}
                            width={177}
                            height={121}
                            viewBox="0 0 177 121"
                            backgroundColor="#f3f3f3"
                            foregroundColor="#ecebeb"
                        >

                            <Rect x="0" y="82" rx="3" ry="3" width="117" height="8" />
                            <Rect x="0" y="64" rx="3" ry="3" width="52" height="8" />
                            <Rect x="1" y="14" rx="4" ry="4" width="94" height="37" />
                            <Circle cx="280" cy="69" r="21" />
                        </ContentLoader>
                    </View>
                )
            }}
        />

    )
}

export function HeaderLoader() {
    const load = [1, 2, 3, 4];

    return (
        <FlatList
            data={load}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => {
                return (
                    <View style={styles.Load}>
                        <ContentLoader
                            speed={2}
                            width={177}
                            height={121}
                            viewBox="0 0 177 121"
                            backgroundColor="white"
                            foregroundColor="#ecebeb"
                        >
                            <Rect x="3" y="3" rx="4" ry="4" width="90" height="10" />
                            {/* <Circle cx="280" cy="69" r="21" /> */}
                        </ContentLoader>
                    </View>
                )
            }}
        />

    )
}


export default Loader
const styles = StyleSheet.create({
    Card: {
        height: ContainerHeight,
        width: BoxWidth,
        backgroundColor: 'white',
        marginRight: 10,
        borderRadius: 10,
        paddingLeft: 10,
        paddingBottom: 10
    },
    Load: {
        //backgroundColor: 'white',
        borderRadius: 10,
        flexDirection: 'row',
        // alignSelf: 'center',
        marginTop: 5,
        height: 15,
        //backgroundColor: 'pink',
        width: 100,
        marginHorizontal: 15,
        //marginRight: 10,
        marginBottom: 5,
        //justifyContent: 'center'
    }
})

