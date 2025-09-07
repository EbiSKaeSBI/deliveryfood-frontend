import PromoSlider from "@/components/promo-slider/promo-slider.tsx";
import Input from "@/components/ui/input/input.tsx";
import RestaurantList from "@/components/restaurant-list/restaurant-list.tsx";

function App() {
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
        />
      </div>
      <RestaurantList />
    </>
  );
}

export default App;
