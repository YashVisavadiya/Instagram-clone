// import React, { Suspense, useMemo } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import * as ROUTES from './constants/routes';
// import UserContext from './context/user';
// import useAuthListener from './hooks/use-auth-listener';

// const Login = React.lazy(() => import('./pages/login'));
// const Dashboard = React.lazy(() => import('./pages/dashboard'));
// const SignUp = React.lazy(() => import('./pages/sign-up'));
// const Profile = React.lazy(() => import('./pages/profile'));
// const NotFound = React.lazy(() => import('./pages/not-found'));

// export default function App() {
//   const { user } = useAuthListener();

//   const UserProviderValue = useMemo(() => ({ user }), [user]);

//   return (
//     <UserContext.Provider value={UserProviderValue}>
//       <Router>
//         <Suspense fallback={<p>Loading...</p>}>
//           <Routes>
//             <Route path={ROUTES.LOGIN} element={<Login />} />
//             <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
//             <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
//             <Route path={ROUTES.PROFILE} element={<Profile />} />
//             <Route path="*" element={<NotFound />} />
//           </Routes>
//         </Suspense>
//       </Router>
//     </UserContext.Provider>
//   );
// }

// "build:css": "postcss src/styles/tailwind.css -o src/styles/app.css",
//     "watch:css": "postcss src/styles/tailwind.css -o src/styles/app.css --watch",
//     "react-scripts:start": "react-scripts start",
//     "start": "run-p watch:css react-scripts:start",
//     "build": "run-s build:css react-scripts:build",

import { lazy, Suspense, useMemo } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactLoader from './components/loader';
import * as ROUTES from './constants/routes';
import UserContext from './context/user';
import useAuthListener from './hooks/use-auth-listener';

import ProtectedRoute from './helpers/protected-route';

const Login = lazy(() => import('./pages/login'));
const SignUp = lazy(() => import('./pages/sign-up'));
const Dashboard = lazy(() => import('./pages/dashboard'));
const Profile = lazy(() => import('./pages/profile'));
const NotFound = lazy(() => import('./pages/not-found'));

export default function App() {
  const { user } = useAuthListener();

  const UserProviderValue = useMemo(() => ({ user }), [user]);

  return (
    <UserContext.Provider value={UserProviderValue}>
      <Router>
        <Suspense fallback={<ReactLoader />}>
          {/* <Suspense fallback={<p>Loading...</p>}> */}
          <Routes>
            <Route path={ROUTES.LOGIN} element={<Login />} />
            <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
            <Route path={ROUTES.PROFILE} element={<Profile />} />
            {/* <Route
              path={ROUTES.DASHBOARD}
              element={
                <ProtectedRoute user={user} path={ROUTES.DASHBOARD} element={<Dashboard />} />
              }
            /> */}
            {/* <ProtectedRoute user={user} path={ROUTES.DASHBOARD} exact>
              <Dashboard />
            </ProtectedRoute> */}
            <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </UserContext.Provider>
  );
}
