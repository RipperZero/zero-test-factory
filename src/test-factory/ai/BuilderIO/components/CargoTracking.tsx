import { FC } from "react";

import { StatisticsCard } from "./StatisticsCard";

const CargoTracking: FC = () => {
  return (
    <section className="w-full grow rounded-sm bg-white p-6 max-md:mt-6 max-md:max-w-full max-md:px-5">
      <div className="flex gap-5 max-md:flex-col">
        <div className="w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex w-full flex-col items-start whitespace-nowrap max-md:mt-10">
            <div className="flex gap-4 text-base text-black">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/f1a54f9d5264410ebe6bd5a01f75c60a/b195d62fc71d39b2600f52909062739910b53dbe0fae2122bb8aafeee8b80734?placeholderIfAbsent=true"
                alt=""
                className="aspect-square w-6 shrink-0 object-contain"
              />
              <h2>货物追踪</h2>
            </div>
            <p className="mt-4 text-sm text-black">
              实时监控货物运输状态，确保安全
            </p>
            <StatisticsCard
              value="89%"
              label="准时送达率"
              className="mt-4 self-stretch"
            />
          </div>
        </div>
        <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <StatisticsCard
            value="256"
            label="在途包裹"
            className="mt-20 max-md:mt-10"
          />
        </div>
      </div>
    </section>
  );
};

export { CargoTracking };
