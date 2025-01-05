import ShareButton from "@/src/components/button/share.button"
import SocialButton from "@/src/components/button/social.button"
import ShareInput from "@/src/components/input/share.input"
import { APP_COLOR } from "@/src/utils/constant"
import { Link } from "expo-router"
import { StyleSheet, Text, TextInput, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"


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
                <ShareInput title="Họ tên" />
                <ShareInput title="Email" keyboardType="email-address" />
                <ShareInput title="Password" />

                <View style={{ marginVertical: 10 }}></View>

                <ShareButton
                    name="Đăng ký"
                    onPress={() => { alert("me") }}
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