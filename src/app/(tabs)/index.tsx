
import { Button, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import CustomFlatList from "@/src/components/CustomFlatList/CustomFlatList";
import TopListHome from "@/src/components/home/top.list.home";
import HeaderHome from "@/src/components/home/header.home";
import SearchHome from "@/src/components/home/search.home";
import CollectionHome from "@/src/components/home/collection.home";
import React, { useState } from "react";
import { userCurrentApp } from "@/src/context/app.context";


const data = [
    {
        key: 1,
        name: "Top sách bán chạy nhất",
        description: "Gợi ý sách được độc giả mua nhiều nhất",
        refAPI: "&sort=sold,desc"
    },
    {
        key: 2,
        name: "Sách Mới Lên Sàn",
        description: "Khám phá ngay hàng loạt sách mới cực hay",
        refAPI: "&sort=updatedAt,desc"
    },
    {
        key: 3,
        name: "Sách giá rẻ",
        description: "Hạt rẻ cho học sinh, sinh viên",
        refAPI: "&sort=price"
    },
]

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        overflow: "hidden",
        padding: 8
    },
    header: {
        borderColor: "red",
        borderWidth: 5,
        height: 100,
        marginBottom: 6,
        width: "100%"
    },
    item: {
        borderColor: "green",
        borderWidth: 1,
        height: 250,
        marginBottom: 10,
        width: "100%"
    },
    list: {
        overflow: "hidden"
    },
    sticky: {
        backgroundColor: "#2555FF50",
        borderColor: "blue",
        borderWidth: 5,
        height: 100,
        marginBottom: 6,
        width: "100%"
    },
    topList: {
        borderColor: "orange",
        borderWidth: 5,
        height: 100,
        marginBottom: 6,
        width: "100%"
    }
});
const HomeTab = () => {

    return (
        <CustomFlatList
            data={data}
            style={styles.list}
            renderItem={({ item }) => <CollectionHome refAPI={item.refAPI} name={item.name} description={item.description} />}
            HeaderComponent={<HeaderHome />}
            StickyElementComponent={<SearchHome />}
            TopListElementComponent={<TopListHome />}
        />

    )
}





export default HomeTab