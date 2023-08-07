import React, { lazy, Suspense } from 'react';

const LazyLanguages = lazy(() => import('./Languages'));

const Languages = props => (
  <Suspense fallback={null}>
    <LazyLanguages {...props} />
  </Suspense>
);

export default Languages;
