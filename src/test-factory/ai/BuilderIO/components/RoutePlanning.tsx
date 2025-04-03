import { FC } from "react";

const RoutePlanning: FC = () => {
  return (
    <section className="mx-auto flex w-full flex-col rounded-sm bg-white px-6 pt-6 pb-20 max-md:mt-6 max-md:max-w-full max-md:px-5">
      <div className="flex gap-4 self-start text-base whitespace-nowrap text-black">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/f1a54f9d5264410ebe6bd5a01f75c60a/ad4d17476ac0ccbe6c8ff643b2406a44cae4030ff8990c3ea1244a3b470e102e?placeholderIfAbsent=true"
          alt=""
          className="aspect-square w-6 shrink-0 object-contain"
        />
        <h2>路线规划</h2>
      </div>
      <div className="mt-4 flex flex-wrap justify-between gap-5 text-sm whitespace-nowrap max-md:mr-1.5 max-md:max-w-full">
        <div className="flex flex-col">
          <p className="text-black">智能规划最优运输路线</p>
          <p className="mt-4 self-start text-black">路线优化进度</p>
        </div>
        <p className="mt-9 self-end text-black">75%</p>
      </div>
      <div className="mt-2 flex flex-col items-start rounded-lg bg-neutral-100 max-md:max-w-full max-md:pr-5">
        <div className="flex h-2 w-[414px] max-w-full shrink-0 rounded-lg bg-sky-500" />
      </div>
    </section>
  );
};

export { RoutePlanning };
