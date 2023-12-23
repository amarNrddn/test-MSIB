import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { logo2 } from '../../assets'

const Navbar = () => {
    const navigate = useNavigate()

    const [active, setActive] = useState('')
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [isScrolled, setIsScrolled] = useState(true);

    const handleTabClick = (tab) => {
        setActive(tab);
    };

    const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        const isScrollingUp = currentScrollPos < prevScrollPos;

        setIsScrolled((prevIsScrolled) => {
            return isScrollingUp || currentScrollPos < 50; // Sesuaikan nilai ambang batas scroll yang diinginkan
        });

        setPrevScrollPos(currentScrollPos);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <nav className={`w-full bg-[#EF6D34] flex items-center justify-between py-3 px-10 fixed top-0 z-50 transition-all duration-300 ${isScrolled ? 'opacity-100' : 'opacity-70'
            }`}>
            <img src={logo2} alt='logo' className='w-[200px]' />
            <ul className='flex justify-end gap-5 cursor-pointer text-white '>
                <li
                    onClick={() => navigate('/', handleTabClick('work'))}
                    className={`hover:border-b-2 border-white ease-in-out duration-100 ${active === 'work' ? 'border-b-2 border-white' : ''}`}
                >
                    Work
                </li>
                <li
                    onClick={() => navigate('/abaout', handleTabClick('about'))}
                    className={`hover:border-b-2 border-white ease-in-out duration-100 ${active === 'about' ? 'border-b-2 border-white' : ''}`}
                >
                    About
                </li>
                <li
                    onClick={() => navigate('/services', handleTabClick('services'))}
                    className={`hover:border-b-2 border-white ease-in-out duration-100 ${active === 'services' ? 'border-b-2 border-white' : ''}`}
                >
                    Services
                </li>
                <li
                    onClick={() => navigate('/ideas', handleTabClick('ideas'))}
                    className={`hover:border-b-2 border-white ease-in-out duration-100 ${active === 'ideas' ? 'border-b-2 border-white' : ''}`}
                >
                    Ideas
                </li>
                <li
                    onClick={() => navigate('/careers', handleTabClick('career'))}
                    className={`hover:border-b-2 border-white ease-in-out duration-100 ${active === 'career' ? 'border-b-2 border-white' : ''}`}
                >
                    Careers
                </li>
                <li
                    onClick={() => navigate('/contact', handleTabClick('contact'))}
                    className={`hover:border-b-2 border-white ease-in-out duration-100 ${active === 'contact' ? 'border-b-2 border-white' : ''}`}
                >
                    Contact
                </li>
            </ul>
        </nav>
    )
}

export default Navbar