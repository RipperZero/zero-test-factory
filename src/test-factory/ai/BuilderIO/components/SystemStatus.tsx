import { FC } from "react";

const SystemStatus: FC = () => {
  return (
    <section className="mt-6 flex w-[1223px] max-w-full flex-wrap justify-between gap-5 self-center rounded-sm bg-white px-8 py-7 whitespace-nowrap max-md:px-5">
      <div className="flex flex-col">
        <h2 className="self-start text-base text-black">系统状态</h2>
        <div className="mt-7 flex flex-col self-end text-center">
          <div className="self-start text-2xl text-black">128</div>
          <div className="mt-2 text-sm text-black">在途订单</div>
        </div>
      </div>
      <div className="mt-14 flex flex-col items-start self-end text-center max-md:mt-10">
        <div className="text-2xl text-black">85%</div>
        <div className="mt-2 ml-3 text-sm text-black max-md:ml-2.5">准时率</div>
      </div>
      <div className="mt-14 flex flex-col self-end text-center max-md:mt-10">
        <div className="self-start text-2xl text-black max-md:ml-2">32</div>
        <div className="mt-2 text-sm text-black">活跃车辆</div>
      </div>
      <div className="flex flex-col items-start text-center text-sm text-black">
        <nav className="flex w-full flex-col self-stretch pl-8 max-md:pl-5">
          <div className="flex gap-10 self-start">
            <button>日</button>
            <button className="text-black">周</button>
            <button>月</button>
          </div>
          <div className="mt-2 ml-5 flex h-0.5 w-[38px] shrink-0 self-center bg-sky-500" />
        </nav>
        <div className="mt-6 text-2xl text-black">98%</div>
        <div className="mt-2">客户满意度</div>
      </div>
    </section>
  );
};

export { SystemStatus };
