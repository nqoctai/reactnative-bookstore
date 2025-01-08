import ShareButton from "@/src/components/button/share.button"
import SocialButton from "@/src/components/button/social.button"
import ShareInput from "@/src/components/input/share.input"
import { loginAPI } from "@/src/utils/api"
import { APP_COLOR } from "@/src/utils/constant"
import { Link, router } from "expo-router"
import { useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import Toast from "react-native-root-toast"



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

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)
    const handleLogin = async () => {
        try {
            setLoading(true)
            const res = await loginAPI(email, password);
            setLoading(false)
            if (res.data) {
                router.replace("/(tabs)");
                alert("Đăng nhập thành công");
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
        <View style={styles.container}>
            <View>
                <Text style={{
                    fontSize: 25,
                    fontWeight: 600,
                    marginVertical: 30
                }}>Đăng nhập</Text>
            </View>
            <ShareInput title="Email" value={email} setValue={setEmail} />
            <ShareInput title="Password" secureTextEntry value={password} setValue={setPassword} />
            <View style={{ marginVertical: 10 }}></View>

            <ShareButton
                loading={loading}
                name="Đăng nhập"
                onPress={handleLogin}
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
    )
}

export default LoginPage