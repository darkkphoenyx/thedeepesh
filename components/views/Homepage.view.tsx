"use client";
import { usePreloader } from "@/hooks/usePreloader";
import { Activity } from "react";
import { Homepage } from "../pages/homepage/Homepage";
import PreLoader from "../pages/preLoader/PreLoader";
import Cursor from "../ui/Cursor";

export const HomepageView = () => {
  return <HomepageViewPreloaderControl />;
};

const HomepageViewPreloaderControl = () => {
  const preloader = usePreloader();
  return (
    <div className="overflow-hidden font-poppins">
      {preloader.loading ? (
        <Activity mode="visible">
          <PreLoader />
        </Activity>
      ) : (
        <Activity mode="visible">
          <Cursor />
          <Homepage />
        </Activity>
      )}
    </div>
  );
};
