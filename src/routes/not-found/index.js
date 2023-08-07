/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Page from '../../components/Page';
import NotFound from './NotFound';

const status = '404';

function action() {
  return {
    title: 'Not Found',
    chunks: ['not-found'],
    status: 404,
    component: (
      <Page>
        <NotFound status={status} />
      </Page>
    ),
  };
}

export default action;
