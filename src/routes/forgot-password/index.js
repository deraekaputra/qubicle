/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import ForgotPassword from './ForgotPassword';
import Page from '../../components/Page';

async function action() {
  return {
    title: 'Qubicle - Forgot password',
    chunks: ['forgot-password'],
    component: (
      <Page>
        <ForgotPassword />
      </Page>
    ),
  };
}

export default action;
