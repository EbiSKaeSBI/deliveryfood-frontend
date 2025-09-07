import RestaurantCard from "@/components/restaurant-list/components/restaurant-card.tsx";
import { partners } from "@/mock-data/mock-data.ts";

const RestaurantList = () => {
  const mockData = partners;
  return (
    <div className="grid grid-cols-3 gap-4 container mx-auto">
      {mockData.map((restaurant, index: number) => (
        <RestaurantCard key={index + 1} partners={restaurant} />
      ))}
    </div>
  );
};

export default RestaurantList;
