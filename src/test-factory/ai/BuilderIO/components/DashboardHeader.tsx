"use client";

import { FC } from "react";

const DashboardHeader: FC = () => {
  return (
    <header className="flex w-full flex-wrap justify-between gap-5 bg-white px-6 py-4 whitespace-nowrap max-md:max-w-full max-md:px-5">
      <div className="flex gap-6">
        <div className="my-auto flex gap-1">
          <h1 className="grow text-xl text-black">11智能物流管理平台</h1>
          <button className="my-auto text-center text-sm text-black">
            切换视图
          </button>
        </div>
        <button className="rounded bg-sky-500 px-5 py-2 text-center text-sm text-black">
          新建订单
        </button>
      </div>
      <div className="my-auto flex gap-7 text-sm text-black">
        <div className="flex gap-2">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/f1a54f9d5264410ebe6bd5a01f75c60a/1d6e9e3d-bc94-4249-bb1d-f9490e6c3532?placeholderIfAbsent=true"
            alt="Notifications"
            className="aspect-square h-8 w-8 shrink-0 rounded-lg bg-neutral-100 object-contain"
          />
          <span className="my-auto">通知</span>
        </div>
        <button className="h-8 w-8 rounded-lg bg-sky-500 px-0.5">管理</button>
      </div>
    </header>
  );
};

export { DashboardHeader };
