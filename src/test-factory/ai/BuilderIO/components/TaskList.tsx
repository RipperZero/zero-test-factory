import { FC } from "react";

const TaskList: FC = () => {
  return (
    <section className="mt-6 flex w-full max-w-[1223px] flex-wrap justify-between gap-5 self-center rounded-sm bg-white p-6 max-md:max-w-full max-md:px-5">
      <div className="flex flex-col whitespace-nowrap text-black">
        <h2 className="self-start text-base">待办事项</h2>
        <ul className="mt-6 flex flex-col items-start pl-7 text-sm max-md:pl-5">
          <li>更新运输进度信息</li>
          <li className="mt-4">审核新提交的订单</li>
          <li className="mt-4">优化配送路线</li>
        </ul>
      </div>
      <div className="text-xs text-black">
        <button className="text-sm text-black">查看全部</button>
        <p className="mt-7">今天 14:00</p>
        <p className="mt-5">今天 16:00</p>
        <p className="mt-5">明天 10:00</p>
      </div>
    </section>
  );
};

export { TaskList };
