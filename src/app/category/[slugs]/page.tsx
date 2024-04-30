import Bar from "@/components/Bar"
import ProductCard from "@/components/ProductCard/ProductCard"
import { getProducts } from "@/lib/data"
import { categories } from "@/utils"
// import { products } from "@/utils"

export default async function Categories({ params }: { params: { slugs: string } }) {
    console.log(params)
    const products = await getProducts("28becf94-5205-4699-a227-981c10e64a57")
    const myTag = categories.find(el => el.name === params.slugs)

    return (
        <div className="w-full">
            <Bar name={params.slugs} tag={myTag?.tag}></Bar>
            <div className="flex flex-wrap justify-between content-start gap-5 ">
                {
                    products.map(product => (
                        <ProductCard product={product}></ProductCard>
                    ))
                }


            </div>

        </div>
    )
}
