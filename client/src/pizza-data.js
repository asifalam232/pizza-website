const pizzas = [
  //1
  {
    name: "Margherita Pizza",
    variants: ["small", "medium", "large", "extra-large"],
    prices: [
      {
        small: 9.5,
        medium: 10.5,
        large: 12.0,
        extraLarge: 13.5,
      },
    ],
    category: "veg",
    image: "/images/margherita.jpg",
    description: "Mozzarella Cheese, Tomato Sauce",
  },
  //2
  {
    name: "Spicy Pepperoni Feast",
    variants: ["small", "medium", "large", "extra-large"],
    prices: [
      {
        small: 10.5,
        medium: 11.5,
        large: 12.5,
        "extra-large": 14.5,
      },
    ],
    category: "nonveg",
    image: "/images/spicy-pepperoni-feast.jpg",
    description:
      "Pepperoni, NEW cup 'n' crisp pepperoni, chilli flakes & roquito peppers",
  },
  //3
  {
    name: "Loaded Chicken Supreme with Triple Cheese Blend",
    variants: ["small", "medium", "large", "extra-large"],
    prices: [
      {
        small: 11.5,
        medium: 12.5,
        large: 14.0,
        "extra-large": 15.5,
      },
    ],
    category: "nonveg",
    description:
      "Chicken, Mushrooms, Mixed Peppers, Red Onions And Triple Cheese Blend",
    image: "/images/loaded-chicken-supreme.jpg",
  },
  //4
  {
    name: "Hawaiian",
    variants: ["small", "medium", "large", "extra-large"],
    prices: [
      {
        small: 9.5,
        medium: 10.5,
        large: 12.0,
        "extra-large": 13.5,
      },
    ],
    category: "nonveg",
    image: "/images/hawaiian.jpg",
    description: "Ham, Pineapple",
  },
  //5
  {
    name: "Meat Feast",
    variants: ["small", "medium", "large", "extra-large"],
    prices: [
      {
        small: 9.5,
        medium: 10.5,
        large: 12.0,
        "extra-large": 13.5,
      },
    ],
    category: "nonveg",
    image: "/images/meat-feast.jpg",
    description: "Spicy Pork, Ham, Pepperoni, Seasoned Minced Beef",
  },
  //6
  {
    name: "Farmhouse",
    variants: ["small", "medium", "large", "extra-large"],
    prices: [
      {
        small: 9.5,
        medium: 10.5,
        large: 12.0,
        "extra-large": 13.5,
      },
    ],
    category: "nonveg",
    image: "/images/farmhouse.jpg",
    description: "Ham, Mushrooms",
  },
  //7
  {
    name: "Texan BBQ",
    variants: ["small", "medium", "large", "extra-large"],
    prices: [
      {
        small: 9.5,
        medium: 10.5,
        large: 12.0,
        "extra-large": 13.5,
      },
    ],
    category: "nonveg",
    image: "/images/texan-bbq.jpg",
    description: "BBQ Sauce, Smoked Bacon, Chicken",
  },
  //8
  {
    name: "Veggie Sizzler",
    variants: ["small", "medium", "large", "extra-large"],
    prices: [
      {
        small: 9.5,
        medium: 10.5,
        large: 12.0,
        "extra-large": 13.5,
      },
    ],
    category: "veg",
    image: "/images/veg-sizzler.jpg",
    description: "Green Chillies, Jalapeños, Mixed Peppers, Red Onions",
  },
  //9
  {
    name: "Beef Sizzler",
    variants: ["small", "medium", "large", "extra-large"],
    prices: [
      {
        small: 9.5,
        medium: 10.5,
        large: 12.0,
        "extra-large": 13.5,
      },
    ],
    category: "veg",
    image: "/images/beef-sizzler.jpg",
    description: "Green Chillies, Jalapeños, Red Onions, Seasoned Minced Beef",
  },
  //10
  {
    name: "Chicken Sizzler",
    variants: ["small", "medium", "large", "extra-large"],
    prices: [
      {
        small: 9.5,
        medium: 10.5,
        large: 12.0,
        "extra-large": 13.5,
      },
    ],
    category: "nonveg",
    image: "/images/chicken-sizzler.jpg",
    description: "Green Chillies, Jalapeños, Red Onions, Chicken",
  },
  //11
  {
    name: "Supreme",
    variants: ["small", "medium", "large", "extra-large"],
    prices: [
      {
        small: 9.5,
        medium: 10.5,
        large: 12.0,
        "extra-large": 13.5,
      },
    ],
    category: "nonveg",
    image: "/images/supreme.jpg",
    description:
      "Pepperoni, Seasoned Minced Beef, Spicy Pork Sausage, Mushrooms, Mixed Peppers, Red Onions",
  },
  //12
  {
    name: "Vegetable Supreme",
    variants: ["small", "medium", "large", "extra-large"],
    prices: [
      {
        small: 9.5,
        medium: 10.5,
        large: 12.0,
        "extra-large": 13.5,
      },
    ],
    category: "veg",
    image: "/images/veg-supreme.jpg",
    description: "Mushrooms, Mixed Peppers, Red Onions, Tomato",
  },
  //13
  {
    name: "Beyond Italian Style Sausage Supreme",
    variants: ["small", "medium", "large", "extra-large"],
    prices: [
      {
        small: 9.5,
        medium: 10.5,
        large: 12.0,
        "extra-large": 13.5,
      },
    ],
    category: "nonveg",
    image: "/images/beyond-meat-italian-style-sausage-supreme.jpg",
    description:
      "Meat-Free Beyond Meat® Italian Style Sausage, Mozzarella Cheese With Peppers, Mushrooms And Red Onions. (Not Suitable For Vegans)",
  },
  //14
  {
    name: "Beyond Three Meat Three Cheese",
    variants: ["small", "medium", "large", "extra-large"],
    prices: [
      {
        small: 9.5,
        medium: 10.5,
        large: 12.0,
        "extra-large": 13.5,
      },
    ],
    category: "nonveg",
    image: "/images/beyond-three-meat-three-cheese.jpg",
    description:
      "Meat-Free Beyond Meat® Italian Style Sausage, Pork Crumble, Beef Crumble, Mushrooms, Triple Cheese Blend & Red Onions. (Not Suitable For Vegans)",
  },
  //15
  {
    name: "Chicken & Bacon Flatbread Pizza",
    variants: ["small", "medium", "large", "extra-large"],
    prices: [
      {
        small: 9.5,
        medium: 10.5,
        large: 12.0,
        "extra-large": 13.5,
      },
    ],
    category: "nonveg",
    image: "/images/chicken-bacon-flatbread.jpg",
    description:
      "Individual Flatbread Pizza With Tomato Sauce, Chicken, Bacon & Mozzarella Pearls",
  },
];

export default pizzas;
