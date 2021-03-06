import { Heading, Text } from '@chakra-ui/core';
import { Button } from '@neonlaw/shared-ui/src/components/button';
import { PublicLayout } from '@neonlaw/shared-ui/src/layouts/publicLayout';
import React from 'react';
import { Router } from '@reach/router';
import { Seo } from '../components/seo';
import {
  UpwardMobilityQuestionnaire
} from '@neonlaw/shared-ui/src/components/upwardMobilityQuestionnaire';
import { navigate } from 'gatsby-plugin-intl';
import { useIntl } from 'gatsby-plugin-intl';

/* eslint-disable @typescript-eslint/no-unused-vars */
const UpwardMobilityHome = (props) => {
  /* eslint-enable @typescript-eslint/no-unused-vars */
  const intl = useIntl();
  return (
    <>
      <Seo title="Upward Mobility" />
      <Heading textAlign="center">
        {intl.formatMessage({ id: 'pages_upward_mobility.heading' })}
      </Heading>
      <Text margin="2em 0">
        {intl.formatMessage({ id: 'pages_upward_mobility.text' })}
      </Text>
      <Button
        onClick={() => { navigate('/upward-mobility/begin'); }}
      >
        {intl.formatMessage({ id: 'pages_upward_mobility.button_takeQ' })}
      </Button>
    </>
  );
};

const UpwardMobilityRouter = () => {
  return (
    <PublicLayout>
      <Router basepath="/upward-mobility">
        <UpwardMobilityQuestionnaire path=":questionId" />
        <UpwardMobilityHome path="/" />
      </Router>
    </PublicLayout>
  );
};

export default UpwardMobilityRouter;
