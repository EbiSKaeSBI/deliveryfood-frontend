import { Link } from "react-router-dom";

interface RestaurantCardProps {
  partners: {
    id: string;
    name: string;
    timeOfDelivery: number;
    stars: number;
    minPrice: number;
    kitchen: string;
    image: string;
  };
}

const RestaurantCard = ({ partners }: RestaurantCardProps) => {
  return (
    <Link to={`/product/${partners.id}`}>
      <div className="bg-white shadow-[0_4px_12px_rgba(0,0,0,0.05)] rounded-[7px] overflow-hidden mb-[30px] basis-[31%] no-underline mt-5">
        <img
          src={partners.image}
          className="w-full max-h-[275px]"
          alt="image"
        />
        <div className="pt-[20px] pr-[23px]  pl-[15px] min-h-[200px] flex flex-col">
          <div className="flex items-center justify-between mb-[10px]">
            <h3 className="m-0 not-italic font-bold text-[22px]/[32px]">
              {partners.name}
            </h3>
            <span className="not-italic font-normal text-xs/[20px] text-white bg-[#262626] rounded-[2px] py-[1px] px-[8px]">
              {partners.timeOfDelivery} мин
            </span>
          </div>
          <div className="flex items-center flex-wrap">
            <div className="bg-[url(@/assets/svg/rating.svg)] bg-no-repeat bg-[position:0_7px] pl-[20px] mr-[26px] text-[#ffc107] font-bold text-[18px]/[32px] ">
              {partners.stars}
            </div>
            <div className="flex gap-2">
              <div className="text-[#8c8c8c] text-[18px]/[32px]">
                От {partners.minPrice} ₽
              </div>
              <div className="text-[#8c8c8c] text-[18px]/[32px]">
                {partners.kitchen}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
