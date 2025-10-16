import { Card } from "@/components/ui/shadcn/card.tsx";
import { Calendar, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/shadcn/ui/button.tsx";
import { Link } from "react-router-dom";

interface ProfileHeaderProps {
  name?: string;
  phone?: string;
  email?: string;
  createAt: Date;
}

const ProfileHeader = ({
  createAt,
  email,
  phone,
  name,
}: ProfileHeaderProps) => {
  const joinDate = new Date(createAt).toLocaleDateString("ru-RU", {
    year: "numeric",
    month: "long",
  });

  return (
    <Card className="mb-6 overflow-hidden container mx-auto">
      <div className="px-6 py-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h1 className="text-balance text-2xl font-bold tracking-tight sm:text-3xl">
                {name}
              </h1>
            </div>
            <div className="flex flex-wrap gap-3 pt-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Mail className="size-4" />
                <span>{email}</span>
              </div>
              <div className="flex items-center gap-1">
                {phone && (
                  <span className="flex items-center gap-1">
                    <Phone className="size-4" />
                    <span>{phone}</span>
                  </span>
                )}
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="size-4" />
                <span>Присоединился c {joinDate}</span>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Link to="/edit">
              <Button className="gap-2">Редактировать профиль</Button>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProfileHeader;
