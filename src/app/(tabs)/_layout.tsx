import { Tabs } from "expo-router"

const LayoutTab = () => {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{ title: "Trang chủ" }} />
            <Tabs.Screen name="setting" options={{ title: "Setting" }} />
        </Tabs>
    )
}

export default LayoutTab