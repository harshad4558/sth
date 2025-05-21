import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { ClerkProvider } from '@clerk/clerk-react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Home from './components/Home';
import SignInPage from './Authent/index.jsx';
import Mission from './components/mission';
import CarbonFootprint from './components/carbon';
import Features from './components/Features';
import CommunityFeedback from './components/feedback';
import CyclingInfrastructure from './components/cycling-infrastructur';
import GetInTouch from './components/getint';
import PublicTransit from './components/publicTransit';
import EvCharging from './components/EvCharging';
import MapPage from './components/MapPage';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'Features', element: <Features /> },
      { path: 'Mission', element: <Mission /> },
      { path: 'CarbonFootprint', element: <CarbonFootprint /> },
      { path: 'CommunityFeedback', element: <CommunityFeedback /> },
      { path: 'CyclingInfrastructure', element: <CyclingInfrastructure /> },
      { path: 'PublicTransit', element: <PublicTransit /> },
      { path: 'EvCharging', element: <EvCharging /> },
      { path: 'MapPage', element: <MapPage /> },
      { path: 'GetInTouch', element: <GetInTouch /> },
    ],
  },
  {
    path: '/Authent/sign-in',
    element: <SignInPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>
);
