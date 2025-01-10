import { APP_COLOR } from "@/src/utils/constant"
import { Tabs } from "expo-router"
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"
import MaterialIcons from "@expo/vector-icons/MaterialIcons"
import AntDesign from "@expo/vector-icons/AntDesign"
import Octicons from "@expo/vector-icons/Octicons"
import { View } from "react-native"

const LayoutTab = () => {

    const getIcons = (routeName: string, focused: boolean, size: number) => {
        if (routeName === "index") {
            return (
                <MaterialCommunityIcons
                    name="food-fork-drink"
                    size={size}
                    color={focused ? APP_COLOR.ORANGE : APP_COLOR.GREY}
                />
            )
        }
        if (routeName === "order") {
            return (
                <MaterialIcons
                    name="list-alt"
                    size={size}
                    color={focused ? APP_COLOR.ORANGE : APP_COLOR.GREY}
                />
            )
        }
        if (routeName === "favorite") {
            return (focused ?
                <AntDesign
                    name="heart"
                    size={size}
                    color={APP_COLOR.ORANGE}
                />
                :
                <AntDesign
                    name="hearto"
                    size={size}
                    color={APP_COLOR.GREY}
                />
            )
        }
        if (routeName === "notification") {
            return (focused ?
                <Octicons
                    name="bell-fill"
                    size={size}
                    color={APP_COLOR.ORANGE}
                />
                :
                <Octicons
                    name="bell"
                    size={size}
                    color={APP_COLOR.GREY}
                />
            )
        }
        if (routeName === "account") {
            return (focused ?
                <MaterialCommunityIcons
                    name="account"
                    size={size}
                    color={APP_COLOR.ORANGE}
                />
                :
                <MaterialCommunityIcons
                    name="account-outline"
                    size={size}
                    color={APP_COLOR.GREY}
                />
            )
        }
        return (
            <View>
            </View>
        )
    }

    return (
        <Tabs screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                return getIcons(route.name, focused, size)
            },
            headerShown: false,
            tabBarActiveTintColor: APP_COLOR.ORANGE,
            tabBarLabelStyle: { paddingBottom: 3 }
        })}>
            <Tabs.Screen name="index" options={{ title: "Home" }} />
            <Tabs.Screen name="order" options={{ title: "Đơn hàng" }} />
            <Tabs.Screen name="favorite" options={{ title: "Yêu thích" }} />
            <Tabs.Screen name="notification" options={{ title: "Thông báo" }} />
            <Tabs.Screen name="account" options={{ title: "Tôi" }} />
        </Tabs>
    )
}

export default LayoutTab