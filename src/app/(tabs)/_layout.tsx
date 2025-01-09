import { Tabs } from "expo-router"

const LayoutTab = () => {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{ headerShown: false }} />
            <Tabs.Screen name="setting" options={{ headerShown: false }} />
        </Tabs>
    )
}

export default LayoutTab