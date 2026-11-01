import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/Table";
import Badge from "../ui/Badge";
import Image from "next/image";

interface Order {
  id: number;
  user: {
    image: string;
    name: string;
    role: string;
  };
  projectName: string;
  team: {
    images: string[];
  };
  status: "Active" | "Pending" | "Cancel";
  budget: string;
}

const tableData: Order[] = [
  {
    id: 1,
    user: {
      image: "/images/user/user-17.jpg",
      name: "Lindsey Curtis",
      role: "Operations Lead",
    },
    projectName: "Jeddah Bulk Consignment",
    team: {
      images: [
        "/images/user/user-22.jpg",
        "/images/user/user-23.jpg",
        "/images/user/user-24.jpg",
      ],
    },
    budget: "$42.5K",
    status: "Active",
  },
  {
    id: 2,
    user: {
      image: "/images/user/user-18.jpg",
      name: "Kaiya George",
      role: "Quality Assurance",
    },
    projectName: "EU Shisha Lab Certifications",
    team: {
      images: ["/images/user/user-25.jpg", "/images/user/user-26.jpg"],
    },
    budget: "$18.2K",
    status: "Pending",
  },
  {
    id: 3,
    user: {
      image: "/images/user/user-17.jpg",
      name: "Zain Geidt",
      role: "Logistics Manager",
    },
    projectName: "Rotterdam Port Clearance",
    team: {
      images: ["/images/user/user-27.jpg"],
    },
    budget: "$35.0K",
    status: "Active",
  },
  {
    id: 4,
    user: {
      image: "/images/user/user-20.jpg",
      name: "Abram Schleifer",
      role: "International Sales",
    },
    projectName: "Dubai Trade Fair Booth",
    team: {
      images: [
        "/images/user/user-28.jpg",
        "/images/user/user-29.jpg",
      ],
    },
    budget: "$12.8K",
    status: "Cancel",
  },
];

export default function BasicTableOne() {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto custom-scrollbar">
        <div className="min-w-[750px]">
          <Table>
            <TableHeader className="border-b border-gray-100 dark:border-gray-800">
              <TableRow>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-semibold text-gray-500 text-left text-xs uppercase tracking-wider dark:text-gray-400"
                >
                  Project Manager
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-semibold text-gray-500 text-left text-xs uppercase tracking-wider dark:text-gray-400"
                >
                  Project / Order
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-semibold text-gray-500 text-left text-xs uppercase tracking-wider dark:text-gray-400"
                >
                  Team
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-semibold text-gray-500 text-left text-xs uppercase tracking-wider dark:text-gray-400"
                >
                  Status
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-semibold text-gray-500 text-left text-xs uppercase tracking-wider dark:text-gray-400"
                >
                  Value
                </TableCell>
              </TableRow>
            </TableHeader>

            <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
              {tableData.map((order) => (
                <TableRow key={order.id} className="hover:bg-gray-50 dark:hover:bg-white/5 transition">
                  <TableCell className="px-5 py-3.5 text-left">
                    <div className="flex items-center gap-3">
                      <div className="size-9 overflow-hidden rounded-full shrink-0">
                        <Image
                          width={36}
                          height={36}
                          src={order.user.image}
                          alt={order.user.name}
                          className="size-full object-cover"
                        />
                      </div>
                      <div>
                        <span className="block font-medium text-gray-800 text-sm dark:text-white">
                          {order.user.name}
                        </span>
                        <span className="block text-gray-500 text-xs dark:text-gray-400">
                          {order.user.role}
                        </span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="px-5 py-3.5 text-gray-600 text-sm dark:text-gray-300">
                    {order.projectName}
                  </TableCell>
                  <TableCell className="px-5 py-3.5">
                    <div className="flex -space-x-2">
                      {order.team.images.map((teamImage, index) => (
                        <div
                          key={index}
                          className="size-7 overflow-hidden border-2 border-white rounded-full dark:border-gray-900"
                        >
                          <Image
                            width={28}
                            height={28}
                            src={teamImage}
                            alt="Team member"
                            className="size-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell className="px-5 py-3.5">
                    <Badge
                      size="sm"
                      color={
                        order.status === "Active"
                          ? "success"
                          : order.status === "Pending"
                          ? "warning"
                          : "error"
                      }
                    >
                      {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="px-5 py-3.5 text-sm font-semibold text-gray-700 dark:text-gray-300">
                    {order.budget}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

