import { useCustomFlatListHook } from '@/src/components/CustomFlatList/hooks/useRestaurantListHook';
import React from 'react';
import { Animated, FlatListProps, View } from 'react-native';

type CustomFlatListProps<T> = Omit<FlatListProps<T>, 'ListHeaderComponent'> & {
    HeaderComponent: JSX.Element;
    StickyElementComponent: JSX.Element;
    TopListElementComponent: JSX.Element;
};

function CustomFlatList<T>({
    style,
    ...props
}: CustomFlatListProps<T>): React.ReactElement {
    const [
        scrollY,
        styles,
        onLayoutHeaderElement,
        onLayoutTopListElement,
        onLayoutStickyElement,
    ] = useCustomFlatListHook();

    return (
        <View style={style}>
            <Animated.View // <-- Top of List Component
                style={[styles.topElement, { zIndex: 1 }]}
                onLayout={onLayoutTopListElement}>
                {props.TopListElementComponent}
            </Animated.View>

            <Animated.View // <-- Sticky Component
                style={[styles.stickyElement, { zIndex: 2 }]}
                onLayout={onLayoutStickyElement}>
                {props.StickyElementComponent}
            </Animated.View>

            <Animated.FlatList<any>
                {...props}
                ListHeaderComponent={
                    <Animated.View onLayout={onLayoutHeaderElement}>
                        {props.HeaderComponent}
                    </Animated.View>
                }
                ListHeaderComponentStyle={[
                    props.ListHeaderComponentStyle,
                    styles.header,
                ]}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    {
                        useNativeDriver: true,
                    }
                )}
            />
        </View>
    );
}

export default CustomFlatList;