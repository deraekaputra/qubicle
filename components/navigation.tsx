import navigationStyles from '../styles/navigation.module.css'
import Link from 'next/link'

export default function Navigation() {
    const state = {
        intmusic: '#F8DB65',
        intfood: '#73E4B2',
        intfashion: '#827AF9',
        intbeauty: '#FB74D2',
        inttravel: '#FA675D',
        intart: '#51EFE8',
        intothers: '#D8D8D8',
    }
    return (
        <div className={navigationStyles.root} role='navigation'>
            <nav className={`${navigationStyles.nav} ${navigationStyles.interests}`}>
                <ul>
                    <li>
                        <Link
                            href='/'
                            className={`${navigationStyles.link} ${navigationStyles.interest}`}
                            style={{
                                color: state.intmusic,
                            }}
                        >
                            MUSIC
                        </Link>
                    </li>
                    <li>
                        <Link
                            href='/'
                            className={`${navigationStyles.link} ${navigationStyles.interest}`}
                            style={{
                                color: state.intfood,
                            }}
                        >
                            FOOD
                        </Link>
                    </li>
                    <li>
                        <Link
                            href='/'
                            className={`${navigationStyles.link} ${navigationStyles.interest}`}
                            style={{
                                color: state.intfashion,
                            }}
                        >
                            FASHION
                        </Link>
                    </li>
                    <li>
                        <Link
                            href='/'
                            className={`${navigationStyles.link} ${navigationStyles.interest}`}
                            style={{
                                color: state.intbeauty,
                            }}
                        >
                            BEAUTY
                        </Link>
                    </li>
                    <li>
                        <Link
                            href='/'
                            className={`${navigationStyles.link} ${navigationStyles.interest}`}
                            style={{
                                color: state.inttravel,
                            }}
                        >
                            TRAVEL
                        </Link>
                    </li>
                    <li>
                        <Link
                            href='/'
                            className={`${navigationStyles.link} ${navigationStyles.interest}`}
                            style={{
                                color: state.intart,
                            }}
                        >
                            ART
                        </Link>
                    </li>
                    <li>
                        <Link
                            href='/'
                            className={`${navigationStyles.link} ${navigationStyles.interest}`}
                            style={{
                                color: state.intothers,
                            }}
                        >
                            OTHERS
                        </Link>
                    </li>
                </ul>
            </nav>
            <nav className={`${navigationStyles.nav} ${navigationStyles.actions}`}>
                <ul>
                    <li>
                        <button
                            type='button'
                            className={`${navigationStyles.link} ${navigationStyles.action}`}
                        >
                           <svg width='15' height='15'>
                                <path
                                    d='M11.298 10.282l3.492 3.488c.28.28.28.727 0 1.007a.607.607 0 0 1-.486.223.72.72 0 0 1-.503-.205l-3.51-3.506a6.31 6.31 0 0 1-3.95 1.382A6.345 6.345 0 0 1 0 6.335C0 2.851 2.854 0 6.341 0s6.341 2.851 6.341 6.335a6.305 6.305 0 0 1-1.384 3.947zm-1.434-.53a4.87 4.87 0 0 0 1.401-3.417c0-2.701-2.22-4.92-4.924-4.92s-4.905 2.219-4.905 4.92a4.91 4.91 0 0 0 8.328 3.516.732.732 0 0 1 .1-.1z'
                                    fill='#FFF'
                                    fillRule='evenodd'
                                />
                            </svg> 
                        </button>
                    </li>
                    <li>
                        <button
                            type='button'
                            className={`${navigationStyles.link} ${navigationStyles.button}`}
                        >
                            Let&rsquo;s Collaborate!
                        </button>
                    </li>
                    <li>
                        <button
                            type='button'
                            className={`${navigationStyles.link} ${navigationStyles.action}`}
                        >
                            <svg width='15' height='15'>
                                <path
                                d='M7.363 8.816c-2.922.157-5.23 2.54-5.23 5.431a.762.762 0 0 1-.767.753.762.762 0 0 1-.766-.753c0-2.858 1.769-5.316 4.288-6.373a4.371 4.371 0 0 1-1.702-3.451C3.186 1.995 5.197 0 7.668 0c2.47 0 4.482 1.976 4.482 4.404a4.403 4.403 0 0 1-1.72 3.478c2.51 1.061 4.27 3.514 4.27 6.365a.719.719 0 0 1-.73.753.762.762 0 0 1-.766-.753c0-2.892-2.309-5.275-5.231-5.43a4.562 4.562 0 0 1-.61 0zm.305-7.31C6.04 1.506 4.7 2.804 4.7 4.423c0 1.618 1.34 2.898 2.97 2.898 1.627 0 2.968-1.298 2.968-2.917 0-1.618-1.34-2.898-2.969-2.898z'
                                fill='#FFF'
                                fillRule='evenodd'
                                />
                            </svg>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}