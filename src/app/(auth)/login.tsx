import ShareButton from "@/src/components/button/share.button"
import SocialButton from "@/src/components/button/social.button"
import ShareInput from "@/src/components/input/share.input"
import { loginAPI } from "@/src/utils/api"
import { APP_COLOR } from "@/src/utils/constant"
import { Link, router } from "expo-router"
import { useState } from "react"
import { Button, StyleSheet, Text, TextInput, View } from "react-native"
import Toast from "react-native-root-toast"
import { Formik } from 'formik';
import { LoginSchema } from "@/src/utils/validate.schema"
import { SafeAreaView } from "react-native-safe-area-context"
import { userCurrentApp } from "@/src/context/app.context"
import AsyncStorage from "@react-native-async-storage/async-storage"



const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        gap: 10

    },
    inputGroup: {
        padding: 5,
        gap: 10
    }, text: {
        fontSize: 18
    },
    input: {
        borderColor: "#d0d0d0",
        borderWidth: 1,
        paddingHorizontal: 5,
        paddingVertical: 7,
        borderRadius: 5

    }
})
const LoginPage = () => {

    const [loading, setLoading] = useState<boolean>(false)
    const { setAppState } = userCurrentApp();

    const handleLogin = async (email: string, password: string) => {
        try {
            setLoading(true)
            await AsyncStorage.removeItem("access_token");
            const res = await loginAPI(email, password);
            setLoading(false)
            if (res.data) {

                await AsyncStorage.setItem("access_token", res?.data?.access_token);
                setAppState(res.data);
                router.replace("/(tabs)");

            } else {
                Toast.show("Đăng nhập thất bại", {
                    duration: Toast.durations.LONG,
                    textColor: "white",
                    backgroundColor: APP_COLOR.ORANGE,
                    opacity: 1
                })
            }
        } catch (error) {

        }
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Formik
                validationSchema={LoginSchema}
                initialValues={{ email: '', password: '' }}
                onSubmit={values => handleLogin(values.email, values.password)}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors }) => (

                    <View style={styles.container}>
                        <View>
                            <Text style={{
                                fontSize: 25,
                                fontWeight: 600,
                                marginVertical: 30
                            }}>Đăng nhập</Text>
                        </View>
                        <ShareInput
                            title="Email"
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            errors={errors.email}
                        />
                        <ShareInput
                            title="Password"
                            secureTextEntry
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            errors={errors.password}
                        />
                        <View style={{ marginVertical: 10 }}></View>

                        <ShareButton
                            loading={loading}
                            name="Đăng nhập"
                            onPress={handleSubmit}
                            textStyles={{ textTransform: "uppercase", color: "#fff", paddingVertical: 5 }}
                            pressStyles={{ alignSelf: "stretch" }}
                            btnStyles={{
                                backgroundColor: APP_COLOR.ORANGE,
                                justifyContent: "center",
                                marginHorizontal: 50,
                                paddingVertical: 10,
                                borderRadius: 30,

                            }}
                        />

                        <View style={{
                            flexDirection: "row",
                            gap: 10,
                            justifyContent: "center",
                            marginVertical: 15
                        }}>
                            <Text style={{ color: "black" }}>Chưa có có tài khoản?</Text>
                            <Link href={"/(auth)/signup"}>
                                <Text style={{ color: "black", textDecorationLine: "underline" }}>Đăng ký</Text>
                            </Link>


                        </View>
                        <SocialButton />
                    </View>
                )}
            </Formik>
        </SafeAreaView>
    )
}

export default LoginPage