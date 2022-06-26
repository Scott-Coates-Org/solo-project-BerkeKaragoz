import "bootstrap/dist/css/bootstrap.min.css";
import ErrorBoundary from "components/error-boundary";
import { createBrowserHistory } from "history";
import { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "redux/store";
import { getData } from "redux/user";
import Home from "./home";

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

  const appElement = (
    <ErrorBoundary>
      <BrowserRouter history={history}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );

  return appElement;
}

const AppWithRedux = withReduxProvider(App);
export default AppWithRedux;
