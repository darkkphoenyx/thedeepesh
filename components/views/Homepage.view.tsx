"use client";
import { usePreloader } from "@/hooks/usePreloader";
import { store } from "@/redux/store";
import { Activity } from "react";
import { Provider } from "react-redux";
import { Homepage } from "../pages/homepage/Homepage";
import PreLoader from "../pages/preLoader/PreLoader";
import Cursor from "../ui/Cursor";

export const HomepageView = () => {
  return <HomepageViewPreloaderControl />;
};

const HomepageViewPreloaderControl = () => {
  const preloader = usePreloader();
  return (
    <div className="font-poppins">
      {preloader.loading ? (
        <Activity mode="visible">
          <PreLoader />
        </Activity>
      ) : (
        <Activity mode="visible">
          <Cursor />
          <Provider store={store}>
            {!preloader.loading && <Homepage />}
          </Provider>
        </Activity>
      )}
    </div>
  );
};
