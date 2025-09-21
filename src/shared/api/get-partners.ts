import axios from "axios";
import type { Partner } from "@/types/partners.ts";

export const getPartner = async (): Promise<Partner[]> => {
  return await axios
    .get("http://localhost:4000/partners")
    .then((response) => response.data);
};
