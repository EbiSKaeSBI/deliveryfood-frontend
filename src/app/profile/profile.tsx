import { useQuery } from "@tanstack/react-query";
import type { User } from "@/types/users/users.ts";
import { getProfile } from "@/shared/api/get-profile.ts";
import { useAuthStore } from "@/stores/auth-stores.ts";
import ProfileHeader from "@/components/profile-header/profile-header.tsx";
import { DeliveriesTable } from "@/components/deliveries-table/deliveries-table.tsx";

const Profile = () => {
  const { isAuthenticated } = useAuthStore();
  const { data } = useQuery<User>({
    queryKey: ["user", "name"],
    queryFn: getProfile,
    enabled: isAuthenticated,
  });

  return (
    <>
      {
        // @ts-ignore
        <ProfileHeader
          name={data?.name}
          email={data?.email}
          createAt={data?.createdAt}
          phone={data?.phone}
        />
      }
      {
        // @ts-ignore
        <DeliveriesTable deliveries={data?.deliveries} />
      }
    </>
  );
};

export default Profile;
