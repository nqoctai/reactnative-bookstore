import AppProvider from "@/src/context/app.context";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack, Tabs } from "expo-router"
import { StyleSheet, Text, View } from "react-native";
import { RootSiblingParent } from 'react-native-root-siblings';
import { SafeAreaView } from "react-native-safe-area-context";

const RootLayout = () => {
    const navTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: 'transparent', // Change this to your desired background color
        },
    };

    return (
        <RootSiblingParent>
            <AppProvider>
                {/* <SafeAreaView style={styles.safeArea}> */}
                <ThemeProvider value={navTheme}>
                    <Stack>
                        <Stack.Screen name="index" options={{ headerShown: false }} />
                        <Stack.Screen name="(auth)/signup" options={{ headerShown: false }} />
                        <Stack.Screen name="(auth)/login" options={{ headerShown: false }} />
                        <Stack.Screen name="(auth)/welcome" options={{ headerShown: false }} />

                        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                    </Stack>
                </ThemeProvider>
                {/* </SafeAreaView> */}
            </AppProvider>
        </RootSiblingParent>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'transparent', // Change this to your desired background color
    },
});

export default RootLayout