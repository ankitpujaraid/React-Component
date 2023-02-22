import React from 'react';
import "./navbar.css";

const Navbar = () => {
  return (
    <>
        <nav className='main-nav'>
        <div className='logo'>
            <h2>Ankit Pujara</h2>
        </div>
        <div className='menu-link'>
            <ul>
                <li>
                    <a href='#'>Home</a>
                </li>
                <li>
                    <a href='#'>About</a>
                </li>
                <li>
                    <a href='#'>Contact</a>
                </li>
            </ul>
        </div>
        </nav>
        <section className='main-section'>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer if I know React</li>
            </ol>
        </section>
        <div className='footar'>
            <h3>© 2023 Pujara development. All rights reserved.</h3>
        </div>
    </>
  );
};

export default Navbar;