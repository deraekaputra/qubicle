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
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';
import Link from '../../components/Link';

import Event from '../../components/Event/Event';

class Home extends React.Component {
  static propTypes = {
    story: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

  state = {
    intmusic: '#F8DB65',
    intfood: '#73E4B2',
    intfashion: '#827AF9',
    intbeauty: '#FB74D2',
    inttravel: '#FA675D',
    intart: '#51EFE8',
    intothers: '#A5A5A5',
    isSignedIn: false,
    isAds: false,
    isContentLoading: false,
    isEnd: false,
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

  render() {
    const { story } = this.props;
    return (
      <div className={s.root}>
        {this.state.contentLoading ? (
          <div>
            <div className={s.headline}>
              <div className={s.headlineTop}>
                <div className={s.hero}>
                  <div className={s.heroWrapper}>
                    <div
                      className={s.heroImage}
                      style={{
                        backgroundImage: `url(${
                          story[23].post_image_cover_url
                        })`,
                      }}
                    />
                    <div className={s.heroTitle}>
                      <div className={s.container}>
                        <div className={s.readTime}>
                          <span>10</span>
                          <small
                            style={{
                              color: this.state.intmusic,
                            }}
                          >
                            MIN
                          </small>
                        </div>
                        <div className={cx(s.heroItem, s.interestLabel)}>
                          <Link
                            to="/"
                            style={{
                              color: this.state.intmusic,
                            }}
                          >
                            MUSIC
                          </Link>
                        </div>
                        <h1 className={cx(s.heroItem, s.title)}>
                          <Link to="/story">
                            <span>
                              Gorillaz<i
                                style={{ borderColor: this.state.intmusic }}
                              />
                            </span>
                            <span>
                              Lepas<i
                                style={{ borderColor: this.state.intmusic }}
                              />
                            </span>
                            <span>
                              2<i
                                style={{ borderColor: this.state.intmusic }}
                              />
                            </span>
                            <span>
                              Lagu<i
                                style={{ borderColor: this.state.intmusic }}
                              />
                            </span>
                            <span>
                              dari<i
                                style={{ borderColor: this.state.intmusic }}
                              />
                            </span>
                            <span>
                              Album<i
                                style={{ borderColor: this.state.intmusic }}
                              />
                            </span>
                            <span>
                              Baru<i
                                style={{ borderColor: this.state.intmusic }}
                              />
                            </span>
                            <span>
                              &lsquo;The<i
                                style={{ borderColor: this.state.intmusic }}
                              />
                            </span>
                            <span>
                              Now<i
                                style={{ borderColor: this.state.intmusic }}
                              />
                            </span>
                            <span>
                              Now&rsquo;<i
                                style={{ borderColor: this.state.intmusic }}
                              />
                            </span>
                          </Link>
                        </h1>
                        <span className={cx(s.heroItem, s.author)}>
                          {story[23].userpost.user_fullname}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={s.headlineBottom}>
                <div className={s.container}>
                  <div className={s.row}>
                    <div className={s.threeCol}>
                      <div className={s.card}>
                        <div className={s.cardImage}>
                          <Link
                            className={s.inner}
                            to="/"
                            style={{
                              backgroundImage: `url(${
                                story[1].post_image_thumb_url
                              })`,
                            }}
                          >
                            <div
                              className={s.text}
                              data-text={story[1].summary}
                            />
                            <div
                              className={s.overlay}
                              style={{ backgroundColor: this.state.intmusic }}
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
                            <span>10</span>
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
                              <Link to="/">{story[1].title}</Link>
                            </h1>
                          </div>
                          <div className={s.cardMeta}>
                            <span className={s.metaAuthor}>
                              {story[1].userpost.user_fullname}
                            </span>
                            <span className={s.metaDivider} />
                            <span className={s.metaDate}>May 27, 2018</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={s.threeCol}>
                      <div className={s.card}>
                        <div className={s.cardImage}>
                          <Link
                            className={s.inner}
                            to="/"
                            style={{
                              backgroundImage: `url(${
                                story[2].post_image_thumb_url
                              })`,
                            }}
                          >
                            <div
                              className={s.text}
                              data-text={story[2].summary}
                            />
                            <div
                              className={s.overlay}
                              style={{ backgroundColor: this.state.intfood }}
                            />
                          </Link>
                          <div className={s.interestLabel}>
                            <Link
                              to="/"
                              style={{
                                color: this.state.intfood,
                              }}
                            >
                              FOOD
                            </Link>
                          </div>
                          <div className={s.readTime}>
                            <span>8</span>
                            <small
                              style={{
                                color: this.state.intfood,
                              }}
                            >
                              MIN
                            </small>
                          </div>
                        </div>
                        <div className={s.cardBody}>
                          <div className={s.cardTitle}>
                            <h1 className={s.title}>
                              <Link to="/">{story[2].title}</Link>
                            </h1>
                          </div>
                          <div className={s.cardMeta}>
                            <span className={s.metaAuthor}>
                              {story[2].userpost.user_fullname}
                            </span>
                            <span className={s.metaDivider} />
                            <span className={s.metaDate}>May 27, 2018</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={s.threeCol}>
                      <div className={s.card}>
                        <div className={s.cardImage}>
                          <Link
                            className={s.inner}
                            to="/"
                            style={{
                              backgroundImage: `url(${
                                story[3].post_image_thumb_url
                              })`,
                            }}
                          >
                            <div
                              className={s.text}
                              data-text={story[3].summary}
                            />
                            <div
                              className={s.overlay}
                              style={{ backgroundColor: this.state.inttravel }}
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
                              <Link to="/">{story[3].title}</Link>
                            </h1>
                          </div>
                          <div className={s.cardMeta}>
                            <span className={s.metaAuthor}>
                              {story[3].userpost.user_fullname}
                            </span>
                            <span className={s.metaDivider} />
                            <span className={s.metaDate}>May 27, 2018</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={s.threeCol}>
                      <div className={s.card}>
                        <div className={s.cardImage}>
                          <Link
                            className={s.inner}
                            to="/"
                            style={{
                              backgroundImage: `url(${
                                story[4].post_image_thumb_url
                              })`,
                            }}
                          >
                            <div
                              className={s.text}
                              data-text={story[1].summary}
                            />
                            <div
                              className={s.overlay}
                              style={{ backgroundColor: this.state.intfood }}
                            />
                          </Link>
                          <div className={s.interestLabel}>
                            <Link
                              to="/"
                              style={{
                                color: this.state.intfood,
                              }}
                            >
                              FOOD
                            </Link>
                          </div>
                          <div className={s.readTime}>
                            <span>8</span>
                            <small
                              style={{
                                color: this.state.intfood,
                              }}
                            >
                              MIN
                            </small>
                          </div>
                        </div>
                        <div className={s.cardBody}>
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
                            <span className={s.metaDate}>May 27, 2018</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={s.iabThings}>
              <div className={s.iabThingsWrapper}>
                <Link to="/">
                  <img
                    src="http://image.noelshack.com/fichiers/2012/36/1346898152-bc4free-by-noodle.jpg"
                    alt="iab item"
                  />
                </Link>
              </div>
            </div>
            <div className={s.trending}>
              <div className={s.container}>
                <h1 className={s.sectionTitle}>Trending</h1>
                <div className={s.row}>
                  <div className={cx(s.col, s.trendingOne)}>
                    <div className={s.card}>
                      <div className={s.cardImage}>
                        <Link
                          className={s.inner}
                          to="/"
                          style={{
                            backgroundImage: `url(${
                              story[5].post_image_thumb_url
                            })`,
                          }}
                        >
                          <div
                            className={s.text}
                            data-text={story[5].summary}
                          />
                          <div
                            className={s.overlay}
                            style={{ backgroundColor: this.state.intmusic }}
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
                            <Link to="/">{story[5].title}</Link>
                          </h1>
                          <span className={s.summary}>{story[5].summary}</span>
                        </div>
                        <div className={s.cardMeta}>
                          <span className={s.metaAuthor}>
                            {story[5].userpost.user_fullname}
                          </span>
                          <span className={s.metaDivider} />
                          <span className={s.metaDate}>May 27, 2018</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={cx(s.col, s.trendingMore)}>
                    <div className={s.row}>
                      <div className={s.col}>
                        <div className={s.card}>
                          <div className={s.cardImage}>
                            <Link
                              className={s.inner}
                              to="/"
                              style={{
                                backgroundImage: `url(${
                                  story[6].post_image_thumb_url
                                })`,
                              }}
                            >
                              <div
                                className={s.text}
                                data-text={story[6].summary}
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
                                MOTIVATIONAL
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
                                <Link to="/">{story[6].title}</Link>
                              </h1>
                            </div>
                            <div className={s.cardMeta}>
                              <span className={s.metaAuthor}>
                                {story[6].userpost.user_fullname}
                              </span>
                              <span className={s.metaDivider} />
                              <span className={s.metaDate}>May 27, 2018</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={s.col}>
                        <div className={s.card}>
                          <div className={s.cardImage}>
                            <Link
                              className={s.inner}
                              to="/"
                              style={{
                                backgroundImage: `url(${
                                  story[7].post_image_thumb_url
                                })`,
                              }}
                            >
                              <div
                                className={s.text}
                                data-text={story[7].summary}
                              />
                              <div
                                className={s.overlay}
                                style={{ backgroundColor: this.state.intmusic }}
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
                                <Link to="/">{story[7].title}</Link>
                              </h1>
                            </div>
                            <div className={s.cardMeta}>
                              <span className={s.metaAuthor}>
                                {story[7].userpost.user_fullname}
                              </span>
                              <span className={s.metaDivider} />
                              <span className={s.metaDate}>May 27, 2018</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={s.col}>
                        <div className={s.card}>
                          <div className={s.cardImage}>
                            <Link
                              className={s.inner}
                              to="/"
                              style={{
                                backgroundImage: `url(${
                                  story[8].post_image_thumb_url
                                })`,
                              }}
                            >
                              <div
                                className={s.text}
                                data-text={story[8].summary}
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
                                HOBBY
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
                                <Link to="/">{story[8].title}</Link>
                              </h1>
                            </div>
                            <div className={s.cardMeta}>
                              <span className={s.metaAuthor}>
                                {story[8].userpost.user_fullname}
                              </span>
                              <span className={s.metaDivider} />
                              <span className={s.metaDate}>May 27, 2018</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={s.row}>
                      <div className={s.hashtags}>
                        <div className={s.indicator} />
                        <div className={s.tags}>
                          <div className={s.tagWrapper}>
                            <Link className={s.tag} to="/tag">
                              music
                            </Link>
                            <Link className={s.tag} to="/">
                              daily
                            </Link>
                            <Link className={s.tag} to="/">
                              life
                            </Link>
                            <Link className={s.tag} to="/">
                              exhibition
                            </Link>
                            <Link className={s.tag} to="/">
                              iphone
                            </Link>
                            <Link className={s.tag} to="/">
                              apple
                            </Link>
                            <Link className={s.tag} to="/">
                              android
                            </Link>
                            <Link className={s.tag} to="/">
                              drive
                            </Link>
                            <Link className={s.tag} to="/">
                              cable
                            </Link>
                            <Link className={s.tag} to="/">
                              facebook
                            </Link>
                            <Link className={s.tag} to="/">
                              google
                            </Link>
                            <Link className={s.tag} to="/">
                              snapchat
                            </Link>
                            <Link className={s.tag} to="/">
                              gundam
                            </Link>
                            <Link className={s.tag} to="/">
                              orang tua
                            </Link>
                            <Link className={s.tag} to="/">
                              smirnoff
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {this.state.isSignedIn ? null : (
              <div>
                {this.state.isAds ? (
                  <div className={cx(s.boosterContents, s.exclusive)}>
                    <div
                      className={s.boosterBackground}
                      style={{
                        backgroundImage: `url(http://papers.co/wallpaper/papers.co-sl90-iphonex-apple-color-blur-gradation-28-wallpaper.jpg)`,
                      }}
                    />
                    <div className={s.container}>
                      <h1 className={s.sectionTitle}>
                        Say hello to the future.
                      </h1>
                      <span className={s.sectionBadge}>AD</span>
                      <div className={s.row}>
                        <div className={cx(s.fourCol, s.exclusiveItem)}>
                          <Link className={s.exclusiveItemOuter} to="/">
                            <div
                              className={s.exclusiveItemInner}
                              style={{
                                backgroundImage: `url(https://www.apple.com/v/iphone-x/e/images/overview/modal/dual_cameras_hero_large_2x.jpg)`,
                              }}
                            />
                          </Link>
                        </div>
                        <div className={cx(s.fourCol, s.exclusiveItem)}>
                          <Link className={s.exclusiveItemOuter} to="/">
                            <div
                              className={s.exclusiveItemInner}
                              style={{
                                backgroundImage: `url(https://www.apple.com/v/iphone-x/e/images/overview/primary/design_truedepth_large_2x.jpg)`,
                              }}
                            />
                          </Link>
                        </div>
                        <div className={cx(s.fourCol, s.exclusiveItem)}>
                          <Link className={s.exclusiveItemOuter} to="/">
                            <div
                              className={s.exclusiveItemInner}
                              style={{
                                backgroundImage: `url(https://www.apple.com/v/iphone-x/e/images/overview/modal/design_expression_corner_large_2x.jpg)`,
                              }}
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className={s.boosterContents}>
                    <div
                      className={s.boosterBackground}
                      style={{
                        backgroundImage: `url(https://images.unsplash.com/photo-1527031169734-cc605463fe17?ixlib=rb-0.3.5&s=e7aa86213928e0797be006a4faa5b505&auto=format&fit=crop&w=2550&q=80)`,
                      }}
                    />
                    <div className={s.container}>
                      <h1 className={s.sectionTitle}>
                        <Link to="/">
                          Now in{' '}
                          <span style={{ color: this.state.intmusic }}>
                            Music
                          </span>
                        </Link>
                      </h1>
                      <div className={s.row}>
                        {range(3).map(i => (
                          <div className={s.fourCol} key={i}>
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
                )}
              </div>
            )}
            <Event value={3} />
            {this.state.isSignedIn ? (
              <div className={s.feeds}>
                <div className={s.recommendationContents}>
                  <div className={s.container}>
                    <h1 className={s.sectionTitle}>
                      <svg width="16" height="15">
                        <path
                          d="M8 12l-4.702 2.472.898-5.236L.392 5.528l5.257-.764L8 0l2.351 4.764 5.257.764-3.804 3.708.898 5.236z"
                          fill="#0C0C17"
                          fillRule="evenodd"
                        />
                      </svg>
                      For You
                    </h1>
                    <div className={s.row}>
                      <div className={s.fourCol}>
                        <div className={cx(s.card, s.recommendationOne)}>
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
                                style={{ backgroundColor: this.state.intmusic }}
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
                                      story[9].userpost.user_image_profile_url
                                    })`,
                                  }}
                                />
                              </div>
                              <div className={s.metaRight}>
                                <span className={s.metaAuthor}>
                                  {story[9].userpost.user_fullname}
                                </span>
                                <span className={s.metaDate}>May 27, 2018</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={s.eightCol}>
                        <div className={s.row}>
                          {range(4).map(i => (
                            <div className={s.sixCol} key={i}>
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
                </div>
                {this.state.isAds ? (
                  <div className={cx(s.boosterContents, s.exclusive)}>
                    <div
                      className={s.boosterBackground}
                      style={{
                        backgroundImage: `url(http://papers.co/wallpaper/papers.co-sl90-iphonex-apple-color-blur-gradation-28-wallpaper.jpg)`,
                      }}
                    />
                    <div className={s.container}>
                      <h1 className={s.sectionTitle}>
                        Say hello to the future.
                      </h1>
                      <span className={s.sectionBadge}>AD</span>
                      <div className={s.row}>
                        <div className={cx(s.fourCol, s.exclusiveItem)}>
                          <Link className={s.exclusiveItemOuter} to="/">
                            <div
                              className={s.exclusiveItemInner}
                              style={{
                                backgroundImage: `url(https://www.apple.com/v/iphone-x/e/images/overview/modal/dual_cameras_hero_large_2x.jpg)`,
                              }}
                            />
                          </Link>
                        </div>
                        <div className={cx(s.fourCol, s.exclusiveItem)}>
                          <Link className={s.exclusiveItemOuter} to="/">
                            <div
                              className={s.exclusiveItemInner}
                              style={{
                                backgroundImage: `url(https://www.apple.com/v/iphone-x/e/images/overview/primary/design_truedepth_large_2x.jpg)`,
                              }}
                            />
                          </Link>
                        </div>
                        <div className={cx(s.fourCol, s.exclusiveItem)}>
                          <Link className={s.exclusiveItemOuter} to="/">
                            <div
                              className={s.exclusiveItemInner}
                              style={{
                                backgroundImage: `url(https://www.apple.com/v/iphone-x/e/images/overview/modal/design_expression_corner_large_2x.jpg)`,
                              }}
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className={s.boosterContents}>
                    <div
                      className={s.boosterBackground}
                      style={{
                        backgroundImage: `url(https://images.unsplash.com/photo-1527031169734-cc605463fe17?ixlib=rb-0.3.5&s=e7aa86213928e0797be006a4faa5b505&auto=format&fit=crop&w=2550&q=80)`,
                      }}
                    />
                    <div className={s.container}>
                      <h1 className={s.sectionTitle}>
                        <Link to="/">
                          Now in{' '}
                          <span style={{ color: this.state.intmusic }}>
                            Music
                          </span>
                        </Link>
                      </h1>
                      <div className={s.row}>
                        {range(3).map(i => (
                          <div className={s.fourCol} key={i}>
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
                )}
                <div className={s.container}>
                  <div className={s.row}>
                    {range(3).map(i => (
                      <div className={s.fourCol} key={i}>
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
                                style={{ backgroundColor: this.state.intfood }}
                              />
                            </Link>
                            <div className={s.interestLabel}>
                              <Link
                                to="/"
                                style={{
                                  color: this.state.intfood,
                                }}
                              >
                                FOOD
                              </Link>
                            </div>
                            <div className={s.readTime}>
                              <span>8</span>
                              <small
                                style={{
                                  color: this.state.intfood,
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
                              <span className={s.metaDate}>May 27, 2018</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    {range(3).map(i => (
                      <div className={s.fourCol} key={i}>
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
                                <Link to="/">{story[i].title}</Link>
                              </h1>
                            </div>
                            <div className={s.cardMeta}>
                              <span className={s.metaAuthor}>
                                {story[i].userpost.user_fullname}
                              </span>
                              <span className={s.metaDivider} />
                              <span className={s.metaDate}>May 27, 2018</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    {range(3).map(i => (
                      <div className={s.fourCol} key={i}>
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
                                <Link to="/">{story[i].title}</Link>
                              </h1>
                            </div>
                            <div className={s.cardMeta}>
                              <span className={s.metaAuthor}>
                                {story[i].userpost.user_fullname}
                              </span>
                              <span className={s.metaDivider} />
                              <span className={s.metaDate}>May 27, 2018</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    {range(6).map(i => (
                      <div className={s.fourCol} key={i}>
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
                                style={{ backgroundColor: this.state.intart }}
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
                              <span className={s.metaDate}>May 27, 2018</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {this.state.isContentLoading ? (
                    <div className={s.row}>
                      {range(6).map(i => (
                        <div className={s.fourCol} key={i}>
                          <div className={s.card}>
                            <div className={s.cardImage}>
                              <div
                                className={cx(
                                  s.skeleton,
                                  s.skeletonPrimary,
                                  s.skeletonCardImage,
                                )}
                              />
                              <div
                                className={cx(
                                  s.skeleton,
                                  s.skeletonSecondary,
                                  s.skeletonCardInterestLabel,
                                )}
                              />
                              <div
                                className={cx(
                                  s.skeleton,
                                  s.skeletonSecondary,
                                  s.skeletonCardReadTime,
                                )}
                              />
                            </div>
                            <div className={s.cardBody}>
                              <div
                                className={cx(
                                  s.skeleton,
                                  s.skeletonSecondary,
                                  s.skeletonCardTitleFirst,
                                )}
                              />
                              <div
                                className={cx(
                                  s.skeleton,
                                  s.skeletonSecondary,
                                  s.skeletonCardTitleSecond,
                                )}
                              />
                              <div className={s.cardMeta}>
                                <div
                                  className={cx(
                                    s.skeleton,
                                    s.skeletonSecondary,
                                    s.skeletonCardAuthor,
                                  )}
                                />
                                <div
                                  className={cx(
                                    s.skeleton,
                                    s.skeletonSecondary,
                                    s.skeletonCardDivider,
                                  )}
                                />
                                <div
                                  className={cx(
                                    s.skeleton,
                                    s.skeletonSecondary,
                                    s.skeletonCardDate,
                                  )}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
                {this.state.isContentLoading ? null : (
                  <div className={s.container}>
                    {this.state.isEnd ? (
                      <div className={s.end}>
                        <h3>
                          You&rsquo;re all caught up.{' '}
                          <span role="img" aria-label="party popper">
                            🎉
                          </span>
                        </h3>
                      </div>
                    ) : (
                      <button className={s.feedsViewMore} type="button">
                        VIEW MORE
                      </button>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <div className={s.feeds}>
                <div className={s.featuredContents}>
                  <div className={s.container}>
                    <h1 className={s.sectionTitle}>
                      <Link to="/">Music</Link>
                    </h1>
                    <div className={s.row}>
                      <div className={s.fourCol}>
                        <div className={cx(s.card, s.featuredOne)}>
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
                                style={{ backgroundColor: this.state.intmusic }}
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
                                      story[9].userpost.user_image_profile_url
                                    })`,
                                  }}
                                />
                              </div>
                              <div className={s.metaRight}>
                                <span className={s.metaAuthor}>
                                  {story[9].userpost.user_fullname}
                                </span>
                                <span className={s.metaDate}>May 27, 2018</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={s.eightCol}>
                        <div className={s.row}>
                          <div className={s.sixCol}>
                            <div className={s.card}>
                              <div className={s.cardImage}>
                                <Link
                                  className={s.inner}
                                  to="/"
                                  style={{
                                    backgroundImage: `url(${
                                      story[10].post_image_thumb_url
                                    })`,
                                  }}
                                >
                                  <div
                                    className={s.text}
                                    data-text={story[10].summary}
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
                                    <Link to="/">{story[10].title}</Link>
                                  </h1>
                                </div>
                                <div className={s.cardMeta}>
                                  <span className={s.metaAuthor}>
                                    {story[10].userpost.user_fullname}
                                  </span>
                                  <span className={s.metaDivider} />
                                  <span className={s.metaDate}>
                                    May 27, 2018
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={s.sixCol}>
                            <div className={s.card}>
                              <div className={s.cardImage}>
                                <Link
                                  className={s.inner}
                                  to="/"
                                  style={{
                                    backgroundImage: `url(${
                                      story[11].post_image_thumb_url
                                    })`,
                                  }}
                                >
                                  <div
                                    className={s.text}
                                    data-text={story[11].summary}
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
                                    <Link to="/">{story[11].title}</Link>
                                  </h1>
                                </div>
                                <div className={s.cardMeta}>
                                  <span className={s.metaAuthor}>
                                    {story[11].userpost.user_fullname}
                                  </span>
                                  <span className={s.metaDivider} />
                                  <span className={s.metaDate}>
                                    May 27, 2018
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={s.sixCol}>
                            <div className={s.card}>
                              <div className={s.cardImage}>
                                <Link
                                  className={s.inner}
                                  to="/"
                                  style={{
                                    backgroundImage: `url(${
                                      story[13].post_image_thumb_url
                                    })`,
                                  }}
                                >
                                  <div
                                    className={s.text}
                                    data-text={story[13].summary}
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
                                    <Link to="/">{story[13].title}</Link>
                                  </h1>
                                </div>
                                <div className={s.cardMeta}>
                                  <span className={s.metaAuthor}>
                                    {story[13].userpost.user_fullname}
                                  </span>
                                  <span className={s.metaDivider} />
                                  <span className={s.metaDate}>
                                    May 27, 2018
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={s.sixCol}>
                            <div className={s.card}>
                              <div className={s.cardImage}>
                                <Link
                                  className={s.inner}
                                  to="/"
                                  style={{
                                    backgroundImage: `url(${
                                      story[14].post_image_thumb_url
                                    })`,
                                  }}
                                >
                                  <div
                                    className={s.text}
                                    data-text={story[14].summary}
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
                                    <Link to="/">{story[14].title}</Link>
                                  </h1>
                                </div>
                                <div className={s.cardMeta}>
                                  <span className={s.metaAuthor}>
                                    {story[14].userpost.user_fullname}
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
                    </div>
                  </div>
                </div>
                <div className={s.featuredContents}>
                  <div className={s.container}>
                    <h1 className={s.sectionTitle}>
                      <Link to="/">Food</Link>
                    </h1>
                    <div className={s.row}>
                      <div className={s.fourCol}>
                        <div className={cx(s.card, s.featuredOne)}>
                          <div className={s.cardImage}>
                            <Link
                              className={s.inner}
                              to="/"
                              style={{
                                backgroundImage: `url(${
                                  story[15].post_image_thumb_url
                                })`,
                              }}
                            >
                              <div
                                className={s.text}
                                data-text={story[15].summary}
                              />
                              <div
                                className={s.overlay}
                                style={{ backgroundColor: this.state.intfood }}
                              />
                            </Link>
                            <div className={s.interestLabel}>
                              <Link
                                to="/"
                                style={{
                                  color: this.state.intfood,
                                }}
                              >
                                FOOD
                              </Link>
                            </div>
                            <div className={s.readTime}>
                              <span>8</span>
                              <small
                                style={{
                                  color: this.state.intfood,
                                }}
                              >
                                MIN
                              </small>
                            </div>
                          </div>
                          <div className={s.cardBody}>
                            <div className={s.cardTitle}>
                              <h1 className={s.title}>
                                <Link to="/">{story[15].title}</Link>
                              </h1>
                              <span className={s.summary}>
                                {story[15].summary}
                              </span>
                            </div>
                            <div className={s.cardMeta}>
                              <div className={s.metaAvatar}>
                                <div
                                  style={{
                                    backgroundImage: `url(${
                                      story[15].userpost.user_image_profile_url
                                    })`,
                                  }}
                                />
                              </div>
                              <div className={s.metaRight}>
                                <span className={s.metaAuthor}>
                                  {story[15].userpost.user_fullname}
                                </span>
                                <span className={s.metaDate}>May 27, 2018</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={s.eightCol}>
                        <div className={s.row}>
                          <div className={s.sixCol}>
                            <div className={s.card}>
                              <div className={s.cardImage}>
                                <Link
                                  className={s.inner}
                                  to="/"
                                  style={{
                                    backgroundImage: `url(${
                                      story[16].post_image_thumb_url
                                    })`,
                                  }}
                                >
                                  <div
                                    className={s.text}
                                    data-text={story[16].summary}
                                  />
                                  <div
                                    className={s.overlay}
                                    style={{
                                      backgroundColor: this.state.intfood,
                                    }}
                                  />
                                </Link>
                                <div className={s.interestLabel}>
                                  <Link
                                    to="/"
                                    style={{
                                      color: this.state.intfood,
                                    }}
                                  >
                                    FOOD
                                  </Link>
                                </div>
                                <div className={s.readTime}>
                                  <span>8</span>
                                  <small
                                    style={{
                                      color: this.state.intfood,
                                    }}
                                  >
                                    MIN
                                  </small>
                                </div>
                              </div>
                              <div className={s.cardBody}>
                                <div className={s.cardTitle}>
                                  <h1 className={s.title}>
                                    <Link to="/">{story[16].title}</Link>
                                  </h1>
                                </div>
                                <div className={s.cardMeta}>
                                  <span className={s.metaAuthor}>
                                    {story[16].userpost.user_fullname}
                                  </span>
                                  <span className={s.metaDivider} />
                                  <span className={s.metaDate}>
                                    May 27, 2018
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={s.sixCol}>
                            <div className={s.card}>
                              <div className={s.cardImage}>
                                <Link
                                  className={s.inner}
                                  to="/"
                                  style={{
                                    backgroundImage: `url(${
                                      story[17].post_image_thumb_url
                                    })`,
                                  }}
                                >
                                  <div
                                    className={s.text}
                                    data-text={story[17].summary}
                                  />
                                  <div
                                    className={s.overlay}
                                    style={{
                                      backgroundColor: this.state.intfood,
                                    }}
                                  />
                                </Link>
                                <div className={s.interestLabel}>
                                  <Link
                                    to="/"
                                    style={{
                                      color: this.state.intfood,
                                    }}
                                  >
                                    FOOD
                                  </Link>
                                </div>
                                <div className={s.readTime}>
                                  <span>8</span>
                                  <small
                                    style={{
                                      color: this.state.intfood,
                                    }}
                                  >
                                    MIN
                                  </small>
                                </div>
                              </div>
                              <div className={s.cardBody}>
                                <div className={s.cardTitle}>
                                  <h1 className={s.title}>
                                    <Link to="/">{story[17].title}</Link>
                                  </h1>
                                </div>
                                <div className={s.cardMeta}>
                                  <span className={s.metaAuthor}>
                                    {story[17].userpost.user_fullname}
                                  </span>
                                  <span className={s.metaDivider} />
                                  <span className={s.metaDate}>
                                    May 27, 2018
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={s.sixCol}>
                            <div className={s.card}>
                              <div className={s.cardImage}>
                                <Link
                                  className={s.inner}
                                  to="/"
                                  style={{
                                    backgroundImage: `url(${
                                      story[18].post_image_thumb_url
                                    })`,
                                  }}
                                >
                                  <div
                                    className={s.text}
                                    data-text={story[18].summary}
                                  />
                                  <div
                                    className={s.overlay}
                                    style={{
                                      backgroundColor: this.state.intfood,
                                    }}
                                  />
                                </Link>
                                <div className={s.interestLabel}>
                                  <Link
                                    to="/"
                                    style={{
                                      color: this.state.intfood,
                                    }}
                                  >
                                    FOOD
                                  </Link>
                                </div>
                                <div className={s.readTime}>
                                  <span>8</span>
                                  <small
                                    style={{
                                      color: this.state.intfood,
                                    }}
                                  >
                                    MIN
                                  </small>
                                </div>
                              </div>
                              <div className={s.cardBody}>
                                <div className={s.cardTitle}>
                                  <h1 className={s.title}>
                                    <Link to="/">{story[18].title}</Link>
                                  </h1>
                                </div>
                                <div className={s.cardMeta}>
                                  <span className={s.metaAuthor}>
                                    {story[18].userpost.user_fullname}
                                  </span>
                                  <span className={s.metaDivider} />
                                  <span className={s.metaDate}>
                                    May 27, 2018
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={s.sixCol}>
                            <div className={s.card}>
                              <div className={s.cardImage}>
                                <Link
                                  className={s.inner}
                                  to="/"
                                  style={{
                                    backgroundImage: `url(${
                                      story[19].post_image_thumb_url
                                    })`,
                                  }}
                                >
                                  <div
                                    className={s.text}
                                    data-text={story[19].summary}
                                  />
                                  <div
                                    className={s.overlay}
                                    style={{
                                      backgroundColor: this.state.intfood,
                                    }}
                                  />
                                </Link>
                                <div className={s.interestLabel}>
                                  <Link
                                    to="/"
                                    style={{
                                      color: this.state.intfood,
                                    }}
                                  >
                                    FOOD
                                  </Link>
                                </div>
                                <div className={s.readTime}>
                                  <span>8</span>
                                  <small
                                    style={{
                                      color: this.state.intfood,
                                    }}
                                  >
                                    MIN
                                  </small>
                                </div>
                              </div>
                              <div className={s.cardBody}>
                                <div className={s.cardTitle}>
                                  <h1 className={s.title}>
                                    <Link to="/">{story[19].title}</Link>
                                  </h1>
                                </div>
                                <div className={s.cardMeta}>
                                  <span className={s.metaAuthor}>
                                    {story[19].userpost.user_fullname}
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
                    </div>
                  </div>
                </div>
                <div className={s.featuredContents}>
                  <div className={s.container}>
                    <h1 className={s.sectionTitle}>
                      <Link to="/">Fashion</Link>
                    </h1>
                    <div className={s.row}>
                      <div className={s.fourCol}>
                        <div className={cx(s.card, s.featuredOne)}>
                          <div className={s.cardImage}>
                            <Link
                              className={s.inner}
                              to="/"
                              style={{
                                backgroundImage: `url(${
                                  story[20].post_image_thumb_url
                                })`,
                              }}
                            >
                              <div
                                className={s.text}
                                data-text={story[20].summary}
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
                                <Link to="/">{story[20].title}</Link>
                              </h1>
                              <span className={s.summary}>
                                {story[20].summary}
                              </span>
                            </div>
                            <div className={s.cardMeta}>
                              <div className={s.metaAvatar}>
                                <div
                                  style={{
                                    backgroundImage: `url(${
                                      story[20].userpost.user_image_profile_url
                                    })`,
                                  }}
                                />
                              </div>
                              <div className={s.metaRight}>
                                <span className={s.metaAuthor}>
                                  {story[20].userpost.user_fullname}
                                </span>
                                <span className={s.metaDate}>May 27, 2018</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={s.eightCol}>
                        <div className={s.row}>
                          <div className={s.sixCol}>
                            <div className={s.card}>
                              <div className={s.cardImage}>
                                <Link
                                  className={s.inner}
                                  to="/"
                                  style={{
                                    backgroundImage: `url(${
                                      story[21].post_image_thumb_url
                                    })`,
                                  }}
                                >
                                  <div
                                    className={s.text}
                                    data-text={story[21].summary}
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
                                    <Link to="/">{story[21].title}</Link>
                                  </h1>
                                </div>
                                <div className={s.cardMeta}>
                                  <span className={s.metaAuthor}>
                                    {story[21].userpost.user_fullname}
                                  </span>
                                  <span className={s.metaDivider} />
                                  <span className={s.metaDate}>
                                    May 27, 2018
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={s.sixCol}>
                            <div className={s.card}>
                              <div className={s.cardImage}>
                                <Link
                                  className={s.inner}
                                  to="/"
                                  style={{
                                    backgroundImage: `url(${
                                      story[22].post_image_thumb_url
                                    })`,
                                  }}
                                >
                                  <div
                                    className={s.text}
                                    data-text={story[22].summary}
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
                                    <Link to="/">{story[22].title}</Link>
                                  </h1>
                                </div>
                                <div className={s.cardMeta}>
                                  <span className={s.metaAuthor}>
                                    {story[22].userpost.user_fullname}
                                  </span>
                                  <span className={s.metaDivider} />
                                  <span className={s.metaDate}>
                                    May 27, 2018
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={s.sixCol}>
                            <div className={s.card}>
                              <div className={s.cardImage}>
                                <Link
                                  className={s.inner}
                                  to="/"
                                  style={{
                                    backgroundImage: `url(${
                                      story[23].post_image_thumb_url
                                    })`,
                                  }}
                                >
                                  <div
                                    className={s.text}
                                    data-text={story[23].summary}
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
                                    <Link to="/">{story[23].title}</Link>
                                  </h1>
                                </div>
                                <div className={s.cardMeta}>
                                  <span className={s.metaAuthor}>
                                    {story[23].userpost.user_fullname}
                                  </span>
                                  <span className={s.metaDivider} />
                                  <span className={s.metaDate}>
                                    May 27, 2018
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={s.sixCol}>
                            <div className={s.card}>
                              <div className={s.cardImage}>
                                <Link
                                  className={s.inner}
                                  to="/"
                                  style={{
                                    backgroundImage: `url(${
                                      story[24].post_image_thumb_url
                                    })`,
                                  }}
                                >
                                  <div
                                    className={s.text}
                                    data-text={story[24].summary}
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
                                    <Link to="/">{story[24].title}</Link>
                                  </h1>
                                </div>
                                <div className={s.cardMeta}>
                                  <span className={s.metaAuthor}>
                                    {story[24].userpost.user_fullname}
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
                    </div>
                  </div>
                </div>
                <div className={s.featuredContents}>
                  <div className={s.container}>
                    <h1 className={s.sectionTitle}>
                      <Link to="/">Beauty</Link>
                    </h1>
                    <div className={s.row}>
                      <div className={s.fourCol}>
                        <div className={cx(s.card, s.featuredOne)}>
                          <div className={s.cardImage}>
                            <Link
                              className={s.inner}
                              to="/"
                              style={{
                                backgroundImage: `url(${
                                  story[25].post_image_thumb_url
                                })`,
                              }}
                            >
                              <div
                                className={s.text}
                                data-text={story[25].summary}
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
                                <Link to="/">{story[25].title}</Link>
                              </h1>
                              <span className={s.summary}>
                                {story[25].summary}
                              </span>
                            </div>
                            <div className={s.cardMeta}>
                              <div className={s.metaAvatar}>
                                <div
                                  style={{
                                    backgroundImage: `url(${
                                      story[25].userpost.user_image_profile_url
                                    })`,
                                  }}
                                />
                              </div>
                              <div className={s.metaRight}>
                                <span className={s.metaAuthor}>
                                  {story[25].userpost.user_fullname}
                                </span>
                                <span className={s.metaDate}>May 27, 2018</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={s.eightCol}>
                        <div className={s.row}>
                          <div className={s.sixCol}>
                            <div className={s.card}>
                              <div className={s.cardImage}>
                                <Link
                                  className={s.inner}
                                  to="/"
                                  style={{
                                    backgroundImage: `url(${
                                      story[26].post_image_thumb_url
                                    })`,
                                  }}
                                >
                                  <div
                                    className={s.text}
                                    data-text={story[26].summary}
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
                                    <Link to="/">{story[26].title}</Link>
                                  </h1>
                                </div>
                                <div className={s.cardMeta}>
                                  <span className={s.metaAuthor}>
                                    {story[26].userpost.user_fullname}
                                  </span>
                                  <span className={s.metaDivider} />
                                  <span className={s.metaDate}>
                                    May 27, 2018
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={s.sixCol}>
                            <div className={s.card}>
                              <div className={s.cardImage}>
                                <Link
                                  className={s.inner}
                                  to="/"
                                  style={{
                                    backgroundImage: `url(${
                                      story[27].post_image_thumb_url
                                    })`,
                                  }}
                                >
                                  <div
                                    className={s.text}
                                    data-text={story[27].summary}
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
                                    <Link to="/">{story[27].title}</Link>
                                  </h1>
                                </div>
                                <div className={s.cardMeta}>
                                  <span className={s.metaAuthor}>
                                    {story[27].userpost.user_fullname}
                                  </span>
                                  <span className={s.metaDivider} />
                                  <span className={s.metaDate}>
                                    May 27, 2018
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={s.sixCol}>
                            <div className={s.card}>
                              <div className={s.cardImage}>
                                <Link
                                  className={s.inner}
                                  to="/"
                                  style={{
                                    backgroundImage: `url(${
                                      story[28].post_image_thumb_url
                                    })`,
                                  }}
                                >
                                  <div
                                    className={s.text}
                                    data-text={story[28].summary}
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
                                    <Link to="/">{story[28].title}</Link>
                                  </h1>
                                </div>
                                <div className={s.cardMeta}>
                                  <span className={s.metaAuthor}>
                                    {story[28].userpost.user_fullname}
                                  </span>
                                  <span className={s.metaDivider} />
                                  <span className={s.metaDate}>
                                    May 27, 2018
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={s.sixCol}>
                            <div className={s.card}>
                              <div className={s.cardImage}>
                                <Link
                                  className={s.inner}
                                  to="/"
                                  style={{
                                    backgroundImage: `url(${
                                      story[29].post_image_thumb_url
                                    })`,
                                  }}
                                >
                                  <div
                                    className={s.text}
                                    data-text={story[29].summary}
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
                                    <Link to="/">{story[29].title}</Link>
                                  </h1>
                                </div>
                                <div className={s.cardMeta}>
                                  <span className={s.metaAuthor}>
                                    {story[29].userpost.user_fullname}
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
                    </div>
                  </div>
                </div>
                <div className={s.featuredContents}>
                  <div className={s.container}>
                    <h1 className={s.sectionTitle}>
                      <Link to="/">Travel</Link>
                    </h1>
                    <div className={s.row}>
                      <div className={s.fourCol}>
                        <div className={cx(s.card, s.featuredOne)}>
                          <div className={s.cardImage}>
                            <Link
                              className={s.inner}
                              to="/"
                              style={{
                                backgroundImage: `url(${
                                  story[30].post_image_thumb_url
                                })`,
                              }}
                            >
                              <div
                                className={s.text}
                                data-text={story[30].summary}
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
                                <Link to="/">{story[30].title}</Link>
                              </h1>
                              <span className={s.summary}>
                                {story[30].summary}
                              </span>
                            </div>
                            <div className={s.cardMeta}>
                              <div className={s.metaAvatar}>
                                <div
                                  style={{
                                    backgroundImage: `url(${
                                      story[30].userpost.user_image_profile_url
                                    })`,
                                  }}
                                />
                              </div>
                              <div className={s.metaRight}>
                                <span className={s.metaAuthor}>
                                  {story[30].userpost.user_fullname}
                                </span>
                                <span className={s.metaDate}>May 27, 2018</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={s.eightCol}>
                        <div className={s.row}>
                          <div className={s.sixCol}>
                            <div className={s.card}>
                              <div className={s.cardImage}>
                                <Link
                                  className={s.inner}
                                  to="/"
                                  style={{
                                    backgroundImage: `url(${
                                      story[31].post_image_thumb_url
                                    })`,
                                  }}
                                >
                                  <div
                                    className={s.text}
                                    data-text={story[31].summary}
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
                                    <Link to="/">{story[31].title}</Link>
                                  </h1>
                                </div>
                                <div className={s.cardMeta}>
                                  <span className={s.metaAuthor}>
                                    {story[31].userpost.user_fullname}
                                  </span>
                                  <span className={s.metaDivider} />
                                  <span className={s.metaDate}>
                                    May 27, 2018
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={s.sixCol}>
                            <div className={s.card}>
                              <div className={s.cardImage}>
                                <Link
                                  className={s.inner}
                                  to="/"
                                  style={{
                                    backgroundImage: `url(${
                                      story[32].post_image_thumb_url
                                    })`,
                                  }}
                                >
                                  <div
                                    className={s.text}
                                    data-text={story[32].summary}
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
                                    <Link to="/">{story[32].title}</Link>
                                  </h1>
                                </div>
                                <div className={s.cardMeta}>
                                  <span className={s.metaAuthor}>
                                    {story[32].userpost.user_fullname}
                                  </span>
                                  <span className={s.metaDivider} />
                                  <span className={s.metaDate}>
                                    May 27, 2018
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={s.sixCol}>
                            <div className={s.card}>
                              <div className={s.cardImage}>
                                <Link
                                  className={s.inner}
                                  to="/"
                                  style={{
                                    backgroundImage: `url(${
                                      story[33].post_image_thumb_url
                                    })`,
                                  }}
                                >
                                  <div
                                    className={s.text}
                                    data-text={story[33].summary}
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
                                    <Link to="/">{story[33].title}</Link>
                                  </h1>
                                </div>
                                <div className={s.cardMeta}>
                                  <span className={s.metaAuthor}>
                                    {story[33].userpost.user_fullname}
                                  </span>
                                  <span className={s.metaDivider} />
                                  <span className={s.metaDate}>
                                    May 27, 2018
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={s.sixCol}>
                            <div className={s.card}>
                              <div className={s.cardImage}>
                                <Link
                                  className={s.inner}
                                  to="/"
                                  style={{
                                    backgroundImage: `url(${
                                      story[34].post_image_thumb_url
                                    })`,
                                  }}
                                >
                                  <div
                                    className={s.text}
                                    data-text={story[34].summary}
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
                                    <Link to="/">{story[34].title}</Link>
                                  </h1>
                                </div>
                                <div className={s.cardMeta}>
                                  <span className={s.metaAuthor}>
                                    {story[34].userpost.user_fullname}
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
                    </div>
                  </div>
                </div>
                <div className={s.featuredContents}>
                  <div className={s.container}>
                    <h1 className={s.sectionTitle}>
                      <Link to="/">Art</Link>
                    </h1>
                    <div className={s.row}>
                      <div className={s.fourCol}>
                        <div className={cx(s.card, s.featuredOne)}>
                          <div className={s.cardImage}>
                            <Link
                              className={s.inner}
                              to="/"
                              style={{
                                backgroundImage: `url(${
                                  story[15].post_image_thumb_url
                                })`,
                              }}
                            >
                              <div
                                className={s.text}
                                data-text={story[15].summary}
                              />
                              <div
                                className={s.overlay}
                                style={{ backgroundColor: this.state.intart }}
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
                                <Link to="/">{story[15].title}</Link>
                              </h1>
                              <span className={s.summary}>
                                {story[15].summary}
                              </span>
                            </div>
                            <div className={s.cardMeta}>
                              <div className={s.metaAvatar}>
                                <div
                                  style={{
                                    backgroundImage: `url(${
                                      story[15].userpost.user_image_profile_url
                                    })`,
                                  }}
                                />
                              </div>
                              <div className={s.metaRight}>
                                <span className={s.metaAuthor}>
                                  {story[15].userpost.user_fullname}
                                </span>
                                <span className={s.metaDate}>May 27, 2018</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={s.eightCol}>
                        <div className={s.row}>
                          <div className={s.sixCol}>
                            <div className={s.card}>
                              <div className={s.cardImage}>
                                <Link
                                  className={s.inner}
                                  to="/"
                                  style={{
                                    backgroundImage: `url(${
                                      story[14].post_image_thumb_url
                                    })`,
                                  }}
                                >
                                  <div
                                    className={s.text}
                                    data-text={story[14].summary}
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
                                  <small>MIN</small>
                                </div>
                              </div>
                              <div className={s.cardBody}>
                                <div className={s.cardTitle}>
                                  <h1 className={s.title}>
                                    <Link to="/">{story[14].title}</Link>
                                  </h1>
                                </div>
                                <div className={s.cardMeta}>
                                  <span className={s.metaAuthor}>
                                    {story[14].userpost.user_fullname}
                                  </span>
                                  <span className={s.metaDivider} />
                                  <span className={s.metaDate}>
                                    May 27, 2018
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={s.sixCol}>
                            <div className={s.card}>
                              <div className={s.cardImage}>
                                <Link
                                  className={s.inner}
                                  to="/"
                                  style={{
                                    backgroundImage: `url(${
                                      story[13].post_image_thumb_url
                                    })`,
                                  }}
                                >
                                  <div
                                    className={s.text}
                                    data-text={story[13].summary}
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
                                    <Link to="/">{story[13].title}</Link>
                                  </h1>
                                </div>
                                <div className={s.cardMeta}>
                                  <span className={s.metaAuthor}>
                                    {story[13].userpost.user_fullname}
                                  </span>
                                  <span className={s.metaDivider} />
                                  <span className={s.metaDate}>
                                    May 27, 2018
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={s.sixCol}>
                            <div className={s.card}>
                              <div className={s.cardImage}>
                                <Link
                                  className={s.inner}
                                  to="/"
                                  style={{
                                    backgroundImage: `url(${
                                      story[6].post_image_thumb_url
                                    })`,
                                  }}
                                >
                                  <div
                                    className={s.text}
                                    data-text={story[6].summary}
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
                          <div className={s.sixCol}>
                            <div className={s.card}>
                              <div className={s.cardImage}>
                                <Link
                                  className={s.inner}
                                  to="/"
                                  style={{
                                    backgroundImage: `url(${
                                      story[11].post_image_thumb_url
                                    })`,
                                  }}
                                >
                                  <div
                                    className={s.text}
                                    data-text={story[11].summary}
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
                                    <Link to="/">{story[11].title}</Link>
                                  </h1>
                                </div>
                                <div className={s.cardMeta}>
                                  <span className={s.metaAuthor}>
                                    {story[11].userpost.user_fullname}
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
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className={s.iabThings}>
              <div className={s.iabThingsWrapper}>
                <Link to="/">
                  <img
                    src="http://image.noelshack.com/fichiers/2012/36/1346898152-bc4free-by-noodle.jpg"
                    alt="iab item"
                  />
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className={s.headline}>
              <div className={s.headlineTop}>
                <div className={s.hero}>
                  <div className={s.heroWrapper}>
                    <div
                      className={cx(
                        s.skeleton,
                        s.skeletonSecondary,
                        s.skeletonHeroImage,
                      )}
                    />
                    <div className={s.heroTitle}>
                      <div className={s.container}>
                        <div
                          className={cx(
                            s.skeleton,
                            s.skeletonPrimary,
                            s.skeletonHeroReadTime,
                          )}
                        />
                        <div
                          className={cx(
                            s.skeleton,
                            s.skeletonPrimary,
                            s.skeletonHeroInterestLabel,
                          )}
                        />
                        <div
                          className={cx(
                            s.skeleton,
                            s.skeletonPrimary,
                            s.skeletonHeroTitleFirst,
                          )}
                        />
                        <div
                          className={cx(
                            s.skeleton,
                            s.skeletonPrimary,
                            s.skeletonHeroTitleSecond,
                          )}
                        />
                        <div
                          className={cx(
                            s.skeleton,
                            s.skeletonPrimary,
                            s.skeletonHeroAuthor,
                          )}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={s.headlineBottom}>
                <div className={s.container}>
                  <div className={s.row}>
                    {range(4).map(i => (
                      <div className={s.threeCol} key={i}>
                        <div className={s.card}>
                          <div className={s.cardImage}>
                            <div
                              className={cx(
                                s.skeleton,
                                s.skeletonPrimary,
                                s.skeletonCardImage,
                              )}
                            />
                            <div
                              className={cx(
                                s.skeleton,
                                s.skeletonSecondary,
                                s.skeletonCardInterestLabel,
                              )}
                            />
                            <div
                              className={cx(
                                s.skeleton,
                                s.skeletonSecondary,
                                s.skeletonCardReadTime,
                              )}
                            />
                          </div>
                          <div className={s.cardBody}>
                            <div
                              className={cx(
                                s.skeleton,
                                s.skeletonSecondary,
                                s.skeletonCardTitleFirst,
                              )}
                            />
                            <div
                              className={cx(
                                s.skeleton,
                                s.skeletonSecondary,
                                s.skeletonCardTitleSecond,
                              )}
                            />
                            <div className={s.cardMeta}>
                              <div
                                className={cx(
                                  s.skeleton,
                                  s.skeletonSecondary,
                                  s.skeletonCardAuthor,
                                )}
                              />
                              <div
                                className={cx(
                                  s.skeleton,
                                  s.skeletonSecondary,
                                  s.skeletonCardDivider,
                                )}
                              />
                              <div
                                className={cx(
                                  s.skeleton,
                                  s.skeletonSecondary,
                                  s.skeletonCardDate,
                                )}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default withStyles(s)(Home);
