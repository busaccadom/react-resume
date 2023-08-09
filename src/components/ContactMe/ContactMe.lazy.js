import React, { lazy, Suspense } from 'react';

const LazyContactMe = lazy(() => import('./ContactMe'));

const ContactMe = props => (
  <Suspense fallback={null}>
    <LazyContactMe {...props} />
  </Suspense>
);

export default ContactMe;
