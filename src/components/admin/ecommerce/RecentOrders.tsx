import React from "react";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "../ui/Table";
import Badge from "../ui/Badge";

interface ShipmentOrder {
  id: string;
  client: string;
  product: string;
  destination: string;
  volume: string;
  status: "Delivered" | "In Transit" | "Processing";
  date: string;
}

const ordersData: ShipmentOrder[] = [
  {
    id: "CT-9421",
    client: "Al-Haramain Trading LLC",
    product: "Cube Briquettes 25mm",
    destination: "Jeddah, Saudi Arabia",
    volume: "24 MT (1x40ft HC)",
    status: "Delivered",
    date: "Oct 28, 2026",
  },
  {
    id: "CT-9422",
    client: "Black Diamond Hookah",
    product: "Hexagonal Briquettes",
    destination: "Dubai, UAE",
    volume: "48 MT (2x40ft HC)",
    status: "In Transit",
    date: "Oct 29, 2026",
  },
  {
    id: "CT-9423",
    client: "Nordic Charcoal AB",
    product: "BBQ Pillow Briquettes",
    destination: "Gothenburg, Sweden",
    volume: "22 MT (1x40ft HC)",
    status: "Processing",
    date: "Oct 30, 2026",
  },
  {
    id: "CT-9424",
    client: "Shisha Cloud Berlin",
    product: "Cube Briquettes 26mm",
    destination: "Hamburg, Germany",
    volume: "26 MT (1x40ft HC)",
    status: "In Transit",
    date: "Oct 31, 2026",
  },
  {
    id: "CT-9425",
    client: "Golden Flame Imports",
    product: "Flat Briquettes 25x25x18mm",
    destination: "Beirut, Lebanon",
    volume: "25 MT (1x40ft HC)",
    status: "Delivered",
    date: "Nov 01, 2026",
  },
];

export default function RecentOrders() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] sm:p-6 shadow-theme-xs">
      <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white">
            Recent Container Shipments
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
            Real-time status of international export consignments
          </p>
        </div>
        <button
          type="button"
          className="text-xs font-medium text-brand-500 hover:text-brand-600 dark:text-brand-400 self-start sm:self-auto"
        >
          View All Shipments →
        </button>
      </div>

      <div className="max-w-full overflow-x-auto custom-scrollbar">
        <Table>
          <TableHeader className="border-y border-gray-100 dark:border-gray-800">
            <TableRow>
              <TableCell isHeader className="py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-400">
                Order ID
              </TableCell>
              <TableCell isHeader className="py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-400">
                Client / Destination
              </TableCell>
              <TableCell isHeader className="py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-400">
                Product Grade
              </TableCell>
              <TableCell isHeader className="py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-400">
                Volume
              </TableCell>
              <TableCell isHeader className="py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-400">
                Status
              </TableCell>
            </TableRow>
          </TableHeader>

          <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
            {ordersData.map((order) => (
              <TableRow key={order.id} className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                <TableCell className="py-3.5 text-xs font-mono font-semibold text-brand-600 dark:text-brand-400">
                  {order.id}
                </TableCell>
                <TableCell className="py-3.5">
                  <p className="text-sm font-medium text-gray-800 dark:text-white">
                    {order.client}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {order.destination}
                  </p>
                </TableCell>
                <TableCell className="py-3.5 text-xs text-gray-600 dark:text-gray-300">
                  {order.product}
                </TableCell>
                <TableCell className="py-3.5 text-xs font-medium text-gray-700 dark:text-gray-300">
                  {order.volume}
                </TableCell>
                <TableCell className="py-3.5">
                  <Badge
                    size="sm"
                    color={
                      order.status === "Delivered"
                        ? "success"
                        : order.status === "In Transit"
                        ? "warning"
                        : "primary"
                    }
                  >
                    {order.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

