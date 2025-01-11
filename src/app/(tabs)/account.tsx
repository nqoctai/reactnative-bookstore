import ShareInput from "@/src/components/input/share.input";
import { userCurrentApp } from "@/src/context/app.context";
import { Image, Platform, StyleSheet, Text, View } from "react-native";


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingTop: 50
    }
})
const AccountPage = () => {
    const { appState } = userCurrentApp();


    const backend = Platform.OS === 'android'
        ? process.env.EXPO_PUBLIC_ANDROID_API_URL
        : process.env.EXPO_PUBLIC_IOS_API_URL

    const baseImage = `${backend}/storage/avatar`;
    return (
        <View style={styles.container}>
            <View style={{ alignItems: "center", gap: 5 }}>
                <Image
                    style={{ width: 150, height: 150 }}
                    source={{ uri: `${baseImage}/${appState?.account.avatar}` }} />
                <Text>{appState?.account.name}</Text>
            </View>
            <View style={{ marginTop: 20, gap: 20 }}>
                <ShareInput
                    title="Họ tên"
                    value={appState?.account.name}
                // onChangeText={handleChange('email')}
                // onBlur={handleBlur('email')}

                // errors={errors.email}
                />
                <ShareInput
                    title="Email"
                    value={appState?.account.email}
                // onChangeText={handleChange('email')}
                // onBlur={handleBlur('email')}

                // errors={errors.email}
                />
                <ShareInput
                    title="Số điện thoại"
                    value={appState?.account.phone}
                // onChangeText={handleChange('email')}
                // onBlur={handleBlur('email')}

                // errors={errors.email}
                />
            </View>

        </View>
    )
}

export default AccountPage;