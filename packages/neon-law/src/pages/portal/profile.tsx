import { Box, Heading } from '@chakra-ui/core';
import { PortalLayout } from '@neonlaw/shared-ui/src/layouts/portalLayout';
import {
  PortalProfileCard
} from '@neonlaw/shared-ui/src/components/cards/portalProfileCard';
import {
  PortalProfileForm
} from '@neonlaw/shared-ui/src/forms/portalProfileForm';
import React from 'react';

const PortalProfilePage = () => {
  return (
    <PortalLayout>
      <Box margin="1rem 0">
        <Heading textAlign="center">Your Profile</Heading>
      </Box>
      <Box margin="1rem 0">
        <PortalProfileCard />
      </Box>
      <Box margin="1rem 0">
        <PortalProfileForm />
      </Box>
    </PortalLayout>
  );
};

export default PortalProfilePage;
