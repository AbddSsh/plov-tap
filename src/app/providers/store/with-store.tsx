import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistedStore } from "./store.config";

export const withStore = (Component: React.FC) => {
  return () => (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <Component />
      </PersistGate>
    </Provider>
  );
};
