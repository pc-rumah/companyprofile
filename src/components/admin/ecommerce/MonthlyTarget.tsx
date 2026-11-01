"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import { HorizontaLDots, ArrowUpIcon } from "../icons";
import { Dropdown, DropdownItem } from "../ui/Dropdown";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
}) as any;

export default function MonthlyTarget() {
  const [isOpen, setIsOpen] = useState(false);
  const series = [78.4];

  const options: ApexOptions = {
    colors: ["#465FFF"],
    chart: {
      fontFamily: "var(--font-outfit), sans-serif",
      type: "radialBar",
      height: 300,
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        hollow: {
          size: "72%",
        },
        track: {
          background: "#F2F4F7",
          strokeWidth: "100%",
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            fontSize: "30px",
            fontWeight: "700",
            offsetY: -20,
            color: "#1D2939",
            formatter: (val) => `${val}%`,
          },
        },
      },
    },
    fill: {
      type: "solid",
      colors: ["#465FFF"],
    },
    stroke: {
      lineCap: "round",
    },
    labels: ["Export Target"],
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] sm:p-6 shadow-theme-xs flex flex-col justify-between h-full">
      <div className="flex items-center justify-between mb-2">
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white">
            Quarterly Goal
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
            Production & export shipment pace
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
              Adjust Target
            </DropdownItem>
          </Dropdown>
        </div>
      </div>

      <div className="relative my-auto flex flex-col items-center">
        <div className="w-full max-w-[280px]">
          <ReactApexChart
            options={options}
            series={series}
            type="radialBar"
            height={260}
          />
        </div>

        <span className="inline-flex items-center gap-1 -mt-6 rounded-full bg-success-50 px-3 py-1 text-xs font-semibold text-success-600 dark:bg-success-500/15 dark:text-success-400">
          <ArrowUpIcon className="size-3" />
          +14.8% vs last month
        </span>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800 grid grid-cols-2 gap-4 text-center">
        <div>
          <span className="text-xs text-gray-400">Target</span>
          <p className="font-bold text-gray-800 text-sm dark:text-white">2,000 MT</p>
        </div>
        <div>
          <span className="text-xs text-gray-400">Shipped</span>
          <p className="font-bold text-brand-500 text-sm">1,568 MT</p>
        </div>
      </div>
    </div>
  );
}

