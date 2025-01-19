import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { INGREDIENTS, useBurger } from "../hooks/useBurger";
import { AwesomeButton } from "./AwesomeButton";

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const BottomUi = () => {
  const addIngredient = useBurger((state) => state.addIngredient);
  const addedToCart = useBurger((state) => state.addedToCart);
  const setAddedToCart = useBurger((state) => state.setAddedToCart);
  const total = useBurger((state) => state.total);
  return (
    <SafeAreaView edges={["bottom"]}>
      <View
        style={{
          padding: 20,
        }}
      >
        {addedToCart ? (
          <View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "900",
              }}
            >
              Total - ${total.toFixed(2)}
            </Text>
            <Text
              style={{
                color: "#666",
                marginTop: 4,
                marginBottom: 16,
              }}
            >
              Order sent successfully, it will be ready in 5 minutes! I will
              directly deliver it to your home 🛵
            </Text>
            <AwesomeButton
              title="Cancel Order"
              color="#AA010E"
              borderColor="#AA010E50"
              backgroundColor="#FFE5EA"
              bold
              onPress={() => setAddedToCart(false)}
            />
          </View>
        ) : (
          <>
            <View
              style={{
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  flexShrink: 1,
                  fontSize: 22,
                  fontWeight: "900",
                }}
              >
                Burger
              </Text>
              <Text>⭐️⭐️⭐️⭐️⭐️</Text>
            </View>

            <Text
              style={{
                color: "#666",
              }}
            >
              Fresh and delicious burgers made with love
            </Text>
            <View
              style={{
                height: 1,
                backgroundColor: "#ececec",
                marginVertical: 20,
              }}
            ></View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "900",
                textAlign: "center",
              }}
            >
              Your Creation (S$5.00)
            </Text>
            <Text
              style={{
                textAlign: "center",
                color: "#666",
              }}
            >
              Compose your burger by adding ingredients
            </Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{
                marginTop: 8,
                marginBottom: 8,
                marginInline: -20,
              }}
            >
              {Object.keys(INGREDIENTS).map((ingredient) => (
                <View key={ingredient} style={{ padding: 10 }}>
                  <AwesomeButton
                    title={
                      INGREDIENTS[ingredient].icon +
                      ` ${capitalizeFirstLetter(ingredient)} (+S$${INGREDIENTS[
                        ingredient
                      ].price.toFixed(2)})`
                    }
                    onPress={() => addIngredient(ingredient)}
                  />
                </View>
              ))}
            </ScrollView>
            <AwesomeButton
              title={`+ ADD TO CART (S$${total.toFixed(2)})`}
              color="#008027"
              backgroundColor="#E7FFEB"
              borderColor="#00802750"
              bold
              onPress={() => setAddedToCart(true)}
            />
          </>
        )}
      </View>
    </SafeAreaView>
  );
};
