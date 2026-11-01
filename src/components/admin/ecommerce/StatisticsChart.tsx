"use client";

import React from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import ChartTab from "../common/ChartTab";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
}) as any;

export default function StatisticsChart() {
  const options: ApexOptions = {
    legend: {
      show: true,
      position: "top",
      horizontalAlign: "left",
      fontFamily: "var(--font-outfit), sans-serif",
      labels: {
        colors: "#667085",
      },
    },
    colors: ["#465FFF", "#12B76A"],
    chart: {
      fontFamily: "var(--font-outfit), sans-serif",
      height: 300,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: "smooth",
      width: [2, 2],
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.35,
        opacityTo: 0.05,
        stops: [0, 95, 100],
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
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: true,
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
  };

  const series = [
    {
      name: "Orders Received",
      data: [180, 190, 170, 160, 175, 165, 170, 205, 230, 210, 240, 235],
    },
    {
      name: "Shipments Completed",
      data: [140, 150, 130, 140, 155, 140, 160, 185, 210, 195, 220, 215],
    },
  ];

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] sm:p-6 shadow-theme-xs">
      <div className="flex flex-col gap-4 mb-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white">
            Performance Statistics
          </h3>
          <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
            Order fulfillment comparison over time
          </p>
        </div>
        <div className="flex items-center">
          <ChartTab />
        </div>
      </div>

      <div className="max-w-full overflow-x-auto custom-scrollbar">
        <div className="min-w-[600px] xl:min-w-full">
          <ReactApexChart
            options={options}
            series={series}
            type="area"
            height={300}
          />
        </div>
      </div>
    </div>
  );
}

