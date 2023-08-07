/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import ContactUs from './ContactUs';
import Layout from '../../components/Layout';

async function action() {
  return {
    title: 'Contact Us | Qubicle',
    chunks: ['contact-us'],
    component: (
      <Layout headerActive headerMenu={false}>
        <ContactUs />
      </Layout>
    ),
  };
}

export default action;
