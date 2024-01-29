import { FC } from 'react'
import Bounded from './Bounded';
import Link from "next/link";
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';

interface FooterProps {

}

const Footer: FC<FooterProps> = ({ }) => {

    const socials = [
        {
            link: 'https://github.com/Patricie29',
            icon: <SiGithub />
        },
        {
            link: 'https://www.linkedin.com/in/patricie-bakosova-9a7107270/',
            icon: <FaLinkedin />

        }
    ]
    return (
        <Bounded as="footer" className="text-slate-600">
            <div className="container mx-auto mt-20 flex flex-col items-center justify-between gap-6 py-8 sm:flex-row ">
                <div className="name flex flex-col items-center justify-center gap-x-4 gap-y-2 sm:flex-row sm:justify-self-start">
                    <Link
                        href="/"
                        className="text-xl font-extrabold tracking-tighter text-slate-100 transition-colors duration-150 hover:text-yellow-400"
                    >
                        Patricie Bakosova
                    </Link>
                    <span
                        className="hidden text-5xl font-extralight leading-[0] text-slate-400 sm:inline"
                        aria-hidden={true}
                    >
                        /
                    </span>
                    <p className=" text-sm text-slate-300 ">
                        © {new Date().getFullYear()} Patricie Bakosova
                    </p>
                </div>
                <nav className="navigation" aria-label="Footer Navigation">
                    <ul className="flex items-center gap-1">

                        {socials.map(({ link, icon, }, index) => (

                            <li key={index} className='group relative block overflow-hidden rounded px-3 py-1 text-3xl font-bold text-slate-100 transition-colors duration-150 hover:hover:text-yellow-400'>
                                <a href={link} target="_blank" rel='noreferrer'>{icon}</a>

                            </li>

                        ))}
                    </ul>
                </nav>
            </div>
        </Bounded>
    );
}

export default Footer
