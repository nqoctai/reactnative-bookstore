import { Button, FlatList, Image, Platform, StyleSheet, Text, View } from "react-native";
import demo from "@/src/assets/demo.jpg";
import { APP_COLOR } from "@/src/utils/constant";
import React, { useEffect, useState } from "react";
import { getBooksAPI } from "@/src/utils/api";


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

    const backend = Platform.OS === 'android'
        ? process.env.EXPO_PUBLIC_ANDROID_API_URL
        : process.env.EXPO_PUBLIC_IOS_API_URL

    const baseImage = `${backend}/storage/book`;

    useEffect(() => {
        const fetchData = async () => {
            const res = await getBooksAPI(refAPI);
            if (res.data) {
                setData(res.data.result);
            }
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

            <View style={{ height: 10, backgroundColor: "#e9e9e9" }}></View>
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
                        )
                    }}
                />
            </View>
        </>
    )
}

export default CollectionHome;