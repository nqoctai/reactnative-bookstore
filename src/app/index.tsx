import ShareButton from "@/src/components/button/share.button"
import { APP_COLOR } from "@/src/utils/constant"
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native"
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import bg from '@/src/assets/auth/welcome-bookstore.png';
import fbLogo from '@/src/assets/auth/facebook.png';
import ggLogo from '@/src/assets/auth/google.png';
import { LinearGradient } from 'expo-linear-gradient';
import TextBetweenLine from "@/src/components/text.between.line";
import { Link, Redirect } from "expo-router";

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
const WelcomePage = () => {
    if (true) {
        return (
            <Redirect href={"/(auth)/signup"} />
        )

    }
    return (
        <ImageBackground style={{ flex: 1 }} source={bg}>
            <LinearGradient
                style={{ flex: 1 }}
                colors={['transparent', '#191B2F']}
                locations={[0.2, 0.8]}
            >
                <View style={styles.container}>
                    <View style={styles.welcomeText}>
                        <Text style={styles.heading}>
                            Welcome to
                        </Text>
                        <Text style={styles.body}>
                            @Nqoc.taii - BookStore
                        </Text>
                        <Text style={styles.footer}>
                            Nền tảng bán sách trực tuyến lớn nhất Việt Nam
                        </Text>
                    </View>

                    <View style={styles.welcomeBtn}>
                        <TextBetweenLine title="Đăng nhập với" />
                        <View style={{
                            flexDirection: "row",
                            justifyContent: "center",
                            gap: 30
                        }}>
                            <ShareButton
                                name="faceBook"
                                onPress={() => { alert("me") }}
                                textStyles={{ textTransform: "uppercase" }}
                                pressStyles={{ alignSelf: "stretch" }}
                                btnStyles={{
                                    justifyContent: "center",
                                    borderRadius: 30,
                                    paddingHorizontal: 20,
                                    backgroundColor: "#fff"
                                }}
                                icons={
                                    <Image source={fbLogo} />
                                }
                            />

                            <ShareButton
                                name="google"
                                onPress={() => { alert("me") }}
                                textStyles={{ textTransform: "uppercase" }}
                                pressStyles={{ alignSelf: "stretch" }}
                                btnStyles={{
                                    backgroundColor: "#fff",
                                    justifyContent: "center",
                                    paddingHorizontal: 30,
                                    borderRadius: 30
                                }}
                                icons={<Image source={ggLogo} />}
                            />
                        </View>
                        <View>
                            <ShareButton
                                name="Đăng nhập với email"
                                onPress={() => { alert("me") }}
                                textStyles={{ color: "#fff", paddingVertical: 5 }}
                                pressStyles={{ alignSelf: "stretch" }}
                                btnStyles={{
                                    backgroundColor: "#2c2c2c",
                                    justifyContent: "center",
                                    marginHorizontal: 50,
                                    paddingVertical: 10,
                                    borderRadius: 30,
                                    borderColor: "#505050",
                                    borderWidth: 1
                                }}
                            />
                        </View>
                        <View style={{
                            flexDirection: "row",
                            gap: 10,
                            justifyContent: "center"
                        }}>
                            <Text style={{ color: "white" }}>Chưa có tài khoản?</Text>
                            <Link href={"/(auth)/signup"}>
                                <Text style={{ color: "white", textDecorationLine: "underline" }}>Đăng ký</Text>
                            </Link>


                        </View>

                    </View>

                </View>
            </LinearGradient>
        </ImageBackground>
    )
}

export default WelcomePage