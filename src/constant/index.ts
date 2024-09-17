const tierOptions: {
  name: string;
  value: string;
}[] = [
  {
    name: "All",
    value: "all",
  },
  {
    name: "Upper Body",
    value: "upperBody",
  },
  {
    name: "Lower Body",
    value: "lowerBody",
  },
  {
    name: "Hat",
    value: "hat",
  },
  {
    name: "Shoes",
    value: "shoes",
  },
  {
    name: "Accessory",
    value: "accessory",
  },
  {
    name: "Legendary",
    value: "legendary",
  },
  {
    name: "Mythic",
    value: "mythic",
  },
  {
    name: "Epic",
    value: "epic",
  },
  {
    name: "Rare",
    value: "rare",
  },
  {
    name: "Common",
    value: "common",
  },
] as const;

const themeOptions: {
  name: string;
  value: string;
}[] = [
  {
    name: "All",
    value: "all",
  },
  {
    name: "Halloween",
    value: "halloween",
  },
  {
    name: "Space",
    value: "space",
  },
  {
    name: "Steampunk",
    value: "steampunk",
  },
  {
    name: "Cyberpunk",
    value: "cyberpunk",
  },
  {
    name: "Fantasy",
    value: "fantasy",
  },
];

export { themeOptions, tierOptions };
