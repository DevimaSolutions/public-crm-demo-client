import React, { useMemo } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { PublicLayout, PrivateLayout } from '@/components/Layouts';
import { useSelector } from 'react-redux';
import { userRoleSelector } from '@/redux/authorization/selectors';
import defaultRoutes from './routes';

const unauthorizedRoutes = defaultRoutes.filter((r) => r.isUnauthorized);

const AppRouter: React.FC = (): JSX.Element => {
  const userRole = useSelector(userRoleSelector);
  const routes = useMemo(() => {
    if (!userRole) {
      return unauthorizedRoutes;
    }

    return defaultRoutes.filter(
      (r) => !r.isUnauthorized && r.permissions.some((p) => p === userRole),
    );
  }, [userRole]);

  return (
    <Router>
      <Switch>
        {routes.map(({ name, isPublic, isSidebar, icon, component: Component, ...rest }) => {
          const Layout = isPublic ? PublicLayout : PrivateLayout;

          return (
            <Route
              key={name}
              {...rest}
              render={(props) => (
                <Layout {...props}>
                  <Component {...props} />
                </Layout>
              )}
            />
          );
        })}
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};

export default AppRouter;
