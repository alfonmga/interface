/* eslint-disable */
// @ts-nocheck
/* eslint-enable */
import { Button, Heading } from '@chakra-ui/core';
import { Flashcard } from '@neonlaw/shared-ui/src/components/flashcard';
import { Link } from 'gatsby-plugin-intl';
import { Location } from '@reach/router';
import { PublicLayout } from '@neonlaw/shared-ui/src/layouts/publicLayout';
import React from 'react';
import { Seo } from '../../components/seo';
import {
  flashcardTopics
} from '@neonlaw/shared-ui/src/forms/options/flashcardTopics';
import queryString from 'query-string';

const Flashcards = () => {
  return (
    <Location>
      {({ location }) => {
        const search = location.search ?
          queryString.parse(location.search) :
          {};
        const topicSearchParam = search.topic || 'wills-and-trusts';
        const topic: string = Array.isArray(topicSearchParam) ?
          topicSearchParam[0] :
          topicSearchParam;

        return (
          <PublicLayout>
            <Seo title="Bar Prep Flashcards" />
            <Heading textAlign="center">
              Choose a category
            </Heading>
            {flashcardTopics.map((topic, i) => (
              <Button
                key={i}
                as={Link}
                to={`${location.pathname}?topic=${topic.value}`}
                activeLink={{ backgroundColor: 'red' }}
              >
                {topic.label}
              </Button>
            ))}
            <Flashcard topic={topic} />
          </PublicLayout>
        );
      }}
    </Location >
  );
};

export default Flashcards;
