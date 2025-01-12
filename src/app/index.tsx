
import { APP_COLOR } from "@/src/utils/constant"
import { Button, Image, ImageBackground, StyleSheet, Text, View } from "react-native"

import { Link, Redirect, router } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from "react";
import React from "react";
import { getAccountAPI } from "@/src/utils/api";
import { userCurrentApp } from "@/src/context/app.context";
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();



const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10

    },
    welcomeText: {
        flex: 0.6,
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: 20
    },
    welcomeBtn: {
        flex: 0.4,
        gap: 30
    },
    heading: {
        fontSize: 40,
        fontWeight: "600"
    },
    body: {
        fontSize: 30,
        color: APP_COLOR.ORANGE,
        marginVertical: 10
    },
    footer: {

    }
})
const RootPage = () => {
    const { setAppState } = userCurrentApp();


    useEffect(() => {
        async function prepare() {
            try {
                const res = await getAccountAPI();
                if (res.data) {
                    const token = await AsyncStorage.getItem("access_token") ?? "";
                    setAppState({
                        account: res.data.account,
                        access_token: token
                    })
                    router.replace("/(tabs)")
                } else {
                    // xóa header
                    router.replace("/(auth)/welcome")
                }
            } catch (e) {
                console.warn(e);
            } finally {
                // Tell the application to render
                await SplashScreen.hideAsync();
            }
        }

        prepare();
    }, []);
    // if (true) {
    //     return <Redirect href="/(tabs)" />
    // }
    return (

        <>

        </>

    )
}

export default RootPage