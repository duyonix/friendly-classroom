import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeTemplate from './containers/HomeTemplate';
import ClassroomTemplate from './containers/ClassroomTemplate';
import PageNotFound from "./containers/PageNotFound.jsx";
import { routeHome, routeClassroom } from "./routes";

function App() {
  const showLayoutHome = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <HomeTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.component}
          />
        );
      });
    }
  };

  const showLayoutClassroom = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <ClassroomTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.component}
          />
        );
      });
    }
  };

  return (
    <BrowserRouter>
      <Switch>
        {showLayoutHome(routeHome)}
        {showLayoutClassroom(routeClassroom)}
        <Route path="" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
