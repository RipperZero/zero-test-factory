import { FC, ReactNode } from "react";

interface StatisticsCardProps {
  value: string;
  label: string;
  className?: string;
}

const StatisticsCard: FC<StatisticsCardProps> = ({
  value,
  label,
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col items-start rounded-sm bg-neutral-100 py-4 pr-14 pl-4 max-md:pr-5 ${className}`}
    >
      <div className="text-2xl text-black">{value}</div>
      <div className="mt-2 text-sm text-black">{label}</div>
    </div>
  );
};

export { StatisticsCard };
export type { StatisticsCardProps };
