import { Float, Gltf, Text3D } from "@react-three/drei/native";
import { INGREDIENTS, useBurger } from "../hooks/useBurger";
import fontPath from "../assets/fonts/Poppins_Bold.json";
import { Suspense } from "react";
import { animated, useSpring } from "@react-spring/three";

const INGREDIENT_SCALE = 3;
const INGREDIENT_SCALE_Y = 5;

export const Ingredient = ({ ingredient, showPrice, ...props }) => {
  const removeIngredient = useBurger((state) => state.removeIngredient);
  const addedToCart = useBurger((state) => state.addedToCart);
  const { positionY, scale } = useSpring({
    positionY: props["position-y"],
    scale: 1,
    from: { scale: 0.5 },
  });
  return (
    <animated.group {...props} scale={scale} position-y={positionY}>
      {showPrice && (
        <Suspense>
          <group
            onClick={(e) => {
              e.stopPropagation();
              removeIngredient(ingredient);
              console.log("remove")
            }}
            visible={!addedToCart}
          >
            <mesh position-x={0.75} position-y={0}>
              <planeGeometry args={[0.9, 0.17]} />
              <meshStandardMaterial color="white" opacity={0.4} transparent />
            </mesh>
            <Text3D
              font={fontPath}
              scale={0.1}
              bevelSegments={3}
              // bevelEnabled
              bavelThickness={0.001}
              position-x={0.5}
              position-y={-0.05}
            >
              ${INGREDIENTS[ingredient.name].price.toFixed(2)}
              {/* <meshBasicMaterial color="#B26000" /> */}
            </Text3D>
            <Text3D
              font={fontPath}
              scale={0.1}
              bevelSegments={3}
              // bevelEnabled
              bavelThickness={0.001}
              position-x={0.95}
              position-y={-0.05}
            >
              X
              <meshBasicMaterial color="#C6001A" />
            </Text3D>
          </group>
        </Suspense>
      )}
      <Float
        floatingRange={addedToCart ? [0, 0] : [-0.01, 0.01]}
        speed={addedToCart ? 0 : 4}
        rotationIntensity={0.5}
      >
        <Gltf
          src={INGREDIENTS[ingredient.name].src}
          scale={INGREDIENT_SCALE}
          scale-y={INGREDIENT_SCALE_Y + (ingredient.name === "bread" ? 5 : 0)}
        />
      </Float>
    </animated.group>
  );
};
