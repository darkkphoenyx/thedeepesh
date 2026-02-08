"use client";
import { persistor, store } from "@/redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import WorkOverview from "../pages/work/WorkOverview";
import Cursor from "../ui/Cursor";
import { WorkViewInterface } from "@/interfaces/work.interface";

export const WorkView = ({ id }: WorkViewInterface) => {
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Cursor />
          <WorkOverview id={id} />
        </PersistGate>
      </Provider>
    </div>
  );
};
