import { type AppType } from "next/app";
import "../src/styles/index.scss";
import "../src/styles/globals.css";
// import "styles/index.scss";
// import "styles/globals.css";
import Layout from "../src/comps/global/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "../src/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => {
  const persistor = persistStore(store);
  return (
    <>
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PersistGate>
      </ReduxProvider>
      <ToastContainer
        closeButton={false}
        hideProgressBar={true}
        autoClose={1500}
      />
    </>
  );
};

export default MyApp;
