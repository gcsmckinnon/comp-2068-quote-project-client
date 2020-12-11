import React from 'react';
import PageRoutes from '../../Pages/routes';
import UserRoutes from '../../Users/routes';
import AuthenticationRoutes from '../../Authentication/routes';

import QuoteRoutes from '../../Quotes/routes';

const Routes = () => {
  return (
    <>
      <PageRoutes/>
      <UserRoutes/>
      <AuthenticationRoutes/>
      <QuoteRoutes/>
    </>
  );
}
 
export default Routes;