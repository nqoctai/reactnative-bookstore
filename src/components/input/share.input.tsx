import { APP_COLOR } from "@/src/utils/constant";
import { useState } from "react";
import { KeyboardTypeOptions, StyleSheet, Text, TextInput, View } from "react-native"
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const styles = StyleSheet.create({
    inputGroup: {
        padding: 5,
        gap: 10
    }, text: {
        fontSize: 18
    },
    input: {
        borderWidth: 1,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10

    },
    eye: {
        position: "absolute",
        right: 10,
        top: 13
    }
})

interface IProps {
    title?: string;
    keyboardType?: KeyboardTypeOptions;
    secureTextEntry?: boolean;
    value: any;
    setValue?: (v: any) => void
    onChangeText?: any;
    onBlur?: any;
    errors?: any;
}
const ShareInput = (props: IProps) => {
    const [isFocus, setIsFocus] = useState(false)
    const [isShowPassword, setIsShowPassword] = useState(false)
    const { title, keyboardType, secureTextEntry = false, value, setValue, onChangeText, onBlur, errors } = props
    return (
        <View style={styles.inputGroup}>
            {title && <Text style={styles.text}>{title}</Text>}
            <View>
                <TextInput
                    value={value}
                    onChangeText={onChangeText}
                    onFocus={() => setIsFocus(true)}
                    onBlur={(e) => { if (onBlur) onBlur(e); setIsFocus(false) }}
                    keyboardType={keyboardType}
                    style={[styles.input, { borderColor: isFocus ? APP_COLOR.ORANGE : APP_COLOR.GREY }]}
                    secureTextEntry={secureTextEntry && !isShowPassword}
                />
                {errors && <Text style={{ color: "red", marginTop: 5 }}>{errors}</Text>}
                {secureTextEntry &&
                    <FontAwesome5
                        onPress={() => setIsShowPassword(!isShowPassword)}
                        style={styles.eye}
                        name={isShowPassword ? "eye" : "eye-slash"}
                        size={15} color="black" />
                }
            </View>

        </View>
    )
}

export default ShareInput