import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/shadcn/card";
import { Badge } from "@/components/ui/shadcn/badge.tsx";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/shadcn/table";

interface Delivery {
  id: string;
  address: string;
  phone: string;
  status: string;
  totalAmount: number;
  createdAt: Date;
  updatedAt: Date;
  comment: string | null;
  partnerId: string;
  userId: string;
}

interface DeliveriesTableProps {
  deliveries: Delivery[];
}

export function DeliveriesTable({ deliveries }: DeliveriesTableProps) {
  const getStatusVariant = (status: string) => {
    switch (status) {
      case "PENDING":
        return "secondary";
      case "COMPLETED":
        return "default";
      case "CANCELLED":
        return "destructive";
      default:
        return "outline";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "PENDING":
        return "В ожидании";
      case "COMPLETED":
        return "Завершено";
      case "CANCELLED":
        return "Отменено";
      default:
        return status;
    }
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("ru-RU", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "RUB",
    }).format(amount);
  };

  return (
    <Card className="container mx-auto">
      <CardHeader>
        <CardTitle>Доставки</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Адрес</TableHead>
                <TableHead>Телефон</TableHead>
                <TableHead>Статус</TableHead>
                <TableHead>Сумма</TableHead>
                <TableHead>Создано</TableHead>
                <TableHead>Обновлено</TableHead>
                <TableHead>Комментарий</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {deliveries?.map((delivery) => (
                <TableRow key={delivery.id}>
                  <TableCell className="font-mono text-xs">
                    {delivery.id.slice(0, 8)}...
                  </TableCell>
                  <TableCell>{delivery.address || "—"}</TableCell>
                  <TableCell>{delivery.phone || "—"}</TableCell>
                  <TableCell>
                    <Badge variant={getStatusVariant(delivery.status)}>
                      {getStatusLabel(delivery.status)}
                    </Badge>
                  </TableCell>
                  <TableCell>{formatAmount(delivery.totalAmount)}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {formatDate(delivery.createdAt)}
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {formatDate(delivery.updatedAt)}
                  </TableCell>
                  <TableCell>{delivery.comment || "—"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
