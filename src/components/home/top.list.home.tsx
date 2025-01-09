import BannerHome from "@/src/components/home/banner.home"
import { FlatList, Image, ScrollView, StyleSheet, Text, View } from "react-native"


const data1 = [
    { key: 1, name: "Hot Deal", source: require("@/src/assets/icons/flash-deals.png") },
    { key: 2, name: "Quán Ngon", source: require("@/src/assets/icons/nice-shop.png") },
    { key: 3, name: "Tích Điểm", source: require("@/src/assets/icons/points.png") },
    { key: 4, name: "Ngọt Xỉu", source: require("@/src/assets/icons/rice.png") },
    { key: 5, name: "Quán Tiền Bối", source: require("@/src/assets/icons/noodles.png") },
    { key: 6, name: "Bún, Mì, Phở", source: require("@/src/assets/icons/bun-pho.png") },
    { key: 7, name: "BBQ", source: require("@/src/assets/icons/bbq.png") },
    { key: 8, name: "Fast Food", source: require("@/src/assets/icons/fastfood.png") },
    { key: 9, name: "Pizza", source: require("@/src/assets/icons/Pizza.png") },
    { key: 10, name: "Burger", source: require("@/src/assets/icons/burger.png") },
    { key: 11, name: "Sống Khỏe", source: require("@/src/assets/icons/egg-cucmber.png") },
    { key: 12, name: "Giảm 50k", source: require("@/src/assets/icons/moi-moi.png") },
    { key: 13, name: "99k Off", source: require("@/src/assets/icons/fried-chicken.png") },
    { key: 14, name: "No Bụng", source: require("@/src/assets/icons/korean-food.png") },
    { key: 15, name: "Freeship", source: require("@/src/assets/icons/Steak.png") },
    { key: 16, name: "Deal 0Đ", source: require("@/src/assets/icons/tomato.png") },
    { key: 17, name: "Món 1Đ", source: require("@/src/assets/icons/elipse.png") },
    { key: 18, name: "Ăn chiều", source: require("@/src/assets/icons/chowmein.png") },
    { key: 19, name: "Combo 199k", source: require("@/src/assets/icons/Notif.png") },
    { key: 20, name: "Milk Tea", source: require("@/src/assets/icons/salad.png") },
]


const styles = StyleSheet.create({

})


const TopListHome = () => {
    return (
        <View >
            <BannerHome />
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                directionalLockEnabled={true}
                alwaysBounceVertical={false}
                style={{ marginVertical: 15 }}
            >
                <FlatList
                    contentContainerStyle={{ alignSelf: 'flex-start' }}
                    numColumns={Math.ceil(data1.length / 2)}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    data={data1}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={{
                                padding: 5,
                                width: 100,
                                alignItems: 'center',
                            }}>
                                <Image style={{
                                    height: 35,
                                    width: 35,
                                }} source={item.source}></Image>
                                <Text style={{ textAlign: "center" }}>{item.name}</Text>
                            </View>
                        )
                    }}
                />
            </ScrollView >
        </View >
    )

}

export default TopListHome