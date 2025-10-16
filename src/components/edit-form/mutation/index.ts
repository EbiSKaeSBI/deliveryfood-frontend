import { useMutation } from "@tanstack/react-query";
import { patchProfile } from "@/shared/api/patch-profile.ts";
import type { EditProfileType } from "@/types/profile/profile.ts";
import { toast } from "react-hot-toast";

export const usePatch = () =>
  useMutation({
    mutationFn: (data: EditProfileType) => patchProfile(data),
    onSuccess: () => {
      toast.success("Профиль успешно обновлен.");
    },
    onError: (error: Error) => {
      // @ts-ignore
      toast.error(error.response?.data.message || error.message);
    },
  });
