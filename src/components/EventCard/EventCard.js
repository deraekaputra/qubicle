/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './EventCard.css';
import Link from '../Link';

class EventCard extends React.Component {
  static propTypes = {
    thumbnail: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    month: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    brandAvatar: PropTypes.string.isRequired,
    brandName: PropTypes.string.isRequired,
    place: PropTypes.string.isRequired,
  };

  render() {
    const {
      thumbnail,
      date,
      month,
      title,
      brandAvatar,
      brandName,
      place,
    } = this.props;
    return (
      <div className={s.root}>
        <Link className={s.eventCardHeader} to="/" target="_blank">
          <div
            className={s.eventCardImage}
            style={{
              backgroundImage: `url("${thumbnail}")`,
            }}
          />
          <div className={s.eventCardDate}>
            <span>{date}</span>
            <small>{month}</small>
          </div>
        </Link>
        <div className={s.eventCardBody}>
          <h3 className={s.eventCardTitle}>
            <Link to="/" target="_blank">
              {title}
            </Link>
          </h3>
          <div className={s.eventCardMeta}>
            <div className={s.metaBrandAvatar}>
              <div
                style={{
                  backgroundImage: `url("${brandAvatar}")`,
                }}
              />
            </div>
            <div className={s.metaRight}>
              <span className={s.metaBrand}>{brandName}</span>
              <span className={s.metaPlace}>{place}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(EventCard);
