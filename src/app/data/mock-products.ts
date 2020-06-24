import { Product } from '../Models/Product';

export const PRODUCTS: Product[] = [{
    name: "Intel Core i3 9300",
    category: "CPUs",
    stockSize: 10,
    price: 30000,
    imagePath: "../../assets/img/core_i3.jpg"
}, {
    name: "Intel Core i5 9500",
    category: "CPUs",
    stockSize: 5,
    price: 37000,
    imagePath: "../../assets/img/core_i5.jpg"
}, {
    name: "Intel Core i7 9700",
    category: "CPUs",
    stockSize: 10,
    price: 57000,
    imagePath: "../../assets/img/core_i7.jpg"
}, {
    name: "Intel Core i9 9900KS",
    category: "CPUs",
    stockSize: 5,
    price: 117000,
    imagePath: "../../assets/img/core_i9.jpg"
}, {
    name: "MSI GeForce RTX 2060",
    category: "GPUs",
    stockSize: 0,
    price: 54000,
    imagePath: "../../assets/img/rtx_2060.jpg"
}, {
    name: "Sapphire NITRO+ RX 5700 XT",
    category: "GPUs",
    stockSize: 5,
    price: 86500,
    imagePath: "../../assets/img/rx_5700xt.jpg"
}, {
    name: "Samsung 860 EVO 250GB",
    category: "SSDs",
    stockSize: 15,
    price: 9000,
    imagePath: "../../assets/img/evo_860.jpg"
}, {
    name: "Samsung 970 EVO PLUS 250GB",
    category: "SSDs",
    stockSize: 10,
    price: 13200,
    imagePath: "../../assets/img/evo_970+.jpg"
}];