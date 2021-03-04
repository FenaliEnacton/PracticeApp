import React from 'react'
import { View, Dimensions } from "react-native"
import Carousel from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCardItem'
import data from './data'

const width = Dimensions.get("window").width - 25;
const widthPer = width + ((width * 6) / 100);

const CarouselCards = () => {
    const isCarousel = React.useRef(null)

    return (
        <View style={{ width: 100 }}>
            <Carousel
                autoplay={true}
                enableMomentum={false}
                lockScrollWhileSnapping={true}
                //autoplayDelay={2000}
                //autoplayInterval={2000}
                // layout="default"
                //ref={isCarousel}
                data={data}
                renderItem={CarouselCardItem}
                sliderWidth={width}
                itemWidth={widthPer + 20}
                style={{ borderRadius: 10 }}
                loop={true}
            // style={{ borderRadius: 5 }}
            //useScrollView={true}
            />
        </View>
    )
}


export default CarouselCards