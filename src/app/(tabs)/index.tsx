
import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import CustomFlatList from "@/src/components/CustomFlatList/CustomFlatList";
import TopListHome from "@/src/components/home/top.list.home";
import HeaderHome from "@/src/components/home/header.home";
import SearchHome from "@/src/components/home/search.home";


const data = Array(10).fill(1);
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ecf0f1",
        flex: 1,
        justifyContent: "center",
        overflow: "hidden",
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
        borderWidth: 5,
        height: 100,
        marginBottom: 6,
        width: "100%"
    },
    list: {
        overflow: "hidden"
    }
});
const HomeTab = () => {
    return (
        // <SafeAreaView style={styles.container}>
        <CustomFlatList
            data={data}
            style={styles.list}
            renderItem={() => <View style={styles.item} />}
            HeaderComponent={<HeaderHome />}
            StickyElementComponent={<SearchHome />}
            TopListElementComponent={<TopListHome />}
        />
        // </SafeAreaView>
    )
}





export default HomeTab