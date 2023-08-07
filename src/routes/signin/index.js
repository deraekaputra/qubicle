/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import SignIn from './SignIn';
import Page from '../../components/Page';

async function action() {
  return {
    title: 'Qubicle - Sign in',
    chunks: ['signin'],
    component: (
      <Page>
        <SignIn />
      </Page>
    ),
  };
}

export default action;
