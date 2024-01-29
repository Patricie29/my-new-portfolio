import Link from 'next/link'
import { FC } from 'react'

interface NavbarProps {

}

const Navbar: FC<NavbarProps> = ({ }) => {

    const nav_items = [
        {
            link: '/',
            label: 'Work',
            id: '#work'
        },
        {
            link: '/about',
            label: 'About',
            id: '#about'
        },
        {
            label: 'Contact',
            email: 'patricie.sm@gmail.com',
        }
    ]


    return (
        <header className='top-0 z-50 mx-auto max-w-7xl md:sticky md:top-4 text-slate-300'>
            <nav>
                <ul className='flex flex-col justify-between rounded-b-lg bg-slate-900 border border-slate-300 px-4 py-2 md:m-4 md:flex-row md:items-center md:rounded-xl'>
                    <li className='hidden md:block'>
                        <Link href='/' aria-label='Home Page'>
                            <span className='text-slate-500'>
                                Patricie
                            </span>
                            <span>
                                Bakosova
                            </span>
                        </Link>
                    </li>

                    <div className='flex gap-6'>
                        {nav_items.map(({ link, label, id, email }, index) => (
                            <li key={index} className='transition-colors duration-150 hover:text-yellow-400'>
                                {email ? (
                                    // If email is provided, use a mailto link
                                    <a href={`mailto:${email}`}>
                                        {label}
                                    </a>
                                ) : (
                                    // For normal links, use the id for page navigation
                                    <a href={id}>
                                        {label}
                                    </a>
                                )}
                            </li>
                        ))}
                    </div>
                </ul>
            </nav>

        </header>
    )
}

export default Navbar