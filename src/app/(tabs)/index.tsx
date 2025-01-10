
import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import CustomFlatList from "@/src/components/CustomFlatList/CustomFlatList";
import TopListHome from "@/src/components/home/top.list.home";
import HeaderHome from "@/src/components/home/header.home";
import SearchHome from "@/src/components/home/search.home";
import CollectionHome from "@/src/components/home/collection.home";


const data = [
    { key: 1, name: "Top Quán Rating 5* tuần này", ref: "" },
    { key: 2, name: "Quán Mới Lên Sàn", ref: "" },
    { key: 3, name: "Ăn Thỏa Thích, Freeship 0Đ", ref: "" },
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
            renderItem={({ item }) => <CollectionHome name={item.name} />}
            HeaderComponent={<HeaderHome />}
            StickyElementComponent={<SearchHome />}
            TopListElementComponent={<TopListHome />}
        />
    )
}





export default HomeTab