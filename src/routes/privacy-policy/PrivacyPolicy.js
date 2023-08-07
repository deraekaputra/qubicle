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
import s from './PrivacyPolicy.css';
import Link from '../../components/Link';

class PrivacyPolicy extends React.Component {
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
                    {this.state.isEng ? `Privacy Policy` : `Kebijakan Privasi`}
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
                  software or applications (“<b>Platform</b>”).
                </p>
                <p>
                  We want you to know that when you are using the Service
                  provided by Qubicle, we may collect different kinds of
                  information and data form or about you. Qubicle would like to
                  help you understand what kind of information we collect, how
                  we use it and what choices you have and we set out herein the
                  Privacy Policy on the use of this website (“<b>
                    Privacy Policy
                  </b>”)
                </p>
                <p>
                  The Privacy Policy, together with our Term of Use and any
                  other terms specifically referred to in any of those
                  documents, constitute a legally binding agreement (the “<b>
                    Agreement
                  </b>”) between you and Qubicle in relation to your use of the
                  Service or Platform.
                </p>
                <h2>The Information You Provide</h2>
                <p>
                  When you sign up for the purpose of using our Service you will
                  voluntarily give us certain information. You also give out
                  information when you create, share, message, post or
                  communicate with other users, and when you are doing other
                  activities with our Service. This information includes the
                  contents you provide, names, email address, photos, dates,
                  videos, audio including any other information. Users using
                  mobile devices to use our Service may also provide other
                  information such as location data, contact information, and
                  other information deriving from the programs of mobile
                  devices. We also collect information about how you use our
                  Service, such as types of Content you view or engage with or
                  the frequency and duration of your activities.
                </p>
                <p>
                  You also may give us permission to access your information in
                  other services. For example, you may link your other accounts
                  such as Facebook, Twitter, Instagram, LinkedIn, Pinterest to
                  Qubicle, which allows us to obtain information from those
                  accounts (like your friends or contacts). The information we
                  get from those services often depends on your settings or
                  their privacy policies, so be sure to check what those are.
                </p>
                <h2>How We Use The Information We Collect</h2>
                <p>
                  We use the information we collect from all of our Service to
                  provide, maintain, protect and improve them, to develop new
                  ones, and to protect Qubicle and our users.
                </p>
                <p>
                  We also use the information we collect to offer customized
                  Content, such as suggesting Cubes of other users that might
                  interest you (For example, if you have indicated that you are
                  interested in leisure travel and have visited travel websites,
                  we may suggest Travel related Cubes) and also advertisement or
                  other form of products that we find relatable to you (For
                  example, if you follow a cube related to guitar, we may show
                  you ads for musical instruments).
                </p>
                <p>
                  We use your information to send you marketing offers that are
                  related to your interests, communicate with you about our
                  Service, offer you with any information that may be of
                  interest to you and let you know about our policies and terms.
                  We also use your information to respond to you when you
                  contact us. Lastly we can also link you with any of your
                  friends who have an account as well as Cube on Qubicle. For
                  example, if you sign up linking a Facebook account, we can
                  help your Facebook friends find your Qubicle account when they
                  first sign up for Qubicle.
                </p>
                <p>
                  We use the information we have to help verify accounts and
                  activity, and to promote safety and security on and off of our
                  Service, such as by investigating suspicious activity or
                  violations of our terms or policies as well as any prevailing
                  laws and regulations. We work hard to protect your account
                  using teams of engineers, automated systems, and advanced
                  technology such as encryption and machine learning. We also
                  offer easy-to-use security tools that add an extra layer of
                  security to your account.
                </p>
                <p>
                  We may also provide personal information to any of our
                  affiliates or other trusted business or persons to conduct the
                  processing for us, based on our instructions and in compliance
                  with our Privacy Policy as well as any other appropriate
                  confidentiality and security measures.
                </p>
                <h2>Technical Information</h2>
                <p>
                  When using our Service, there is information that will be
                  created and recorded automatically. Qubicle will also collect
                  such data which consist of:
                </p>
                <blockquote>
                  <u>Log data.</u>
                  <br />When you use Qubicle, our servers automatically record
                  information (“log data”), including information that your
                  browser sends whenever you visit a website or your mobile app
                  sends when you are using it. This log data may include your
                  Internet Protocol address, the address of the web pages you
                  visited that had Qubicle features, browser type and settings,
                  the date and time of your request, how you used Qubicle, and
                  cookie data.
                </blockquote>
                <blockquote>
                  <u>Cookie Data.</u>
                  <br />Depending on how you access our Service, we may use
                  “cookies” (a small text file sent by your computer each time
                  you visit our website, unique to your Qubicle account or your
                  browser) or similar technologies to record log data. When we
                  use cookies, we may use “session” cookies (that last until you
                  close your browser) or “persistent” cookies (that last until
                  you or your browser delete them). For example, we may use
                  cookies to store your language preferences or other Qubicle
                  settings so you do not have to set them up every time you
                  visit Qubicle. Some of the cookies we use are associated with
                  your Qubicle account (including personal information about
                  you, such as the email address you gave us), and other cookies
                  are not.
                </blockquote>
                <blockquote>
                  <u>Device Information.</u>
                  <br />In addition to log data, we may also collect information
                  about the device you are using Qubicle on, including what type
                  of device it is, what operating system you are using, device
                  settings, unique device identifiers, and crash data. Whether
                  we collect some or all of this information often depends on
                  what type of device you are using and its settings. For
                  example, different types of information are available
                  depending on whether you are using a Mac or a PC, or an iPhone
                  or an Android phone. To learn more about what information your
                  device makes available to us, please also check the policies
                  of your device manufacturer or software provider.
                </blockquote>
                <h2>Information We Share</h2>
                <p>
                  We do not share personal information with companies,
                  organizations or individuals outside of Qubicle unless due to
                  one of the following circumstances:
                </p>
                <blockquote>
                  <u>With your consent.</u>
                  <br />We may share your personal information with companies,
                  organizations or individuals outside of Qubicle when we have
                  your consent to do so. We require your opt-in consent for the
                  sharing or distribution of any sensitive personal information.
                </blockquote>
                <blockquote>
                  <u>For Legal Reason.</u>
                  <br />We will share personal information with companies,
                  organizations or individuals outside of Qubicle if we have a
                  good-faith belief that access, use, preservation or disclosure
                  of the information is reasonably necessary to:<br />
                  <ul>
                    <li>
                      <p>
                        comply with any applicable law, regulation, legal
                        process or enforceable governmental request and court
                        order.
                      </p>
                    </li>
                    <li>
                      <p>
                        enforce applicable Terms of Use, including investigation
                        of potential violations or the occurrence of any
                        violations following a report that we have received.
                      </p>
                    </li>
                    <li>
                      <p>
                        detect, prevent, or otherwise address fraud, security
                        breach or technical issues.
                      </p>
                    </li>
                    <li>
                      <p>
                        protect against harm to the rights, property or safety
                        of Qubicle, our users or the public as required or
                        permitted by the prevailing laws and regulations.
                      </p>
                    </li>
                  </ul>
                  We may be engaged in a merger, consolidation, acquisitions,
                  bankruptcy, suspension of payment of debt, dissolution,
                  restructuring or similar transaction or proceeding that
                  involves the disclosure of information described in this
                  privacy policy.
                </blockquote>
                <p>
                  We work with third party companies who help us provide and
                  improve our Service or who use advertising or related products
                  which makes it possible to operate our companies and provide
                  free services to people around the world.
                </p>
                <p>
                  The types of third parties we can share information with about
                  you with your consent are Advertising, Measurement and
                  Analytic Services and Vendors, service providers and other
                  partners. Any third parties to whom we may disclose personal
                  information may have their privacy policies which describe how
                  they use and disclose personal information. Those policies
                  will govern use, handling and disclosure of your personal
                  information once we have shared it with those third parties as
                  described in this Privacy Policy. If you want to learn more
                  about their privacy practices, we encourage that you visit
                  their websites.
                </p>
                <h2>What Choices Do You Have About Your Information?</h2>
                <p>
                  With the goal of providing control over your information, if
                  you have a Qubicle account you may access and change
                  information in your profile at any time, and change the
                  privacy settings of your account. Link your Qubicle account
                  with other services. You can also close your account at any
                  time. When you close your account, we will deactivate it and
                  remove any information related to your account. We may retain
                  archived copies of your information as required by prevailing
                  law and regulations or for legitimate business purposes
                  (including to help address fraud and spam issues).
                </p>
                <h2>Our Policy on Children’s Information</h2>
                <p>
                  Qubicle is not intended for children under 18 without proper
                  supervision by parents and/or legal guardian. If you learn
                  that your minor child has provided us with personal
                  information without your consent, please contact us.
                </p>
                <h2>Changes to This Privacy Policy</h2>
                <p>
                  We may change this policy from time to time (either by our own
                  intention or as required by law), and if we do we will post
                  any changes on this page. If you continue to use Qubicle after
                  those changes are in effect, you agree to the revised policy.
                  If the changes are significant, we may but are not obligated
                  to provide you with more prominent notice or require your
                  consent by active response.
                </p>
                <h2>Severability</h2>
                <p>
                  If there is one or more provisions of this Privacy Policy are
                  found unlawful, void or unenforceable, such provision(s) shall
                  be deemed severable and will not affect the validity and/or
                  enforceability of the remaining provisions of the Privacy
                  Policy, which will remain in full force and effect.
                </p>
                <h2>Entire Agreement</h2>
                <p>
                  This Privacy Policy, together with the Terms of Use,
                  constitute the entire agreement between you and Qubicle with
                  respect to your use of the Service or Platform.
                </p>
                <h2>Assignment to Third Parties</h2>
                <p>
                  This Privacy Policy, and any rights and licenses granted
                  hereunder, may not be transferred or assigned by you without
                  any prior consent from Qubicle, but may be assigned by Qubicle
                  to any party without restriction.
                </p>
                <h2>Waiver</h2>
                <p>
                  No waiver of any term of this Privacy Policy shall be deemed a
                  further or continuing waiver of such term or any other term,
                  and Qubicle&rsquo;s delay or failure to assert any right or
                  provision under these Terms of Use shall not constitute a
                  waiver of such right or provision.
                </p>
                <h2>Language</h2>
                <p>
                  This Privacy Policy is displayed in both English and
                  Indonesian language. Both are valid and are the same document.
                </p>
                <h2>Governing Law</h2>
                <p>
                  This privacy policy shall be governed and construed under the
                  Laws of the Republic of Indonesia.
                </p>
                <h2>Dispute Settlement</h2>
                <p>
                  Any dispute arising out of or relating to this Privacy Policy,
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
                <h2>Notices</h2>
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
                <p>
                  Attention: <b>Legal Department</b>
                </p>
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
                  aplikasi terkait (“<b>Platform</b>”).
                </p>
                <p>
                  Kami ingin anda tahu bahwa ketika anda menggunakan Jasa yang
                  disediakan oleh Qubicle, kami dapat mengumpulkan berbagai
                  jenis informasi dan data dari atau tentang anda. Qubicle
                  bermaksud untuk membantu anda memahami jenis informasi yang
                  kami kumpulkan, bagaimana kami menggunakannya dan pilihan apa
                  yang anda miliki dan kami mengatur Kebijakan Privasi
                  penggunaan laman situs ini (“<b>Kebijakan Privasi</b>”).
                </p>
                <p>
                  Kebijakan Privasi, beserta Syarat Penggunaan kami dan setiap
                  istilah lain yang secara khusus disebutkan pada salah satu
                  dokumen tersebut, merupakan perjanjian yang mengikat secara
                  sah (“<b>Perjanjian</b>”) antara anda dan Qubicle berkenaan
                  dengan penggunaan Jasa atau Platform oleh anda.
                </p>
                <h2>Informasi yang anda berikan</h2>
                <p>
                  Ketika anda mendaftar dengan tujuan untuk menggunakan Jasa
                  kami, anda akan secara sukarela memberikan kepada kami
                  beberapa informasi tertentu. Anda juga memberikan informasi
                  ketika anda mengirim pesan, mengunggah, atau berkomunikasi
                  dengan para pengguna yang lain, dan ketika anda melakukan
                  aktivitas lain dengan Jasa kami. Informasi ini meliputi nama,
                  alamat email, foto, tanggal, video, audio termasuk setiap
                  informasi yang lain. Para pengguna yang menggunakan telepon
                  seluler untuk menggunakan Jasa juga dapat menyediakan
                  informasi yang lain seperti data lokasi, informasi kontak, dan
                  informasi lain yang didapatkan dari program-program telepon
                  seluler. Kami juga mengumpulkan informasi tentang bagaimana
                  anda menggunakan Jasa kami, seperti jenis Konten yang anda
                  lihat atau yang anda buka atau frekuensi dan durasi aktivitas
                  anda.
                </p>
                <p>
                  Anda juga dapat memberikan ijin kepada kami untuk mengakses
                  informasi anda pada jasa-jasa yang lain. Sebagai contoh, anda
                  dapat membuat link dari akun-akun anda yang lain seperti
                  Facebook, Twitter, Instagram, LinkedIn, Pinterest ke Qubicle,
                  yang memungkinkan kami untuk mendapatkan informasi dari
                  akun-akun tersebut (seperti teman atau kontak anda). Informasi
                  yang kami dapatkan dari jasa-jasa tersebut sering bergantung
                  pada pengaturan anda atau kebijakan privasi jasa-jasa
                  tersebut, jadi pastikan untuk memeriksa kebijakan privasi
                  jasa-jasa tersebut.
                </p>
                <h2>Bagaimana Kami Menggunakan Informasi yang Kami Dapatkan</h2>
                <p>
                  Kami menggunakan informasi yang kami dapatkan dari semua Jasa
                  untuk menyediakan, menjaga, melindungi dan meningkatkan Jasa,
                  untuk mengembangkan Jasa yang baru, dan untuk melindungi
                  Qubicle dan para pengguna kami.
                </p>
                <p>
                  Kami juga menggunakan informasi yang kami dapatkan untuk
                  menawarkan Konten yang diatur, seperti merekomendasikan Cube
                  pengguna lain yang mungkin menarik bagi anda (sebagai contoh,
                  apabila anda telah menunjukkan bahwa anda tertarik dengan
                  perjalanan untuk berwisata dan anda mengunjungi laman situs
                  perjalanan, kami dapat menyarankan Cube terkait Perjalanan)
                  dan juga iklan atau bentuk produk yang lain yang kami rasa
                  berkaitan dengan anda (sebagai contoh, apabila anda mengikuti
                  cube yang berkaitan dengan gitar, kami dapat menunjukkan bagi
                  anda iklan-iklan alat musik).
                </p>
                <p>
                  Kami menggunakan informasi anda untuk mengirimkan kepada anda
                  penawaran pemasaran yang berkaitan dengan hobi anda, untuk
                  mengkomunikasikan kepada anda tentang Jasa kami, menawarkan
                  kepada anda setiap informasi yang mungkin anda tertarik dan
                  memberitahukan kepada anda kebijakan dan persyaratan kami.
                  Kami juga menggunakan informasi anda untuk merespon anda
                  ketika anda menghubungi kami. Yang terakhir, kami juga
                  menghubungkan anda dengan teman-teman anda yang memiliki akun
                  serta Cube pada Qubicle. Misalnya, apabila anda mendaftar
                  dengan menghubungkan akun Facebook, kami dapat membantu teman
                  Facebook anda untuk menemukan akun Qubicle anda ketika mereka
                  pertama kami mendaftar pada Qubicle.
                </p>
                <p>
                  Kami menggunakan informasi yang kami miliki untuk
                  memverifikasi akun dan aktivitas, dan untuk menjaga
                  keselamatan dan keamanan pada dan pada saat berhentinya Jasa
                  kami, seperti dengan menyelidiki aktivitas yang mencurigakan
                  atau pelanggaran terhadap persyaratan atau kebijakan kami
                  serta setiap Undang-Undang dan peraturan yang berlaku. Kami
                  berupaya keras untuk melindungi akun anda dengan memiliki tim
                  ahli, sistem otomatis dan teknologi canggih seperti enkripsi
                  dan pembelajaran mesin. Kami juga menawarkan alat keamanan
                  yang mudah-digunakan yang memberikan keamanan berlapis pada
                  akun anda.
                </p>
                <p>
                  Kami juga dapat menggunakan informasi perorangan bagi salah
                  satu afiliasi kami atau usaha atau orang-orang terpercaya yang
                  lain untuk melakukan pemrosesan bagi kami, berdasarkan
                  instruksi kami dan sesuai dengan Kebijakan Privasi kami serta
                  upaya-upaya kerahasiaan dan keamanan yang lain yang sesuai.
                </p>
                <h2>Informasi Teknis</h2>
                <p>
                  Ketika menggunakan Jasa kami, terdapat informasi yang akan
                  dibuat dan dicatat secara otomatis. Qubicle juga akan
                  mengumpulkan data-data yang terdiri dari:
                </p>
                <blockquote>
                  <u>
                    Data <i>log</i>.
                  </u>
                  <br />Ketika anda menggunakan Qubicle, server kami akan secara
                  otomatis mencatat informasi (“data <i>log</i>”), termasuk
                  informasi yang dikirim oleh browser anda kapanpun anda
                  mengunjungi suatu laman situs atau yang dikirimkan oleh
                  aplikasi telepon seluler anda kapanpun ketika anda
                  menggunakannya. Data <i>log</i> ini dapat mencakup alamat
                  Protokol Internet anda, alamat laman-laman situs yang anda
                  kunjungi yang memiliki fitur Qubicle, jenis dan pengaturan
                  browser, tanggal dan waktu permintaan anda, bagaimana anda
                  menggunakan Qubicle, dan data <i>cookie</i>.
                </blockquote>
                <blockquote>
                  <u>
                    Data <i>cookie</i>.
                  </u>
                  <br />Bergantung pada bagaimana anda mengakses Jasa kami, kami
                  dapat menggunakan “<i>cookie</i>” (file teks kecil yang
                  dikirimkan oleh komputer anda setiap kali anda mengujungi
                  laman situs kami, yang khas bagi akun Qubicle atau browser
                  anda) atau teknologi serupa untuk mencatat data <i>log</i>.
                  Ketika kami menggunakan cookie, kami dapat menggunakan{' '}
                  <i>cookie</i> “sesi” (yang berakhir sampai anda menutup
                  browser anda) atau cookie “persisten” (yang berakhir sampai
                  anda atau browser anda menghapusnya). Sebagai contoh, kami
                  dapat menggunakan cookie untuk menyimpan preferensi bahasa
                  anda atau pengaturan Qubicle anda yang lain sehingga anda
                  tidak perlu mengaturnya setiap kali anda mengunjungi Qubicle.
                  Beberapa <i>cookie</i> yang kami gunakan berkaitan dengan akun
                  Qubicle anda (termasuk informasi pribadi tentang anda, seperti
                  alamat email yang anda berikan), dan <i>cookie</i> yang lain
                  tidak.
                </blockquote>
                <blockquote>
                  <u>Informasi alat.</u>
                  <br />Selain data <i>log</i>, kami juga dapat mengumpulkan
                  informasi tentang alat yang anda gunakan ketika anda
                  menggunakan Qubicle, termasuk jenis alat, sistem operasi apa
                  yang anda gunakan, pengaturan alat, pengidentifikasi alat yang
                  khas, dan data <i>crash</i>. Baik kami mengumpulkan beberapa
                  atau semua informasi tersebut, akan bergantung pada jenis alat
                  apa yang anda gunakan dan pengaturannya. Sebagai contoh, jenis
                  informasi yang berbeda tersedia bergantung pada apakah anda
                  menggunakan Mac atau PC, atau iPhone atau android. Untuk
                  mengetahui lebih banyak informasi apa yang disediakan oleh
                  alat anda bagi kami, silahkan periksa kebijakan produsen alat
                  atau provider perangkat lunak anda.
                </blockquote>
                <h2>Informasi yang Kami Bagikan</h2>
                <p>
                  Kami tidak membagikan informasi perorangan kepada perusahaan,
                  organisasi atau individu di luar Qubicle kecuali dalam salah
                  satu dari kondisi-kondisi berikut:
                </p>
                <blockquote>
                  <u>Dengan persetujuan anda.</u>
                  <br />
                  Kami dapat membagikan informasi pribadi anda kepada
                  perusahaan, organisasi atau individu di luar Qubicle ketika
                  kami mendapatkan ijin dari anda untuk melakukan hal tersebut.
                  Kami meminta persetujuan anda untuk membagikan atau
                  menyebarkan setiap informasi pribadi yang sensitif.
                </blockquote>
                <blockquote>
                  <u>Karena alasan hukum.</u>
                  <br />Kami akan membagikan informasi pribadi anda kepada
                  perusahaan, organisasi atau individu di luar Qubicle apabila
                  kami memiliki keyakinan dengan itikad baik bahwa akses,
                  penggunaan, penjagaan atau pengungkapan informasi tersebut
                  secara wajar diperlukan untuk:
                  <ul>
                    <li>
                      <p>
                        Mematuhi Undang-Undang, peraturan, proses hukum yang
                        berlaku atau permintaan pemerintah dan perintah
                        pengadilan yang dapat diberlakukan.
                      </p>
                    </li>
                    <li>
                      <p>
                        Memberlakukan Syarat Penggunaan yang berlaku, termasuk
                        penyelidikan kemungkinan pelanggaran atau terjadinya
                        salah satu pelanggaran setelah laporan yang kami terima.
                      </p>
                    </li>
                    <li>
                      <p>
                        Mendeteksi, mencegah atau menyasar penipuan, pelanggaran
                        keselamatan atau permasalahan teknis.
                      </p>
                    </li>
                    <li>
                      <p>
                        Perlindungan dari bahaya, hak, properti atau kesalamatan
                        Qubicle, para pengguna kami atau publik sebagaimana yang
                        disyaratkan atau diperkenankan oleh Undang-Undang dan
                        peraturan yang berlaku.
                      </p>
                    </li>
                  </ul>
                  Kami dapat terlibat dalam perkara penggabungan, konsolidasi,
                  akuisisi, perkara kebangkrutan, pemberhentian sementara
                  pembayaran, pembubaran, restrukturisasi atau transaksi atau
                  perkara serupa yang melibatkan pengungkapan informasi yang
                  dijelaskan pada kebijakan privasi ini.
                </blockquote>
                <p>
                  Kami bekerja sama dengan perusahaan pihak ketiga yang membantu
                  kami menyediakan dan meningkatkan Jasa kami atau yang
                  menggunakan iklan atau produk terkait yang membuatnya dapat
                  mengoperasikan perusahaan kami dan menyediakan jasa gratis
                  bagi orang-orang di seluruh dunia.
                </p>
                <p>
                  Jenis pihak ketiga yang kami dapat membagikan informasi
                  tentang anda dengan persetujuan anda adalah Jasa Iklan,
                  Pengukuran dan Jasa Analisis dan Para Vendor, penyedia jasa
                  dan mitra yang lain. Pihak ketiga yang kepadanya kami dapat
                  mengungkapkan informasi pribadi anda mungkin memiliki
                  kebijakan privasi tersendiri yang menjelaskan bagaimana mereka
                  menggunakan dan mengungkapkan informasi pribadi. Kebijakan ini
                  akan mengatur penggunaan, pengurusan dan pengungkapan
                  informasi pribadi anda ketika kami membagikannya dengan pihak
                  tersebut sebagaimana yang dijelaskan pada Kebijakan Privasi
                  ini. Apabila anda ingin mengetahui lebih banyak tentang
                  praktik kebijakan mereka, kami menyarankan anda untuk
                  mengunjungi laman situs yang terkait.
                </p>
                <h2>
                  Pilihan Apa yang Anda Miliki Tentang Informasi Pribadi Anda?
                </h2>
                <p>
                  Dengan tujuan untuk mengendalikan informasi anda, apabila anda
                  memiliki akun Qubicle, anda dapat mengakses dan mengubah
                  informasi pada profil anda pada setiap waktu, dan mengubah
                  pengaturan privasi akun anda. Anda dapat menghubungkan akun
                  Qubicle anda dengan jasa-jasa yang lain. Anda juga dapat
                  menutup akun anda pada setiap waktu. Ketika anda menutup akun
                  anda, kami akan menonaktifkan akun tersebut dan menghapus
                  setiap informasi yang berkaitan dengan akun anda. Kami dapat
                  menyimpan salinan arsip informasi anda sebagaimana yang
                  disyaratkan oleh Undang-Undang dan peraturan yang berlaku dan
                  untuk tujuan usaha yang sah (termasuk untuk membantu mengatasi
                  permasalahan penipuan dan spam).
                </p>
                <h2>Kebijakan Kami Tentang Informasi Anak-Anak</h2>
                <p>
                  Qubicle tidak ditujukan bagi anak-anak di bawah usia 18 tahun
                  tanpa pengawasan orang tua, pengampu dan/atau wali. Apabila
                  anda mengetahui bahwa anak-anak anda yang di bawah umur
                  menyediakan bagi kami informasi pribadi tanpa ijin anda,
                  silakan hubungi kami.
                </p>
                <h2>Perubahan kebijakan ini</h2>
                <p>
                  Kami dapat mengubah kebijakan ini dari waktu ke waktu (baik
                  dengan maksud kami sendiri atau sebagaimana yang disyaratkan
                  oleh Undang-Undang), dan apabila kami mengubahnya, kami akan
                  mengunggah setiap perubahan pada laman ini. Apabila anda tetap
                  menggunakan Qubicle setelah perubahan tersebut berlaku, secara
                  otomatis anda setuju terhadap kebijakan yang telah direvisi
                  tersebut. Apabila perubahan tersebut signifikan, kami dapat
                  tetapi tidak berkewajiban untuk menyampaikan pemberitahuan
                  sebelumnya kepada anda atau meminta persetujuan anda melalui
                  respon aktif.
                </p>
                <h2>Keterpisahan</h2>
                <p>
                  Apabila salah satu atau lebih ketentuan Kebijakan Privasi ini
                  dinyatakan tidak sah, batal atau tidak dapat diberlakukan,
                  ketentuan tersebut harus dianggap terpisah dan tidak akan
                  mempengaruhi validitas dan/atau keberlakukan
                  ketentuan-ketentuan Kebijakan Privasi yang lain, yang tetap
                  memiliki kekuatan hukum penuh dan berlaku.
                </p>
                <h2>Keseluruhan Perjanjian</h2>
                <p>
                  Kebijakan Privasi ini, beserta dengan Syarat Penggunaan,
                  merupakan keseluruhan perjanjian antara anda dan Qubicle
                  berkenaan dengan penggunaan anda terhadap Jasa atau Platform.
                </p>
                <h2>Pengalihan kepada Pihak Ketiga</h2>
                <p>
                  Kebijakan Privasi ini, dan setiap hak dan lisensi yang
                  diberikan berdasarkan Kebijakan Privasi ini, tidak boleh
                  dialihkan oleh anda tanpa persetujuan Qubicle terlebih dahulu,
                  tetapi dapat dialihkan oleh Qubicle kepada setiap pihak tanpa
                  batasan.
                </p>
                <h2>Pengesampingan</h2>
                <p>
                  Pengesampingan terhadap setiap persyaratan Kebijakan Privasi
                  ini tidak boleh dianggap sebagai pengesampingan selanjutnya
                  atau pengesampingan yang berlanjut atas persyaratan tersebut
                  atau persyaratan yang lain, dan keterlambatan atau kegagalan
                  Qubicle untuk menggunakan setiap hak atau ketentuan
                  berdasarkan Syarat Penggunaan bukan merupakan pengesampingan
                  atas hak atau ketentuan tersebut.
                </p>
                <h2>Bahasa</h2>
                <p>
                  Kebijakan Privasi ini ditampilkan baik dalam Bahasa Inggris
                  maupun Bahasa Indonesia. Keduanya sah dan merupakan dokumen
                  yang sama.
                </p>
                <h2>Hukum yang Mengatur</h2>
                <p>
                  Kebijakan Privasi ini harus diatur dan ditafsirkan sesuai
                  dengan Undang-Undang Republik Indonesia.
                </p>
                <h2>Penyelesaian Perselisihan</h2>
                <p>
                  Setiap perselisihan yang timbul dari atau berkenaan dengan
                  Kebijakan Privasi ini, termasuk tanpa batasan setiap
                  pertanyaan tentang keberadaan, validitas atau pengakhirannya,
                  yang tidak dapat diselesaikan secara damai, harus diselesaikan
                  melalui arbitrase berdasarkan aturan-aturan administratif dan
                  prosedural arbitrase Badan Arbitrase Nasional Indonesia
                  (“BANI”) yang berlaku saat itu. Arbitrator tunggal harus
                  ditunjuk untuk memimpin perkara Arbitrase. Apabila para pihak
                  tidak menyepakati arbitrator tunggal dalam waktu 21 hari sejak
                  pemberitahuan maksud arbitrase, para pihak setuju bahwa
                  arbitrator tunggal tersebut akan ditunjuk oleh BANI.
                </p>
                <h2>Pemberitahuan</h2>
                <p>
                  Anda setuju untuk menerima semua komunikasi termasuk
                  pemberitahuan, perjanjian, pengungkapan, atau informasi lain
                  dari Qubicle secara elektrobik. Qubicle dapat menyediakan
                  semua komunikasi tersebut melalui email atau dengan
                  mengunggahnya pada Jasa Qubicle. Untuk pertanyaan terkait,
                  anda dapat menghubungi kami. Anda juga dapat menyampaikan
                  pemberitahuan terkait hukum kepada Qubicle ke info@qubicle.id
                  atau alamat berikut:
                </p>
                <p>
                  PT Multi Kanal Media<br />Graha Mitra, Lantai 9<br />Jl. Jend.
                  Gatot Subroto Kav. 21<br />Jakarta Selatan 12930
                </p>
                <p>U.P.: Legal Department</p>
                <p>
                  Tidak terdapat ketentuan apapun pada Kebijakan Privasi ini
                  yang membatasi hak Qubicle untuk mengajukan keberatan atas
                  penggilan sidang, klaim atau gugatan lainnya.
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

export default withStyles(s)(PrivacyPolicy);
