import { Text, TouchableOpacity, View } from "react-native"

export const AwesomeButton = ({
    title,
    color = "#000",
    backgroundColor = "#f1f1f1",
    borderColor,
    bold = false,
    onPress
}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{
                padding: 15,
                backgroundColor,
                borderRadius: 10,
                borderWidth: borderColor ? 1 : 0,
                borderColor,
            }}>
                <Text style={{
                    color,
                    textAlign: "center",
                    fontWeight: bold ? "900" : "normal"
                }}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}