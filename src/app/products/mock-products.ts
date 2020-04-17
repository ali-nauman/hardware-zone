import { Product } from './Product';

export const PRODUCTS: Product[] = [
    { name: "Intel Core i3 9300", category: "CPU", quantity: 0, price: 30000, imagePath: "../../assets/img/core_i3.jpg" },
    { name: "Intel Core i5 9500", category: "CPU", quantity: 10, price: 37000, imagePath: "../../assets/img/core_i5.jpg" },
    { name: "Intel Core i7 9700", category: "CPU", quantity: 10, price: 57000, imagePath: "../../assets/img/core_i7.jpg" },
    { name: "Intel Core i9 9900KS", category: "CPU", quantity: 10, price: 117000, imagePath: "../../assets/img/core_i9.jpg" },
    { name: "MSI GeForce RTX 2060", category: "GPU", quantity: 5, price: 54000, imagePath: "" },
    { name: "Sapphire NITRO+ RX 5700 XT", category: "GPU", quantity: 5, price: 86500, imagePath: "" },
    { name: "Samsung 860 EVO 250GB", category: "SSD", quantity: 15, price: 9000, imagePath: "" },
    { name: "Samsung 970 EVO PLUS 250GB", category: "SSD", quantity: 10, price: 13200, imagePath: "" }
    // { name: , category: , quantity: , price:, imagePath: "" },
];