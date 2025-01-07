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
const SignUpPage = () => {
    const [username, setUserName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [phone, setPhone] = useState<string>("")




    const handleSignUp = async () => {
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
            <View style={styles.container}>
                <View>
                    <Text style={{
                        fontSize: 25,
                        fontWeight: 600,
                        marginVertical: 30
                    }}>Đăng ký tài khoản</Text>
                </View>
                <ShareInput title="Họ tên" value={username} setValue={setUserName} />
                <ShareInput title="Email" keyboardType="email-address" value={email} setValue={setEmail} />
                <ShareInput title="Password" secureTextEntry value={password} setValue={setPassword} />
                <ShareInput title="Số điện thoại" keyboardType="number-pad" value={phone} setValue={setPhone} />



                <View style={{ marginVertical: 10 }}></View>

                <ShareButton
                    name="Đăng ký"
                    onPress={handleSignUp}
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
                    <Link href={"/(auth)/signup"}>
                        <Text style={{ color: "black", textDecorationLine: "underline" }}>Đăng nhập</Text>
                    </Link>


                </View>

                <SocialButton />



            </View>
        </SafeAreaView>
    )
}

export default SignUpPage