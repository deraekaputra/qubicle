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
import Slider from 'react-slick';
import s from './SignUp.css';
import Link from '../../components/Link';
import logoUrl from '../../../public/logo-mark-dark.svg';

class SignUp extends React.Component {
  static propTypes = {
    story: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

  state = {
    nextDisabled: true,
    showPassword: false,
  };

  handleOnChange = () => {
    this.setState({
      nextDisabled: !this.state.nextDisabled,
    });
  };

  handleShowPassword = () => {
    this.setState({
      showPassword: !this.state.showPassword,
    });
  };

  render() {
    const { story } = this.props;
    const settings = {
      arrows: false,
      autoplay: true,
      autoplaySpeed: 8000,
      centerMode: true,
      centerPadding: 0,
      dots: false,
      draggable: false,
      fade: true,
      infinite: true,
      pauseOnHover: false,
      slidesToScroll: 1,
      slidesToShow: 1,
      speed: 1000,
    };
    return (
      <div className={s.root}>
        <div className={s.form}>
          <div className={s.formWrapper}>
            <div className={s.formContents}>
              <img className={s.formLogo} src={logoUrl} alt="qubicle logo" />
              <div className={s.formTitle}>
                <h1>Create your Qubicle Account</h1>
                <h3>to get your personalized contents.</h3>
                <span>
                  Already have an account? <Link to="/signin">Sign in</Link>
                </span>
              </div>
              <form>
                <div className={s.formGroup}>
                  <span className={s.formLabel}>Fullname</span>
                  <input
                    className={cx(s.formInput, s.error)}
                    type="text"
                    id="fullname"
                  />
                  <span className={cx(s.formAlert, s.error)}>
                    Please fill your name
                  </span>
                </div>
                <div className={s.formGroup}>
                  <span className={s.formLabel}>Email</span>
                  <input
                    className={cx(s.formInput, s.error)}
                    type="email"
                    id="email"
                  />
                  <span className={cx(s.formAlert, s.error)}>
                    Please fill your email
                  </span>
                </div>
                <div className={s.formGroup}>
                  <span className={s.formLabel}>Password</span>
                  <button
                    className={s.passRevealer}
                    type="button"
                    onClick={this.handleShowPassword}
                  >
                    <svg
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d={
                          this.state.showPassword
                            ? `M11.5708771 3.92241519c1.7816086.74864114 3.2983278 2.03933263 4.311317 3.68333829v.00004567c.0806186.12485875.1218653.26934663.1174906.41620597-.0050012.13199745-.0456216.25982736-.1174906.37220176-1.6392176 2.66064962-4.6095196 4.41585742-7.88555508 4.40574972-.69794451-.0021403-1.38186705-.0824376-2.04194551-.233268L5.17658599 13.76433c-.21180882.3240598-.64325279.4131966-.96365709.1990928-.02094928-.0139989-.04113305-.0291353-.06046261-.0453425-.33946629-.284632-.41238659-.7821791-.16917204-1.1542884l.44640591-.6870956c-1.78519298-.7484135-3.30444781-2.0383966-4.3186162-3.68431596-.14811194-.24318764-.14811194-.54343921 0-.78662686C1.75206141 4.94571266 4.72748297 3.1970308 8.0003187 3.20000378c.69928408.00074801 1.38458892.08062114 2.0459849.23177284l.7771104-1.19610665c.2118088-.32405974.6432528-.41319661.9636571-.19909277.0209493.01399894.0411331.02913529.0604626.04534253.3394663.28463197.4123866.78217904.169172 1.15428839l-.4458286.68620707zM6.87011289 11.1577006c.36935461.0557097.74679918.0845278 1.13020581.0845278 2.5367397 0 4.8171176-1.26883157 6.2076208-3.24224822-.8717135-1.23744121-2.0903297-2.19753316-3.5049507-2.74173556l-.4287957.6599904c.4800738.49337933.7947164 1.14109513.8815315 1.84810115l-.0000704-.00001522c.0193731.07669916.0268724.15518985.0231228.23426807.0056251.07849526-.0006239.15756739-.0193727.2348617-.1887836 1.53701226-1.45427367 2.79216008-3.1590856 2.79216008-.332791-.0002308-.653641-.0490383-.95513333-.1393769l-.17507248.2694667zm-1.57348211-.4153597l.41569151-.6398208c-.55238264-.54425866-.89239677-1.28492643-.89300729-2.10132223-.00063994-1.67187128 1.42371634-3.02810153 3.1810037-3.02869606.33670117 0 .65633591.04923402.95393339.14013014l.17567678-.27039681c-.36900008-.05569357-.74623593-.08450317-1.12961017-.08450317-2.54361906 0-4.82463694 1.26883156-6.22201956 3.24224821.87636151 1.23791515 2.10020601 2.19826852 3.51833164 2.74236072zm2.7027028-4.15992496c-.77276777-.01780032-1.54576053.45253422-1.54576053 1.41759468.00107933.2728431.06352685.50610511.16998179.69996566l1.37577874-2.11756034zm1.35589936.75025704l-1.354551 2.08488719c.74748631-.01708393 1.49433986-.49201374 1.5407829-1.41754955-.01290532-.25736251-.08000247-.47985118-.1862319-.66733764z`
                            : `M15.8821941 7.60575348v.00004567c.0806186.12485875.1218653.26934663.1174906.41620597-.0050012.13199745-.0456216.25982736-.1174906.37220176-1.6392176 2.66064962-4.6095196 4.41585742-7.88555508 4.40574972-3.27603544-.010046-6.24313773-1.7420558-7.88555507-4.40757626-.14811193-.24318764-.14811193-.54343921 0-.78662686C1.75206142 4.94571266 4.72748298 3.1970308 8.0003187 3.20000378c3.2728357.00350086 6.2394581 1.74022928 7.8818754 4.4057497zM8.0003187 11.2422284c2.5367397 0 4.8171176-1.26883157 6.2076208-3.24224822-1.3905992-1.97402549-3.6640017-3.24224821-6.2076208-3.24224821-2.54361906 0-4.82463694 1.26883156-6.22201956 3.24224821C3.17577776 9.97400567 5.45685963 11.2422284 8.0003187 11.2422284zm3.1554059-3.47589223l-.0000704-.00001522c.0193731.07669916.0268724.15518985.0231228.23426807.0056251.07849526-.0006239.15756739-.0193727.2348617-.1887836 1.53701226-1.45427367 2.79216008-3.1590856 2.79216008-1.75613546-.0012177-3.17975389-1.35513528-3.1810037-3.02641293-.00063994-1.67187128 1.42371634-3.02810153 3.1810037-3.02869606 1.70116424 0 2.9666703 1.25680688 3.1554059 2.79383436zm-4.70215155.23367445c.00751935 1.90081196 2.99352559 1.88056789 3.08789179 0-.0943918-1.88239442-3.08789179-1.89913764-3.08789179 0z`
                        }
                        fill="#9B9B9B"
                        fillRule="evenodd"
                      />
                    </svg>
                    {this.state.showPassword ? `Hide` : `Show`}
                  </button>
                  <input
                    className={cx(s.formInput, s.error)}
                    type={this.state.showPassword ? `text` : `password`}
                    id="password"
                  />
                  <span className={s.formAlert}>
                    Use 8 or more characters with a mix of letters, numbers
                    &amp; symbols
                  </span>
                  <span className={cx(s.formAlert, s.error)}>
                    Please fill your password
                  </span>
                </div>
                <div className={cx(s.formGroup, s.formBirthday)}>
                  <span className={s.formLabel}>Birthday</span>
                  <div className={cx(s.formSelect, s.error)}>
                    <select>
                      <option value="" defaultValue>
                        Month
                      </option>
                      <option value="January">January</option>
                      <option value="February">February</option>
                      <option value="March">March</option>
                      <option value="April">April</option>
                      <option value="May">May</option>
                      <option value="June">June</option>
                      <option value="July">July</option>
                      <option value="August">August</option>
                      <option value="September">September</option>
                      <option value="October">October</option>
                      <option value="November">November</option>
                      <option value="December">December</option>
                    </select>
                  </div>
                  <input
                    className={cx(s.formInput, s.error)}
                    type="text"
                    placeholder="Day"
                    id="day"
                  />
                  <input
                    className={cx(s.formInput, s.error)}
                    placeholder="Year"
                    type="text"
                    id="year"
                  />
                  <span className={cx(s.formAlert, s.error)}>
                    Please complete your birthdate
                  </span>
                </div>
                <div className={s.formGroup}>
                  <span className={s.formLabel}>Gender</span>
                  <div className={s.formRadio}>
                    <div className={s.radio}>
                      <label htmlFor="male">
                        <input
                          type="radio"
                          name="gender"
                          value="1"
                          id="male"
                          onChange={this.handleOnChange}
                        />
                        Male
                      </label>
                    </div>
                    <div className={s.radio}>
                      <label htmlFor="female">
                        <input
                          type="radio"
                          name="gender"
                          value="2"
                          id="female"
                          onChange={this.handleOnChange}
                        />
                        Female
                      </label>
                    </div>
                  </div>
                  <span className={cx(s.formAlert, s.error)}>
                    Please select your gender
                  </span>
                </div>
                <div className={s.formFooter}>
                  <button type="submit" disabled={this.state.nextDisabled}>
                    SIGN UP
                  </button>
                  <span>
                    By clicking the button above, you agree to Qubicle&rsquo;s{' '}
                    <Link to="/">Terms of Use</Link> and{' '}
                    <Link to="/">Privacy Policy</Link>.
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Slider className={s.signupTrending} {...settings}>
          <div className={s.heroStory}>
            <Link to="/">
              <div
                className={s.heroImage}
                style={{
                  backgroundImage: `url(${story[40].post_image_cover_url})`,
                }}
              />
              <div className={s.heroTitle}>
                <span>{story[40].title}</span>
              </div>
            </Link>
          </div>
          <div className={s.heroStory}>
            <Link to="/">
              <div
                className={s.heroImage}
                style={{
                  backgroundImage: `url(${story[41].post_image_cover_url})`,
                }}
              />
              <div className={s.heroTitle}>
                <span>{story[41].title}</span>
              </div>
            </Link>
          </div>
          <div className={s.heroStory}>
            <Link to="/">
              <div
                className={s.heroImage}
                style={{
                  backgroundImage: `url(${story[42].post_image_cover_url})`,
                }}
              />
              <div className={s.heroTitle}>
                <span>{story[42].title}</span>
              </div>
            </Link>
          </div>
          <div className={s.heroStory}>
            <Link to="/">
              <div
                className={s.heroImage}
                style={{
                  backgroundImage: `url(${story[43].post_image_cover_url})`,
                }}
              />
              <div className={s.heroTitle}>
                <span>{story[43].title}</span>
              </div>
            </Link>
          </div>
          <div className={s.heroStory}>
            <Link to="/">
              <div
                className={s.heroImage}
                style={{
                  backgroundImage: `url(${story[44].post_image_cover_url})`,
                }}
              />
              <div className={s.heroTitle}>
                <span>{story[44].title}</span>
              </div>
            </Link>
          </div>
        </Slider>
      </div>
    );
  }
}

export default withStyles(s)(SignUp);
