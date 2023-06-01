import React, { useContext } from 'react';
import 'animate.css';
import { DarkModeContext } from '../context/darkMode';
import Navbar from '../views/sectionOne/Navbar';
import AboutContent from '../views/sectionOne/AboutContent';
import SocialMedia from '../views/sectionOne/SocialMedia';
import Logo from '../views/sectionOne/Logo';
import MyOffere from '../views/sectionTwo/MyOffere';
import Skils from '../views/sectionTwo/Skils';
import Portfolio from '../views/sectionThree/Portfolio';
import FooterMain from '../views/sectionThree/FooterMain';

const Main = () => {
    const {darkMode} = useContext(DarkModeContext);
    return (
        <main className={darkMode ? "dark" : ""}>
            <main className={`px-10 md:px-20 lg:px-40 bg-blue-100 dark:bg-slate-700`}>
                <section className='min-h-screen flex justify-center items-center flex-col'>
                    {/* navbar */}
                    <Navbar/>
                    {/* About content */}
                    <AboutContent/>
                    {/* social media */}
                    <SocialMedia/>
                    {/* logo */}
                    <Logo/>
                </section>

                <section>
                    {/* my offere */}
                    <MyOffere/>
                    {/* skils */}
                    <Skils/>
                </section>

                <section>
                    {/* portfolio */}
                    <Portfolio/>
                    {/* Footer */}
                    <FooterMain/>
                </section>

            </main>
        </main>
    )
}

export default Main