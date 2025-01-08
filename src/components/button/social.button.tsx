import ShareButton from "@/src/components/button/share.button"
import TextBetweenLine from "@/src/components/text.between.line"
import { Image, StyleSheet, Text, View } from "react-native"
import fbLogo from '@/src/assets/auth/facebook.png';
import ggLogo from '@/src/assets/auth/google.png';

const styles = StyleSheet.create({
    welcomeBtn: {
        flex: 1,
        gap: 30
    }
})
const SocialButton = () => {
    return (
        <View style={styles.welcomeBtn}>
            <TextBetweenLine title="Đăng nhập với" textColor="black" />
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
        </View>
    )
}

export default SocialButton