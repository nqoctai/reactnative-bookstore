import { Button, Dimensions, FlatList, Image, Platform, Pressable, StyleSheet, Text, View } from "react-native";
import demo from "@/src/assets/demo.jpg";
import { APP_COLOR } from "@/src/utils/constant";
import React, { useEffect, useState } from "react";
import { getBooksAPI } from "@/src/utils/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native"
const { height: sHeight, width: sWidth } = Dimensions.get('window');



const styles = StyleSheet.create({
    container: {
        padding: 10,

    },
    sale: {
        marginTop: 10,
        borderWidth: 1,
        borderColor: APP_COLOR.ORANGE,
        padding: 3,
        borderRadius: 3,
        alignSelf: "flex-start"
    }
});

interface IProps {
    name: string;
    description: string;
    refAPI: string;
}
const CollectionHome = (props: IProps) => {
    const { name, description, refAPI } = props;

    const [data, setData] = useState<IBooks[]>();
    const [loading, setLoading] = useState<boolean>(true);

    const backend = Platform.OS === 'android'
        ? process.env.EXPO_PUBLIC_ANDROID_API_URL
        : process.env.EXPO_PUBLIC_IOS_API_URL

    const baseImage = `${backend}/storage/book`;

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const res = await getBooksAPI(refAPI);
            if (res.data) {
                setData(res.data.result);
            }
            setLoading(false);
        }
        fetchData();
    }, [refAPI])

    // const fetchDataTest = async (refAPI: string) => {

    //     const res = await getBooksAPI(refAPI);
    //     if (res.data) {
    //         console.log(res.data);
    //     }
    // }

    // const data = [
    //     { key: 1, image: demo, name: "Cua hang 1" },
    //     { key: 2, image: demo, name: "Cua hang 2" },
    //     { key: 3, image: demo, name: "Cua hang 3" },
    //     { key: 4, image: demo, name: "Cua hang 4" },
    //     { key: 5, image: demo, name: "Cua hang 5" },

    // ]



    return (
        <>
            {/* <Button title="Print" onPress={() => AsyncStorage.removeItem("access_token")} /> */}

            <View style={{ height: 10, backgroundColor: "#e9e9e9" }}></View>
            {
                loading === false ?
                    <View style={styles.container}>
                        <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
                            <Text style={{
                                color: APP_COLOR.ORANGE,
                                fontSize: 16,
                                fontWeight: "600"
                            }}>{name}</Text>
                            <Text style={{ color: "#5a5a5a" }}>Xem tất cả</Text>
                        </View>
                        <View style={{ marginVertical: 5 }}>
                            <Text style={{ color: "#5a5a5a" }}>{description}</Text>
                        </View>
                        <FlatList
                            horizontal
                            data={data}
                            contentContainerStyle={{ gap: 5 }}
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item }) => {
                                return (
                                    <Pressable onPress={() => router.navigate({
                                        pathname: "/product/[id]",
                                        params: { id: item.id }
                                    })}>
                                        <View style={{ backgroundColor: "#efefef" }}>
                                            <Image style={{ height: 130, width: 130 }} source={{ uri: `${baseImage}/${item.thumbnail}` }} />
                                            <View style={{ padding: 5 }}>
                                                <Text
                                                    numberOfLines={1}
                                                    ellipsizeMode="tail"
                                                    style={{ fontWeight: "600", maxWidth: 130 }}>{item.mainText}</Text>
                                                <View>
                                                    <View style={styles.sale}>
                                                        <Text style={{ color: APP_COLOR.ORANGE }}>Flash Sale</Text>
                                                    </View>
                                                </View>
                                            </View>

                                        </View>
                                    </Pressable>
                                )
                            }}
                        />
                    </View>
                    :
                    <ContentLoader
                        speed={2}
                        width={sWidth}
                        height={230}
                        // viewBox="0 0 700 150"
                        backgroundColor="#f3f3f3"
                        foregroundColor="#ecebeb"
                        style={{ width: '100%' }}
                    >
                        <Rect x="10" y="10" rx="5" ry="5" width={150} height="200" />
                        <Rect x="170" y="10" rx="5" ry="5" width={150} height="200" />
                        <Rect x="330" y="10" rx="5" ry="5" width={150} height="200" />
                    </ContentLoader>

            }


        </>
    )
}

export default CollectionHome;