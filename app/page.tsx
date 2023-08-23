import type { Metadata } from 'next'
import pageStyles from '../styles/page.module.css'
import homeStyles from '../styles/home.module.css'
import Header from '@/components/header'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Qubicle Home',
}

export default function Home() {
  const state = {
    intmusic: '#F8DB65',
  }
  return (
    <main className={pageStyles.root}>
      <Header/>
      <div className={homeStyles.headline}>
        <div className={homeStyles.headlineTop}>
          <div className={homeStyles.hero}>
            <div className={homeStyles.heroWrapper}>
              <div
                className={homeStyles.heroImage}
                style={{
                  backgroundImage: `url(https://images.pexels.com/photos/1684187/pexels-photo-1684187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
                }}
              />
              <div className={`${pageStyles.container} ${homeStyles.heroTitle}`}>
                <div className={homeStyles.readTime}>
                  <span>10</span>
                  <small
                    style={{
                      color: state.intmusic,
                    }}
                  >
                    MIN
                  </small>
                </div>
                <div className={`${homeStyles.heroItem} ${homeStyles.interestLabel}`}>
                  <Link
                    href="/"
                    style={{
                      color: state.intmusic,
                    }}
                  >
                    MUSIC
                  </Link>
                </div>
                <h1 className={`${homeStyles.heroItem} ${homeStyles.title}`}>
                  <Link href="/story">
                    <span>
                      Gorillaz<i
                        style={{ borderColor: state.intmusic }}
                      />
                    </span>
                    <span>
                      Lepas<i
                        style={{ borderColor: state.intmusic }}
                      />
                    </span>
                    <span>
                      2<i
                        style={{ borderColor: state.intmusic }}
                      />
                    </span>
                    <span>
                      Lagu<i
                        style={{ borderColor: state.intmusic }}
                      />
                    </span>
                    <span>
                      dari<i
                        style={{ borderColor: state.intmusic }}
                      />
                    </span>
                    <span>
                      Album<i
                        style={{ borderColor: state.intmusic }}
                      />
                    </span>
                    <span>
                      Baru<i
                        style={{ borderColor: state.intmusic }}
                      />
                    </span>
                    <span>
                      &lsquo;The<i
                        style={{ borderColor: state.intmusic }}
                      />
                    </span>
                    <span>
                      Now<i
                        style={{ borderColor: state.intmusic }}
                      />
                    </span>
                    <span>
                      Now&rsquo;<i
                        style={{ borderColor: state.intmusic }}
                      />
                    </span>
                  </Link>
                </h1>
                <span className={`${homeStyles.heroItem} ${homeStyles.author}`}>
                  John Doe
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={homeStyles.headlineBottom}>
          <div className={pageStyles.container}>
            <div className={pageStyles.row}>
              <div className={pageStyles.threeCol}>
              </div>
              <div className={pageStyles.threeCol}>
              </div>
              <div className={pageStyles.threeCol}>
              </div>
              <div className={pageStyles.threeCol}>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
