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
import s from './Navigation.css';
import Link from '../Link';
import ModalSignUp from '../ModalSignUp';
import ModalSignIn from '../ModalSignIn';

import avatar from './avatar-default.png';
import story from '../../data/sample_data.json';

class Navigation extends React.Component {
  static propTypes = {
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    interestMenu: PropTypes.bool,
  };

  static defaultProps = {
    onMouseEnter: null,
    onMouseLeave: null,
    interestMenu: true,
  };

  state = {
    intmusic: '#F8DB65',
    intfood: '#73E4B2',
    intfashion: '#827AF9',
    intbeauty: '#FB74D2',
    inttravel: '#FA675D',
    intart: '#51EFE8',
    intothers: '#D8D8D8',
    isSignedIn: false,
    showModalSignUp: false,
    showModalSignIn: false,
    showSearch: false,
    showSearchPanel: false,
    showSearchLoading: false,
    showSearchNotFound: false,
    showDropdown: false,
  };

  componentWillMount() {
    this.handleShowDropdown = this.handleShowDropdown.bind(this);
    this.handleHideDropdown = this.handleHideDropdown.bind(this);
    this.handleOpenModalSignUp = this.handleOpenModalSignUp.bind(this);
    this.handleOpenModalSignIn = this.handleOpenModalSignIn.bind(this);
    this.handleCloseModalSignUp = this.handleCloseModalSignUp.bind(this);
    this.handleCloseModalSignIn = this.handleCloseModalSignIn.bind(this);
    this.handleSwitchModalSignInToSignUp = this.handleSwitchModalSignInToSignUp.bind(
      this,
    );
    this.handleSwitchModalSignUpToSignIn = this.handleSwitchModalSignUpToSignIn.bind(
      this,
    );
  }

  handleHover = event => {
    if (this.props.onMouseEnter) {
      this.props.onMouseEnter(event);
    }

    if (this.props.onMouseLeave) {
      this.props.onMouseLeave(event);
    }

    if (event.defaultPrevented === true) {
      return;
    }

    event.preventDefault();
  };

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

  handleOpenModalSignUp = () => {
    this.setState({ showModalSignUp: true });
  };

  handleOpenModalSignIn = () => {
    this.setState({ showModalSignIn: true });
  };

  handleCloseModalSignUp = () => {
    this.setState({ showModalSignUp: false });
  };

  handleCloseModalSignIn = () => {
    this.setState({ showModalSignIn: false });
  };

  handleSwitchModalSignUpToSignIn = () => {
    this.setState({
      showModalSignUp: false,
      showModalSignIn: true,
    });
  };

  handleSwitchModalSignInToSignUp = () => {
    this.setState({
      showModalSignUp: true,
      showModalSignIn: false,
    });
  };

  handleShowSearch = () => {
    this.setState({
      showSearch: !this.state.showSearch,
    });

    this.setState({ showSearchPanel: false }, () => {
      document.removeEventListener('click', this.handleShowSearch);
    });
  };

  handleShowDropdown = event => {
    event.preventDefault();

    this.setState({ showDropdown: true }, () => {
      document.addEventListener('click', this.handleHideDropdown);
    });
  };

  handleHideDropdown = event => {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showDropdown: false }, () => {
        document.removeEventListener('click', this.handleHideDropdown);
      });
    }
  };

  handleOnChange = () => {
    this.setState({
      showSearchPanel: true,
    });

    if (this.searchInput.value === '') {
      this.setState({
        showSearchPanel: false,
      });
    }

    setTimeout(() => {
      this.setState({ showSearchLoading: true });
    }, 3000);

    if (this.searchInput.value === 'qwe') {
      this.setState({
        showSearchNotFound: true,
      });
    } else {
      this.setState({
        showSearchNotFound: false,
      });
    }
  };

  render() {
    const { interestMenu } = this.props;
    return (
      <div
        className={s.root}
        role="navigation"
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleHover}
      >
        {this.state.showSearch ? (
          <div className={s.searchInput}>
            <form className={s.searchForm} action="/search-results">
              <input
                type="search"
                placeholder="Search Qubicle..."
                onChange={this.handleOnChange}
                ref={element => {
                  this.searchInput = element;
                }}
              />
            </form>
          </div>
        ) : (
          [
            interestMenu && (
              <nav className={cx(s.nav, s.interests)} key={Boolean}>
                <ul>
                  <li
                    data-interest="music"
                    onMouseEnter={this.interestHoverIn}
                    onMouseLeave={this.interestHoverOut}
                  >
                    <Link
                      className={cx(s.link, s.interest)}
                      data-interest="music"
                      to="/interest"
                      style={{
                        color: this.state.music,
                      }}
                    >
                      MUSIC
                    </Link>
                    <div
                      className={s.panel}
                      data-interest="music"
                      onMouseEnter={this.interestHoverIn}
                    >
                      <div className={s.container}>
                        <div
                          className={s.panelBorder}
                          data-interest="music"
                          style={{
                            borderColor: this.state.music,
                          }}
                        />
                        <div className={s.row}>
                          <div className={s.threeCol}>
                            <div className={s.card}>
                              <div className={s.cardImage}>
                                <Link
                                  className={s.inner}
                                  to="/"
                                  style={{
                                    backgroundImage: `url(${
                                      story.result[0].post_image_thumb_url
                                    })`,
                                  }}
                                >
                                  <div
                                    className={s.text}
                                    data-text={story.result[0].summary}
                                  />
                                  <div
                                    className={s.overlay}
                                    style={{
                                      backgroundColor: this.state.intmusic,
                                    }}
                                  />
                                </Link>
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
                                    <Link to="/">{story.result[0].title}</Link>
                                  </h1>
                                </div>
                                <div className={s.cardMeta}>
                                  <span className={s.metaAuthor}>
                                    {story.result[0].userpost.user_fullname}
                                  </span>
                                  <span className={s.metaDivider} />
                                  <span className={s.metaDate}>
                                    May 27, 2018
                                  </span>
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
                                      story.result[1].post_image_thumb_url
                                    })`,
                                  }}
                                >
                                  <div
                                    className={s.text}
                                    data-text={story.result[1].summary}
                                  />
                                  <div
                                    className={s.overlay}
                                    style={{
                                      backgroundColor: this.state.intmusic,
                                    }}
                                  />
                                </Link>
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
                                    <Link to="/">{story.result[1].title}</Link>
                                  </h1>
                                </div>
                                <div className={s.cardMeta}>
                                  <span className={s.metaAuthor}>
                                    {story.result[1].userpost.user_fullname}
                                  </span>
                                  <span className={s.metaDivider} />
                                  <span className={s.metaDate}>
                                    May 27, 2018
                                  </span>
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
                                      story.result[2].post_image_thumb_url
                                    })`,
                                  }}
                                >
                                  <div
                                    className={s.text}
                                    data-text={story.result[2].summary}
                                  />
                                  <div
                                    className={s.overlay}
                                    style={{
                                      backgroundColor: this.state.intmusic,
                                    }}
                                  />
                                </Link>
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
                                    <Link to="/">{story.result[2].title}</Link>
                                  </h1>
                                </div>
                                <div className={s.cardMeta}>
                                  <span className={s.metaAuthor}>
                                    {story.result[2].userpost.user_fullname}
                                  </span>
                                  <span className={s.metaDivider} />
                                  <span className={s.metaDate}>
                                    May 27, 2018
                                  </span>
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
                                      story.result[3].post_image_thumb_url
                                    })`,
                                  }}
                                >
                                  <div
                                    className={s.text}
                                    data-text={story.result[3].summary}
                                  />
                                  <div
                                    className={s.overlay}
                                    style={{
                                      backgroundColor: this.state.intmusic,
                                    }}
                                  />
                                </Link>
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
                                    <Link to="/">{story.result[3].title}</Link>
                                  </h1>
                                </div>
                                <div className={s.cardMeta}>
                                  <span className={s.metaAuthor}>
                                    {story.result[3].userpost.user_fullname}
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
                        <div className={s.panelButton}>
                          <Link
                            to="/"
                            data-interest="music"
                            style={{
                              borderColor: this.state.music,
                            }}
                          >
                            <span>SEE ALL</span>
                            <i
                              data-interest="music"
                              style={{
                                backgroundColor: this.state.music,
                              }}
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    data-interest="food"
                    onMouseEnter={this.interestHoverIn}
                    onMouseLeave={this.interestHoverOut}
                  >
                    <Link
                      className={cx(s.link, s.interest)}
                      data-interest="food"
                      to="/"
                      style={{
                        color: this.state.food,
                      }}
                    >
                      FOOD
                    </Link>
                    <div
                      className={s.panel}
                      data-interest="food"
                      onMouseEnter={this.interestHoverIn}
                    >
                      <div className={s.container}>
                        <div
                          className={s.panelBorder}
                          data-interest="food"
                          style={{
                            borderColor: this.state.food,
                          }}
                        />
                        <div className={s.row}>
                          <div className={s.threeCol}>
                            <div className={s.card}>
                              <div className={s.cardImage}>
                                <Link
                                  className={s.inner}
                                  to="/"
                                  style={{
                                    backgroundImage: `url(${
                                      story.result[4].post_image_thumb_url
                                    })`,
                                  }}
                                >
                                  <div
                                    className={s.text}
                                    data-text={story.result[4].summary}
                                  />
                                  <div
                                    className={s.overlay}
                                    style={{
                                      backgroundColor: this.state.intfood,
                                    }}
                                  />
                                </Link>
                                <div className={s.readTime}>
                                  <span>10</span>
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
                                    <Link to="/">{story.result[4].title}</Link>
                                  </h1>
                                </div>
                                <div className={s.cardMeta}>
                                  <span className={s.metaAuthor}>
                                    {story.result[4].userpost.user_fullname}
                                  </span>
                                  <span className={s.metaDivider} />
                                  <span className={s.metaDate}>
                                    May 27, 2018
                                  </span>
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
                                      story.result[5].post_image_thumb_url
                                    })`,
                                  }}
                                >
                                  <div
                                    className={s.text}
                                    data-text={story.result[5].summary}
                                  />
                                  <div
                                    className={s.overlay}
                                    style={{
                                      backgroundColor: this.state.intfood,
                                    }}
                                  />
                                </Link>
                                <div className={s.readTime}>
                                  <span>10</span>
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
                                    <Link to="/">{story.result[5].title}</Link>
                                  </h1>
                                </div>
                                <div className={s.cardMeta}>
                                  <span className={s.metaAuthor}>
                                    {story.result[5].userpost.user_fullname}
                                  </span>
                                  <span className={s.metaDivider} />
                                  <span className={s.metaDate}>
                                    May 27, 2018
                                  </span>
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
                                      story.result[6].post_image_thumb_url
                                    })`,
                                  }}
                                >
                                  <div
                                    className={s.text}
                                    data-text={story.result[6].summary}
                                  />
                                  <div
                                    className={s.overlay}
                                    style={{
                                      backgroundColor: this.state.intfood,
                                    }}
                                  />
                                </Link>
                                <div className={s.readTime}>
                                  <span>10</span>
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
                                    <Link to="/">{story.result[6].title}</Link>
                                  </h1>
                                </div>
                                <div className={s.cardMeta}>
                                  <span className={s.metaAuthor}>
                                    {story.result[6].userpost.user_fullname}
                                  </span>
                                  <span className={s.metaDivider} />
                                  <span className={s.metaDate}>
                                    May 27, 2018
                                  </span>
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
                                      story.result[7].post_image_thumb_url
                                    })`,
                                  }}
                                >
                                  <div
                                    className={s.text}
                                    data-text={story.result[7].summary}
                                  />
                                  <div
                                    className={s.overlay}
                                    style={{
                                      backgroundColor: this.state.intfood,
                                    }}
                                  />
                                </Link>
                                <div className={s.readTime}>
                                  <span>10</span>
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
                                    <Link to="/">{story.result[7].title}</Link>
                                  </h1>
                                </div>
                                <div className={s.cardMeta}>
                                  <span className={s.metaAuthor}>
                                    {story.result[7].userpost.user_fullname}
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
                        <div className={s.panelButton}>
                          <Link
                            to="/"
                            data-interest="food"
                            style={{
                              borderColor: this.state.food,
                            }}
                          >
                            <span>SEE ALL</span>
                            <i
                              data-interest="food"
                              style={{
                                backgroundColor: this.state.food,
                              }}
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    data-interest="fashion"
                    onMouseEnter={this.interestHoverIn}
                    onMouseLeave={this.interestHoverOut}
                  >
                    <Link
                      className={cx(s.link, s.interest)}
                      data-interest="fashion"
                      to="/"
                      style={{
                        color: this.state.fashion,
                      }}
                    >
                      FASHION
                    </Link>
                    <div
                      className={s.panel}
                      data-interest="fashion"
                      onMouseEnter={this.interestHoverIn}
                    >
                      <div className={s.container}>
                        <div
                          className={s.panelBorder}
                          data-interest="fashion"
                          style={{
                            borderColor: this.state.fashion,
                          }}
                        />
                        <div className={s.row}>
                          <div className={s.threeCol}>
                            <div className={s.card}>
                              <div className={s.cardImage}>
                                <Link
                                  className={s.inner}
                                  to="/"
                                  style={{
                                    backgroundImage: `url(${
                                      story.result[21].post_image_thumb_url
                                    })`,
                                  }}
                                >
                                  <div
                                    className={s.text}
                                    data-text={story.result[21].summary}
                                  />
                                  <div
                                    className={s.overlay}
                                    style={{
                                      backgroundColor: this.state.intfashion,
                                    }}
                                  />
                                </Link>
                                <div className={s.readTime}>
                                  <span>10</span>
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
                                    <Link to="/">{story.result[21].title}</Link>
                                  </h1>
                                </div>
                                <div className={s.cardMeta}>
                                  <span className={s.metaAuthor}>
                                    {story.result[21].userpost.user_fullname}
                                  </span>
                                  <span className={s.metaDivider} />
                                  <span className={s.metaDate}>
                                    May 27, 2018
                                  </span>
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
                                      story.result[15].post_image_thumb_url
                                    })`,
                                  }}
                                >
                                  <div
                                    className={s.text}
                                    data-text={story.result[15].summary}
                                  />
                                  <div
                                    className={s.overlay}
                                    style={{
                                      backgroundColor: this.state.intfashion,
                                    }}
                                  />
                                </Link>
                                <div className={s.readTime}>
                                  <span>10</span>
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
                                    <Link to="/">{story.result[15].title}</Link>
                                  </h1>
                                </div>
                                <div className={s.cardMeta}>
                                  <span className={s.metaAuthor}>
                                    {story.result[15].userpost.user_fullname}
                                  </span>
                                  <span className={s.metaDivider} />
                                  <span className={s.metaDate}>
                                    May 27, 2018
                                  </span>
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
                                      story.result[16].post_image_thumb_url
                                    })`,
                                  }}
                                >
                                  <div
                                    className={s.text}
                                    data-text={story.result[16].summary}
                                  />
                                  <div
                                    className={s.overlay}
                                    style={{
                                      backgroundColor: this.state.intfashion,
                                    }}
                                  />
                                </Link>
                                <div className={s.readTime}>
                                  <span>10</span>
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
                                    <Link to="/">{story.result[16].title}</Link>
                                  </h1>
                                </div>
                                <div className={s.cardMeta}>
                                  <span className={s.metaAuthor}>
                                    {story.result[16].userpost.user_fullname}
                                  </span>
                                  <span className={s.metaDivider} />
                                  <span className={s.metaDate}>
                                    May 27, 2018
                                  </span>
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
                                      story.result[26].post_image_thumb_url
                                    })`,
                                  }}
                                >
                                  <div
                                    className={s.text}
                                    data-text={story.result[26].summary}
                                  />
                                  <div
                                    className={s.overlay}
                                    style={{
                                      backgroundColor: this.state.intfashion,
                                    }}
                                  />
                                </Link>
                                <div className={s.readTime}>
                                  <span>10</span>
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
                                    <Link to="/">{story.result[26].title}</Link>
                                  </h1>
                                </div>
                                <div className={s.cardMeta}>
                                  <span className={s.metaAuthor}>
                                    {story.result[26].userpost.user_fullname}
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
                        <div className={s.panelButton}>
                          <Link
                            to="/"
                            data-interest="fashion"
                            style={{
                              borderColor: this.state.fashion,
                            }}
                          >
                            <span>SEE ALL</span>
                            <i
                              data-interest="fashion"
                              style={{
                                backgroundColor: this.state.fashion,
                              }}
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    data-interest="beauty"
                    onMouseEnter={this.interestHoverIn}
                    onMouseLeave={this.interestHoverOut}
                  >
                    <Link
                      className={cx(s.link, s.interest)}
                      data-interest="beauty"
                      to="/"
                      style={{
                        color: this.state.beauty,
                      }}
                    >
                      BEAUTY
                    </Link>
                    <div
                      className={s.panel}
                      data-interest="beauty"
                      onMouseEnter={this.interestHoverIn}
                    >
                      <div className={s.container}>
                        <div
                          className={s.panelBorder}
                          data-interest="beauty"
                          style={{
                            borderColor: this.state.beauty,
                          }}
                        />
                        <div className={s.row}>
                          <div className={s.threeCol}>
                            <div className={s.card}>
                              <div className={s.cardImage}>
                                <Link
                                  className={s.inner}
                                  to="/"
                                  style={{
                                    backgroundImage: `url(${
                                      story.result[38].post_image_thumb_url
                                    })`,
                                  }}
                                >
                                  <div
                                    className={s.text}
                                    data-text={story.result[38].summary}
                                  />
                                  <div
                                    className={s.overlay}
                                    style={{
                                      backgroundColor: this.state.intbeauty,
                                    }}
                                  />
                                </Link>
                                <div className={s.readTime}>
                                  <span>10</span>
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
                                    <Link to="/">{story.result[38].title}</Link>
                                  </h1>
                                </div>
                                <div className={s.cardMeta}>
                                  <span className={s.metaAuthor}>
                                    {story.result[38].userpost.user_fullname}
                                  </span>
                                  <span className={s.metaDivider} />
                                  <span className={s.metaDate}>
                                    May 27, 2018
                                  </span>
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
                                      story.result[39].post_image_thumb_url
                                    })`,
                                  }}
                                >
                                  <div
                                    className={s.text}
                                    data-text={story.result[39].summary}
                                  />
                                  <div
                                    className={s.overlay}
                                    style={{
                                      backgroundColor: this.state.intbeauty,
                                    }}
                                  />
                                </Link>
                                <div className={s.readTime}>
                                  <span>10</span>
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
                                    <Link to="/">{story.result[39].title}</Link>
                                  </h1>
                                </div>
                                <div className={s.cardMeta}>
                                  <span className={s.metaAuthor}>
                                    {story.result[39].userpost.user_fullname}
                                  </span>
                                  <span className={s.metaDivider} />
                                  <span className={s.metaDate}>
                                    May 27, 2018
                                  </span>
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
                                      story.result[34].post_image_thumb_url
                                    })`,
                                  }}
                                >
                                  <div
                                    className={s.text}
                                    data-text={story.result[34].summary}
                                  />
                                  <div
                                    className={s.overlay}
                                    style={{
                                      backgroundColor: this.state.intbeauty,
                                    }}
                                  />
                                </Link>
                                <div className={s.readTime}>
                                  <span>10</span>
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
                                    <Link to="/">{story.result[34].title}</Link>
                                  </h1>
                                </div>
                                <div className={s.cardMeta}>
                                  <span className={s.metaAuthor}>
                                    {story.result[34].userpost.user_fullname}
                                  </span>
                                  <span className={s.metaDivider} />
                                  <span className={s.metaDate}>
                                    May 27, 2018
                                  </span>
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
                                      story.result[33].post_image_thumb_url
                                    })`,
                                  }}
                                >
                                  <div
                                    className={s.text}
                                    data-text={story.result[33].summary}
                                  />
                                  <div
                                    className={s.overlay}
                                    style={{
                                      backgroundColor: this.state.intbeauty,
                                    }}
                                  />
                                </Link>
                                <div className={s.readTime}>
                                  <span>10</span>
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
                                    <Link to="/">{story.result[33].title}</Link>
                                  </h1>
                                </div>
                                <div className={s.cardMeta}>
                                  <span className={s.metaAuthor}>
                                    {story.result[33].userpost.user_fullname}
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
                        <div className={s.panelButton}>
                          <Link
                            to="/"
                            data-interest="beauty"
                            style={{
                              borderColor: this.state.beauty,
                            }}
                          >
                            <span>SEE ALL</span>
                            <i
                              data-interest="beauty"
                              style={{
                                backgroundColor: this.state.beauty,
                              }}
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    data-interest="travel"
                    onMouseEnter={this.interestHoverIn}
                    onMouseLeave={this.interestHoverOut}
                  >
                    <Link
                      className={cx(s.link, s.interest)}
                      data-interest="travel"
                      to="/"
                      style={{
                        color: this.state.travel,
                      }}
                    >
                      TRAVEL
                    </Link>
                    <div
                      className={s.panel}
                      data-interest="travel"
                      onMouseEnter={this.interestHoverIn}
                    >
                      <div className={s.container}>
                        <div
                          className={s.panelBorder}
                          data-interest="travel"
                          style={{
                            borderColor: this.state.travel,
                          }}
                        />
                        <div className={s.row}>
                          <div className={s.threeCol}>
                            <div className={s.card}>
                              <div className={s.cardImage}>
                                <Link
                                  className={s.inner}
                                  to="/"
                                  style={{
                                    backgroundImage: `url(${
                                      story.result[24].post_image_thumb_url
                                    })`,
                                  }}
                                >
                                  <div
                                    className={s.text}
                                    data-text={story.result[24].summary}
                                  />
                                  <div
                                    className={s.overlay}
                                    style={{
                                      backgroundColor: this.state.inttravel,
                                    }}
                                  />
                                </Link>
                                <div className={s.readTime}>
                                  <span>10</span>
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
                                    <Link to="/">{story.result[24].title}</Link>
                                  </h1>
                                </div>
                                <div className={s.cardMeta}>
                                  <span className={s.metaAuthor}>
                                    {story.result[24].userpost.user_fullname}
                                  </span>
                                  <span className={s.metaDivider} />
                                  <span className={s.metaDate}>
                                    May 27, 2018
                                  </span>
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
                                      story.result[22].post_image_thumb_url
                                    })`,
                                  }}
                                >
                                  <div
                                    className={s.text}
                                    data-text={story.result[22].summary}
                                  />
                                  <div
                                    className={s.overlay}
                                    style={{
                                      backgroundColor: this.state.inttravel,
                                    }}
                                  />
                                </Link>
                                <div className={s.readTime}>
                                  <span>10</span>
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
                                    <Link to="/">{story.result[22].title}</Link>
                                  </h1>
                                </div>
                                <div className={s.cardMeta}>
                                  <span className={s.metaAuthor}>
                                    {story.result[22].userpost.user_fullname}
                                  </span>
                                  <span className={s.metaDivider} />
                                  <span className={s.metaDate}>
                                    May 27, 2018
                                  </span>
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
                                      story.result[21].post_image_thumb_url
                                    })`,
                                  }}
                                >
                                  <div
                                    className={s.text}
                                    data-text={story.result[21].summary}
                                  />
                                  <div
                                    className={s.overlay}
                                    style={{
                                      backgroundColor: this.state.inttravel,
                                    }}
                                  />
                                </Link>
                                <div className={s.readTime}>
                                  <span>10</span>
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
                                    <Link to="/">{story.result[21].title}</Link>
                                  </h1>
                                </div>
                                <div className={s.cardMeta}>
                                  <span className={s.metaAuthor}>
                                    {story.result[21].userpost.user_fullname}
                                  </span>
                                  <span className={s.metaDivider} />
                                  <span className={s.metaDate}>
                                    May 27, 2018
                                  </span>
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
                                      story.result[23].post_image_thumb_url
                                    })`,
                                  }}
                                >
                                  <div
                                    className={s.text}
                                    data-text={story.result[23].summary}
                                  />
                                  <div
                                    className={s.overlay}
                                    style={{
                                      backgroundColor: this.state.inttravel,
                                    }}
                                  />
                                </Link>
                                <div className={s.readTime}>
                                  <span>10</span>
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
                                    <Link to="/">{story.result[23].title}</Link>
                                  </h1>
                                </div>
                                <div className={s.cardMeta}>
                                  <span className={s.metaAuthor}>
                                    {story.result[23].userpost.user_fullname}
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
                        <div className={s.panelButton}>
                          <Link
                            to="/"
                            data-interest="travel"
                            style={{
                              borderColor: this.state.travel,
                            }}
                          >
                            <span>SEE ALL</span>
                            <i
                              data-interest="travel"
                              style={{
                                backgroundColor: this.state.travel,
                              }}
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    data-interest="art"
                    onMouseEnter={this.interestHoverIn}
                    onMouseLeave={this.interestHoverOut}
                  >
                    <Link
                      className={cx(s.link, s.interest)}
                      data-interest="art"
                      to="/"
                      style={{
                        color: this.state.art,
                      }}
                    >
                      ART
                    </Link>
                    <div
                      className={s.panel}
                      data-interest="art"
                      onMouseEnter={this.interestHoverIn}
                    >
                      <div className={s.container}>
                        <div
                          className={s.panelBorder}
                          data-interest="art"
                          style={{
                            borderColor: this.state.art,
                          }}
                        />
                        <div className={s.row}>
                          <div className={s.threeCol}>
                            <div className={s.card}>
                              <div className={s.cardImage}>
                                <Link
                                  className={s.inner}
                                  to="/"
                                  style={{
                                    backgroundImage: `url(${
                                      story.result[19].post_image_thumb_url
                                    })`,
                                  }}
                                >
                                  <div
                                    className={s.text}
                                    data-text={story.result[19].summary}
                                  />
                                  <div
                                    className={s.overlay}
                                    style={{
                                      backgroundColor: this.state.intart,
                                    }}
                                  />
                                </Link>
                                <div className={s.readTime}>
                                  <span>10</span>
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
                                    <Link to="/">{story.result[19].title}</Link>
                                  </h1>
                                </div>
                                <div className={s.cardMeta}>
                                  <span className={s.metaAuthor}>
                                    {story.result[19].userpost.user_fullname}
                                  </span>
                                  <span className={s.metaDivider} />
                                  <span className={s.metaDate}>
                                    May 27, 2018
                                  </span>
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
                                      story.result[11].post_image_thumb_url
                                    })`,
                                  }}
                                >
                                  <div
                                    className={s.text}
                                    data-text={story.result[11].summary}
                                  />
                                  <div
                                    className={s.overlay}
                                    style={{
                                      backgroundColor: this.state.intart,
                                    }}
                                  />
                                </Link>
                                <div className={s.readTime}>
                                  <span>10</span>
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
                                    <Link to="/">{story.result[11].title}</Link>
                                  </h1>
                                </div>
                                <div className={s.cardMeta}>
                                  <span className={s.metaAuthor}>
                                    {story.result[11].userpost.user_fullname}
                                  </span>
                                  <span className={s.metaDivider} />
                                  <span className={s.metaDate}>
                                    May 27, 2018
                                  </span>
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
                                      story.result[10].post_image_thumb_url
                                    })`,
                                  }}
                                >
                                  <div
                                    className={s.text}
                                    data-text={story.result[10].summary}
                                  />
                                  <div
                                    className={s.overlay}
                                    style={{
                                      backgroundColor: this.state.intart,
                                    }}
                                  />
                                </Link>
                                <div className={s.readTime}>
                                  <span>10</span>
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
                                    <Link to="/">{story.result[10].title}</Link>
                                  </h1>
                                </div>
                                <div className={s.cardMeta}>
                                  <span className={s.metaAuthor}>
                                    {story.result[10].userpost.user_fullname}
                                  </span>
                                  <span className={s.metaDivider} />
                                  <span className={s.metaDate}>
                                    May 27, 2018
                                  </span>
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
                                      story.result[18].post_image_thumb_url
                                    })`,
                                  }}
                                >
                                  <div
                                    className={s.text}
                                    data-text={story.result[18].summary}
                                  />
                                  <div
                                    className={s.overlay}
                                    style={{
                                      backgroundColor: this.state.intart,
                                    }}
                                  />
                                </Link>
                                <div className={s.readTime}>
                                  <span>10</span>
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
                                    <Link to="/">{story.result[18].title}</Link>
                                  </h1>
                                </div>
                                <div className={s.cardMeta}>
                                  <span className={s.metaAuthor}>
                                    {story.result[18].userpost.user_fullname}
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
                        <div className={s.panelButton}>
                          <Link
                            to="/"
                            data-interest="art"
                            style={{
                              borderColor: this.state.art,
                            }}
                          >
                            <span>SEE ALL</span>
                            <i
                              data-interest="art"
                              style={{
                                backgroundColor: this.state.art,
                              }}
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    data-interest="others"
                    onMouseEnter={this.interestHoverIn}
                    onMouseLeave={this.interestHoverOut}
                  >
                    <Link
                      className={cx(s.link, s.interest)}
                      data-interest="others"
                      to="/others"
                      style={{
                        color: this.state.others,
                      }}
                    >
                      OTHERS
                    </Link>
                    <div
                      className={s.panel}
                      data-interest="others"
                      onMouseEnter={this.interestHoverIn}
                      onMouseLeave={this.interestHoverOut}
                    >
                      <div className={s.container}>
                        <div
                          className={s.panelOthers}
                          data-interest="others"
                          onMouseEnter={this.interestHoverIn}
                          onMouseLeave={this.interestHoverOut}
                        >
                          <nav className={s.othersMenu}>
                            <ul>
                              <li>
                                <Link to="/">
                                  <span>ZODIAC</span>
                                  <i />
                                </Link>
                              </li>
                              <li>
                                <Link to="/">
                                  <span>AUTOMOTIVE</span>
                                  <i />
                                </Link>
                              </li>
                              <li>
                                <Link to="/">
                                  <span>INSPIRATIONAL</span>
                                  <i />
                                </Link>
                              </li>
                              <li>
                                <Link to="/">
                                  <span>ENTERTAINMENT</span>
                                  <i />
                                </Link>
                              </li>
                              <li>
                                <Link to="/">
                                  <span>TECHNOLOGY</span>
                                  <i />
                                </Link>
                              </li>
                            </ul>
                            <Link className={s.othersButton} to="/">
                              SEE ALL
                            </Link>
                          </nav>
                          <div className={s.othersContents}>
                            <div
                              className={s.othersWrapper}
                              data-interest="others"
                              onMouseEnter={this.interestHoverIn}
                            >
                              <div
                                className={s.panelBorder}
                                data-interest="others"
                                style={{
                                  borderColor: this.state.others,
                                }}
                              />
                              <div className={s.row}>
                                <div className={s.fourCol}>
                                  <div className={s.card}>
                                    <div className={s.cardImage}>
                                      <Link
                                        className={s.inner}
                                        to="/"
                                        style={{
                                          backgroundImage: `url(${
                                            story.result[19]
                                              .post_image_thumb_url
                                          })`,
                                        }}
                                      >
                                        <div
                                          className={s.text}
                                          data-text={story.result[19].summary}
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
                                          ZODIAC
                                        </Link>
                                      </div>
                                      <div className={s.readTime}>
                                        <span>10</span>
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
                                          <Link to="/">
                                            {story.result[19].title}
                                          </Link>
                                        </h1>
                                      </div>
                                      <div className={s.cardMeta}>
                                        <span className={s.metaAuthor}>
                                          {
                                            story.result[19].userpost
                                              .user_fullname
                                          }
                                        </span>
                                        <span className={s.metaDivider} />
                                        <span className={s.metaDate}>
                                          May 27, 2018
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className={s.fourCol}>
                                  <div className={s.card}>
                                    <div className={s.cardImage}>
                                      <Link
                                        className={s.inner}
                                        to="/"
                                        style={{
                                          backgroundImage: `url(${
                                            story.result[11]
                                              .post_image_thumb_url
                                          })`,
                                        }}
                                      >
                                        <div
                                          className={s.text}
                                          data-text={story.result[11].summary}
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
                                          AUTOMOTIVE
                                        </Link>
                                      </div>
                                      <div className={s.readTime}>
                                        <span>10</span>
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
                                          <Link to="/">
                                            {story.result[11].title}
                                          </Link>
                                        </h1>
                                      </div>
                                      <div className={s.cardMeta}>
                                        <span className={s.metaAuthor}>
                                          {
                                            story.result[11].userpost
                                              .user_fullname
                                          }
                                        </span>
                                        <span className={s.metaDivider} />
                                        <span className={s.metaDate}>
                                          May 27, 2018
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className={s.fourCol}>
                                  <div className={s.card}>
                                    <div className={s.cardImage}>
                                      <Link
                                        className={s.inner}
                                        to="/"
                                        style={{
                                          backgroundImage: `url(${
                                            story.result[10]
                                              .post_image_thumb_url
                                          })`,
                                        }}
                                      >
                                        <div
                                          className={s.text}
                                          data-text={story.result[10].summary}
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
                                          INSPIRATIONAL
                                        </Link>
                                      </div>
                                      <div className={s.readTime}>
                                        <span>10</span>
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
                                          <Link to="/">
                                            {story.result[10].title}
                                          </Link>
                                        </h1>
                                      </div>
                                      <div className={s.cardMeta}>
                                        <span className={s.metaAuthor}>
                                          {
                                            story.result[10].userpost
                                              .user_fullname
                                          }
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
                  </li>
                </ul>
              </nav>
            ),
          ]
        )}
        {this.state.isSignedIn ? (
          <nav className={cx(s.nav, s.actions)}>
            <ul>
              <li>
                <button
                  className={cx(s.link, s.action)}
                  type="button"
                  onClick={this.handleShowSearch}
                >
                  <svg width="15" height="15">
                    <path
                      d={
                        this.state.showSearch
                          ? `M7.5 8.508L1.217 14.79a.712.712 0 1 1-1.008-1.008L6.492 7.5.21 1.217A.713.713 0 1 1 1.218.209L7.5 6.492 13.784.21a.712.712 0 1 1 1.008 1.008L8.508 7.5l6.282 6.284a.713.713 0 0 1-1.008 1.007L7.5 8.508z`
                          : `M11.298 10.282l3.492 3.488c.28.28.28.727 0 1.007a.607.607 0 0 1-.486.223.72.72 0 0 1-.503-.205l-3.51-3.506a6.31 6.31 0 0 1-3.95 1.382A6.345 6.345 0 0 1 0 6.335C0 2.851 2.854 0 6.341 0s6.341 2.851 6.341 6.335a6.305 6.305 0 0 1-1.384 3.947zm-1.434-.53a4.87 4.87 0 0 0 1.401-3.417c0-2.701-2.22-4.92-4.924-4.92s-4.905 2.219-4.905 4.92a4.91 4.91 0 0 0 8.328 3.516.732.732 0 0 1 .1-.1z`
                      }
                      fill="#FFF"
                      fillRule="evenodd"
                    />
                  </svg>
                </button>
              </li>
              <li>
                <button className={cx(s.link, s.button)} type="button">
                  Submit Idea
                </button>
              </li>
              <li>
                <button className={cx(s.link, s.action)} type="button">
                  <svg width="15" height="15">
                    <path
                      d="M2.62 13.068h2.418A2.552 2.552 0 0 0 7.504 15a2.552 2.552 0 0 0 2.467-1.932h2.417a1.726 1.726 0 0 0 1.675-1.382 1.746 1.746 0 0 0-.98-1.949l-.642-.287-.001-2.663a5.193 5.193 0 0 0-.777-2.723A5.11 5.11 0 0 0 9.58 2.17V2.1C9.58.94 8.65 0 7.504 0 6.358 0 5.428.94 5.428 2.1v.05a4.967 4.967 0 0 0-2.084 1.844 5.043 5.043 0 0 0-.778 2.689v2.764l-.641.29a1.748 1.748 0 0 0-.988 1.953c.168.805.87 1.381 1.683 1.382v-.004zm4.884.625a1.26 1.26 0 0 1-1.082-.623h2.165a1.26 1.26 0 0 1-1.083.623zm0-12.385a.782.782 0 0 1 .695.434 4.707 4.707 0 0 0-1.39-.002.783.783 0 0 1 .695-.434v.002zm-5.06 9.621l1.028-.459a.652.652 0 0 0 .385-.596V6.683c0-.979.385-1.917 1.068-2.609a3.629 3.629 0 0 1 2.58-1.08h.134c1.936.069 3.513 1.77 3.513 3.79v3.088c0 .258.15.493.385.597l1.027.459a.438.438 0 0 1-.174.833H2.618a.438.438 0 0 1-.174-.834v.002z"
                      fill="#FFF"
                      fillRule="evenodd"
                    />
                  </svg>
                </button>
              </li>
              <li>
                <button
                  className={cx(s.link, s.avatar)}
                  type="button"
                  onClick={this.handleShowDropdown}
                >
                  <div className={s.avatarWrapper}>
                    <img
                      className={s.avatarImage}
                      width="32"
                      height="32"
                      src={avatar}
                      alt="Qubicle User"
                    />
                  </div>
                </button>
                {this.state.showDropdown ? (
                  <div
                    className={s.dropdownMenu}
                    ref={element => {
                      this.dropdownMenu = element;
                    }}
                  >
                    <button className={s.dropdownButton} type="button">
                      Sign out
                    </button>
                  </div>
                ) : null}
              </li>
            </ul>
          </nav>
        ) : (
          <nav className={cx(s.nav, s.actions)}>
            <ul>
              <li>
                <button
                  className={cx(s.link, s.action)}
                  type="button"
                  onClick={this.handleShowSearch}
                >
                  <svg width="15" height="15">
                    <path
                      d={
                        this.state.showSearch
                          ? `M7.5 8.508L1.217 14.79a.712.712 0 1 1-1.008-1.008L6.492 7.5.21 1.217A.713.713 0 1 1 1.218.209L7.5 6.492 13.784.21a.712.712 0 1 1 1.008 1.008L8.508 7.5l6.282 6.284a.713.713 0 0 1-1.008 1.007L7.5 8.508z`
                          : `M11.298 10.282l3.492 3.488c.28.28.28.727 0 1.007a.607.607 0 0 1-.486.223.72.72 0 0 1-.503-.205l-3.51-3.506a6.31 6.31 0 0 1-3.95 1.382A6.345 6.345 0 0 1 0 6.335C0 2.851 2.854 0 6.341 0s6.341 2.851 6.341 6.335a6.305 6.305 0 0 1-1.384 3.947zm-1.434-.53a4.87 4.87 0 0 0 1.401-3.417c0-2.701-2.22-4.92-4.924-4.92s-4.905 2.219-4.905 4.92a4.91 4.91 0 0 0 8.328 3.516.732.732 0 0 1 .1-.1z`
                      }
                      fill="#FFF"
                      fillRule="evenodd"
                    />
                  </svg>
                </button>
              </li>
              <li>
                <button
                  className={cx(s.link, s.button)}
                  type="button"
                  onClick={this.handleOpenModalSignUp}
                >
                  Let&rsquo;s Collaborate!
                </button>
              </li>
              <li>
                <button
                  className={cx(s.link, s.action)}
                  type="button"
                  onClick={this.handleOpenModalSignIn}
                >
                  <svg width="15" height="15">
                    <path
                      d="M7.363 8.816c-2.922.157-5.23 2.54-5.23 5.431a.762.762 0 0 1-.767.753.762.762 0 0 1-.766-.753c0-2.858 1.769-5.316 4.288-6.373a4.371 4.371 0 0 1-1.702-3.451C3.186 1.995 5.197 0 7.668 0c2.47 0 4.482 1.976 4.482 4.404a4.403 4.403 0 0 1-1.72 3.478c2.51 1.061 4.27 3.514 4.27 6.365a.719.719 0 0 1-.73.753.762.762 0 0 1-.766-.753c0-2.892-2.309-5.275-5.231-5.43a4.562 4.562 0 0 1-.61 0zm.305-7.31C6.04 1.506 4.7 2.804 4.7 4.423c0 1.618 1.34 2.898 2.97 2.898 1.627 0 2.968-1.298 2.968-2.917 0-1.618-1.34-2.898-2.969-2.898z"
                      fill="#FFF"
                      fillRule="evenodd"
                    />
                  </svg>
                </button>
              </li>
            </ul>
          </nav>
        )}
        {this.state.showSearchPanel ? (
          <div className={s.searchPanel}>
            {this.state.showSearchLoading ? (
              <div>
                {this.state.showSearchNotFound ? (
                  <div className={s.container}>
                    <div className={s.searchPanelNotFound}>
                      <h1>
                        We couldn&rsquo;t find anything. Try different keywords,
                        like &ldquo;music&rdquo; maybe?
                      </h1>
                    </div>
                  </div>
                ) : (
                  <div className={s.container}>
                    <div className={s.searchPanelSection}>
                      <div className={s.searchPanelTitle}>
                        <h1>Stories</h1>
                        <span>4 of 20 stories</span>
                      </div>
                      <div className={s.searchPanelContents}>
                        <div className={s.row}>
                          <div className={s.threeCol}>
                            <div className={s.card}>
                              <div className={s.cardImage}>
                                <Link
                                  className={s.inner}
                                  to="/"
                                  style={{
                                    backgroundImage: `url(${
                                      story.result[19].post_image_thumb_url
                                    })`,
                                  }}
                                >
                                  <div
                                    className={s.text}
                                    data-text={story.result[19].summary}
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
                                    <Link to="/">{story.result[19].title}</Link>
                                  </h1>
                                </div>
                                <div className={s.cardMeta}>
                                  <span className={s.metaAuthor}>
                                    {story.result[19].userpost.user_fullname}
                                  </span>
                                  <span className={s.metaDivider} />
                                  <span className={s.metaDate}>
                                    May 27, 2018
                                  </span>
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
                                      story.result[20].post_image_thumb_url
                                    })`,
                                  }}
                                >
                                  <div
                                    className={s.text}
                                    data-text={story.result[20].summary}
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
                                  <span>10</span>
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
                                    <Link to="/">{story.result[20].title}</Link>
                                  </h1>
                                </div>
                                <div className={s.cardMeta}>
                                  <span className={s.metaAuthor}>
                                    {story.result[20].userpost.user_fullname}
                                  </span>
                                  <span className={s.metaDivider} />
                                  <span className={s.metaDate}>
                                    May 27, 2018
                                  </span>
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
                                      story.result[21].post_image_thumb_url
                                    })`,
                                  }}
                                >
                                  <div
                                    className={s.text}
                                    data-text={story.result[21].summary}
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
                                  <span>10</span>
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
                                    <Link to="/">{story.result[21].title}</Link>
                                  </h1>
                                </div>
                                <div className={s.cardMeta}>
                                  <span className={s.metaAuthor}>
                                    {story.result[21].userpost.user_fullname}
                                  </span>
                                  <span className={s.metaDivider} />
                                  <span className={s.metaDate}>
                                    May 27, 2018
                                  </span>
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
                                      story.result[22].post_image_thumb_url
                                    })`,
                                  }}
                                >
                                  <div
                                    className={s.text}
                                    data-text={story.result[22].summary}
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
                                  <span>10</span>
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
                                    <Link to="/">{story.result[22].title}</Link>
                                  </h1>
                                </div>
                                <div className={s.cardMeta}>
                                  <span className={s.metaAuthor}>
                                    {story.result[22].userpost.user_fullname}
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
                    <div className={s.searchPanelSection}>
                      <div className={s.searchPanelTitle}>
                        <h1>Interests</h1>
                      </div>
                      <div className={s.searchPanelContents}>
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
                      </div>
                    </div>
                    <div className={s.searchPanelSection}>
                      <div className={s.searchPanelTitle}>
                        <h1>Tags</h1>
                      </div>
                      <div className={s.searchPanelContents}>
                        <Link className={s.tag} to="/">
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
                      </div>
                    </div>
                    <Link className={s.searchPanelSeeAll} to="/search-results">
                      SEE ALL RESULTS
                      <svg width="13" height="13">
                        <path
                          d="M7.69 6.5l-4.762 4.636a1.072 1.072 0 0 0 .002 1.543 1.14 1.14 0 0 0 1.585.002l5.557-5.411a1.068 1.068 0 0 0 0-1.541L4.515.319A1.142 1.142 0 0 0 2.93.321a1.067 1.067 0 0 0-.002 1.542L7.691 6.5z"
                          fill="#FFFFFF"
                          fillRule="nonzero"
                        />
                      </svg>
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <div>
                <div className={s.container}>
                  <div className={s.searchPanelSection}>
                    <div className={s.searchPanelTitle}>
                      <div
                        className={cx(
                          s.skeleton,
                          s.skeletonSecondary,
                          s.skeletonSectionTitle,
                        )}
                      />
                    </div>
                    <div className={s.searchPanelContents}>
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
        ) : null}
        <ModalSignUp
          showModalSignUp={this.state.showModalSignUp}
          closeModalSignUp={this.handleCloseModalSignUp}
          switchModal={this.handleSwitchModalSignUpToSignIn}
        />
        <ModalSignIn
          showModalSignIn={this.state.showModalSignIn}
          closeModalSignIn={this.handleCloseModalSignIn}
          switchModal={this.handleSwitchModalSignInToSignUp}
        />
      </div>
    );
  }
}

export default withStyles(s)(Navigation);
