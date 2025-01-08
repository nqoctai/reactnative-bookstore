import { Stack, Tabs } from "expo-router"
import { Text, View } from "react-native";
import { RootSiblingParent } from 'react-native-root-siblings';

const RootLayout = () => {
    return (
        <RootSiblingParent>
            <Stack>
                <Stack.Screen name="index" options={{ headerShown: false }} />
                <Stack.Screen name="(auth)/signup" options={{ headerShown: false }} />
                <Stack.Screen name="(auth)/login" options={{ headerShown: false }} />


            </Stack>
        </RootSiblingParent>
    )
}

export default RootLayout