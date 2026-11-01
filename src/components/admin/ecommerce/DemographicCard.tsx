import React from "react";

interface MarketItem {
  country: string;
  share: number;
  flag: string;
  volume: string;
}

const markets: MarketItem[] = [
  { country: "Middle East (Saudi, UAE, Kuwait)", share: 45, flag: "🇸🇦", volume: "560 MT" },
  { country: "European Union (Germany, Sweden)", share: 30, flag: "🇪🇺", volume: "374 MT" },
  { country: "North America (USA, Canada)", share: 15, flag: "🇺🇸", volume: "187 MT" },
  { country: "Asia Pacific & Domestic", share: 10, flag: "🇮🇩", volume: "127 MT" },
];

export default function DemographicCard() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] sm:p-6 shadow-theme-xs">
      <div className="mb-4">
        <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white">
          Export Market Share
        </h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
          Destination regions for premium coconut briquettes
        </p>
      </div>

      <div className="space-y-4">
        {markets.map((item) => (
          <div key={item.country} className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="flex items-center gap-2 font-medium text-gray-700 dark:text-gray-300">
                <span className="text-base">{item.flag}</span>
                {item.country}
              </span>
              <span className="font-semibold text-gray-900 dark:text-white">
                {item.volume} ({item.share}%)
              </span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
              <div
                className="h-full rounded-full bg-brand-500 transition-all duration-500"
                style={{ width: `${item.share}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

