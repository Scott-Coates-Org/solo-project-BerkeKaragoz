import "bootstrap/dist/css/bootstrap.min.css";
import ErrorBoundary from "components/error-boundary";
import { createBrowserHistory } from "history";
import { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import { Router } from "react-router-dom";
import store from "redux/store";
import { getData } from "redux/user";

// DO NOT import BrowserRouter (as per tutorial). that caused router to not actually do anything.
// see here: https://stackoverflow.com/questions/63554233/react-router-v5-history-push-changes-the-address-bar-but-does-not-change-the
// https://github.com/ReactTraining/react-router/issues/4059#issuecomment-254437084
// this is incredibly common but not our problem: https://stackoverflow.com/questions/62449663/react-router-with-custom-history-not-working
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
      <Router history={history}></Router>
    </ErrorBoundary>
  );

  return appElement;
}

const AppWithRedux = withReduxProvider(App);
export default AppWithRedux;
