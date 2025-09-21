import RestaurantCard from "@/components/restaurant-list/components/restaurant-card.tsx";
import { useQuery } from "@tanstack/react-query";
import { getPartner } from "@/shared/api/get-partners.ts";
import type { Partner } from "@/types/partners.ts";

const RestaurantList = () => {
  const { data, error, isPending } = useQuery<Partner[]>({
    queryKey: ["restaurant"],
    queryFn: getPartner,
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
    <div className="grid grid-cols-3 gap-4 container mx-auto">
      {data?.map((restaurant: Partner, index: number) => (
        <RestaurantCard key={index + 1} partners={restaurant} />
      ))}
    </div>
  );
};

export default RestaurantList;
