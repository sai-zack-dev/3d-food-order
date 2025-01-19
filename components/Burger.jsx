import { useRef } from "react";
import { useBurger } from "../hooks/useBurger";
import { Ingredient } from "./Ingredient";
import { useFrame } from "@react-three/fiber";
import { ContactShadows } from "@react-three/drei/native";
const INGREDIENT_SPACING = 0.2;
const INGREDIENT_SPACING_FINAL = 0.06;

export const Burger = () => {
  const ingredients = useBurger((state) => state.ingredients);
  const addedToCart = useBurger((state) => state.addedToCart);
  const ingredientSpacing = addedToCart
    ? INGREDIENT_SPACING_FINAL
    : INGREDIENT_SPACING;
  const burger = useRef();
  useFrame(() => {
    if (addedToCart) {
      burger.current.rotation.y += 0.01;
    } else {
      burger.current.rotation.y = 0;
    }
  });

  return (
    <group position-y={(-ingredients.length * ingredientSpacing) / 2}>
      <group
        ref={burger}
      >
        {ingredients.map((ingredient, index) => (
          <Ingredient
            key={ingredient.id + ingredient.name}
            showPrice={index > 0 && index < ingredients.length - 1}
            ingredient={ingredient}
            position-y={index * ingredientSpacing}
          />
        ))}
      </group>
      <ContactShadows position-y={-0.5} opacity={0.5} />
    </group>
  );
};
