/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './TermsOfUse.css';
import Link from '../../components/Link';

class TermsOfUse extends React.Component {
  state = {
    isEng: true,
  };

  handleSwitchLangEn = () => {
    this.setState({
      isEng: true,
    });
  };

  handleSwitchLangIn = () => {
    this.setState({
      isEng: false,
    });
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.hero}>
          <div className={s.heroTitle}>
            <div className={s.container}>
              <div className={s.heroWrapper}>
                <h1 className={s.title}>
                  <span>
                    {this.state.isEng ? `Terms of Use` : `Syarat Penggunaan`}
                  </span>
                </h1>
                <ul className={s.switcher}>
                  <li>
                    <button
                      className={this.state.isEng ? s.active : ''}
                      type="button"
                      onClick={this.handleSwitchLangEn}
                    >
                      EN
                    </button>
                  </li>
                  <li>
                    <button
                      className={this.state.isEng ? '' : s.active}
                      type="button"
                      onClick={this.handleSwitchLangIn}
                    >
                      ID
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={s.contents}>
          <div className={s.container}>
            <div className={s.contentsBorder} />
            {this.state.isEng ? (
              <div className={s.contactContent}>
                <p>
                  <b>Last Updated: 5 Nov 2018</b>
                </p>
                <h2 className={s.contentTitle}>Welcome to Qubicle</h2>
                <p>
                  Qubicle is a digital media operated and managed by PT Multi
                  Kanal Media based in Jakarta, Indonesia (“<b>Qubicle</b>”, “<b
                  >
                    we
                  </b>” or “<b>us</b>”). We provide online content sharing
                  services based on a variety of interests of individuals or
                  groups (“<b>Service</b>”) through our website, mobile or
                  desktop applications and all other related tools, data,
                  software or applications applications (“<b>Platform</b>”). We
                  set out herein the terms and conditions in using our Service
                  and Platform (“<b>Terms of Use</b>”).
                </p>
                <p>
                  The Terms of Use, together with our Privacy Policy and any
                  other terms specifically referred to in any of those
                  documents, constitute a legally binding agreement (the “<b>
                    Agreement
                  </b>”) between you and Qubicle in relation to your use of the
                  Service or Platform.
                </p>
                <p>
                  <b>
                    <u>Acceptance of Terms of Use.</u>
                  </b>
                  <br />Please read the Terms of Use carefully. By accessing or
                  using the Service or Platform, registering an account, or by
                  viewing, accessing, streaming, uploading or downloading any
                  information or content from or to the Platform, you represent
                  and warrant that you have read and understood the Terms of Use
                  and our Privacy Policy. If you do not agree with any of the
                  provisions set out in any of those documents, please do not
                  use the Service or Platform in any way.
                </p>
                <p>The Terms of Use are divided into the following:</p>
                <h3>1. Eligibility of Users and Registration Information</h3>
                <p>
                  Persons who are under 18 years old are strictly prohibited in
                  accessing or using or registering as a member with Qubicle
                  without proper supervision of parents, and/or legal guardian.
                  When you wish to create an account with us, you must provide
                  us with certain information, i.e. your Indonesian resident
                  identity card number (optional), date of birth, and valid
                  email address (“<b>Registration Information</b>”). We may
                  share your Registration Information with one sponsor/business
                  partner of Qubicle to be used for advertisement purposes in
                  the form of, among other things, promotional information to
                  your email address. All information that you provide to us in
                  connection with your use of the Platform is collected, stored,
                  used and disclosed by Qubicle in accordance with our Privacy
                  Policy.
                </p>
                <p>
                  If you create an account on behalf of a company, organization,
                  or other entity, then (a) &ldquo;you&rdquo; includes you and
                  that entity, that entity, and (b) you represent and warrant
                  that you are authorized to grant all permissions and licenses
                  provided in these Terms of Use and bind the entity to these
                  Terms of Use, and that you agree to these Terms of Use on the
                  entity&rsquo;s behalf.
                </p>
                <p>
                  You may use our Service or Platform only if you form a binding
                  contract with Qubicle by clicking the button of acceptance of
                  the Terms of Use that appears on the registration page, and
                  only if you are in full compliance with the Terms of Use and
                  our Privacy Policy and all applicable laws and regulations at
                  all times.
                </p>
                <h3>2. Changes/Amendments to the Terms of Use</h3>
                <p>
                  Qubicle may, in its sole discretion, modify or revise the
                  Terms of Use at any time, and by using the Service and
                  Platform you agree to be bound to such modification or
                  revisions. Qubicle may, but is not obliged to, notify you of
                  any major changes that are made to any of the Terms of Use,
                  but users are required to always review the Terms of Use from
                  time to time to keep up with the most up-to-date version of
                  these Terms of Use.
                </p>
                <h3>3. Description of Platform</h3>
                <p>
                  The Platform is a hosting service where registered users of
                  the Platform may access content in the form of article and
                  video.
                </p>
                <p>
                  The Platform also enables registered users to interact with
                  one another and to contribute to discussions or specific
                  content owned by another registered user, and enables any user
                  of the website, applications or certain Service (who may or
                  may not be registered users of the Platform) to view, listen
                  to and share Content.
                </p>
                <p>
                  We may, from time to time, release new tools and resources on
                  the Qubicle’s site, release new versions of our application,
                  or introduce other services and/or features for the Platform.
                  Any new services and features will be subject to these Terms
                  of Use as well as any additional terms of use that we may
                  release for those specific services or features.
                </p>
                <h3>4. Intellectual Property Rights Policy</h3>
                <p>
                  Qubicle encourages its users to respect intellectual property
                  rights of others. Users shall not copy, reproduce, distribute,
                  transmit, broadcast, re-qube, display, sell, license, or
                  otherwise exploit any Content for any other purposes without
                  the prior written consent of the respective licensors of the
                  Content. Users must understand that when using Qubicle’s
                  Service, users will be exposed to variety of Content from
                  multiple sources, and Qubicle is not responsible for the
                  accuracy, usefulness, safety, or intellectual property rights
                  of or relating to such Content. Users further understand and
                  acknowledge that you may be exposed to Content that is
                  inaccurate, offensive, indecent, or objectionable, and you
                  agree to waive, and hereby do waive, any legal or equitable
                  rights or remedies you have or may have against Qubicle with
                  respect thereto, and, to the extent permitted by applicable
                  law, agree to indemnify and hold harmless Qubicle, including,
                  but not limited to, its owners, employees, contractors,
                  operators, affiliates, sponsors, licensors, and licensees to
                  the fullest extent allowed by law regarding all matters
                  related to your use of the Service and Platform.
                </p>
                <h3>5. Third-Party Services</h3>
                <p>
                  During your use of the Service or Platform, you may encounter
                  links or access to third-party websites, advertisers,
                  services, special offers, databases, networks, servers,
                  information, software, programs, systems, directories,
                  applications or other events or activities that are not owned
                  or controlled by Qubicle (“<b>Third Party Services</b>”).
                  Qubicle does not have or maintain any control over Third Party
                  Services, and is not and cannot be responsible for their
                  content, operation or use. By linking or otherwise providing
                  access to any Third Party Services, Qubicle does not give any
                  representation, warranty or endorsement, express or implied,
                  with respect to the legality, accuracy, quality or
                  authenticity of content, information or services provided by
                  such Third Party Services.
                </p>
                <h3>6. Representations and Warranties</h3>
                <p>
                  You hereby represent and warrant that any comments that you
                  may post on the Qubicle’s site, including any and all link,
                  information, data, picture, graphic as well as the comments
                  and opinion of any individual are fully owned by you, Qubicle
                  along with its holdings, shareholders, sponsors, stakeholders,
                  subsidiaries, affiliates, successors, and assigns, and their
                  respective employees, agents, directors, commissioners,
                  officers and/or shareholders will be hold harmless from any
                  and all claims, damages, liabilities, loss, responsibilities,
                  cost or debt and expenses, both on criminal and civil level
                  (including but not limited to any attorney fees).
                </p>
                <h3>7. Indemnity</h3>
                <p>
                  To the extent permitted by applicable law, you agree to
                  defend, indemnify and hold harmless Qubicle, any of its parent
                  corporations, shareholders, sponsors, stakeholders, business
                  partners directors, commissioners, employees and agents, from
                  and against any and all claims, damages, obligations, losses,
                  liabilities, costs or debt, and expenses (including but not
                  limited to attorney&rsquo;s fees) arising from: (i) your use
                  of and access to the Service; (ii) your violation of any term
                  of these Terms of Use; (iii) your violation of any third party
                  right, including without limitation any copyright, property,
                  or privacy right; or (iv) any claim that your Content caused
                  damage to a third party. This defense and indemnification
                  obligation will survive these Terms of Use and your use of the
                  Service.
                </p>
                <h3>8. Changes and Termination of the Service or Platform</h3>
                <p>
                  Qubicle may, at its sole discretion, at any time and for any
                  reason to suspend, discontinue, terminate or cease providing
                  access to the Service or Platform or any part thereof,
                  temporarily or permanently, and whether in its entirety or to
                  certain individual territories only. Qubicle shall use its
                  reasonable endeavours to notify registered users of the
                  decisions prior to the temporary or permanent suspension,
                  discontinuation, termination or cessation of access. You
                  hereby agree that Qubicle and its shareholders, sponsor(s),
                  affiliates, subsidiaries, directors, officers, employees or
                  agents shall not be liable to you or to any third parties for
                  any changes or modifications to the Qubicle’s site application
                  or any Service for its decision to suspend, discontinue or
                  terminate the Service or Platform or any part or parts
                  thereof, or your possibility to use or access the same from or
                  within any territory or territories.
                </p>
                <p>
                  Users may terminate this Agreement at any time by sending
                  notice in writing to Qubicle at the address given below for
                  confirming such termination, and by immediately removing all
                  of your Content from the Platform, deleting your account and
                  ceasing to use the Platform.
                </p>
                <p>
                  Qubicle may suspend your access to the Platform and/or
                  terminate this Agreement at any time if you are deemed by
                  Qubicle in its sole discretion to be in breach of any material
                  provision of these Terms of Use or our Privacy Policy.
                </p>
                <h3>9. Disclaimer</h3>
                <p>
                  YOU AGREE THAT YOUR USE OF QUBICLE SERVICES SHALL BE AT YOUR
                  SOLE RISK. QUBICLE SPECIFICALLY DISCLAIMS ANY AND ALL
                  WARRANTIES AND CONDITIONS OF MERCHANTABILITY, FITNESS FOR A
                  PARTICULAR PURPOSE, AND NON-INFRINGEMENT, AND ANY WARRANTIES
                  ARISING OUT OF COURSE OF DEALING OR USAGE OF TRADE. QUBICLE
                  ASSUMES NO LIABILITY OR RESPONSIBILITY FOR ANY (I) ERRORS,
                  MISTAKES, OR INACCURACIES OF CONTENT, (II) PERSONAL INJURY OR
                  PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR
                  ACCESS TO AND USE OF OUR SERVICES, (III) ANY UNAUTHORIZED
                  ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL
                  PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED
                  THEREIN, (IV) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO
                  OR FROM OUR SERVICES, (IV) ANY BUGS, VIRUSES, TROJAN HORSES,
                  OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH OUR
                  SERVICES BY ANY THIRD PARTY, AND/OR (V) ANY ERRORS OR
                  OMISSIONS IN ANY CONTENT OR FOR ANY LOSS OR DAMAGE OF ANY KIND
                  INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED,
                  EMAILED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE
                  SERVICES. YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE
                  CAUTION WHERE APPROPRIATE.
                </p>
                <h3>10. Limitation of Liability</h3>
                <p>
                  IN NO EVENT SHALL QUBICLE, ITS SHAREHOLDERS, SPONSOR(S),
                  STAKEHOLDERS, SPONSORS, BUSINESS PARTNERS, DIRECTORS,
                  EMPLOYEES, OR AGENTS, BE LIABLE TO YOU FOR ANY DIRECT,
                  INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE, OR CONSEQUENTIAL
                  DAMAGES WHATSOEVER RESULTING FROM ANY (I) ERRORS, MISTAKES, OR
                  INACCURACIES OF CONTENT, (II) PERSONAL INJURY OR PROPERTY
                  DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS
                  TO AND USE OF OUR SERVICES, (III) ANY UNAUTHORIZED ACCESS TO
                  OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL
                  INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (IV)
                  ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM OUR
                  SERVICES, (IV) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE,
                  WHICH MAY BE TRANSMITTED TO OR THROUGH OUR SERVICES BY ANY
                  THIRD PARTY, AND/OR (V) ANY ERRORS OR OMISSIONS IN ANY CONTENT
                  OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF
                  YOUR USE OF ANY CONTENT POSTED, EMAILED, TRANSMITTED, OR
                  OTHERWISE MADE AVAILABLE VIA THE SERVICES, WHETHER BASED ON
                  WARRANTY, CONTRACT, TORT, OR ANY OTHER LEGAL THEORY, AND
                  WHETHER OR NOT THE COMPANY IS ADVISED OF THE POSSIBILITY OF
                  SUCH DAMAGES. THE FOREGOING LIMITATION OF LIABILITY SHALL
                  APPLY TO THE FULLEST EXTENT PERMITTED BY LAW IN THE APPLICABLE
                  JURISDICTION.
                </p>
                <h3>11. Severability</h3>
                <p>
                  If there is one or more provisions of these Terms of Use found
                  unlawful, void or unenforceable, such provision(s) shall be
                  deemed severable and will not affect the validity and/or
                  enforceability of the remaining provisions of the Terms of
                  Use, which will remain in full force and effect.
                </p>
                <h3>12. Entire Agreement</h3>
                <p>
                  These Terms of Use, together with the Privacy Policy,
                  constitute the entire agreement between you and Qubicle with
                  respect to your use of the Service or Platform.
                </p>
                <h3>13. Assignment to Third Parties</h3>
                <p>
                  These Terms of Use, and any rights and licenses granted
                  hereunder, may not be transferred or assigned by you without
                  any prior consent from Qubicle, but may be assigned by Qubicle
                  to any party without restriction.
                </p>
                <h3>14. Waiver</h3>
                <p>
                  No waiver of any term of these Terms of Use shall be deemed a
                  further or continuing waiver of such term or any other term,
                  and Qubicle&rsquo;s delay or failure to assert any right or
                  provision under these Terms of Use shall not constitute a
                  waiver of such right or provision.
                </p>
                <h3>15. Language</h3>
                <p>
                  This Terms of Use is displayed in both English and Indonesian
                  language. Both are valid and are the same document.
                </p>
                <h3>16. Governing Law</h3>
                <p>
                  This Terms of Use shall be governed and construed under the
                  Laws of the Republic of Indonesia.
                </p>
                <h3>17. Dispute Settlement</h3>
                <p>
                  Any dispute arising out of or relating to this Terms of Use,
                  including without limitation to any questions regarding its
                  existence, validity or termination, which cannot be settled
                  amicably, shall be settled by arbitration under the
                  administrative and procedural rules of arbitration of the
                  Indonesian National Arbitration Board (“BANI”) then in force.
                  A sole arbitrator shall be appointed to preside over the
                  Arbitration proceedings. If the parties do not agree on a sole
                  arbitrator within 21 days of the notice of intent to
                  arbitrate, the parties agree that such sole arbitrator will be
                  appointed by BANI.
                </p>
                <h3>18. Notices</h3>
                <p>
                  You consent to receive all communications including notices,
                  agreements, disclosures, or other information from Qubicle
                  electronically. Qubicle may provide all such communications by
                  email or by posting them on the Qubicle Service. For
                  support-related inquiries, you may contact us. You may send
                  notices of a legal nature to Qubicle at{' '}
                  <Link to="mailto:info@qubicle.id">info@qubicle.id</Link> or
                  the following address:
                </p>
                <p>
                  PT Multi Kanal Media<br />Mitra Building, 9th Floor<br />Jl.
                  Jend. Gatot Subroto Kav. 21<br />Jakarta Selatan 12930
                </p>
                <p>Attention: Legal Department</p>
                <p>
                  Nothing herein shall limit Qubicle&rsquo;s right to object to
                  subpoenas, claims, or other demands.
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
            ) : (
              <div className={s.contactContent}>
                <p>
                  <b>Terakhir Diubah: 5 Nov 2018</b>
                </p>
                <h2 className={s.contentTitle}>Selamat datang di Qubicle</h2>
                <p>
                  Qubicle adalah media digital yang dioperasikan dan dikelola
                  oleh PT Multi Kanal Media yang berkedudukan di Jakarta,
                  Indonesia (“<b>Qubicle</b>”, “<b>kami</b>” atau “<b>kita</b>”).
                  Kami menyediakan jasa berbagi konten secara online berdasarkan
                  berbagai kepentingan individu atau kelompok (“<b>Jasa</b>”)
                  melalui laman situs, aplikasi telepon seluler atau aplikasi
                  komputer kami dan semua alat, data, perangkat lunak atau
                  aplikasi terkait (“<b>Platform</b>”). Kami mengatur pada
                  Syarat Penggunaan ini syarat dan ketentuan dalam menggunakan
                  Jasa dan Platform kami (“<b>Syarat Penggunaan</b>”).
                </p>
                <p>
                  Syarat Penggunaan, beserta Kebijakan Privasi kami dan setiap
                  istilah lain yang secara khusus disebutkan pada salah satu
                  dokumen tersebut, merupakan perjanjian yang mengikat secara
                  sah (“<b>Perjanjian</b>”) antara anda dan Qubicle berkenaan
                  dengan penggunaan Jasa atau Platform oleh anda.
                </p>
                <p>
                  <b>
                    <u>Penerimaan Syarat Penggunaan</u>
                  </b>
                  <br />Harap membaca Syarat Penggunaan ini dengan seksama.
                  Dengan mengakses atau menggunakan Jasa atau Platform,
                  mendaftarkan akun, atau dengan melihat, mengakses, mengunggah
                  atau mengunduh setiap informasi atau konten dari Platform,
                  anda menyatakan dan menjamin bahwa anda telah membaca dan
                  memahami Syarat Penggunaan dan Kebijakan Privasi kami. Apabila
                  anda tidak setuju dengan salah satu ketentuan yang tercantum
                  pada dokumen-dokumen tersebut, harap tidak menggunakan Jasa
                  atau Platform dengan cara apapun.
                </p>
                <p>Syarat Penggunaan dibagi ke dalam bagian-bagian berikut:</p>
                <h3>1. Kelayakan Para Pengguna dan Informasi Pendaftaran</h3>
                <p>
                  Yang berusia di bawah 18 tahun dilarang mengakses atau
                  menggunakan atau mendaftar sebagai anggota Qubicle tanpa
                  pengawasan orang tua, pengampu dan/atau wali. Ketika anda
                  ingin membuat akun pada kami, anda harus memberikan informasi
                  tertentu kepada kami seperti nomor Kartu Tanda Penduduk (tidak
                  wajib), tanggal lahir, dan alamat email yang sah (“<b>
                    Informasi Pendaftaran
                  </b>”). Kami dapat membagikan Informasi Pendaftaran anda
                  dengan satu sponsor/mitra usaha Qubicle yang akan digunakan
                  untuk tujuan iklan dalam bentuk, antara lain, informasi
                  promosi ke alamat email anda. Semua informasi yang anda
                  berikan kepada kami berkenaan dengan penggunaan Platform oleh
                  anda dikumpulkan, disimpan, digunakan dan diungkapkan oleh
                  Qubicle sesuai dengan Kebijakan Privasi kami.
                </p>
                <p>
                  Apabila anda membuat akun atas nama perusahaan, organisasi
                  atau badan hukum yang lain, maka (a) “anda” meliputi anda dan
                  badan hukum tersebut, dan (b) anda menyatakan dan menjamin
                  bahwa anda telah diberikan wewenang untuk memberikan semua
                  ijin dan lisensi yang ditetapkan pada Syarat Penggunaan ini
                  dan mengikat badan hukum tersebut dengan Syarat Penggunaan
                  ini, dan bahwa anda setuju terhadap Syarat Penggunaan ini atas
                  nama badan hukum tersebut.
                </p>
                <p>
                  Anda dapat menggunakan Jasa atau Platform hanya apabila anda
                  membuat kontrak mengikat dengan Qubicle dengan mengklik tombol
                  penerimaan Syarat Penggunaan yang muncul pada halaman
                  pendaftaran, dan hanya apabila anda sepenuhnya memenuhi Syarat
                  Penggunaan dan Kebijakan Privasi kami dan semua peraturan
                  perundang-undangan yang berlaku setiap saat.
                </p>
                <h3>2. Perubahan Syarat Penggunaan</h3>
                <p>
                  Qubicle dapat, atas kebijakan tunggalnya, mengubah atau
                  merevisi Syarat Penggunaan setiap saat, dan dengan menggunakan
                  Jasa dan Platform, anda setuju untuk terikat dengan perubahan
                  atau revisi tersebut. Qubicle dapat, tetapi tidak berkewajiban
                  untuk, memberitahu anda tentang setiap perubahan yang dibuat
                  pada Syarat Penggunaan, tetapi para pengguna diminta untuk
                  selalu meninjau Syarat Penggunaan dari waktu ke waktu untuk
                  mengikuti versi Syarat Penggunaan yang paling terbaru.
                </p>
                <h3>3. Deskripsi Mengenai Platform</h3>
                <p>
                  Platform merupakan jasa hosting di mana para pengguna Platform
                  yang telah terdaftar dapat melihat isi konten Qubicle, baik
                  dalam bentuk artikel maupun video.{' '}
                </p>
                <p>
                  Platform juga memungkinkan para pengguna terdaftar untuk
                  berinteraksi satu sama lain dan untuk berkontribusi dalam
                  pembahasan atau konten tertentu yang dimiliki oleh pengguna
                  terdaftar yang lain, dan memungkinkan setiap pengguna laman
                  situs, aplikasi atau Jasa tertentu (yang dapat atau bukan
                  merupakan para pengguna terdaftar Platform) untuk melihat,
                  mendengarkan dan membagikan Konten.
                </p>
                <p>
                  Kami dapat, dari waktu ke waktu, mengeluarkan alat dan sumber
                  daya baru pada situs Qubicle, mengeluarkan versi aplikasi kami
                  yang baru, atau memperkenalkan jasa dan/atau fitur lain untuk
                  Platform. Setiap jasa dan fitur baru akan tunduk pada Syarat
                  Penggunaan serta syarat penggunaan tambahan yang dapat kami
                  keluarkan untuk jasa atau fitur khusus tersebut.
                </p>
                <h3>4. Kebijakan Hak Kekayaan Intelektual </h3>
                <p>
                  Qubicle mendorong para penggunanya untuk menghargai hak
                  kekayaan intelektual pengguna yang lain. Para pengguna tidak
                  boleh menyalin, membuat ulang, mendistribusikan, mengirimkan,
                  menyiarkan, menampilkan, menjual, melisensikan atau
                  mengeksploitasi setiap Konten untuk tujuan apapun tanpa
                  persetujuan tertulis terlebih dahulu dari kami. Para pengguna
                  harus memahami bahwa ketika menggunakan Jasa Qubicle, para
                  pengguna akan terpapar berbagai Konten dari berbagai sumber,
                  dan Qubicle tidak bertanggung jawab atas akurasi,
                  kebermanfaatan, keselamatan, atau hak kekayaan intelektual
                  dari atau yang berkenaan dengan Konten tersebut. Para pengguna
                  selanjutnya memahami dan mengakui bahwa para pengguna dapat
                  menemui Konten yang tidak akurat, ofensif, melecehkan atau
                  tidak dapat diterima, dan para pengguna setuju untuk
                  mengesampingkan, dan dengan ini mengesampingkan, setiap hak
                  hukum atau upaya hukum atau yang setara yang anda miliki atau
                  dapat anda miliki terhadap Qubicle berkenaan dengan hal
                  tersebut, dan sejauh diperkenankan menurut hukum yang berlaku,
                  setuju untuk membebaskan dan memposisikan lepas dari segala
                  kerugian bagi Qubicle, termasuk, tetapi tidak terbatas pada,
                  pemilik, karyawan, kontraktor, operator, afiliasi, sponsor,
                  dan penerima lisensinya sejauh diperkenankan oleh hukum
                  terkait seluruh hal yang berkenaan dengan penggunaan Jasa dan
                  Platform oleh anda.
                </p>
                <h3>5. Jasa Pihak Ketiga</h3>
                <p>
                  Selama menggunakan Jasa atau Platform, anda dapat menemui
                  tautan atau akses ke laman situs pihak ketiga, pengiklan,
                  jasa, penawaran khusus, database, jaringan, server, informasi,
                  perangkat lunak, program, sistem, arahan, aplikasi atau agenda
                  atau aktivitas lain yang tidak dimiliki atau dikendalikan oleh
                  Qubicle (“Jasa Pihak Ketiga”). Qubicle tidak memiliki atau
                  mempunyai kendali atas Jasa Pihak Ketiga, dan tidak dan tidak
                  dapat bertanggung jawab atas konten, operasi atau penggunaan
                  Jasa Pihak Ketiga. Dengan menyediakan tautan atau menyediakan
                  akses ke Jasa Pihak Ketiga, Qubicle tidak memberikan setiap
                  pernyataan, jaminan atau pengesahan, secara tegas atau
                  tersirat, berkenaan dengan legalitas, akurasi, kualitas atau
                  keaslian konten, informasi atau jasa yang disediakan oleh Jasa
                  Pihak Ketiga tersebut.
                </p>
                <h3>6. Pernyataan dan Jaminan</h3>
                <p>
                  Anda dengan ini menyatakan dan menjamin bahwa
                  komentar-komentar yang Anda unggah, termasuk didalamnya semua
                  tautan, informasi, data, gambar, grafik maupun komentar dan
                  pendapat pihak lain adalah sepenuhnya tanggung jawab Anda,
                  Qubicle beserta setiap induk perusahaan, pemegang saham,
                  sponsor, pemilik modal, mitra usaha, direktur, komisaris,
                  karyawan dan agen, akan Anda lindungi dari dan terhadap setiap
                  dan semua klaim, kerusakan, kewajiban, kerugian, tanggung
                  jawab, biaya atau hutang dan pengeluaran, baik secara pidana
                  maupun perdata (termasuk tetapi tidak terbatas pada biaya
                  penasihat hukum).
                </p>
                <h3>7. Ganti Rugi</h3>
                <p>
                  Sejauh diperkenankan oleh hukum yang berlaku, anda setuju
                  untuk membela, mengganti rugi dan membebaskan Qubicle, setiap
                  induk perusahaan, pemegang saham, sponsor, pemilik modal,
                  mitra usaha, direktur, komisaris, karyawan dan agen, dari dan
                  terhadap setiap dan semua klaim, kerusakan, kewajiban,
                  kerugian, tanggung jawab, biaya atau hutang dan pengeluaran
                  (termasuk tetapi tidak terbatas pada biaya penasihat hukum),
                  baik secara perdata maupun pidana yang timbul dari: (i)
                  penggunaan atau akses anda terhadap Jasa; (ii) pelanggaran
                  terhadap salah satu persyaratan Syarat Penggunaan oleh anda;
                  (iii) pelanggaran oleh anda terhadap hak pihak ketiga,
                  termasuk tanpa batasan, hak cipta, properti atau hak privasi;
                  atau (iv) setiap klaim bahwa Konten anda menyebabkan kerusakan
                  pada pihak ketiga. Kewajiban pembelaan dan pemberian ganti
                  rugi ini akan tetap berlaku menurut Syarat Penggunaan ini dan
                  selama anda menggunakan Jasa.
                </p>
                <h3>8. Perubahan dan Pengakhiran Jasa atau Platform</h3>
                <p>
                  Qubicle dapat, atas kebijakan tunggalnya dan dengan alasan
                  apapun, memberhentikan sementara, memberhentikan, mengakhiri
                  atau tidak lagi menyediakan akses terhadap Jasa atau Platform
                  atau setiap bagian darinya, sementara atau selamanya, dan baik
                  secara keseluruhan atau hanya kepada individu, atau wilayah
                  tertentu. Qubicle harus melakukan upaya-upaya wajarnya untuk
                  memberitahu para pengguna terdaftar atas keputusannya sebelum
                  pemberhentian sementara, pemberhentian, pengakhiran atau
                  penghentian akses sementara atau permanen tersebut. Anda
                  dengan ini setuju bahwa Qubicle dan para pemegang saham,
                  sponsor, afiliasi, anak perusahaan, direktur, pejabat,
                  karyawan atau agennya tidak bertanggung jawab terhadap anda
                  atau kepada pihak ketiga atas setiap perubahan atau modifikasi
                  pada aplikasi situs Qubicle atau setiap Jasa atas keputusannya
                  untuk memberhentikan sementara, memberhentikan atau mengakhiri
                  Jasa atau Platform atau setiap bagian darinya, atau
                  kemungkinan anda untuk menggunakan atau mengaksesnya dari atau
                  dalam wilayah atau wilayah-wilayah tertentu.
                </p>
                <p>
                  Para pengguna dapat mengakhiri Perjanjian ini pada setiap
                  waktu dengan mengirimkan pemberitahuan tertulis kepada Qubicle
                  ke alamat yang dicantumkan di bawah ini untuk mengkonfirmasi
                  pengakhiran tersebut, dan dengan menghapus akun anda dan
                  menghentikan penggunaan Platform.
                </p>
                <p>
                  Qubicle dapat menghentikan sementara akses anda terhadap
                  Platform dan/atau mengakhiri Perjanjian ini pada setiap waktu
                  apabila anda dianggap oleh Qubicle atas kebijakan tunggalnya,
                  melanggar setiap ketentuan material dari Syarat Penggunaan ini
                  dan Kebijakan Privasi Qubicle.
                </p>
                <h3>9. Sanggahan</h3>
                <p>
                  ANDA SETUJU BAHWA PENGGUNAAN ANDA TERHADAP JASA QUBICLE ADALAH
                  RISIKO YANG DITANGGUNG OLEH ANDA SENDIRI SEPENUHNYA. QUBICLE
                  SECARA KHUSUS MENYANGGAH SETIAP DAN SEMUA JAMINAN DAN
                  KETENTUAN KELAYAKAN JUAL, KESESUAIAN UNTUK TUJUAN TERTENTU,
                  DAN TIDAK ADANYA PELANGGARAN, DAN SETIAP JAMINAN YANG TIMBUL
                  DARI PRAKTIK PENGURUSAN ATAU PENGGUNAAN DAGANG. QUBICLE TIDAK
                  MENERIMA KEWAJIBAN ATAU TANGGUNG JAWAB ATAS SETIAP (I)
                  KEKELIRUAN, KESALAHAN ATAU KETIDAKAKURATAN KONTEN, (II)
                  KECELAKAAN PERORANGAN ATAU KERUSAKAN PROPERTI, DENGAN SIFAT
                  APAPUN, YANG TIMBUL DARI AKSES ANDA TERHADAP DAN PENGGUNAAN
                  ANDA TERHADAP JASA KAMI, (III) AKSES YANG TIDAK SAH KE ATAU
                  PENGGUNAAN SERVER AMAN KAMI DAN/ATAU SETIAP DAN SEMUA
                  INFORMASI PERORANGAN DAN/ATAU INFORMASI FINANSIAL YANG
                  DISIMPAN DI DALAMNYA (IV) SETIAP GANGGUAN ATAU PEMBERHENTIAN
                  SEMENTARA TRANSMISI PADA ATAU DARI JASA KAMI, (V) SETIAP BUG,
                  VIRUS, TROJAN HORSE, ATAU SEJENISNYA YANG DAPAT DIKIRIMKAN KE
                  ATAU MELALUI JASA KAMI OLEH SETIAP PIHAK KETIGA, DAN/ATAU (VI)
                  SETIAP KEKELIRUAN ATAU PENGHAPUSAN PADA KONTEN ATAU ATAS
                  KERUGIAN ATAU KERUSAKAN APAPUN YANG TIMBUL SEBAGAI AKIBAT DARI
                  PENGGUNAAN KONTEN YANG DI-POSTING, DI-EMAIL, DIKIRIMKAN, ATAU
                  DISEDIAKAN MELALUI JASA. ANDA HARUS MELAKUKAN PENILAIAN DAN
                  PRAKTIK KEWASPADAAN TERBAIK APABILA SESUAI.
                </p>
                <h3>10. Pembatasan Kewajiban</h3>
                <p>
                  PADA SETIAP HAL, QUBICLE, PARA PEMEGANG SAHAM, SPONSOR,
                  PEMEGANG KEPENTINGAN, MITRA USAHA, DIREKTUR, KARYAWAN, ATAU
                  AGEN QUBICLE, TIDAK BERTANGGUNG JAWAB KEPADA ANDA ATAS SETIAP
                  KERUSAKAN LANGSUNG, TIDAK LANGSUNG, INSIDENTAL, KHUSUS,
                  BERSIFAT HUKUMAN, ATAU YANG BERAKIBAT APAPUN YANG TIMBUL DARI
                  (I) KEKELIRUAN, KESALAHAN ATAU KETIDAKAKURATAN KONTEN, (II)
                  KECELAKAAN PERORANGAN ATAU KERUSAKAN PROPERTI, DENGAN SIFAT
                  APAPUN, YANG TIMBUL DARI AKSES ANDA TERHADAP ATAU PENGGUNAAN
                  ANDA TERHADAP JASA KAMI, (III) AKSES YANG TIDAK SAH KE ATAU
                  PENGGUNAAN SERVER AMAN KAMI DAN/ATAU SETIAP DAN SEMUA
                  INFORMASI PERORANGAN DAN/ATAU INFORMASI FINANSIAL YANG
                  DISIMPAN DI DALAMNYA (IV) SETIAP GANGGUAN ATAU PEMBERHENTIAN
                  SEMENTARA TRANSMISI PADA ATAU DARI JASA KAMI, (IV) SETIAP BUG,
                  VIRUS, TROJAN HORSE, ATAU SEJENISNYA YANG DAPAT DIKIRIMKAN KE
                  ATAU MELALUI JASA KAMI OLEH SETIAP PIHAK KETIGA, DAN/ATAU (V)
                  SETIAP KEKELIRUAN ATAU PENGHAPUSAN PADA KONTEN ATAU ATAS
                  KERUGIAN ATAU KERUSAKAN APAPUN YANG TIMBUL SEBAGAI AKIBAT DARI
                  PENGGUNAAN KONTEN YANG DI-POSTING, DI-EMAIL, DIKIRIMKAN, ATAU
                  DISEDIAKAN MELALUI JASA, BAIK BERDASARKAN JAMINAN, KONTRAK,
                  KARENA TERPAKSA, ATAU TEORI HUKUM LAINNYA, DAN APAKAH
                  PERUSAHAAN DIBERITAHU TENTANG KEMUNGKINAN KERUSAKAN TERSEBUT
                  ATAU TIDAK. PEMBATASAN KEWAJIBAN DI ATAS HARUS BERLAKU SEJAUH
                  DIPERKENANKAN MENURUT HUKUM PADA YURISDIKSI YANG BERLAKU.
                </p>
                <h3>11. Keterpisahan</h3>
                <p>
                  Apabila salah satu atau lebih ketentuan Syarat Penggunaan ini
                  dinyatakan tidak sah, batal atau tidak dapat diberlakukan,
                  ketentuan tersebut harus dianggap terpisah dan tidak akan
                  mempengaruhi validitas dan/atau keberlakukan
                  ketentuan-ketentuan Syarat Penggunaan yang lain, yang tetap
                  memiliki kekuatan hukum penuh dan berlaku.
                </p>
                <h3>12. Keseluruhan Perjanjian</h3>
                <p>
                  Syarat Penggunaan, beserta dengan Kebijakan Privasi merupakan
                  keseluruhan perjanjian antara anda dan Qubicle berkenaan
                  dengan penggunaan anda terhadap Jasa atau Platform.
                </p>
                <h3>13. Pengalihan kepada Pihak Ketiga</h3>
                <p>
                  Syarat Penggunaan ini, dan setiap hak dan lisensi yang
                  diberikan berdasarkan Syarat Penggunaan ini, tidak boleh
                  dialihkan oleh anda tanpa persetujuan Qubicle terlebih dahulu,
                  tetapi dapat dialihkan oleh Qubicle kepada setiap pihak tanpa
                  batasan.
                </p>
                <h3>14. Pengesampingan</h3>
                <p>
                  Pengesampingan terhadap setiap persyaratan Syarat Penggunaan
                  ini tidak boleh dianggap sebagai pengesampingan selanjutnya
                  atau pengesampingan yang berlanjut atas persyaratan tersebut
                  atau persyaratan yang lain, dan keterlambatan atau kegagalan
                  Qubicle untuk menggunakan setiap hak atau ketentuan
                  berdasarkan Syarat Penggunaan bukan merupakan pengesampingan
                  atas hak atau ketentuan tersebut.
                </p>
                <h3>15. Bahasa</h3>
                <p>
                  Syarat Penggunaan ini ditampilkan baik dalam Bahasa Inggris
                  maupun Bahasa Indonesia. Keduanya sah dan merupakan dokumen
                  yang sama.
                </p>
                <h3>16. Hukum yang Mengatur</h3>
                <p>
                  Syarat Penggunaan ini harus diatur dan ditafsirkan sesuai
                  dengan hukum Republik Indonesia.
                </p>
                <h3>17. Penyelesaian Perselisihan</h3>
                <p>
                  Setiap perselisihan yang timbul dari atau berkenaan dengan
                  Syarat Penggunaan ini, termasuk tanpa batasan setiap
                  pertanyaan tentang keberadaan, keberlakuan atau
                  pengakhirannya, yang tidak dapat diselesaikan secara damai,
                  harus diselesaikan melalui arbitrase berdasarkan aturan-aturan
                  administratif dan prosedural arbitrase Badan Arbitrase
                  Nasional Indonesia (“BANI”) yang berlaku saat itu. Arbiter
                  tunggal harus ditunjuk untuk memimpin proses Arbitrase.
                  Apabila para pihak tidak menyepakati arbiter tunggal dalam
                  waktu 21 hari sejak pemberitahuan maksud arbitrase, para pihak
                  setuju bahwa arbiter tunggal tersebut akan ditunjuk oleh BANI.
                </p>
                <h3>18. Pemberitahuan</h3>
                <p>
                  Anda setuju untuk menerima semua komunikasi termasuk
                  pemberitahuan, perjanjian, pengungkapan, atau informasi lain
                  dari Qubicle secara elektronik. Qubicle dapat menyediakan
                  semua komunikasi tersebut melalui email atau dengan
                  mengunggahnya pada Jasa Qubicle. Untuk pertanyaan terkait,
                  anda dapat menghubungi kami. Anda juga dapat menyampaikan
                  pemberitahuan terkait hukum kepada Qubicle ke{' '}
                  <Link to="mailto:info@qubicle.id">info@qubicle.id</Link> atau
                  pada alamat berikut:
                </p>
                <p>
                  PT Multi Kanal Media<br />Mitra Building, Lantai 9<br />Jl.
                  Jend. Gatot Subroto Kav. 21<br />Jakarta Selatan 12930
                </p>
                <p>U.P.: Legal Department</p>
                <p>
                  Tidak terdapat ketentuan apapun pada Kebijakan Privasi ini
                  yang membatasi hak Qubicle untuk mengajukan keberatan atas
                  panggilan sidang, gugatan atau tuntutan lainnya.
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
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(TermsOfUse);
