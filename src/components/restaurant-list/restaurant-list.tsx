import RestaurantCard from "@/components/restaurant-list/components/restaurant-card.tsx";
import { useQuery } from "@tanstack/react-query";
import { getPartners } from "@/shared/api/get-partners.ts";
import type { Partner, PartnersResponse } from "@/types/partners.ts";
import { useDebounce } from "@/hooks/useDebounce.ts";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/shadcn/pagination.tsx";
import type { Dispatch, SetStateAction } from "react";

interface RestaurantListProps {
  query: string;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}

const RestaurantList = ({ query, page, setPage }: RestaurantListProps) => {
  const debounce = useDebounce(query, 500);

  const { data, error, isPending } = useQuery<PartnersResponse>({
    queryKey: ["restaurant", debounce, page],
    queryFn: () => getPartners(debounce, page),
  });

  const nextPage = () => {
    if (data?.pagination.hasNextPage) {
      setPage(page + 1);
    }
  };
  const prevPage = () => {
    if (data?.pagination.hasPreviousPage) {
      setPage(page - 1);
    }
  };

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
      {
        // @ts-ignore
        data?.data.length === 0 && (
          <div className="text-center text-2xl mt-[50px] mx-auto">
            Рестораны не найдены
          </div>
        )
      }
      <div className="grid grid-cols-3 gap-4 container mx-auto">
        {
          // @ts-ignore
          data?.data.map((restaurant: Partner) => (
            <RestaurantCard key={restaurant.id} partners={restaurant} />
          ))
        }
      </div>
      <Pagination className="text-center">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              className={
                !data?.pagination.hasPreviousPage
                  ? "pointer-events-none opacity-50"
                  : undefined
              }
              onClick={prevPage}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              className={
                !data?.pagination.hasNextPage
                  ? "pointer-events-none opacity-50"
                  : undefined
              }
              onClick={nextPage}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
};

export default RestaurantList;
