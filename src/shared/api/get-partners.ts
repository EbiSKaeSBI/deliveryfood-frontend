import type { Partner, PartnersResponse } from "@/types/partners.ts";
import { api } from "@/shared/api/api.ts";

export const getPartners = async (
  query: string,
  page: number = 1,
): Promise<PartnersResponse> => {
  return await api
    .get(`partners?search=${query}&page=${page}`)
    .then((response) => response.data);
};

export const getPartner = async (id: string): Promise<Partner> => {
  return await api.get(`partners/${id}`).then((response) => response.data);
};
