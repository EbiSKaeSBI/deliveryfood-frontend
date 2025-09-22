import {useQuery} from "@tanstack/react-query";
import {useParams} from "react-router-dom";
import {getPartner} from "@/shared/api/get-partners.ts";
import type {Partner} from "@/types/partners.ts";
import ProductCard from "@/components/product-card/product-card.tsx";


const Product = () => {
const { id } = useParams();

if(!id) {
        return <div>User not found</div>;
    }

const {data, error, isPending} = useQuery<Partner>({
    queryKey: ["product"],
    queryFn: () => getPartner(id)
})

    if(isPending) {
        return <div className="container mx-auto">Loading...</div>;
    }

    if(error){
        return <div className="container mx-auto">Error: {error.message}</div>;
    }


    return (
        <section className="container mx-auto">
            <div className="flex flex-wrap items-center mb-[44px] gap-5">
                <h2 className="not-italic font-bold text-[36px]/[42px]">{data?.name}</h2>
                <div className="flex items-center flex-wrap gap-6">
                    <div className="bg-[url(@/assets/svg/rating.svg)] bg-no-repeat bg-[position:0_7px] pl-[20px] mr-[26px] text-[#ffc107] font-bold text-[18px]/[32px]">
                        {data?.stars}
                    </div>
                    <div className="text-[#8c8c8c] text-[18px]/[32px]">От {data?.minPrice} ₽</div>
                    <div className="text-[#8c8c8c] text-[18px]/[32px]">{data?.kitchen}</div>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-4 container mx-auto">
                {data?.products?.map(product  =>  (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>

    );
};

export default Product;