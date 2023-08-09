import React, { lazy, Suspense } from 'react';

const LazyHeaderBar = lazy(() => import('./HeaderBar'));

const HeaderBar = props => (
  <Suspense fallback={null}>
    <LazyHeaderBar {...props} />
  </Suspense>
);

export default HeaderBar;
