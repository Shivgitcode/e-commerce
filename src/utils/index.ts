import { img1, img2, img3, img4, img5 } from "../../public"

export interface Product {
    img: any
    Brand: string
    name: string
    discount?: number
    mrp: number
    sale: number


}

export interface Category {
    id: number,
    name: string,
    tag: any
}

export const products: Product[] = [
    {
        img: img1,
        Brand: "Defacto",
        name: "Defacto Black SweatShirt",
        discount: 15,
        mrp: 130,
        sale: 110

    },
    {
        img: img2,
        Brand: "Hugo Boss",
        name: "Hugo Boss Leather Jacket",
        discount: 10,
        mrp: 500,
        sale: 450

    },
    {
        img: img3,
        Brand: "LC Waikiki",
        name: "LC Waikiki Black Sweatshirt",
        discount: 15,
        mrp: 130,
        sale: 110

    },
    {
        img: img4,
        Brand: "Mavi",
        name: "Mavi Siyah T-shirt",
        discount: 37,
        mrp: 80,
        sale: 50

    },

    {
        img: img5,
        Brand: "Mavi",
        name: "Mavi Siyah T-shirt",
        discount: 37,
        mrp: 80,
        sale: 50

    },


]


export const categories: Category[] = [
    { id: 1, name: "New In", tag: "⚡" },
    { id: 2, name: "Clothing", tag: "👚" },
    { id: 3, name: "shoes", tag: "👠" },
    { id: 4, name: "Accessories", tag: "👜" },
    { id: 5, name: "Activewear", tag: "🤸" },
    { id: 6, name: "Gifts&Living", tag: "🎁" },
    { id: 7, name: "Inspiration", tag: "💎" }
]

