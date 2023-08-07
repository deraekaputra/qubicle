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
import StickyBox from 'react-sticky-box';
import { Element, scroller } from 'react-scroll';
import ContentEditable from 'react-contenteditable';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Story.css';
import Link from '../../components/Link';

class Story extends React.Component {
  static propTypes = {
    story: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        content: PropTypes.string,
      }),
    ).isRequired,
  };

  state = {
    isSignedIn: true,
    intmusic: '#F8DB65',
    isScroll: true,
    lastScrollY: 0,
    like: false,
    noComment: false,
    commentContent: '',
    commentContentReplyParent: '',
    commentContentReplyChildren: '',
    commentFocus: false,
    commentViewAll: false,
    commentViewReplies: false,
    commentReplyParent: false,
    commentReplyParentFocus: false,
    commentReplyChildren: false,
    commentReplyChildrenFocus: false,
    contentLoading: false,
  };

  componentWillMount() {
    this.showLoading = setTimeout(
      () => this.setState({ contentLoading: true }),
      3000,
    );
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    clearTimeout(this.showLoading);
    document.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { lastScrollY } = this.state;
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      this.setState({
        isScroll: false,
      });
    } else {
      this.setState({
        isScroll: true,
      });
    }
    this.setState({
      lastScrollY: currentScrollY,
    });
  };

  handleLike = () => {
    this.setState({
      like: !this.state.like,
    });
  };

  scrollTo = () => {
    scroller.scrollTo('commentSection', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -84,
    });
  };

  handleChange = event => {
    this.setState({ commentContent: event.target.value });
  };

  handleChangeReplyParent = event => {
    this.setState({ commentContentReplyParent: event.target.value });
  };

  handleChangeReplyChildren = event => {
    this.setState({ commentContentReplyChildren: event.target.value });
  };

  handleFocus = () => {
    this.setState({
      commentFocus: true,
    });
  };

  handleUnFocus = () => {
    this.setState({
      commentContent: '',
      commentFocus: false,
    });
  };

  handleUnFocusReplyParent = () => {
    this.setState({
      commentContentReplyParent: '',
      commentReplyParent: false,
    });
  };

  handleUnFocusReplyChildren = () => {
    this.setState({
      commentContentReplyChildren: '',
      commentReplyChildren: false,
    });
  };

  handleViewAllComments = () => {
    this.setState({
      commentViewAll: true,
    });
  };

  handleViewRepliesComments = () => {
    this.setState({
      commentViewReplies: !this.state.commentViewReplies,
    });
  };

  handleReplyParentComment = () => {
    this.setState({
      commentReplyParent: true,
      commentReplyParentFocus: true,
    });
  };

  handleReplyChildrenComment = () => {
    this.setState({
      commentReplyChildren: true,
      commentReplyChildrenFocus: true,
    });
  };

  render() {
    const { story } = this.props;
    return (
      <div className={s.root}>
        {this.state.contentLoading ? (
          <div>
            <div className={s.hero}>
              <div className={s.heroWrapper}>
                <div
                  className={s.heroImage}
                  style={{
                    backgroundImage: `url(${story[7].post_image_cover_url})`,
                  }}
                />
                <div className={s.heroTitle}>
                  <div className={s.container}>
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
                      <span>Hammersonic</span>
                      <span>Hadirkan</span>
                      <span>Brujeria,</span>
                      <span>H20,</span>
                      <span>In Flames</span>
                      <span>&amp;</span>
                      <span>Visceral</span>
                      <span>Disgorge</span>
                    </h1>
                    <div className={cx(s.heroItem, s.meta)}>
                      <span className={s.date}>July 10, 2018</span>
                      <span
                        className={s.author}
                        style={{
                          color: this.state.intmusic,
                        }}
                      >
                        {story[7].userpost.user_fullname}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={s.contents}>
              <div className={s.container}>
                <div
                  className={s.contentsBorder}
                  style={{
                    borderColor: this.state.intmusic,
                  }}
                />
                <div className={s.contentsWrapper}>
                  <StickyBox className={s.skyLeft} offset={94}>
                    <div className={s.iabThings}>
                      <div className={s.iabThingsWrapper}>
                        <Link to="/">
                          <img
                            src="http://www.logoping.co.uk/images/port-banner-160-2.gif"
                            alt="iab item"
                          />
                        </Link>
                      </div>
                    </div>
                  </StickyBox>
                  <div className={s.center}>
                    <div className={s.contentsSummary}>
                      <b>{story[7].summary}</b>
                    </div>
                    <div className={s.iabThings}>
                      <div className={s.iabThingsWrapper}>
                        <Link to="/">
                          <img
                            src="https://www.first.org/conference/2007/logos/first2007conf-leaderboard.gif"
                            alt="iab item"
                          />
                        </Link>
                      </div>
                    </div>
                    <div
                      className={s.contentsBody}
                      // eslint-disable-next-line react/no-danger
                      dangerouslySetInnerHTML={{ __html: story[7].content }}
                    />
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
                    <div className={s.hashtags}>
                      <div className={s.tags}>
                        <div className={s.tagWrapper}>
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
                        </div>
                      </div>
                    </div>
                    <div className={s.iabThings}>
                      <div className={s.iabThingsWrapper}>
                        <Link to="/">
                          <img
                            src="https://www.first.org/conference/2007/logos/first2007conf-leaderboard.gif"
                            alt="iab item"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <StickyBox className={s.skyRight} offset={94}>
                    <div className={s.iabThings}>
                      <div className={s.iabThingsWrapper}>
                        <Link to="/">
                          <img
                            src="http://www.logoping.co.uk/images/port-banner-160-2.gif"
                            alt="iab item"
                          />
                        </Link>
                      </div>
                    </div>
                  </StickyBox>
                </div>
              </div>
            </div>
            <div className={s.actionsBottom}>
              <div className={s.container}>
                <div className={s.actionsWrapper}>
                  <div className={s.actionsBody}>
                    <div className={s.actionsTop}>
                      <h1>
                        Like what you read? Give{' '}
                        {story[7].userpost.user_fullname} your appreciation.
                      </h1>
                      <h3>
                        From a quick cheer to a standing ovation, like to show
                        how much you enjoyed this story.
                      </h3>
                      <div className={s.actions}>
                        <div className={s.actionsLeft}>
                          <div className={s.actionsItem}>
                            <button
                              className={s.actionsButton}
                              type="button"
                              onClick={this.handleLike}
                            >
                              <svg width="30" height="26">
                                <defs>
                                  <path
                                    d={
                                      this.state.like
                                        ? `M25.1 38c-.727 0-1.39-.283-1.93-.788L12.42 26.497c-2.182-2.174-2.972-5.358-2.024-8.226C11.66 14.457 14.95 12 18.808 12c2.34 0 4.522.913 6.134 2.521l.126.126.126-.126A8.626 8.626 0 0 1 31.328 12c2.34 0 4.523.913 6.134 2.521 3.384 3.372 3.384 8.887 0 12.259L26.964 37.243c-.441.472-1.136.757-1.864.757z`
                                        : `M25.1 38c-.727 0-1.39-.283-1.93-.788L12.42 26.497c-2.182-2.174-2.972-5.358-2.024-8.226C11.66 14.457 14.95 12 18.808 12c2.34 0 4.522.913 6.134 2.521l.126.126.126-.126A8.626 8.626 0 0 1 31.328 12c2.34 0 4.523.913 6.134 2.521 3.384 3.372 3.384 8.887 0 12.259L26.964 37.243c-.441.472-1.136.757-1.864.757zm-6.262-23.006c-2.023 0-4.522 1.103-5.566 4.222-.6 1.796-.095 3.814 1.265 5.168l10.53 10.495 10.278-10.242c1.075-1.071 1.645-2.49 1.645-4.002 0-1.513-.6-2.932-1.645-4.003-1.074-1.07-2.497-1.638-4.015-1.638a5.758 5.758 0 0 0-4.016 1.638l-1.202 1.166c-.6.599-1.55.599-2.15 0l-1.17-1.166c-1.012-1.07-2.435-1.638-3.953-1.638z`
                                    }
                                    id="likeActionsTop"
                                  />
                                </defs>
                                <use
                                  fill={
                                    this.state.like
                                      ? this.state.intmusic
                                      : `#9B9B9B`
                                  }
                                  fillRule="nonzero"
                                  xlinkHref="#likeActionsTop"
                                  transform="translate(-10 -12)"
                                />
                              </svg>
                            </button>
                            <span
                              style={{
                                color: this.state.like
                                  ? this.state.intmusic
                                  : '',
                              }}
                            >
                              168
                            </span>
                          </div>
                        </div>
                        <div className={s.actionsRight}>
                          <div className={s.actionsItem}>
                            <button className={s.actionsButton} type="button">
                              <svg width="30" height="30">
                                <defs>
                                  <path
                                    d="M20.628 30V18.393h3.98l.567-4.538h-4.547v-2.592c0-1.226.35-2.457 2.087-2.457h2.63V4.684c-2.14-.289-4.1-.123-4.1-.123-3.946.23-5.517 3.2-5.214 6.702v2.592H12.1v4.538h3.931V30H2.057c-.715 0-.975-.074-1.236-.214a1.458 1.458 0 0 1-.607-.607C.074 28.918 0 28.66 0 27.943V2.057c0-.715.074-.975.214-1.236C.354.559.56.354.821.214 1.082.074 1.34 0 2.057 0h25.886c.715 0 .975.074 1.236.214.262.14.467.345.607.607.14.261.214.52.214 1.236v25.886c0 .715-.074.975-.214 1.236-.14.262-.345.467-.607.607-.261.14-.52.214-1.236.214h-7.315z"
                                    id="facebookActionsTop"
                                  />
                                </defs>
                                <g fill="none" fillRule="evenodd">
                                  <mask id="facebookActionsTopMask" fill="#fff">
                                    <use xlinkHref="#facebookActionsTop" />
                                  </mask>
                                  <use
                                    fill="#FFF"
                                    xlinkHref="#facebookActionsTop"
                                  />
                                  <g
                                    mask="url(#facebookActionsTopMask)"
                                    fill="#9B9B9B"
                                  >
                                    <path d="M-15-15h60v60h-60z" />
                                  </g>
                                </g>
                              </svg>
                            </button>
                          </div>
                          <div className={s.actionsItem}>
                            <button className={s.actionsButton} type="button">
                              <svg width="30" height="26">
                                <defs>
                                  <path
                                    d="M26.946 9.444c0-.282-.006-.562-.018-.839A12.68 12.68 0 0 0 30 5.292c-1.104.498-2.29.831-3.536.97a6.336 6.336 0 0 0 2.708-3.546 11.8 11.8 0 0 1-3.908 1.511c-1.122-1.28-2.723-2.096-4.493-2.126-3.4-.056-6.155 2.825-6.155 6.436 0 .513.053 1.01.16 1.491-5.119-.33-9.655-3.003-12.689-7.033a6.855 6.855 0 0 0-.833 3.303c0 2.287 1.086 4.32 2.738 5.519a5.878 5.878 0 0 1-2.789-.856v.083c0 3.197 2.123 5.875 4.939 6.5a5.812 5.812 0 0 1-1.621.22 5.606 5.606 0 0 1-1.158-.126c.783 2.62 3.057 4.533 5.75 4.596-2.108 1.753-4.762 2.8-7.644 2.792-.496 0-.988-.033-1.469-.094C2.725 26.808 5.96 27.9 9.437 27.9c11.319.003 17.509-9.881 17.509-18.456z"
                                    id="twitterActionsTop"
                                  />
                                </defs>
                                <g
                                  transform="translate(0 -2)"
                                  fill="none"
                                  fillRule="evenodd"
                                >
                                  <mask id="twitterActionsTopMask" fill="#fff">
                                    <use xlinkHref="#twitterActionsTop" />
                                  </mask>
                                  <use
                                    fill="#FFF"
                                    xlinkHref="#twitterActionsTop"
                                  />
                                  <g
                                    mask="url(#twitterActionsTopMask)"
                                    fill="#9B9B9B"
                                  >
                                    <path d="M-15-15h60v60h-60z" />
                                  </g>
                                </g>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Element name="commentSection" className={s.actionsBottom}>
                      <div className={s.comments}>
                        <div className={s.commentsTitle}>
                          <h1>{this.state.noComment ? `0` : `4`} Comments</h1>
                        </div>
                        <div className={s.commentsInput}>
                          {this.state.isSignedIn ? (
                            <div className={s.inputWrapper}>
                              <div className={s.inputAvatar}>
                                <img
                                  width="45"
                                  height="45"
                                  src={
                                    story[100].userpost.user_image_profile_url
                                  }
                                  alt="Qubicle User"
                                />
                              </div>
                              <ContentEditable
                                className={s.inputField}
                                placeholder="Write a comment..."
                                html={this.state.commentContent}
                                onChange={this.handleChange}
                                onFocus={this.handleFocus}
                              />
                            </div>
                          ) : (
                            <div className={s.inputWrapper}>
                              <button className={s.inputButton} type="button">
                                <svg width="30" height="28">
                                  <defs>
                                    <path
                                      d="M4.482 26.223c-.247.494-.14 1.095.212 1.518.283.283.636.459 1.023.459.14 0 .317-.036.46-.07l6.106-2.19c.882.141 1.8.213 2.717.213 8.258 0 15-5.47 15-12.177C30 7.271 23.258 1.8 15 1.8S0 7.27 0 13.976c0 3.74 2.154 7.306 5.753 9.6l-1.271 2.647zM27.18 14.017c0 5.238-5.472 9.51-12.18 9.51a14.62 14.62 0 0 1-2.436-.2c-.201-.035-.434 0-.634.066l-4.338 1.535.734-1.568c.3-.6.066-1.368-.535-1.702-3.136-1.802-4.971-4.672-4.971-7.675 0-5.206 5.472-9.476 12.18-9.476 6.708 0 12.18 4.271 12.18 9.51z"
                                      id="commentsActionsBottom"
                                    />
                                  </defs>
                                  <g
                                    transform="translate(0 -1)"
                                    fill="none"
                                    fillRule="evenodd"
                                  >
                                    <mask
                                      id="commentsActionsBottomMask"
                                      fill="#fff"
                                    >
                                      <use xlinkHref="#commentsActionsBottom" />
                                    </mask>
                                    <use
                                      fill="#000"
                                      fillRule="nonzero"
                                      xlinkHref="#commentsActionsBottom"
                                    />
                                    <g
                                      mask="url(#commentsActionsBottomMask)"
                                      fill="#9B9B9B"
                                    >
                                      <path d="M-15-15h60v60h-60z" />
                                    </g>
                                  </g>
                                </svg>
                                <span>Write a comment...</span>
                              </button>
                            </div>
                          )}
                          {this.state.commentFocus ? (
                            <div className={s.inputActions}>
                              <button
                                className={s.inputCancel}
                                type="button"
                                onClick={this.handleUnFocus}
                              >
                                Cancel
                              </button>
                              <button className={s.inputComment} type="button">
                                Comment
                              </button>
                            </div>
                          ) : null}
                        </div>
                        {this.state.noComment ? (
                          <div className={s.commentsNone}>
                            <h3>
                              There&rsquo;s nothing here. Be the first to
                              comment!
                            </h3>
                          </div>
                        ) : (
                          <div className={s.commentsStream}>
                            <ul className={s.commentsLists}>
                              <li className={s.comment}>
                                <div className={s.commentContent}>
                                  <div className={s.commentAvatar}>
                                    <img
                                      src={
                                        story[0].userpost.user_image_profile_url
                                      }
                                      alt="avatar user"
                                    />
                                  </div>
                                  <div className={s.commentBody}>
                                    <div className={s.commentHeader}>
                                      <span className={s.username}>
                                        {story[0].userpost.user_fullname}
                                      </span>
                                      <span className={s.date}>July 24</span>
                                    </div>
                                    <div className={s.commentBodyInner}>
                                      <div className={s.commentMessage}>
                                        <p>
                                          I can&rsquo;t wait to see their
                                          performance in Jakarta!!
                                        </p>
                                      </div>
                                    </div>
                                    <div className={s.commentActions}>
                                      <menu className={s.commentActionsMenu}>
                                        <li>
                                          <button
                                            type="button"
                                            onClick={
                                              this.handleReplyParentComment
                                            }
                                          >
                                            Reply
                                          </button>
                                        </li>
                                      </menu>
                                      {this.state.commentReplyParent ? (
                                        <div className={s.commentsInput}>
                                          <div className={s.inputWrapper}>
                                            <div className={s.inputAvatar}>
                                              <img
                                                width="45"
                                                height="45"
                                                src={
                                                  story[0].userpost
                                                    .user_image_profile_url
                                                }
                                                alt="Qubicle User"
                                              />
                                            </div>
                                            <ContentEditable
                                              className={s.inputField}
                                              placeholder="Write a comment..."
                                              html={
                                                this.state
                                                  .commentContentReplyParent
                                              }
                                              onChange={
                                                this.handleChangeReplyParent
                                              }
                                            />
                                          </div>
                                          {this.state
                                            .commentReplyParentFocus ? (
                                            <div className={s.inputActions}>
                                              <button
                                                className={s.inputCancel}
                                                type="button"
                                                onClick={
                                                  this.handleUnFocusReplyParent
                                                }
                                              >
                                                Cancel
                                              </button>
                                              <button
                                                className={s.inputComment}
                                                type="button"
                                              >
                                                Comment
                                              </button>
                                            </div>
                                          ) : null}
                                        </div>
                                      ) : null}
                                      <button
                                        className={cx(
                                          s.commentViewReplies,
                                          this.state.commentViewReplies
                                            ? s.isActive
                                            : ``,
                                        )}
                                        type="button"
                                        onClick={this.handleViewRepliesComments}
                                      >
                                        {this.state.commentViewReplies
                                          ? `Hide replies`
                                          : `Show 2 replies`}
                                        <svg width="10" height="6">
                                          <path
                                            d="M5 3.916L1.434.253A.824.824 0 0 0 .247.254a.877.877 0 0 0-.001 1.22l4.162 4.274a.821.821 0 0 0 1.185 0l4.162-4.275A.878.878 0 0 0 9.753.254.821.821 0 0 0 8.567.253L5 3.916z"
                                            fill="#9B9B9B"
                                            fillRule="nonzero"
                                          />
                                        </svg>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                                {this.state.commentViewReplies ? (
                                  <ul className={s.commentChildren}>
                                    <li className={s.comment}>
                                      <div className={s.commentContent}>
                                        <div className={s.commentAvatar}>
                                          <img
                                            src={
                                              story[0].userpost
                                                .user_image_profile_url
                                            }
                                            alt="avatar user"
                                          />
                                        </div>
                                        <div className={s.commentBody}>
                                          <div className={s.commentHeader}>
                                            <span className={s.username}>
                                              {story[0].userpost.user_fullname}
                                            </span>
                                            <span className={s.date}>
                                              July 24
                                            </span>
                                          </div>
                                          <div className={s.commentBodyInner}>
                                            <div className={s.commentMessage}>
                                              <p>
                                                Mantulll!!! (Mantap Betulll!!!)
                                              </p>
                                            </div>
                                          </div>
                                          <div className={s.commentActions}>
                                            <menu
                                              className={s.commentActionsMenu}
                                            >
                                              <li>
                                                <button
                                                  type="button"
                                                  onClick={
                                                    this
                                                      .handleReplyChildrenComment
                                                  }
                                                >
                                                  Reply
                                                </button>
                                              </li>
                                            </menu>
                                            {this.state.commentReplyChildren ? (
                                              <div className={s.commentsInput}>
                                                <div className={s.inputWrapper}>
                                                  <div
                                                    className={s.inputAvatar}
                                                  >
                                                    <img
                                                      width="45"
                                                      height="45"
                                                      src={
                                                        story[0].userpost
                                                          .user_image_profile_url
                                                      }
                                                      alt="Qubicle User"
                                                    />
                                                  </div>
                                                  <ContentEditable
                                                    className={s.inputField}
                                                    placeholder="Write a comment..."
                                                    html={
                                                      this.state
                                                        .commentContentReplyChildren
                                                    }
                                                    onChange={this.handleChange}
                                                  />
                                                </div>
                                                {this.state
                                                  .commentReplyChildrenFocus ? (
                                                  <div
                                                    className={s.inputActions}
                                                  >
                                                    <button
                                                      className={s.inputCancel}
                                                      type="button"
                                                      onClick={
                                                        this
                                                          .handleUnFocusReplyChildren
                                                      }
                                                    >
                                                      Cancel
                                                    </button>
                                                    <button
                                                      className={s.inputComment}
                                                      type="button"
                                                    >
                                                      Comment
                                                    </button>
                                                  </div>
                                                ) : null}
                                              </div>
                                            ) : null}
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                    <li className={s.comment}>
                                      <div className={s.commentContent}>
                                        <div className={s.commentAvatar}>
                                          <img
                                            src={
                                              story[100].userpost
                                                .user_image_profile_url
                                            }
                                            alt="avatar user"
                                          />
                                        </div>
                                        <div className={s.commentBody}>
                                          <div className={s.commentHeader}>
                                            <span className={s.username}>
                                              {
                                                story[100].userpost
                                                  .user_fullname
                                              }
                                            </span>
                                            <span className={s.date}>
                                              July 24
                                            </span>
                                          </div>
                                          <div className={s.commentBodyInner}>
                                            <div className={s.commentMessage}>
                                              <p>
                                                Mantulll!!! (Mantap Betulll!!!)
                                              </p>
                                            </div>
                                          </div>
                                          <div className={s.commentActions}>
                                            <menu
                                              className={s.commentActionsMenu}
                                            >
                                              <li>
                                                <button type="button">
                                                  Reply
                                                </button>
                                              </li>
                                            </menu>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                ) : null}
                              </li>
                              {this.state.commentViewAll ? (
                                <li className={s.comment}>
                                  <div className={s.commentContent}>
                                    <div className={s.commentAvatar}>
                                      <img
                                        src={
                                          story[3].userpost
                                            .user_image_profile_url
                                        }
                                        alt="avatar user"
                                      />
                                    </div>
                                    <div className={s.commentBody}>
                                      <div className={s.commentHeader}>
                                        <span className={s.username}>
                                          {story[3].userpost.user_fullname}
                                        </span>
                                        <span className={s.date}>July 24</span>
                                      </div>
                                      <div className={s.commentBodyInner}>
                                        <div className={s.commentMessage}>
                                          <p>Lezgooo!</p>
                                        </div>
                                      </div>
                                      <div className={s.commentActions}>
                                        <menu className={s.commentActionsMenu}>
                                          <li>
                                            <button type="button">Reply</button>
                                          </li>
                                        </menu>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              ) : null}
                            </ul>
                            {this.state.commentViewAll ? null : (
                              <div className={s.commentViewAllComments}>
                                <button
                                  type="button"
                                  onClick={this.handleViewAllComments}
                                >
                                  View all comments
                                  <svg width="10" height="6">
                                    <path
                                      d="M5 3.916L1.434.253A.824.824 0 0 0 .247.254a.877.877 0 0 0-.001 1.22l4.162 4.274a.821.821 0 0 0 1.185 0l4.162-4.275A.878.878 0 0 0 9.753.254.821.821 0 0 0 8.567.253L5 3.916z"
                                      fill="#0C0C17"
                                      fillRule="nonzero"
                                    />
                                  </svg>
                                </button>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </Element>
                  </div>
                  <StickyBox className={s.actionsSidebar} offset={94}>
                    <div className={s.sidebarProfile}>
                      <div className={s.profileInner}>
                        <div className={s.profileAvatar}>
                          <img
                            className={s.profileImage}
                            width="80"
                            height="80"
                            src={story[7].userpost.user_image_profile_url}
                            alt="Qubicle User"
                          />
                        </div>
                        <div className={s.profileName}>
                          <h1>{story[7].userpost.user_fullname}</h1>
                        </div>
                        <div className={s.profileBio}>
                          <span>
                            A female leader trying to make a difference in
                            design and tech
                          </span>
                        </div>
                        <div className={s.profileSocial}>
                          <button className={s.socialButton} type="button">
                            <svg width="15" height="15">
                              <defs>
                                <path
                                  d="M10.314 15V9.197h1.99l.284-2.27h-2.274V5.631c0-.612.175-1.228 1.043-1.228h1.315V2.342c-1.07-.145-2.05-.061-2.05-.061-1.972.114-2.758 1.6-2.606 3.35v1.296H6.05v2.27h1.966V15H1.029c-.358 0-.488-.037-.619-.107a.729.729 0 0 1-.303-.303C.037 14.459 0 14.33 0 13.97V1.03C0 .67.037.54.107.41A.729.729 0 0 1 .41.107C.541.037.67 0 1.03 0H13.97c.358 0 .488.037.619.107.13.07.233.173.303.303.07.131.107.26.107.619V13.97c0 .358-.037.488-.107.619a.729.729 0 0 1-.303.303c-.131.07-.26.107-.619.107h-3.657z"
                                  id="facebookProfileSocial"
                                />
                              </defs>
                              <g fill="none" fillRule="evenodd">
                                <mask
                                  id="facebookProfileSocialMask"
                                  fill="#fff"
                                >
                                  <use xlinkHref="#facebookProfileSocial" />
                                </mask>
                                <use
                                  fill="#FFF"
                                  xlinkHref="#facebookProfileSocial"
                                />
                                <g
                                  mask="url(#facebookProfileSocialMask)"
                                  fill="#FFF"
                                >
                                  <path d="M-7.5-7.5h30v30h-30z" />
                                </g>
                              </g>
                            </svg>
                          </button>
                          <button className={s.socialButton} type="button">
                            <svg width="15" height="13">
                              <defs>
                                <path
                                  d="M13.473 4.722c0-.141-.003-.28-.01-.42A6.34 6.34 0 0 0 15 2.647a5.883 5.883 0 0 1-1.768.485 3.168 3.168 0 0 0 1.354-1.773 5.9 5.9 0 0 1-1.954.756 3.058 3.058 0 0 0-2.247-1.064c-1.7-.028-3.077 1.413-3.077 3.218 0 .257.027.506.08.746-2.56-.165-4.827-1.502-6.344-3.516a3.428 3.428 0 0 0-.417 1.651c0 1.144.543 2.16 1.369 2.76A2.939 2.939 0 0 1 .602 5.48v.042c0 1.598 1.06 2.937 2.469 3.25a2.906 2.906 0 0 1-1.39.047c.392 1.31 1.53 2.266 2.875 2.298A5.929 5.929 0 0 1 0 12.467a8.284 8.284 0 0 0 4.718 1.483c5.66.001 8.755-4.94 8.755-9.228z"
                                  id="twitterProfileSocial"
                                />
                              </defs>
                              <g
                                transform="translate(0 -1)"
                                fill="none"
                                fillRule="evenodd"
                              >
                                <mask id="twitterProfileSocialMask" fill="#fff">
                                  <use xlinkHref="#twitterProfileSocial" />
                                </mask>
                                <use
                                  fill="#FFF"
                                  xlinkHref="#twitterProfileSocial"
                                />
                                <g
                                  mask="url(#twitterProfileSocialMask)"
                                  fill="#FFF"
                                >
                                  <path d="M-7.5-7.5h30v30h-30z" />
                                </g>
                              </g>
                            </svg>
                          </button>
                          <button className={s.socialButton} type="button">
                            <svg width="15" height="15">
                              <defs>
                                <path
                                  d="M4.257 0A4.26 4.26 0 0 0 0 4.257v6.486A4.26 4.26 0 0 0 4.257 15h6.486A4.26 4.26 0 0 0 15 10.743V4.257A4.26 4.26 0 0 0 10.743 0H4.257zm0 1.216h6.486a3.02 3.02 0 0 1 3.04 3.04v6.487a3.02 3.02 0 0 1-3.04 3.04H4.257a3.02 3.02 0 0 1-3.04-3.04V4.257a3.02 3.02 0 0 1 3.04-3.04zm7.297 1.216a.81.81 0 1 0 0 1.621.81.81 0 0 0 0-1.62zM7.5 3.65A3.86 3.86 0 0 0 3.649 7.5 3.86 3.86 0 0 0 7.5 11.351 3.86 3.86 0 0 0 11.351 7.5 3.86 3.86 0 0 0 7.5 3.649zm0 1.216A2.626 2.626 0 0 1 10.135 7.5 2.626 2.626 0 0 1 7.5 10.135 2.626 2.626 0 0 1 4.865 7.5 2.626 2.626 0 0 1 7.5 4.865z"
                                  id="instagramProfileSocial"
                                />
                              </defs>
                              <g fill="none" fillRule="evenodd">
                                <mask
                                  id="instagramProfileSocialMask"
                                  fill="#fff"
                                >
                                  <use xlinkHref="#instagramProfileSocial" />
                                </mask>
                                <use
                                  fill="#FFF"
                                  fillRule="nonzero"
                                  xlinkHref="#instagramProfileSocial"
                                />
                                <g
                                  mask="url(#instagramProfileSocialMask)"
                                  fill="#FFF"
                                >
                                  <path d="M-7.5-7.5h30v30h-30z" />
                                </g>
                              </g>
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div
                        className={s.profileBorder}
                        style={{ borderColor: this.state.intmusic }}
                      />
                    </div>
                    <div className={s.iabThings}>
                      <div className={s.iabThingsWrapper}>
                        <Link to="/">
                          <img
                            src="https://cdn.qubicle.id/images/2018/07/02/2acdcc37f0079c7a3832042cc5f93f49.png"
                            alt="iab item"
                          />
                        </Link>
                      </div>
                    </div>
                  </StickyBox>
                </div>
              </div>
            </div>
            <div className={s.similarContents}>
              <div className={s.container}>
                <h1 className={s.sectionTitle}>
                  <svg width="16" height="15">
                    <path
                      d="M8 12l-4.702 2.472.898-5.236L.392 5.528l5.257-.764L8 0l2.351 4.764 5.257.764-3.804 3.708.898 5.236z"
                      fill="#0C0C17"
                      fillRule="evenodd"
                    />
                  </svg>
                  Similar stories
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
                              <Link to="/">{story[i].title}</Link>
                            </h1>
                          </div>
                          <div className={s.cardMeta}>
                            <div className={s.metaAvatar}>
                              <div
                                style={{
                                  backgroundImage: `url(${
                                    story[i].userpost.user_image_profile_url
                                  })`,
                                }}
                              />
                            </div>
                            <div className={s.metaRight}>
                              <span className={s.metaAuthor}>
                                {story[i].userpost.user_fullname}
                              </span>
                              <span className={s.metaDate}>May 27, 2018</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
                  You might like this
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
                          <span className={s.summary}>{story[9].summary}</span>
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
                                <span className={s.metaDate}>May 27, 2018</span>
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
            <div
              className={cx(
                s.stickyActions,
                this.state.isScroll ? s.isUp : s.isDown,
              )}
            >
              <div className={s.stickyActionsWrapper}>
                <div className={s.actions}>
                  <div className={s.actionsLeft}>
                    <div className={s.actionsItem}>
                      <button
                        className={s.actionsButton}
                        type="button"
                        onClick={this.handleLike}
                      >
                        <svg width="25" height="21">
                          <path
                            d={
                              this.state.like
                                ? `M12.583 21c-.606 0-1.159-.229-1.607-.636l-8.96-8.655C.198 9.953-.461 7.382.33 5.065 1.384 1.985 4.124 0 7.34 0c1.95 0 3.769.738 5.112 2.036l.105.102.105-.102C14.032.713 15.85 0 17.774 0c1.95 0 3.768.738 5.111 2.036a6.853 6.853 0 0 1 0 9.902l-8.748 8.45c-.368.382-.947.612-1.554.612z`
                                : `M12.583 21c-.606 0-1.159-.229-1.607-.636l-8.96-8.655C.198 9.953-.461 7.382.33 5.065 1.384 1.985 4.124 0 7.34 0c1.95 0 3.769.738 5.112 2.036l.105.102.105-.102C14.032.713 15.85 0 17.774 0c1.95 0 3.768.738 5.111 2.036a6.853 6.853 0 0 1 0 9.902l-8.748 8.45c-.368.382-.947.612-1.554.612zM7.365 2.418c-1.686 0-3.768.891-4.638 3.41-.5 1.451-.08 3.081 1.054 4.175l8.776 8.476 8.564-8.272a4.443 4.443 0 0 0 1.37-3.233c0-1.222-.5-2.367-1.37-3.232-.895-.865-2.081-1.324-3.346-1.324a4.878 4.878 0 0 0-3.347 1.324l-1.001.941c-.5.483-1.291.483-1.793 0l-.974-.941c-.844-.865-2.03-1.324-3.295-1.324z`
                            }
                            fill={
                              this.state.like ? this.state.intmusic : `#0C0C17`
                            }
                            fillRule="nonzero"
                          />
                        </svg>
                      </button>
                      <span
                        style={{
                          color: this.state.like ? this.state.intmusic : '',
                        }}
                      >
                        168
                      </span>
                    </div>
                  </div>
                  <div className={s.actionsRight}>
                    <div className={s.actionsItem}>
                      <button
                        className={s.actionsButton}
                        type="button"
                        onClick={() => this.scrollTo()}
                      >
                        <svg width="25" height="23">
                          <defs>
                            <path
                              d="M3.735 21.852c-.206.412-.117.913.177 1.265.235.236.53.383.852.383.118 0 .265-.03.383-.059l5.089-1.824c.735.117 1.5.177 2.264.177 6.882 0 12.5-4.559 12.5-10.147S19.382 1.5 12.5 1.5 0 6.059 0 11.647c0 3.117 1.795 6.088 4.794 8l-1.059 2.205zM22.65 11.681c0 4.365-4.56 7.925-10.15 7.925-.695 0-1.362-.055-2.03-.167-.168-.029-.362 0-.528.055l-3.615 1.28.611-1.307c.25-.5.056-1.14-.445-1.419-2.614-1.5-4.143-3.893-4.143-6.396 0-4.338 4.56-7.896 10.15-7.896 5.59 0 10.15 3.56 10.15 7.925z"
                              id="commentStickyActions"
                            />
                          </defs>
                          <g
                            transform="translate(0 -1)"
                            fill="none"
                            fillRule="evenodd"
                          >
                            <mask id="commentStickyActionsMask" fill="#fff">
                              <use xlinkHref="#commentStickyActions" />
                            </mask>
                            <use
                              fill="#000"
                              fillRule="nonzero"
                              xlinkHref="#commentStickyActions"
                            />
                            <g
                              mask="url(#commentStickyActionsMask)"
                              fill="#0C0C17"
                            >
                              <path d="M-12.5-12.5h50v50h-50z" />
                            </g>
                          </g>
                        </svg>
                      </button>
                      <span>4</span>
                    </div>
                    <div className={s.actionsItem}>
                      <button className={s.actionsButton} type="button">
                        <svg width="25" height="25">
                          <defs>
                            <path
                              d="M17.19 25v-9.672h3.317l.472-3.782H17.19v-2.16c0-1.021.292-2.047 1.739-2.047h2.192V3.903c-1.783-.24-3.418-.102-3.418-.102-3.287.191-4.596 2.666-4.344 5.585v2.16h-3.276v3.782h3.276V25H1.714c-.596 0-.812-.062-1.03-.179a1.215 1.215 0 0 1-.505-.505C.062 24.098 0 23.882 0 23.286V1.714C0 1.118.062.902.179.684.295.466.466.295.684.18.902.062 1.118 0 1.714 0h21.572c.596 0 .812.062 1.03.179.218.116.389.287.505.505.117.218.179.434.179 1.03v21.572c0 .596-.062.812-.179 1.03a1.215 1.215 0 0 1-.505.505c-.218.117-.434.179-1.03.179H17.19z"
                              id="facebookStickyActions"
                            />
                          </defs>
                          <g fill="none" fillRule="evenodd">
                            <mask id="facebookStickyActionsMask" fill="#fff">
                              <use xlinkHref="#facebookStickyActions" />
                            </mask>
                            <use
                              fill="#FFF"
                              xlinkHref="#facebookStickyActions"
                            />
                            <g
                              mask="url(#facebookStickyActionsMask)"
                              fill="#0C0C17"
                            >
                              <path d="M-12.5-12.5h50v50h-50z" />
                            </g>
                          </g>
                        </svg>
                      </button>
                    </div>
                    <div className={s.actionsItem}>
                      <button className={s.actionsButton} type="button">
                        <svg width="25" height="23">
                          <defs>
                            <path
                              d="M22.455 7.87c0-.235-.005-.468-.015-.699A10.566 10.566 0 0 0 25 4.411a9.805 9.805 0 0 1-2.946.808 5.28 5.28 0 0 0 2.256-2.956 9.833 9.833 0 0 1-3.257 1.26c-.935-1.067-2.269-1.747-3.744-1.772-2.832-.047-5.129 2.354-5.129 5.363 0 .428.045.843.133 1.243C8.048 8.08 4.268 5.854 1.74 2.496a5.713 5.713 0 0 0-.694 2.753c0 1.905.905 3.599 2.281 4.598a4.898 4.898 0 0 1-2.323-.713v.07c0 2.663 1.768 4.895 4.115 5.416-.43.123-.884.186-1.35.184a4.671 4.671 0 0 1-.965-.106c.652 2.183 2.547 3.777 4.79 3.83-1.755 1.461-3.967 2.334-6.369 2.327A9.74 9.74 0 0 1 0 20.777c2.271 1.563 4.966 2.473 7.864 2.473 9.432.002 14.59-8.234 14.59-15.38z"
                              id="twitterStickyActions"
                            />
                          </defs>
                          <g
                            transform="translate(0 -1)"
                            fill="none"
                            fillRule="evenodd"
                          >
                            <mask id="twitterStickyActionsMask" fill="#fff">
                              <use xlinkHref="#twitterStickyActions" />
                            </mask>
                            <use
                              fill="#FFF"
                              xlinkHref="#twitterStickyActions"
                            />
                            <g
                              mask="url(#twitterStickyActionsMask)"
                              fill="#0C0C17"
                            >
                              <path d="M-12.5-12.5h50v50h-50z" />
                            </g>
                          </g>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
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
                        s.skeletonHeroDate,
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
            <div className={s.contents}>
              <div className={s.container}>
                <div
                  className={cx(
                    s.skeleton,
                    s.skeletonPrimary,
                    s.skeletonContentsBorder,
                  )}
                />
                <div className={s.contentsSummary}>
                  <div
                    className={cx(
                      s.skeleton,
                      s.skeletonSecondary,
                      s.skeletonContentsSummaryFirst,
                    )}
                  />
                  <div
                    className={cx(
                      s.skeleton,
                      s.skeletonSecondary,
                      s.skeletonContentsSummarySecond,
                    )}
                  />
                  <div
                    className={cx(
                      s.skeleton,
                      s.skeletonSecondary,
                      s.skeletonContentsSummaryThird,
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

export default withStyles(s)(Story);
