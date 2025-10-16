import type { EditProfileType } from "@/types/profile/profile.ts";
import { api } from "@/shared/api/api.ts";

export const patchProfile = async (data: EditProfileType) => {
  await api.patch(`auth/profile`, data).then((response) => response?.data);
};
