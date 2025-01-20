import { Text, TouchableOpacity, View } from "react-native";

export const AwesomeButton = ({
  title,
  color = "#000",
  backgroundColor = "#f1f1f1",
  borderColor,
  bold = false,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          padding: 15,
          backgroundColor,
          borderRadius: 10,
          borderWidth: borderColor ? 1 : 0,
          borderColor,
        }}
      >
        {typeof title === "object" ? (
          <View style={{ minWidth: 75}}>
            <Text
              style={{
                color,
                textAlign: "center",
              }}
            >
              {title.icon}
            </Text>
            <Text
              style={{
                color,
                textAlign: "center",
                fontWeight: "900",
                fontSize: 15
              }}
            >
              {title.name}
            </Text>
            <Text
              style={{
                color,
                textAlign: "center",
                fontWeight: "normal",
              }}
            >
              {title.price}
            </Text>
          </View>
        ) : (
          <Text
            style={{
              color,
              textAlign: "center",
              fontWeight: bold ? "900" : "normal",
            }}
          >
            {title || "Default Title"}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};
