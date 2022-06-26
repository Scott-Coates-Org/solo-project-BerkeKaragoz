import "bootstrap/dist/css/bootstrap.min.css";
import ErrorBoundary from "components/ErrorBoundary";
import { createBrowserHistory } from "history";
import { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "redux/store";
import { getData } from "redux/user";
import Desk from "./desk/Desk";
import Home from "./Home";
import { ObsProvider } from "./obs/ObsProvider";

export const history = createBrowserHistory();

function withReduxProvider(Component) {
  return function withReduxProvider(props) {
    return (
      <Provider store={store}>
        <Component {...props} />
      </Provider>
    );
  };
}

function App() {
  const props = {};

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <ErrorBoundary>
      <ObsProvider>
        <BrowserRouter history={history}>
          <Routes>
            <Route path="/desk" element={<Desk />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </BrowserRouter>
      </ObsProvider>
    </ErrorBoundary>
  );
}

const AppWithRedux = withReduxProvider(App);
export default AppWithRedux;
