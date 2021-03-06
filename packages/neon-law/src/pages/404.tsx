import { PublicLayout } from '@neonlaw/shared-ui/src/layouts/publicLayout';
import React from 'react';

const notFoundText =
  'You just hit a route that doesn&#39;t exist... the sadness.';

const NotFoundPage = () => (
  <PublicLayout>
    <p>{notFoundText}</p>
  </PublicLayout>
);

export default NotFoundPage;
