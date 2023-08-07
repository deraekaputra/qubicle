/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import SearchResults from './SearchResults';
import Layout from '../../components/Layout';

import data from '../../data/sample_data.json';

async function action() {
  return {
    title: 'Search - Keywords',
    chunks: ['search-results'],
    component: (
      <Layout headerActive>
        <SearchResults story={data.result} />
      </Layout>
    ),
  };
}

export default action;
