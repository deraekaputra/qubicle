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
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Event.css';
import Link from '../Link';

import EventCard from '../EventCard/EventCard';

class Event extends React.Component {
  static propTypes = {
    value: PropTypes.number,
  };

  static defaultProps = {
    value: 3,
  };

  render() {
    const { value } = this.props;
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.row}>
            <div className={s.threeCol}>
              <div className={s.eventHeader}>
                <div
                  className={s.eventHeaderImage}
                  style={{
                    backgroundImage:
                      'url("https://images.unsplash.com/photo-1503270731275-f8e94bf86def?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4d9e4ca3fa2cbcfd03e5f63691c882f3&auto=format&fit=crop&w=2850&q=80")',
                  }}
                />
                <div className={s.eventHeaderOverlay} />
                <h2 className={s.eventHeaderTitle}>Events on Qubicle</h2>
                <Link className={s.eventHeaderLink} to="/" target="_blank">
                  Explore All Events
                </Link>
              </div>
            </div>
            <div className={s.nineCol}>
              {value === 0 ? (
                <div className={s.row}>
                  <div className={s.twelveCol}>
                    <div className={cx(s.eventNotAvailable, s.Big)}>
                      <div className={s.eventNotAvailableContents}>
                        <h2>
                          There&rsquo;s no<br />upcoming event.
                        </h2>
                        <h4>
                          Don&rsquo;t miss any upcoming event!<br />Get Qubicle
                          in your Inbox now!
                        </h4>
                        <form className={s.subscribeInputBig}>
                          <input
                            type="email"
                            name="email"
                            placeholder="Your email address"
                          />
                          <button type="submit">SUBSCRIBE</button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className={s.row}>
                  <div className={s.fourCol}>
                    <EventCard
                      thumbnail="https://marketplace.canva.com/MACdCzgbkDs/1/0/thumbnail_large/canva-orange-music-vinyl-music-event-poster-MACdCzgbkDs.jpg"
                      date="7"
                      month="dec"
                      title="Eleanor Sanders"
                      brandAvatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYoJ0z7nRxtwuejks0XgfQct-XfhZhE33XiyINdgr8pbY-a87Y"
                      brandName="Traya Indonesia"
                      place="JCC - Jakarta"
                    />
                  </div>
                  <div className={s.fourCol}>
                    {value === 1 ? (
                      <div className={cx(s.eventNotAvailable, s.Down)}>
                        <div className={s.eventNotAvailableContents}>
                          <h4>
                            Don&rsquo;t miss any upcoming event!<br />Get
                            Qubicle in your Inbox now!
                          </h4>
                        </div>
                      </div>
                    ) : (
                      <EventCard
                        thumbnail="https://marketplace.canva.com/MACcZqwhNdE/3/0/thumbnail_large/canva-blue-green-festival-event-poster-MACcZqwhNdE.jpg"
                        date="8"
                        month="dec"
                        title="SPLASH Art Festival"
                        brandAvatar="https://www.universities.com/assets/site/logos/morrison-university-logo-28040.jpg"
                        brandName="Art University Of Morrison"
                        place="JIExpo - Jakarta"
                      />
                    )}
                  </div>
                  <div className={s.fourCol}>
                    {value === 1 || value === 2 ? (
                      <div className={cx(s.eventNotAvailable, s.Up)}>
                        <div
                          className={s.eventNotAvailableContents}
                          style={{
                            paddingTop: `${value === 1 ? '170px' : '100px'}`,
                          }}
                        >
                          {value === 1 ? null : (
                            <h4>
                              Don&rsquo;t miss any upcoming event!<br />Get
                              Qubicle in your Inbox now!
                            </h4>
                          )}
                          <form className={s.subscribeInput}>
                            <input
                              type="email"
                              name="email"
                              placeholder="Your email address"
                            />
                            <button type="submit">SUBSCRIBE</button>
                          </form>
                        </div>
                      </div>
                    ) : (
                      <EventCard
                        thumbnail="https://i.pinimg.com/originals/9f/db/8a/9fdb8ae2d5ccd0bfefbf170cc101e1e7.jpg"
                        date="14"
                        month="dec"
                        title="TOBE SOFT with YOU"
                        brandAvatar="https://pbs.twimg.com/profile_images/3290824575/07313b06e2efc4a49f89eef0df08e6f6_400x400.png"
                        brandName="TOBESOFT"
                        place="ICE - BSD"
                      />
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Event);
