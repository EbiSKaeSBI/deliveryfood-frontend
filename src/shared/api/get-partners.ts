import type { Partner } from "@/types/partners.ts";
import { api } from "@/shared/api/api.ts";

export const getPartners = async (query: string): Promise<Partner[]> => {
  return await api.get(`partners?search=${query}`).then((response) => response.data);
};

export const getPartner = async (id: string): Promise<Partner> => {
  return await api.get(`partners/${id}`).then((response) => response.data);
};
