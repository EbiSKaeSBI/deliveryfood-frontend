import Button from "@/components/ui/button/button.tsx";
import { FaBasketShopping } from "react-icons/fa6";
import useCartStore from "@/stores/useCartStore.ts";
import {toast} from "react-hot-toast";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
  };
}


const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } =  useCartStore();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success("Вы добавили товар в корзину");
  }


  return (
    <div className="bg-white shadow-[0_4px_12px_rgba(0,0,0,0.05)] rounded-[7px] overflow-hidden mb-[30px] basis-[31%] no-underline">
      <img
        src={product.image}
        alt=""
        className="w-full h-[250px] object-cover"
      />
      <div className="pt-[20px] pr-[23px] pb-[35px] pl-[23px] min-h-[275px] flex flex-col">
        <div className="flex items-center justify-between mb-[10px]">
          <h3>{product.name}</h3>
        </div>
        <div className="flex items-center flex-wrap">
          <div className="text-[#8c8c8c] text-[18px]/[21px]">
            {product.description}
          </div>
        </div>
        <div className="flex items-center flex-wrap mt-auto">
          <Button onClick={handleAddToCart} className="mx-[5px] bg-[#1890ff] border-[#1890ff] text-white mr-[10px] hover:bg-white hover:border-[#d9d9d9] hover:text-[#595959] hover:duration-250">
            <FaBasketShopping size={16} /> В корзину
          </Button>
          <strong className="font-bold text-[20px]/[32px] ml-[30px]">
            {product.price} ₽
          </strong>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
