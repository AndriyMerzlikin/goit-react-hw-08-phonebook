import { Navigation } from 'components/Navigation/Navigation';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
      <Navigation />
      <Toaster />
      <Suspense fallback={'LOADING PAGE...'}>
        <Outlet />
      </Suspense>
    </div>
  );
};
