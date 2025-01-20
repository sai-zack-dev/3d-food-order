import { create } from "zustand";

import { useGLTF } from "@react-three/drei/native";
import Avocado from "../assets/models/Avocado_Slice_Avocado_0.glb";
import BBQSauce from "../assets/models/BBQ_Sauce_Slice_BBQ_sauce_0.glb";
import Bacon from "../assets/models/Bacon_Slice_Bacon_0.glb";
import Bread from "../assets/models/Bread_Slice_Bread_0.glb";
import Cheese from "../assets/models/Cheese_Slice_Cheese_0.glb";
import Chicken from "../assets/models/Chicken_Slice_Chicken_0.glb";
import Cucumber from "../assets/models/Cucumber_Slice_Cucumber_0.glb";
import Egg from "../assets/models/Egg_Slice_Egg_0.glb";
import Fries from "../assets/models/Fries_Slice_Fries_0.glb";
import Halloumi from "../assets/models/Halloumi_Slice_Halloumi_0.glb";
import Ham from "../assets/models/Ham_Slice_Ham_0.glb";
import Ketchup from "../assets/models/Ketchup_Slice_Ketchup_0.glb";
import Lettuce from "../assets/models/Lettuce_Slice_Lettuce_0.glb";
import Mayo from "../assets/models/Mayo_Slice_Mayo_0.glb";
import MeltedButter from "../assets/models/Melted_Butter_Butter_0.glb";
import Mushroom from "../assets/models/Mushroom_Slice_Mushroom_0.glb";
import Mustard from "../assets/models/Mustard_Slice_Mustrard_0.glb";
import Olive from "../assets/models/Olive_Slice_Oilives_0.glb";
import Onion from "../assets/models/Onion_Slice_Onion_0.glb";
import Patty from "../assets/models/Patty_Slice_Patty_0.glb";
import Pepper from "../assets/models/Pepper_Slice_Pepper_0.glb";
import Pickle from "../assets/models/Pickle_Slice_Pickles_0.glb";
import Pineapple from "../assets/models/Pineapple_Slice_Pineapple_0.glb";
import Pizza from "../assets/models/Pizza_Slice_Meat_Feast_0.glb";
import Qiiwi from "../assets/models/Qiiwi_Slice_Qiiwi_0.glb";
import Ribs from "../assets/models/Ribs_Slice_Ribs_0.glb";
import Roast from "../assets/models/Roast_Slice_Roast_0.glb";
import Salami from "../assets/models/Salami_Slice_Salami_0.glb";
import Salmon from "../assets/models/Salmon_Slice_Salmon_0.glb";
import Sausage from "../assets/models/Sausage_Slice_Sausage_0.glb";
import Shrimp from "../assets/models/Shrimp_Slice_Shrimp_0.glb";
import Tomato from "../assets/models/Tomato_Slice_Tomato_0.glb";
import Waffle from "../assets/models/Waffle_Slice_Waffle_0.glb";
import Anchovies from "../assets/models/anchovies_Slice_Fish_0.glb";

export const INGREDIENTS = {
  avocado: {
    src: Avocado,
    price: 1,
    icon: "🥑",
  },
  bbqSauce: {
    src: BBQSauce,
    price: 0.5,
    icon: "🍖",
  },
  bacon: {
    src: Bacon,
    price: 1.5,
    icon: "🥓",
  },
  bread: {
    src: Bread,
    price: 0.5,
    icon: "🍞",
  },
  cheese: {
    src: Cheese,
    price: 1,
    icon: "🧀",
  },
  chicken: {
    src: Chicken,
    price: 2,
    icon: "🍗",
  },
  cucumber: {
    src: Cucumber,
    price: 0.5,
    icon: "🥒",
  },
  egg: {
    src: Egg,
    price: 0.5,
    icon: "🥚",
  },
  fries: {
    src: Fries,
    price: 1.5,
    icon: "🍟",
  },
  halloumi: {
    src: Halloumi,
    price: 1.5,
    icon: "🧀",
  },
  ham: {
    src: Ham,
    price: 2,
    icon: "🍖",
  },
  ketchup: {
    src: Ketchup,
    price: 0.5,
    icon: "🍅",
  },
  lettuce: {
    src: Lettuce,
    price: 0.5,
    icon: "🥬",
  },
  mayo: {
    src: Mayo,
    price: 0.5,
    icon: "🥪",
  },
  meltedButter: {
    src: MeltedButter,
    price: 0.5,
    icon: "🧈",
  },
  mushroom: {
    src: Mushroom,
    price: 1,
    icon: "🍄",
  },
  mustard: {
    src: Mustard,
    price: 0.5,
    icon: "🌭",
  },
  olive: {
    src: Olive,
    price: 0.5,
    icon: "🫒",
  },
  onion: {
    src: Onion,
    price: 0.5,
    icon: "🧅",
  },
  patty: {
    src: Patty,
    price: 2,
    icon: "🥩",
  },
  pepper: {
    src: Pepper,
    price: 0.5,
    icon: "🌶️",
  },
  pickle: {
    src: Pickle,
    price: 0.5,
    icon: "🥒",
  },
  pineapple: {
    src: Pineapple,
    price: 1,
    icon: "🍍",
  },
  pizza: {
    src: Pizza,
    price: 3,
    icon: "🍕",
  },
  qiiwi: {
    src: Qiiwi,
    price: 1,
    icon: "🥝",
  },
  ribs: {
    src: Ribs,
    price: 3,
    icon: "🍖",
  },
  roast: {
    src: Roast,
    price: 2.5,
    icon: "🍗",
  },
  salami: {
    src: Salami,
    price: 1.5,
    icon: "🍖",
  },
  salmon: {
    src: Salmon,
    price: 2.5,
    icon: "🐟",
  },
  sausage: {
    src: Sausage,
    price: 1.5,
    icon: "🌭",
  },
  shrimp: {
    src: Shrimp,
    price: 2.5,
    icon: "🍤",
  },
  tomato: {
    src: Tomato,
    price: 0.5,
    icon: "🍅",
  },
  waffle: {
    src: Waffle,
    price: 1,
    icon: "🧇",
  },
  anchovies: {
    src: Anchovies,
    price: 1.5,
    icon: "🐟",
  },
};

Object.keys(INGREDIENTS).forEach((ingredient) => {
  useGLTF.preload(INGREDIENTS[ingredient].src);
});

export const useBurger = create((set) => ({
  ingredients: [
    {
      id: 0,
      name: "bread",
    },
    {
      id: 1,
      name: "bread",
    },
  ],
  total: 5,
  addIngredient: (ingredient) =>
    set((state) => ({
      total: state.total + INGREDIENTS[ingredient].price,
      ingredients: [
        ...state.ingredients.slice(0, -1),
        {
          name: ingredient,
          id: state.ingredients.length,
        },
        {
          name: "bread",
          id: 1,
        },
      ],
    })),
  removeIngredient: (ingredient) =>
    set((state) => ({
      total: state.total - (INGREDIENTS[ingredient.name]?.price || 0),
      ingredients: state.ingredients.filter((ing) => ing.id !== ingredient.id),
    })),
  addedToCart: false,
  setAddedToCart: (addedToCart) => set({ addedToCart }),
}));
