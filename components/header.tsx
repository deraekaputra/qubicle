import Link from 'next/link'
import Image from 'next/image'
import headerStyles from '../styles/header.module.css'
import Navigation from '@/components/navigation'
import Logo from '../public/logo.svg'

export default function Header() {
    return (
        <header
            className={`${headerStyles.root} ${headerStyles.navTop}`}
        >
            <div className={headerStyles.container}>
                <Link className={headerStyles.brand} href='/'>
                    <Image src={Logo} alt='Qubicle Logo'/>
                </Link>
                <Navigation/>
            </div>
        </header>
    )
}
