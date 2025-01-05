import { Stack } from "expo-router"


const LayoutHome = () => {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="(auth)/signup" options={{ headerShown: false }} />

        </Stack>
    )
}

export default LayoutHome