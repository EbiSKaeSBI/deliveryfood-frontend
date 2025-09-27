import PromoSlider from "@/components/promo-slider/promo-slider.tsx";
import Input from "@/components/ui/input/input.tsx";
import RestaurantList from "@/components/restaurant-list/restaurant-list.tsx";
import {useState} from "react";


const Main = () => {
    const [query, setQuery] = useState<string>("")
    const [page, setPage] = useState(1);

  return (
    <>
      <PromoSlider />
      <div className="flex justify-between container mx-auto">
        <h2 className="font-bold not-italic text-[36px]/[42px] text-black mr-[30px]">
          Рестораны
        </h2>
        <Input
          className="w-[300px] bg-[url(@/assets/svg/search.svg)]"
          placeholder="Поиск блюд и ресторанов"
          value={query}
          setValue={setQuery}
        />
      </div>
      <RestaurantList query={query} page={page} setPage={setPage} />
    </>
  );
};

export default Main;
