"use client";

import { FC } from "react";

import { CargoTracking } from "./components/CargoTracking";
import { DashboardFooter } from "./components/DashboardFooter";
import { DashboardHeader } from "./components/DashboardHeader";
import { RoutePlanning } from "./components/RoutePlanning";
import { SystemStatus } from "./components/SystemStatus";
import { TaskList } from "./components/TaskList";

const LogisticsDashboard: FC = () => {
  return (
    <main className="flex w-full flex-col bg-gray-100 pb-20 max-md:max-w-full">
      <DashboardHeader />

      <div className="flex h-px shrink-0 bg-zinc-100 max-md:max-w-full" />

      <section className="mt-6 w-full max-w-[1224px] self-center max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-6/12 max-md:ml-0 max-md:w-full">
            <CargoTracking />
          </div>
          <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <RoutePlanning />
          </div>
        </div>
      </section>

      <TaskList />
      <SystemStatus />

      <div className="mt-6 flex h-px shrink-0 bg-zinc-100 max-md:max-w-full" />
      <DashboardFooter />
    </main>
  );
};

export { LogisticsDashboard };
