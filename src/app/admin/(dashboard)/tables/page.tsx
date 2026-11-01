import React from "react";
import PageBreadcrumb from "@/components/admin/common/PageBreadCrumb";
import BasicTableOne from "@/components/admin/tables/BasicTableOne";
import RecentOrders from "@/components/admin/ecommerce/RecentOrders";

export const metadata = {
  title: "Data Tables | Castle Trading Admin",
};

export default function TablesPage() {
  return (
    <div className="space-y-6">
      <PageBreadcrumb pageTitle="Data Tables" />

      <div className="space-y-6">
        <div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              International Project Assignments
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Overview of team leads and customer consignments
            </p>
          </div>
          <BasicTableOne />
        </div>

        <div>
          <RecentOrders />
        </div>
      </div>
    </div>
  );
}

