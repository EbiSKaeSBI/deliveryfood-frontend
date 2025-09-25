import RestaurantCard from "@/components/restaurant-list/components/restaurant-card.tsx";
import { useQuery } from "@tanstack/react-query";
import { getPartners } from "@/shared/api/get-partners.ts";
import type { Partner } from "@/types/partners.ts";
import {useDebounce} from "@/hooks/useDebounce.ts";


interface RestaurantListProps {
  query: string;
}

const RestaurantList = ({query}:RestaurantListProps) => {
  const debounce = useDebounce(query,500)

  const { data, error, isPending } = useQuery<Partner[]>({
    queryKey: ["restaurant", debounce],
    queryFn: () => getPartners(debounce),
  });


  if (isPending) {
    return (
      <div className="grid grid-cols-3 gap-4 container mx-auto">Loading..</div>
    );
  }

  if (error) {
    return (
      <div className="grid grid-cols-3 gap-4 container mx-auto">
        Error {error.message}
      </div>
    );
  }

  return (
      <>
        {data.length === 0 && (
            <div className="text-center text-2xl mt-[50px] mx-auto">Рестораны не найдены</div>
        )}
        <div className="grid grid-cols-3 gap-4 container mx-auto">
        {data?.map((restaurant: Partner) => (
            <RestaurantCard key={restaurant.id} partners={restaurant} />
        ))}

      </div>
      </>

  );
};

export default RestaurantList;
