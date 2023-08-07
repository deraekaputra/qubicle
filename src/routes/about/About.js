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
import range from 'lodash.range';
import cx from 'classnames';
import { Tabs, TabLink, TabContent } from 'react-tabs-redux';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './About.css';
import Link from '../../components/Link';

import aboutGif from '../../../public/about-header-image.gif';

class About extends React.Component {
  static propTypes = {
    story: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

  state = {
    intmusic: '#F8DB65',
    intculinary: '#73E4B2',
    intfashion: '#827AF9',
    intbeauty: '#FB74D2',
    inttravel: '#FA675D',
    intart: '#51EFE8',
    intothers: '#A5A5A5',
    contentLoading: false,
  };

  componentWillMount() {
    this.showLoading = setTimeout(
      () => this.setState({ contentLoading: true }),
      3000,
    );
  }

  componentWillUnmount() {
    clearTimeout(this.showLoading);
  }

  interestHoverIn = event => {
    this.setState({
      [event.target.getAttribute('data-interest')]: this.state[
        `int${event.target.getAttribute('data-interest')}`
      ],
    });

    event.preventDefault();
  };

  interestHoverOut = event => {
    this.setState({
      [event.target.getAttribute('data-interest')]: '',
    });

    event.preventDefault();
  };

  render() {
    const { story } = this.props;
    return (
      <div className={s.root}>
        {this.state.contentLoading ? (
          <div>
            <div className={s.hero}>
              <div className={s.heroTitle}>
                <div className={s.container}>
                  <h1 className={s.title}>
                    <span>
                      Stories tailored for you{' '}
                      <span role="img" aria-label="cocktail glass">
                        🍸
                      </span>
                    </span>
                  </h1>
                </div>
              </div>
            </div>
            <div className={s.contents}>
              <div className={s.container}>
                <div className={s.contentsBorder} />
                <div className={s.aboutHeader}>
                  <img
                    className={s.aboutHeaderImage}
                    src={aboutGif}
                    alt="about qubicle"
                  />
                </div>
                <div className={s.aboutContent}>
                  <h1>Feed your curiousity; shift your perspective</h1>
                  <p>
                    We are an online media bringing forth the many facets of
                    youth and pop culture—encompassing music to art, fashion to
                    beauty, and culinary to travel. We are here to foster a
                    culture of curiosity by highlighting stories and communities
                    from across the country. The space to wander, and ponder, on
                    diverse ideas and perspectives.
                  </p>
                </div>
                <div className={s.aboutStories}>
                  <Tabs
                    renderActiveTabContentOnly
                    activeLinkStyle={{
                      color: '#CACACA',
                    }}
                  >
                    <nav className={s.aboutStoriesNav}>
                      <ul>
                        <li>
                          <TabLink
                            to="music"
                            className={s.aboutStoriesLink}
                            data-interest="music"
                            onMouseEnter={this.interestHoverIn}
                            onMouseLeave={this.interestHoverOut}
                            style={{
                              color: this.state.music,
                            }}
                          >
                            MUSIC
                          </TabLink>
                        </li>
                        <li>
                          <TabLink
                            to="travel"
                            className={s.aboutStoriesLink}
                            data-interest="travel"
                            onMouseEnter={this.interestHoverIn}
                            onMouseLeave={this.interestHoverOut}
                            style={{
                              color: this.state.travel,
                            }}
                          >
                            TRAVEL
                          </TabLink>
                        </li>
                        <li>
                          <TabLink
                            to="culinary"
                            className={s.aboutStoriesLink}
                            data-interest="culinary"
                            onMouseEnter={this.interestHoverIn}
                            onMouseLeave={this.interestHoverOut}
                            style={{
                              color: this.state.culinary,
                            }}
                          >
                            CULINARY
                          </TabLink>
                        </li>
                        <li>
                          <TabLink
                            to="fashion"
                            className={s.aboutStoriesLink}
                            data-interest="fashion"
                            onMouseEnter={this.interestHoverIn}
                            onMouseLeave={this.interestHoverOut}
                            style={{
                              color: this.state.fashion,
                            }}
                          >
                            FASHION
                          </TabLink>
                        </li>
                        <li>
                          <TabLink
                            to="beauty"
                            className={s.aboutStoriesLink}
                            data-interest="beauty"
                            onMouseEnter={this.interestHoverIn}
                            onMouseLeave={this.interestHoverOut}
                            style={{
                              color: this.state.beauty,
                            }}
                          >
                            BEAUTY
                          </TabLink>
                        </li>
                        <li>
                          <TabLink
                            to="art"
                            className={s.aboutStoriesLink}
                            data-interest="art"
                            onMouseEnter={this.interestHoverIn}
                            onMouseLeave={this.interestHoverOut}
                            style={{
                              color: this.state.art,
                            }}
                          >
                            ART
                          </TabLink>
                        </li>
                        <li>
                          <TabLink
                            to="others"
                            className={s.aboutStoriesLink}
                            data-interest="others"
                            onMouseEnter={this.interestHoverIn}
                            onMouseLeave={this.interestHoverOut}
                            style={{
                              color: this.state.others,
                            }}
                          >
                            OTHERS
                          </TabLink>
                        </li>
                      </ul>
                    </nav>
                    <TabContent for="music" className={s.aboutStoriesContents}>
                      <div className={s.row}>
                        <div className={s.eightCol}>
                          <div className={s.row}>
                            <div className={s.sixCol}>
                              <div className={cx(s.card, s.storyOne)}>
                                <div className={s.cardImage}>
                                  <Link
                                    className={s.inner}
                                    to="/"
                                    style={{
                                      backgroundImage: `url(${
                                        story[9].post_image_thumb_url
                                      })`,
                                    }}
                                  >
                                    <div
                                      className={s.text}
                                      data-text={story[9].summary}
                                    />
                                    <div
                                      className={s.overlay}
                                      style={{
                                        backgroundColor: this.state.intmusic,
                                      }}
                                    />
                                  </Link>
                                  <div className={s.interestLabel}>
                                    <Link
                                      to="/"
                                      style={{
                                        color: this.state.intmusic,
                                      }}
                                    >
                                      MUSIC
                                    </Link>
                                  </div>
                                  <div className={s.readTime}>
                                    <span>8</span>
                                    <small
                                      style={{
                                        color: this.state.intmusic,
                                      }}
                                    >
                                      MIN
                                    </small>
                                  </div>
                                </div>
                                <div className={s.cardBody}>
                                  <div className={s.cardTitle}>
                                    <h1 className={s.title}>
                                      <Link to="/">{story[9].title}</Link>
                                    </h1>
                                    <span className={s.summary}>
                                      {story[9].summary}
                                    </span>
                                  </div>
                                  <div className={s.cardMeta}>
                                    <div className={s.metaAvatar}>
                                      <div
                                        style={{
                                          backgroundImage: `url(${
                                            story[9].userpost
                                              .user_image_profile_url
                                          })`,
                                        }}
                                      />
                                    </div>
                                    <div className={s.metaRight}>
                                      <span className={s.metaAuthor}>
                                        {story[9].userpost.user_fullname}
                                      </span>
                                      <span className={s.metaDate}>
                                        May 27, 2018
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={s.sixCol}>
                              <div className={s.row}>
                                {range(2).map(i => (
                                  <div className={s.twelveCol} key={i}>
                                    <div className={s.card}>
                                      <div className={s.cardImage}>
                                        <Link
                                          className={s.inner}
                                          to="/"
                                          style={{
                                            backgroundImage: `url(${
                                              story[i].post_image_thumb_url
                                            })`,
                                          }}
                                        >
                                          <div
                                            className={s.text}
                                            data-text={story[i].summary}
                                          />
                                          <div
                                            className={s.overlay}
                                            style={{
                                              backgroundColor: this.state
                                                .intmusic,
                                            }}
                                          />
                                        </Link>
                                        <div className={s.interestLabel}>
                                          <Link
                                            to="/"
                                            style={{
                                              color: this.state.intmusic,
                                            }}
                                          >
                                            MUSIC
                                          </Link>
                                        </div>
                                        <div className={s.readTime}>
                                          <span>8</span>
                                          <small
                                            style={{
                                              color: this.state.intmusic,
                                            }}
                                          >
                                            MIN
                                          </small>
                                        </div>
                                      </div>
                                      <div className={s.cardBody}>
                                        <div className={s.cardTitle}>
                                          <h1 className={s.title}>
                                            <Link to="/">{story[i].title}</Link>
                                          </h1>
                                        </div>
                                        <div className={s.cardMeta}>
                                          <span className={s.metaAuthor}>
                                            {story[i].userpost.user_fullname}
                                          </span>
                                          <span className={s.metaDivider} />
                                          <span className={s.metaDate}>
                                            May 27, 2018
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={s.fourCol}>
                          <div className={s.aboutStoriesTrending}>
                            <h1 className={s.aboutStoriesTitle}>
                              Trending on<br />Music
                            </h1>
                            <div className={s.cardInline}>
                              <Link
                                className={s.cardNumber}
                                to="/"
                                style={{
                                  borderColor: this.state.intmusic,
                                  color: this.state.intmusic,
                                }}
                              >
                                1
                              </Link>
                              <div className={s.cardBody}>
                                <div className={s.interestLabel}>
                                  <Link
                                    to="/"
                                    style={{ color: this.state.intmusic }}
                                  >
                                    MUSIC
                                  </Link>
                                </div>
                                <div className={s.cardTitle}>
                                  <h1 className={s.title}>
                                    <Link to="/">{story[4].title}</Link>
                                  </h1>
                                </div>
                                <div className={s.cardMeta}>
                                  <span className={s.metaAuthor}>
                                    {story[4].userpost.user_fullname}
                                  </span>
                                  <span className={s.metaDivider} />
                                  <span className={s.metaDate}>
                                    May 27, 2018
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className={s.cardInline}>
                              <Link
                                className={s.cardNumber}
                                to="/"
                                style={{
                                  borderColor: this.state.intmusic,
                                  color: this.state.intmusic,
                                }}
                              >
                                2
                              </Link>
                              <div className={s.cardBody}>
                                <div className={s.interestLabel}>
                                  <Link
                                    to="/"
                                    style={{ color: this.state.intmusic }}
                                  >
                                    MUSIC
                                  </Link>
                                </div>
                                <div className={s.cardTitle}>
                                  <h1 className={s.title}>
                                    <Link to="/">{story[5].title}</Link>
                                  </h1>
                                </div>
                                <div className={s.cardMeta}>
                                  <span className={s.metaAuthor}>
                                    {story[5].userpost.user_fullname}
                                  </span>
                                  <span className={s.metaDivider} />
                                  <span className={s.metaDate}>
                                    May 27, 2018
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className={s.cardInline}>
                              <Link
                                className={s.cardNumber}
                                to="/"
                                style={{
                                  borderColor: this.state.intmusic,
                                  color: this.state.intmusic,
                                }}
                              >
                                3
                              </Link>
                              <div className={s.cardBody}>
                                <div className={s.interestLabel}>
                                  <Link
                                    to="/"
                                    style={{ color: this.state.intmusic }}
                                  >
                                    MUSIC
                                  </Link>
                                </div>
                                <div className={s.cardTitle}>
                                  <h1 className={s.title}>
                                    <Link to="/">{story[6].title}</Link>
                                  </h1>
                                </div>
                                <div className={s.cardMeta}>
                                  <span className={s.metaAuthor}>
                                    {story[6].userpost.user_fullname}
                                  </span>
                                  <span className={s.metaDivider} />
                                  <span className={s.metaDate}>
                                    May 27, 2018
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabContent>
                    <TabContent for="travel" className={s.aboutStoriesContents}>
                      <div className={s.row}>
                        <div className={s.eightCol}>
                          <div className={s.row}>
                            <div className={s.sixCol}>
                              <div className={cx(s.card, s.storyOne)}>
                                <div className={s.cardImage}>
                                  <Link
                                    className={s.inner}
                                    to="/"
                                    style={{
                                      backgroundImage: `url(${
                                        story[9].post_image_thumb_url
                                      })`,
                                    }}
                                  >
                                    <div
                                      className={s.text}
                                      data-text={story[9].summary}
                                    />
                                    <div
                                      className={s.overlay}
                                      style={{
                                        backgroundColor: this.state.inttravel,
                                      }}
                                    />
                                  </Link>
                                  <div className={s.interestLabel}>
                                    <Link
                                      to="/"
                                      style={{
                                        color: this.state.inttravel,
                                      }}
                                    >
                                      TRAVEL
                                    </Link>
                                  </div>
                                  <div className={s.readTime}>
                                    <span>8</span>
                                    <small
                                      style={{
                                        color: this.state.inttravel,
                                      }}
                                    >
                                      MIN
                                    </small>
                                  </div>
                                </div>
                                <div className={s.cardBody}>
                                  <div className={s.cardTitle}>
                                    <h1 className={s.title}>
                                      <Link to="/">{story[9].title}</Link>
                                    </h1>
                                    <span className={s.summary}>
                                      {story[9].summary}
                                    </span>
                                  </div>
                                  <div className={s.cardMeta}>
                                    <div className={s.metaAvatar}>
                                      <div
                                        style={{
                                          backgroundImage: `url(${
                                            story[9].userpost
                                              .user_image_profile_url
                                          })`,
                                        }}
                                      />
                                    </div>
                                    <div className={s.metaRight}>
                                      <span className={s.metaAuthor}>
                                        {story[9].userpost.user_fullname}
                                      </span>
                                      <span className={s.metaDate}>
                                        May 27, 2018
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={s.sixCol}>
                              <div className={s.row}>
                                {range(2).map(i => (
                                  <div className={s.twelveCol} key={i}>
                                    <div className={s.card}>
                                      <div className={s.cardImage}>
                                        <Link
                                          className={s.inner}
                                          to="/"
                                          style={{
                                            backgroundImage: `url(${
                                              story[i].post_image_thumb_url
                                            })`,
                                          }}
                                        >
                                          <div
                                            className={s.text}
                                            data-text={story[i].summary}
                                          />
                                          <div
                                            className={s.overlay}
                                            style={{
                                              backgroundColor: this.state
                                                .inttravel,
                                            }}
                                          />
                                        </Link>
                                        <div className={s.interestLabel}>
                                          <Link
                                            to="/"
                                            style={{
                                              color: this.state.inttravel,
                                            }}
                                          >
                                            TRAVEL
                                          </Link>
                                        </div>
                                        <div className={s.readTime}>
                                          <span>8</span>
                                          <small
                                            style={{
                                              color: this.state.inttravel,
                                            }}
                                          >
                                            MIN
                                          </small>
                                        </div>
                                      </div>
                                      <div className={s.cardBody}>
                                        <div className={s.cardTitle}>
                                          <h1 className={s.title}>
                                            <Link to="/">{story[i].title}</Link>
                                          </h1>
                                        </div>
                                        <div className={s.cardMeta}>
                                          <span className={s.metaAuthor}>
                                            {story[i].userpost.user_fullname}
                                          </span>
                                          <span className={s.metaDivider} />
                                          <span className={s.metaDate}>
                                            May 27, 2018
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={s.fourCol}>
                          <div className={s.aboutStoriesTrending}>
                            <h1 className={s.aboutStoriesTitle}>
                              Trending on<br />Travel
                            </h1>
                            <div className={s.cardInline}>
                              <Link
                                className={s.cardNumber}
                                to="/"
                                style={{
                                  borderColor: this.state.inttravel,
                                  color: this.state.inttravel,
                                }}
                              >
                                1
                              </Link>
                              <div className={s.cardBody}>
                                <div className={s.interestLabel}>
                                  <Link
                                    to="/"
                                    style={{ color: this.state.inttravel }}
                                  >
                                    TRAVEL
                                  </Link>
                                </div>
                                <div className={s.cardTitle}>
                                  <h1 className={s.title}>
                                    <Link to="/">{story[4].title}</Link>
                                  </h1>
                                </div>
                                <div className={s.cardMeta}>
                                  <span className={s.metaAuthor}>
                                    {story[4].userpost.user_fullname}
                                  </span>
                                  <span className={s.metaDivider} />
                                  <span className={s.metaDate}>
                                    May 27, 2018
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className={s.cardInline}>
                              <Link
                                className={s.cardNumber}
                                to="/"
                                style={{
                                  borderColor: this.state.inttravel,
                                  color: this.state.inttravel,
                                }}
                              >
                                2
                              </Link>
                              <div className={s.cardBody}>
                                <div className={s.interestLabel}>
                                  <Link
                                    to="/"
                                    style={{ color: this.state.inttravel }}
                                  >
                                    TRAVEL
                                  </Link>
                                </div>
                                <div className={s.cardTitle}>
                                  <h1 className={s.title}>
                                    <Link to="/">{story[5].title}</Link>
                                  </h1>
                                </div>
                                <div className={s.cardMeta}>
                                  <span className={s.metaAuthor}>
                                    {story[5].userpost.user_fullname}
                                  </span>
                                  <span className={s.metaDivider} />
                                  <span className={s.metaDate}>
                                    May 27, 2018
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className={s.cardInline}>
                              <Link
                                className={s.cardNumber}
                                to="/"
                                style={{
                                  borderColor: this.state.inttravel,
                                  color: this.state.inttravel,
                                }}
                              >
                                3
                              </Link>
                              <div className={s.cardBody}>
                                <div className={s.interestLabel}>
                                  <Link
                                    to="/"
                                    style={{ color: this.state.inttravel }}
                                  >
                                    TRAVEL
                                  </Link>
                                </div>
                                <div className={s.cardTitle}>
                                  <h1 className={s.title}>
                                    <Link to="/">{story[6].title}</Link>
                                  </h1>
                                </div>
                                <div className={s.cardMeta}>
                                  <span className={s.metaAuthor}>
                                    {story[6].userpost.user_fullname}
                                  </span>
                                  <span className={s.metaDivider} />
                                  <span className={s.metaDate}>
                                    May 27, 2018
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabContent>
                    <TabContent
                      for="culinary"
                      className={s.aboutStoriesContents}
                    >
                      <div className={s.row}>
                        <div className={s.eightCol}>
                          <div className={s.row}>
                            <div className={s.sixCol}>
                              <div className={cx(s.card, s.storyOne)}>
                                <div className={s.cardImage}>
                                  <Link
                                    className={s.inner}
                                    to="/"
                                    style={{
                                      backgroundImage: `url(${
                                        story[9].post_image_thumb_url
                                      })`,
                                    }}
                                  >
                                    <div
                                      className={s.text}
                                      data-text={story[9].summary}
                                    />
                                    <div
                                      className={s.overlay}
                                      style={{
                                        backgroundColor: this.state.intculinary,
                                      }}
                                    />
                                  </Link>
                                  <div className={s.interestLabel}>
                                    <Link
                                      to="/"
                                      style={{
                                        color: this.state.intculinary,
                                      }}
                                    >
                                      MUSIC
                                    </Link>
                                  </div>
                                  <div className={s.readTime}>
                                    <span>8</span>
                                    <small
                                      style={{
                                        color: this.state.intculinary,
                                      }}
                                    >
                                      MIN
                                    </small>
                                  </div>
                                </div>
                                <div className={s.cardBody}>
                                  <div className={s.cardTitle}>
                                    <h1 className={s.title}>
                                      <Link to="/">{story[9].title}</Link>
                                    </h1>
                                    <span className={s.summary}>
                                      {story[9].summary}
                                    </span>
                                  </div>
                                  <div className={s.cardMeta}>
                                    <div className={s.metaAvatar}>
                                      <div
                                        style={{
                                          backgroundImage: `url(${
                                            story[9].userpost
                                              .user_image_profile_url
                                          })`,
                                        }}
                                      />
                                    </div>
                                    <div className={s.metaRight}>
                                      <span className={s.metaAuthor}>
                                        {story[9].userpost.user_fullname}
                                      </span>
                                      <span className={s.metaDate}>
                                        May 27, 2018
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={s.sixCol}>
                              <div className={s.row}>
                                {range(2).map(i => (
                                  <div className={s.twelveCol} key={i}>
                                    <div className={s.card}>
                                      <div className={s.cardImage}>
                                        <Link
                                          className={s.inner}
                                          to="/"
                                          style={{
                                            backgroundImage: `url(${
                                              story[i].post_image_thumb_url
                                            })`,
                                          }}
                                        >
                                          <div
                                            className={s.text}
                                            data-text={story[i].summary}
                                          />
                                          <div
                                            className={s.overlay}
                                            style={{
                                              backgroundColor: this.state
                                                .intculinary,
                                            }}
                                          />
                                        </Link>
                                        <div className={s.interestLabel}>
                                          <Link
                                            to="/"
                                            style={{
                                              color: this.state.intculinary,
                                            }}
                                          >
                                            CULINARY
                                          </Link>
                                        </div>
                                        <div className={s.readTime}>
                                          <span>8</span>
                                          <small
                                            style={{
                                              color: this.state.intculinary,
                                            }}
                                          >
                                            MIN
                                          </small>
                                        </div>
                                      </div>
                                      <div className={s.cardBody}>
                                        <div className={s.cardTitle}>
                                          <h1 className={s.title}>
                                            <Link to="/">{story[i].title}</Link>
                                          </h1>
                                        </div>
                                        <div className={s.cardMeta}>
                                          <span className={s.metaAuthor}>
                                            {story[i].userpost.user_fullname}
                                          </span>
                                          <span className={s.metaDivider} />
                                          <span className={s.metaDate}>
                                            May 27, 2018
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={s.fourCol}>
                          <div className={s.aboutStoriesTrending}>
                            <h1 className={s.aboutStoriesTitle}>
                              Trending on<br />Culinary
                            </h1>
                            <div className={s.cardInline}>
                              <Link
                                className={s.cardNumber}
                                to="/"
                                style={{
                                  borderColor: this.state.intculinary,
                                  color: this.state.intculinary,
                                }}
                              >
                                1
                              </Link>
                              <div className={s.cardBody}>
                                <div className={s.interestLabel}>
                                  <Link
                                    to="/"
                                    style={{ color: this.state.intculinary }}
                                  >
                                    CULINARY
                                  </Link>
                                </div>
                                <div className={s.cardTitle}>
                                  <h1 className={s.title}>
                                    <Link to="/">{story[4].title}</Link>
                                  </h1>
                                </div>
                                <div className={s.cardMeta}>
                                  <span className={s.metaAuthor}>
                                    {story[4].userpost.user_fullname}
                                  </span>
                                  <span className={s.metaDivider} />
                                  <span className={s.metaDate}>
                                    May 27, 2018
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className={s.cardInline}>
                              <Link
                                className={s.cardNumber}
                                to="/"
                                style={{
                                  borderColor: this.state.intculinary,
                                  color: this.state.intculinary,
                                }}
                              >
                                2
                              </Link>
                              <div className={s.cardBody}>
                                <div className={s.interestLabel}>
                                  <Link
                                    to="/"
                                    style={{ color: this.state.intculinary }}
                                  >
                                    CULINARY
                                  </Link>
                                </div>
                                <div className={s.cardTitle}>
                                  <h1 className={s.title}>
                                    <Link to="/">{story[5].title}</Link>
                                  </h1>
                                </div>
                                <div className={s.cardMeta}>
                                  <span className={s.metaAuthor}>
                                    {story[5].userpost.user_fullname}
                                  </span>
                                  <span className={s.metaDivider} />
                                  <span className={s.metaDate}>
                                    May 27, 2018
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className={s.cardInline}>
                              <Link
                                className={s.cardNumber}
                                to="/"
                                style={{
                                  borderColor: this.state.intculinary,
                                  color: this.state.intculinary,
                                }}
                              >
                                3
                              </Link>
                              <div className={s.cardBody}>
                                <div className={s.interestLabel}>
                                  <Link
                                    to="/"
                                    style={{ color: this.state.intculinary }}
                                  >
                                    CULINARY
                                  </Link>
                                </div>
                                <div className={s.cardTitle}>
                                  <h1 className={s.title}>
                                    <Link to="/">{story[6].title}</Link>
                                  </h1>
                                </div>
                                <div className={s.cardMeta}>
                                  <span className={s.metaAuthor}>
                                    {story[6].userpost.user_fullname}
                                  </span>
                                  <span className={s.metaDivider} />
                                  <span className={s.metaDate}>
                                    May 27, 2018
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabContent>
                    <TabContent
                      for="fashion"
                      className={s.aboutStoriesContents}
                    >
                      <div className={s.row}>
                        <div className={s.eightCol}>
                          <div className={s.row}>
                            <div className={s.sixCol}>
                              <div className={cx(s.card, s.storyOne)}>
                                <div className={s.cardImage}>
                                  <Link
                                    className={s.inner}
                                    to="/"
                                    style={{
                                      backgroundImage: `url(${
                                        story[9].post_image_thumb_url
                                      })`,
                                    }}
                                  >
                                    <div
                                      className={s.text}
                                      data-text={story[9].summary}
                                    />
                                    <div
                                      className={s.overlay}
                                      style={{
                                        backgroundColor: this.state.intfashion,
                                      }}
                                    />
                                  </Link>
                                  <div className={s.interestLabel}>
                                    <Link
                                      to="/"
                                      style={{
                                        color: this.state.intfashion,
                                      }}
                                    >
                                      FASHION
                                    </Link>
                                  </div>
                                  <div className={s.readTime}>
                                    <span>8</span>
                                    <small
                                      style={{
                                        color: this.state.intfashion,
                                      }}
                                    >
                                      MIN
                                    </small>
                                  </div>
                                </div>
                                <div className={s.cardBody}>
                                  <div className={s.cardTitle}>
                                    <h1 className={s.title}>
                                      <Link to="/">{story[9].title}</Link>
                                    </h1>
                                    <span className={s.summary}>
                                      {story[9].summary}
                                    </span>
                                  </div>
                                  <div className={s.cardMeta}>
                                    <div className={s.metaAvatar}>
                                      <div
                                        style={{
                                          backgroundImage: `url(${
                                            story[9].userpost
                                              .user_image_profile_url
                                          })`,
                                        }}
                                      />
                                    </div>
                                    <div className={s.metaRight}>
                                      <span className={s.metaAuthor}>
                                        {story[9].userpost.user_fullname}
                                      </span>
                                      <span className={s.metaDate}>
                                        May 27, 2018
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={s.sixCol}>
                              <div className={s.row}>
                                {range(2).map(i => (
                                  <div className={s.twelveCol} key={i}>
                                    <div className={s.card}>
                                      <div className={s.cardImage}>
                                        <Link
                                          className={s.inner}
                                          to="/"
                                          style={{
                                            backgroundImage: `url(${
                                              story[i].post_image_thumb_url
                                            })`,
                                          }}
                                        >
                                          <div
                                            className={s.text}
                                            data-text={story[i].summary}
                                          />
                                          <div
                                            className={s.overlay}
                                            style={{
                                              backgroundColor: this.state
                                                .intfashion,
                                            }}
                                          />
                                        </Link>
                                        <div className={s.interestLabel}>
                                          <Link
                                            to="/"
                                            style={{
                                              color: this.state.intfashion,
                                            }}
                                          >
                                            FASHION
                                          </Link>
                                        </div>
                                        <div className={s.readTime}>
                                          <span>8</span>
                                          <small
                                            style={{
                                              color: this.state.intfashion,
                                            }}
                                          >
                                            MIN
                                          </small>
                                        </div>
                                      </div>
                                      <div className={s.cardBody}>
                                        <div className={s.cardTitle}>
                                          <h1 className={s.title}>
                                            <Link to="/">{story[i].title}</Link>
                                          </h1>
                                        </div>
                                        <div className={s.cardMeta}>
                                          <span className={s.metaAuthor}>
                                            {story[i].userpost.user_fullname}
                                          </span>
                                          <span className={s.metaDivider} />
                                          <span className={s.metaDate}>
                                            May 27, 2018
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={s.fourCol}>
                          <div className={s.aboutStoriesTrending}>
                            <h1 className={s.aboutStoriesTitle}>
                              Trending on<br />Fashion
                            </h1>
                            <div className={s.cardInline}>
                              <Link
                                className={s.cardNumber}
                                to="/"
                                style={{
                                  borderColor: this.state.intfashion,
                                  color: this.state.intfashion,
                                }}
                              >
                                1
                              </Link>
                              <div className={s.cardBody}>
                                <div className={s.interestLabel}>
                                  <Link
                                    to="/"
                                    style={{ color: this.state.intfashion }}
                                  >
                                    FASHION
                                  </Link>
                                </div>
                                <div className={s.cardTitle}>
                                  <h1 className={s.title}>
                                    <Link to="/">{story[4].title}</Link>
                                  </h1>
                                </div>
                                <div className={s.cardMeta}>
                                  <span className={s.metaAuthor}>
                                    {story[4].userpost.user_fullname}
                                  </span>
                                  <span className={s.metaDivider} />
                                  <span className={s.metaDate}>
                                    May 27, 2018
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className={s.cardInline}>
                              <Link
                                className={s.cardNumber}
                                to="/"
                                style={{
                                  borderColor: this.state.intfashion,
                                  color: this.state.intfashion,
                                }}
                              >
                                2
                              </Link>
                              <div className={s.cardBody}>
                                <div className={s.interestLabel}>
                                  <Link
                                    to="/"
                                    style={{ color: this.state.intfashion }}
                                  >
                                    FASHION
                                  </Link>
                                </div>
                                <div className={s.cardTitle}>
                                  <h1 className={s.title}>
                                    <Link to="/">{story[5].title}</Link>
                                  </h1>
                                </div>
                                <div className={s.cardMeta}>
                                  <span className={s.metaAuthor}>
                                    {story[5].userpost.user_fullname}
                                  </span>
                                  <span className={s.metaDivider} />
                                  <span className={s.metaDate}>
                                    May 27, 2018
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className={s.cardInline}>
                              <Link
                                className={s.cardNumber}
                                to="/"
                                style={{
                                  borderColor: this.state.intfashion,
                                  color: this.state.intfashion,
                                }}
                              >
                                3
                              </Link>
                              <div className={s.cardBody}>
                                <div className={s.interestLabel}>
                                  <Link
                                    to="/"
                                    style={{ color: this.state.intfashion }}
                                  >
                                    FASHION
                                  </Link>
                                </div>
                                <div className={s.cardTitle}>
                                  <h1 className={s.title}>
                                    <Link to="/">{story[6].title}</Link>
                                  </h1>
                                </div>
                                <div className={s.cardMeta}>
                                  <span className={s.metaAuthor}>
                                    {story[6].userpost.user_fullname}
                                  </span>
                                  <span className={s.metaDivider} />
                                  <span className={s.metaDate}>
                                    May 27, 2018
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabContent>
                    <TabContent for="beauty" className={s.aboutStoriesContents}>
                      <div className={s.row}>
                        <div className={s.eightCol}>
                          <div className={s.row}>
                            <div className={s.sixCol}>
                              <div className={cx(s.card, s.storyOne)}>
                                <div className={s.cardImage}>
                                  <Link
                                    className={s.inner}
                                    to="/"
                                    style={{
                                      backgroundImage: `url(${
                                        story[9].post_image_thumb_url
                                      })`,
                                    }}
                                  >
                                    <div
                                      className={s.text}
                                      data-text={story[9].summary}
                                    />
                                    <div
                                      className={s.overlay}
                                      style={{
                                        backgroundColor: this.state.intbeauty,
                                      }}
                                    />
                                  </Link>
                                  <div className={s.interestLabel}>
                                    <Link
                                      to="/"
                                      style={{
                                        color: this.state.intbeauty,
                                      }}
                                    >
                                      BEAUTY
                                    </Link>
                                  </div>
                                  <div className={s.readTime}>
                                    <span>8</span>
                                    <small
                                      style={{
                                        color: this.state.intbeauty,
                                      }}
                                    >
                                      MIN
                                    </small>
                                  </div>
                                </div>
                                <div className={s.cardBody}>
                                  <div className={s.cardTitle}>
                                    <h1 className={s.title}>
                                      <Link to="/">{story[9].title}</Link>
                                    </h1>
                                    <span className={s.summary}>
                                      {story[9].summary}
                                    </span>
                                  </div>
                                  <div className={s.cardMeta}>
                                    <div className={s.metaAvatar}>
                                      <div
                                        style={{
                                          backgroundImage: `url(${
                                            story[9].userpost
                                              .user_image_profile_url
                                          })`,
                                        }}
                                      />
                                    </div>
                                    <div className={s.metaRight}>
                                      <span className={s.metaAuthor}>
                                        {story[9].userpost.user_fullname}
                                      </span>
                                      <span className={s.metaDate}>
                                        May 27, 2018
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={s.sixCol}>
                              <div className={s.row}>
                                {range(2).map(i => (
                                  <div className={s.twelveCol} key={i}>
                                    <div className={s.card}>
                                      <div className={s.cardImage}>
                                        <Link
                                          className={s.inner}
                                          to="/"
                                          style={{
                                            backgroundImage: `url(${
                                              story[i].post_image_thumb_url
                                            })`,
                                          }}
                                        >
                                          <div
                                            className={s.text}
                                            data-text={story[i].summary}
                                          />
                                          <div
                                            className={s.overlay}
                                            style={{
                                              backgroundColor: this.state
                                                .intbeauty,
                                            }}
                                          />
                                        </Link>
                                        <div className={s.interestLabel}>
                                          <Link
                                            to="/"
                                            style={{
                                              color: this.state.intbeauty,
                                            }}
                                          >
                                            BEAUTY
                                          </Link>
                                        </div>
                                        <div className={s.readTime}>
                                          <span>8</span>
                                          <small
                                            style={{
                                              color: this.state.intbeauty,
                                            }}
                                          >
                                            MIN
                                          </small>
                                        </div>
                                      </div>
                                      <div className={s.cardBody}>
                                        <div className={s.cardTitle}>
                                          <h1 className={s.title}>
                                            <Link to="/">{story[i].title}</Link>
                                          </h1>
                                        </div>
                                        <div className={s.cardMeta}>
                                          <span className={s.metaAuthor}>
                                            {story[i].userpost.user_fullname}
                                          </span>
                                          <span className={s.metaDivider} />
                                          <span className={s.metaDate}>
                                            May 27, 2018
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={s.fourCol}>
                          <div className={s.aboutStoriesTrending}>
                            <h1 className={s.aboutStoriesTitle}>
                              Trending on<br />Beauty
                            </h1>
                            <div className={s.cardInline}>
                              <Link
                                className={s.cardNumber}
                                to="/"
                                style={{
                                  borderColor: this.state.intbeauty,
                                  color: this.state.intbeauty,
                                }}
                              >
                                1
                              </Link>
                              <div className={s.cardBody}>
                                <div className={s.interestLabel}>
                                  <Link
                                    to="/"
                                    style={{ color: this.state.intbeauty }}
                                  >
                                    BEAUTY
                                  </Link>
                                </div>
                                <div className={s.cardTitle}>
                                  <h1 className={s.title}>
                                    <Link to="/">{story[4].title}</Link>
                                  </h1>
                                </div>
                                <div className={s.cardMeta}>
                                  <span className={s.metaAuthor}>
                                    {story[4].userpost.user_fullname}
                                  </span>
                                  <span className={s.metaDivider} />
                                  <span className={s.metaDate}>
                                    May 27, 2018
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className={s.cardInline}>
                              <Link
                                className={s.cardNumber}
                                to="/"
                                style={{
                                  borderColor: this.state.intbeauty,
                                  color: this.state.intbeauty,
                                }}
                              >
                                2
                              </Link>
                              <div className={s.cardBody}>
                                <div className={s.interestLabel}>
                                  <Link
                                    to="/"
                                    style={{ color: this.state.intbeauty }}
                                  >
                                    BEAUTY
                                  </Link>
                                </div>
                                <div className={s.cardTitle}>
                                  <h1 className={s.title}>
                                    <Link to="/">{story[5].title}</Link>
                                  </h1>
                                </div>
                                <div className={s.cardMeta}>
                                  <span className={s.metaAuthor}>
                                    {story[5].userpost.user_fullname}
                                  </span>
                                  <span className={s.metaDivider} />
                                  <span className={s.metaDate}>
                                    May 27, 2018
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className={s.cardInline}>
                              <Link
                                className={s.cardNumber}
                                to="/"
                                style={{
                                  borderColor: this.state.intbeauty,
                                  color: this.state.intbeauty,
                                }}
                              >
                                3
                              </Link>
                              <div className={s.cardBody}>
                                <div className={s.interestLabel}>
                                  <Link
                                    to="/"
                                    style={{ color: this.state.intbeauty }}
                                  >
                                    BEAUTY
                                  </Link>
                                </div>
                                <div className={s.cardTitle}>
                                  <h1 className={s.title}>
                                    <Link to="/">{story[6].title}</Link>
                                  </h1>
                                </div>
                                <div className={s.cardMeta}>
                                  <span className={s.metaAuthor}>
                                    {story[6].userpost.user_fullname}
                                  </span>
                                  <span className={s.metaDivider} />
                                  <span className={s.metaDate}>
                                    May 27, 2018
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabContent>
                    <TabContent for="art" className={s.aboutStoriesContents}>
                      <div className={s.row}>
                        <div className={s.eightCol}>
                          <div className={s.row}>
                            <div className={s.sixCol}>
                              <div className={cx(s.card, s.storyOne)}>
                                <div className={s.cardImage}>
                                  <Link
                                    className={s.inner}
                                    to="/"
                                    style={{
                                      backgroundImage: `url(${
                                        story[9].post_image_thumb_url
                                      })`,
                                    }}
                                  >
                                    <div
                                      className={s.text}
                                      data-text={story[9].summary}
                                    />
                                    <div
                                      className={s.overlay}
                                      style={{
                                        backgroundColor: this.state.intart,
                                      }}
                                    />
                                  </Link>
                                  <div className={s.interestLabel}>
                                    <Link
                                      to="/"
                                      style={{
                                        color: this.state.intart,
                                      }}
                                    >
                                      ART
                                    </Link>
                                  </div>
                                  <div className={s.readTime}>
                                    <span>8</span>
                                    <small
                                      style={{
                                        color: this.state.intart,
                                      }}
                                    >
                                      MIN
                                    </small>
                                  </div>
                                </div>
                                <div className={s.cardBody}>
                                  <div className={s.cardTitle}>
                                    <h1 className={s.title}>
                                      <Link to="/">{story[9].title}</Link>
                                    </h1>
                                    <span className={s.summary}>
                                      {story[9].summary}
                                    </span>
                                  </div>
                                  <div className={s.cardMeta}>
                                    <div className={s.metaAvatar}>
                                      <div
                                        style={{
                                          backgroundImage: `url(${
                                            story[9].userpost
                                              .user_image_profile_url
                                          })`,
                                        }}
                                      />
                                    </div>
                                    <div className={s.metaRight}>
                                      <span className={s.metaAuthor}>
                                        {story[9].userpost.user_fullname}
                                      </span>
                                      <span className={s.metaDate}>
                                        May 27, 2018
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={s.sixCol}>
                              <div className={s.row}>
                                {range(2).map(i => (
                                  <div className={s.twelveCol} key={i}>
                                    <div className={s.card}>
                                      <div className={s.cardImage}>
                                        <Link
                                          className={s.inner}
                                          to="/"
                                          style={{
                                            backgroundImage: `url(${
                                              story[i].post_image_thumb_url
                                            })`,
                                          }}
                                        >
                                          <div
                                            className={s.text}
                                            data-text={story[i].summary}
                                          />
                                          <div
                                            className={s.overlay}
                                            style={{
                                              backgroundColor: this.state
                                                .intart,
                                            }}
                                          />
                                        </Link>
                                        <div className={s.interestLabel}>
                                          <Link
                                            to="/"
                                            style={{
                                              color: this.state.intart,
                                            }}
                                          >
                                            ART
                                          </Link>
                                        </div>
                                        <div className={s.readTime}>
                                          <span>8</span>
                                          <small
                                            style={{
                                              color: this.state.intart,
                                            }}
                                          >
                                            MIN
                                          </small>
                                        </div>
                                      </div>
                                      <div className={s.cardBody}>
                                        <div className={s.cardTitle}>
                                          <h1 className={s.title}>
                                            <Link to="/">{story[i].title}</Link>
                                          </h1>
                                        </div>
                                        <div className={s.cardMeta}>
                                          <span className={s.metaAuthor}>
                                            {story[i].userpost.user_fullname}
                                          </span>
                                          <span className={s.metaDivider} />
                                          <span className={s.metaDate}>
                                            May 27, 2018
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={s.fourCol}>
                          <div className={s.aboutStoriesTrending}>
                            <h1 className={s.aboutStoriesTitle}>
                              Trending on<br />Art
                            </h1>
                            <div className={s.cardInline}>
                              <Link
                                className={s.cardNumber}
                                to="/"
                                style={{
                                  borderColor: this.state.intart,
                                  color: this.state.intart,
                                }}
                              >
                                1
                              </Link>
                              <div className={s.cardBody}>
                                <div className={s.interestLabel}>
                                  <Link
                                    to="/"
                                    style={{ color: this.state.intart }}
                                  >
                                    ART
                                  </Link>
                                </div>
                                <div className={s.cardTitle}>
                                  <h1 className={s.title}>
                                    <Link to="/">{story[4].title}</Link>
                                  </h1>
                                </div>
                                <div className={s.cardMeta}>
                                  <span className={s.metaAuthor}>
                                    {story[4].userpost.user_fullname}
                                  </span>
                                  <span className={s.metaDivider} />
                                  <span className={s.metaDate}>
                                    May 27, 2018
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className={s.cardInline}>
                              <Link
                                className={s.cardNumber}
                                to="/"
                                style={{
                                  borderColor: this.state.intart,
                                  color: this.state.intart,
                                }}
                              >
                                2
                              </Link>
                              <div className={s.cardBody}>
                                <div className={s.interestLabel}>
                                  <Link
                                    to="/"
                                    style={{ color: this.state.intart }}
                                  >
                                    ART
                                  </Link>
                                </div>
                                <div className={s.cardTitle}>
                                  <h1 className={s.title}>
                                    <Link to="/">{story[5].title}</Link>
                                  </h1>
                                </div>
                                <div className={s.cardMeta}>
                                  <span className={s.metaAuthor}>
                                    {story[5].userpost.user_fullname}
                                  </span>
                                  <span className={s.metaDivider} />
                                  <span className={s.metaDate}>
                                    May 27, 2018
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className={s.cardInline}>
                              <Link
                                className={s.cardNumber}
                                to="/"
                                style={{
                                  borderColor: this.state.intart,
                                  color: this.state.intart,
                                }}
                              >
                                3
                              </Link>
                              <div className={s.cardBody}>
                                <div className={s.interestLabel}>
                                  <Link
                                    to="/"
                                    style={{ color: this.state.intart }}
                                  >
                                    ART
                                  </Link>
                                </div>
                                <div className={s.cardTitle}>
                                  <h1 className={s.title}>
                                    <Link to="/">{story[6].title}</Link>
                                  </h1>
                                </div>
                                <div className={s.cardMeta}>
                                  <span className={s.metaAuthor}>
                                    {story[6].userpost.user_fullname}
                                  </span>
                                  <span className={s.metaDivider} />
                                  <span className={s.metaDate}>
                                    May 27, 2018
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabContent>
                    <TabContent for="others" className={s.aboutStoriesContents}>
                      <div className={s.row}>
                        <div className={s.eightCol}>
                          <div className={s.row}>
                            <div className={s.sixCol}>
                              <div className={cx(s.card, s.storyOne)}>
                                <div className={s.cardImage}>
                                  <Link
                                    className={s.inner}
                                    to="/"
                                    style={{
                                      backgroundImage: `url(${
                                        story[9].post_image_thumb_url
                                      })`,
                                    }}
                                  >
                                    <div
                                      className={s.text}
                                      data-text={story[9].summary}
                                    />
                                    <div
                                      className={s.overlay}
                                      style={{
                                        backgroundColor: this.state.intothers,
                                      }}
                                    />
                                  </Link>
                                  <div className={s.interestLabel}>
                                    <Link
                                      to="/"
                                      style={{
                                        color: this.state.intothers,
                                      }}
                                    >
                                      SPORTS
                                    </Link>
                                  </div>
                                  <div className={s.readTime}>
                                    <span>8</span>
                                    <small
                                      style={{
                                        color: this.state.intothers,
                                      }}
                                    >
                                      MIN
                                    </small>
                                  </div>
                                </div>
                                <div className={s.cardBody}>
                                  <div className={s.cardTitle}>
                                    <h1 className={s.title}>
                                      <Link to="/">{story[9].title}</Link>
                                    </h1>
                                    <span className={s.summary}>
                                      {story[9].summary}
                                    </span>
                                  </div>
                                  <div className={s.cardMeta}>
                                    <div className={s.metaAvatar}>
                                      <div
                                        style={{
                                          backgroundImage: `url(${
                                            story[9].userpost
                                              .user_image_profile_url
                                          })`,
                                        }}
                                      />
                                    </div>
                                    <div className={s.metaRight}>
                                      <span className={s.metaAuthor}>
                                        {story[9].userpost.user_fullname}
                                      </span>
                                      <span className={s.metaDate}>
                                        May 27, 2018
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={s.sixCol}>
                              <div className={s.row}>
                                {range(2).map(i => (
                                  <div className={s.twelveCol} key={i}>
                                    <div className={s.card}>
                                      <div className={s.cardImage}>
                                        <Link
                                          className={s.inner}
                                          to="/"
                                          style={{
                                            backgroundImage: `url(${
                                              story[i].post_image_thumb_url
                                            })`,
                                          }}
                                        >
                                          <div
                                            className={s.text}
                                            data-text={story[i].summary}
                                          />
                                          <div
                                            className={s.overlay}
                                            style={{
                                              backgroundColor: this.state
                                                .intothers,
                                            }}
                                          />
                                        </Link>
                                        <div className={s.interestLabel}>
                                          <Link
                                            to="/"
                                            style={{
                                              color: this.state.intothers,
                                            }}
                                          >
                                            NEWS
                                          </Link>
                                        </div>
                                        <div className={s.readTime}>
                                          <span>8</span>
                                          <small
                                            style={{
                                              color: this.state.intothers,
                                            }}
                                          >
                                            MIN
                                          </small>
                                        </div>
                                      </div>
                                      <div className={s.cardBody}>
                                        <div className={s.cardTitle}>
                                          <h1 className={s.title}>
                                            <Link to="/">{story[i].title}</Link>
                                          </h1>
                                        </div>
                                        <div className={s.cardMeta}>
                                          <span className={s.metaAuthor}>
                                            {story[i].userpost.user_fullname}
                                          </span>
                                          <span className={s.metaDivider} />
                                          <span className={s.metaDate}>
                                            May 27, 2018
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={s.fourCol}>
                          <div className={s.aboutStoriesTrending}>
                            <h1 className={s.aboutStoriesTitle}>
                              Trending on<br />Others
                            </h1>
                            <div className={s.cardInline}>
                              <Link
                                className={s.cardNumber}
                                to="/"
                                style={{
                                  borderColor: this.state.intothers,
                                  color: this.state.intothers,
                                }}
                              >
                                1
                              </Link>
                              <div className={s.cardBody}>
                                <div className={s.interestLabel}>
                                  <Link
                                    to="/"
                                    style={{ color: this.state.intothers }}
                                  >
                                    FILM AND TV
                                  </Link>
                                </div>
                                <div className={s.cardTitle}>
                                  <h1 className={s.title}>
                                    <Link to="/">{story[4].title}</Link>
                                  </h1>
                                </div>
                                <div className={s.cardMeta}>
                                  <span className={s.metaAuthor}>
                                    {story[4].userpost.user_fullname}
                                  </span>
                                  <span className={s.metaDivider} />
                                  <span className={s.metaDate}>
                                    May 27, 2018
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className={s.cardInline}>
                              <Link
                                className={s.cardNumber}
                                to="/"
                                style={{
                                  borderColor: this.state.intothers,
                                  color: this.state.intothers,
                                }}
                              >
                                2
                              </Link>
                              <div className={s.cardBody}>
                                <div className={s.interestLabel}>
                                  <Link
                                    to="/"
                                    style={{ color: this.state.intothers }}
                                  >
                                    AUTOMOTIVE
                                  </Link>
                                </div>
                                <div className={s.cardTitle}>
                                  <h1 className={s.title}>
                                    <Link to="/">{story[5].title}</Link>
                                  </h1>
                                </div>
                                <div className={s.cardMeta}>
                                  <span className={s.metaAuthor}>
                                    {story[5].userpost.user_fullname}
                                  </span>
                                  <span className={s.metaDivider} />
                                  <span className={s.metaDate}>
                                    May 27, 2018
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className={s.cardInline}>
                              <Link
                                className={s.cardNumber}
                                to="/"
                                style={{
                                  borderColor: this.state.intothers,
                                  color: this.state.intothers,
                                }}
                              >
                                3
                              </Link>
                              <div className={s.cardBody}>
                                <div className={s.interestLabel}>
                                  <Link
                                    to="/"
                                    style={{ color: this.state.intothers }}
                                  >
                                    ZODIAC
                                  </Link>
                                </div>
                                <div className={s.cardTitle}>
                                  <h1 className={s.title}>
                                    <Link to="/">{story[6].title}</Link>
                                  </h1>
                                </div>
                                <div className={s.cardMeta}>
                                  <span className={s.metaAuthor}>
                                    {story[6].userpost.user_fullname}
                                  </span>
                                  <span className={s.metaDivider} />
                                  <span className={s.metaDate}>
                                    May 27, 2018
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabContent>
                  </Tabs>
                </div>
                <div className={s.aboutContent}>
                  <h1>Embracing the best of both worlds</h1>
                  <p>
                    What is an online presence if it doesn’t positively affect
                    individuals or communities? Qubicle’s social space goes
                    beyond the digital realm where we have built community hubs
                    located in Jakarta and Surabaya. We have also maintained an
                    inspiring relationship with communities and individuals in 8
                    major cities in Indonesia. By integrating both worlds,
                    online and offline, we aspire to become a credible medium
                    that nurtures curiosity and inspiration amongst a plethora
                    of communities.
                  </p>
                  <div className={s.contentsDivider}>
                    <svg width="44px" height="8px" viewBox="0 0 44 8">
                      <g
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <g
                          transform="translate(-618.000000, -7000.000000)"
                          fill="#4A4A4A"
                          fillRule="nonzero"
                        >
                          <g transform="translate(30.000000, 544.000000)">
                            <g transform="translate(588.000000, 6456.000000)">
                              <path d="M40,8 C37.790861,8 36,6.209139 36,4 C36,1.790861 37.790861,0 40,0 C42.209139,0 44,1.790861 44,4 C44,6.209139 42.209139,8 40,8 Z M22,8 C19.790861,8 18,6.209139 18,4 C18,1.790861 19.790861,0 22,0 C24.209139,0 26,1.790861 26,4 C26,6.209139 24.209139,8 22,8 Z M4,8 C1.790861,8 0,6.209139 0,4 C0,1.790861 1.790861,0 4,0 C6.209139,0 8,1.790861 8,4 C8,6.209139 6.209139,8 4,8 Z" />
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
                <div className={cx(s.aboutContent, s.withBlack)}>
                  <h1>So, Want to Know More About Us?</h1>
                  <p>
                    If you really want to see what we&rsquo;re about, go and
                    explore our stories.<br />And remember:{' '}
                    <b>getting lost can be good.</b>
                  </p>
                  <Link to="/">Let&rsquo;s Go</Link>
                </div>
                <div className={s.aboutContent}>
                  <h1>We want to hear from you</h1>
                  <p>
                    We embrace and nurture a culture of creativity; that is why
                    we warmly welcome collaborations with prospective partners
                    and/or creative communities. Contact us for event
                    collaboration; writing contributions; media partnership
                    proposals; or a long-term partnership. Together we can
                    cultivate and collaborate on ideas!
                  </p>
                  <Link to="/contact-us">Contact Us</Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className={s.hero}>
              <div className={s.heroTitle}>
                <div className={s.container}>
                  <div
                    className={cx(
                      s.skeleton,
                      s.skeletonPrimary,
                      s.skeletonHeroTitle,
                    )}
                  />
                </div>
              </div>
            </div>
            <div className={s.contents}>
              <div className={s.container}>
                <div
                  className={cx(
                    s.skeleton,
                    s.skeletonPrimary,
                    s.skeletonContentsBorder,
                  )}
                />
                <div className={s.aboutHeader}>
                  <div
                    className={cx(
                      s.skeleton,
                      s.skeletonSecondary,
                      s.skeletonAboutHeader,
                    )}
                  />
                </div>
                <div className={s.aboutContent}>
                  <div
                    className={cx(
                      s.skeleton,
                      s.skeletonPrimary,
                      s.skeletonContentTitle,
                    )}
                  />
                  <div
                    className={cx(
                      s.skeleton,
                      s.skeletonSecondary,
                      s.skeletonContentTextOne,
                    )}
                  />
                  <div
                    className={cx(
                      s.skeleton,
                      s.skeletonSecondary,
                      s.skeletonContentTextTwo,
                    )}
                  />
                  <div
                    className={cx(
                      s.skeleton,
                      s.skeletonSecondary,
                      s.skeletonContentTextThree,
                    )}
                  />
                  <div
                    className={cx(
                      s.skeleton,
                      s.skeletonSecondary,
                      s.skeletonContentTextFour,
                    )}
                  />
                  <div
                    className={cx(
                      s.skeleton,
                      s.skeletonSecondary,
                      s.skeletonContentTextFive,
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default withStyles(s)(About);
