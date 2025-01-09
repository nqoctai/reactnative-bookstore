import ShareButton from "@/src/components/button/share.button"
import SocialButton from "@/src/components/button/social.button"
import ShareInput from "@/src/components/input/share.input"
import { APP_COLOR } from "@/src/utils/constant"
import { Link } from "expo-router"
import { useEffect, useState } from "react"
import { StyleSheet, Text, TextInput, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import axios from 'axios'
import { registerAPI } from "@/src/utils/api"
import Toast from 'react-native-root-toast';
import { Formik } from "formik"
import { LoginSchema, RegisterSchema } from "@/src/utils/validate.schema"


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        gap: 10

    }
})
const SignUpPage = () => {

    const handleSignUp = async (username: string, email: string, password: string, phone: string) => {
        try {
            const res = await registerAPI(username, email, password, phone);

            if (res.data) {
                alert("Đăng ký thành công");
            } else {
                Toast.show(Array.isArray(res.message) ? res.message[0] : res.message, {
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
                validationSchema={RegisterSchema}
                initialValues={{ username: '', email: '', password: '', phone: '' }}
                onSubmit={values => handleSignUp(values.username, values.email, values.password, values.phone)}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors }) => (

                    <View style={styles.container}>
                        <View>
                            <Text style={{
                                fontSize: 25,
                                fontWeight: 600,
                                marginVertical: 30
                            }}>Đăng ký tài khoản</Text>
                        </View>
                        <ShareInput
                            title="Họ tên"
                            onChangeText={handleChange('username')}
                            onBlur={handleBlur('username')}
                            value={values.username}
                            errors={errors.username}

                        />
                        <ShareInput
                            title="Email"
                            keyboardType="email-address"
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
                        <ShareInput
                            title="Số điện thoại"
                            keyboardType="number-pad"
                            onChangeText={handleChange('phone')}
                            onBlur={handleBlur('phone')}
                            value={values.phone}
                            errors={errors.phone}
                        />



                        <View style={{ marginVertical: 10 }}></View>

                        <ShareButton
                            name="Đăng ký"
                            onPress={handleSubmit as any}
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
                            <Text style={{ color: "black" }}>Đã có tài khoản?</Text>
                            <Link href={"/(auth)/login"}>
                                <Text style={{ color: "black", textDecorationLine: "underline" }}>Đăng nhập</Text>
                            </Link>


                        </View>

                        <SocialButton />



                    </View>
                )}
            </Formik>
        </SafeAreaView>
    )
}

export default SignUpPage