import axios from "axios";
import type { Partner } from "@/types/partners.ts";

export const getPartners = async (): Promise<Partner[]> => {
  return await axios
    .get("http://localhost:4000/partners")
    .then((response) => response.data);
};


export const getPartner = async (id: string): Promise<Partner> => {
  return await axios.get(`http://localhost:4000/partners/${id}`).then((response) => response.data);
}