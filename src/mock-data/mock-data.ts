import pizzaPlusImage from "@/assets/pizza-plus/preview.jpg";
import tanukiImage from "@/assets/tanuki/preview.jpg";
import foodBandImage from "@/assets/food-band/preview.jpg";
import gusiLebediImage from "@/assets/gusi-lebedi/preview.jpg";
import pizzaBurgerImage from "@/assets/pizza-burger/preview.jpg";
import palkiSkalkiImage from "@/assets/palki-skalki/preview.jpg";

const mockData = {
  partners: [
    {
      name: "Пицца Плюс",
      time_of_delivery: 50,
      stars: 4.5,
      price: 900,
      kitchen: "Пицца",
      image: pizzaPlusImage,
      products: "pizza-plus.json",
    },
    {
      name: "Тануки",
      time_of_delivery: 60,
      stars: 4.3,
      price: 1200,
      kitchen: "Суши, роллы",
      image: tanukiImage,
      products: "tanuki.json",
    },
    {
      name: "FoodBand",
      time_of_delivery: 40,
      stars: 4.4,
      price: 450,
      kitchen: "Пицца",
      image: foodBandImage,
      products: "food-band.json",
    },
    {
      name: "Палки скалки",
      time_of_delivery: 55,
      stars: 4.1,
      price: 500,
      kitchen: "Пицца",
      image: palkiSkalkiImage,
      products: "palki-skalki.json",
    },
    {
      name: "Гуси Лебеди",
      time_of_delivery: 75,
      stars: 4.7,
      price: 1000,
      kitchen: "Русская кухня",
      image: gusiLebediImage,
      products: "gusi-lebedi.json",
    },
    {
      name: "PizzaBurger",
      time_of_delivery: 45,
      stars: 4.6,
      price: 700,
      kitchen: "Пицца",
      image: pizzaBurgerImage,
      products: "pizza-burger.json",
    },
  ],
};

export const partners = mockData.partners;
