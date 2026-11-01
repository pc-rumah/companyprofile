"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import { HorizontaLDots } from "../icons";
import { Dropdown, DropdownItem } from "../ui/Dropdown";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
}) as any;

export default function MonthlySalesChart() {
  const [isOpen, setIsOpen] = useState(false);

  const options: ApexOptions = {
    colors: ["#465fff"],
    chart: {
      fontFamily: "var(--font-outfit), sans-serif",
      type: "bar",
      height: 200,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "40%",
        borderRadius: 4,
        borderRadiusApplication: "end",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 4,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: "#98A2B3",
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#98A2B3",
          fontSize: "12px",
        },
      },
    },
    grid: {
      borderColor: "#F2F4F7",
      strokeDashArray: 3,
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: (val: number) => `$${val}k`,
      },
    },
  };

  const series = [
    {
      name: "Exports ($K)",
      data: [168, 385, 201, 298, 187, 195, 291, 110, 215, 390, 280, 112],
    },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] sm:p-6 shadow-theme-xs">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white">
            Monthly Export Revenue
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
            Charcoal briquettes export turnover
          </p>
        </div>

        <div className="relative inline-block">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="dropdown-toggle p-1 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
            aria-label="Options"
          >
            <HorizontaLDots className="size-5" />
          </button>
          <Dropdown
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            className="w-36 p-1.5"
          >
            <DropdownItem
              onItemClick={() => setIsOpen(false)}
              className="text-xs"
            >
              Export CSV
            </DropdownItem>
            <DropdownItem
              onItemClick={() => setIsOpen(false)}
              className="text-xs"
            >
              Refresh Data
            </DropdownItem>
          </Dropdown>
        </div>
      </div>

      <div className="max-w-full overflow-x-auto custom-scrollbar">
        <div className="min-w-[500px] xl:min-w-full">
          <ReactApexChart
            options={options}
            series={series}
            type="bar"
            height={200}
          />
        </div>
      </div>
    </div>
  );
}

