import React from 'react';
import './css/App.css';
import image1 from './css/image1.png';
import image2 from './css/image3.png';
import { TypeAnimation } from 'react-type-animation';
import { useState, useEffect } from 'react';


function App() {

    const [daysPassed, setDaysPassed] = useState(0);
    const startDate = "2004-03-18";
    useEffect(() => {
        const calculateDaysPassed = () => {
            const currentDate = new Date();
            const targetDate = new Date(startDate);
            const timeDifference = currentDate - targetDate;
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            setDaysPassed(days);
        };
        calculateDaysPassed();
    }, [startDate]);

    return (
        <>
            {/* Nav bar code */}
            <nav className="navbar navbar-expand-lg navbar-light" id='navBar'>
                <a className="" id='title' href="#">Girish Mogaveera</a>
                <button id='navBtn' className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto" id='navui'>
                        <li className="nav-item active">
                            <a className="nav-link" id='navItem' href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id='navItem' href="#text3">TechStack</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id='navItem' href="#connect">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id='navItem' href="#text1">About</a>
                        </li>
                    </ul>
                </div>
            </nav>


            {/* introduction */}
            <div className="container1">
                <div className="item1">
                    <p id='heading1'>hola, chicos..</p>
                    <p id='heading2'>I'm Girish</p>
                    <p id='heading3'><TypeAnimation
                        sequence={[
                            "I do Web Dev",
                            1000,
                            "I do 3D Art",
                            1000,
                            "I don't Sleep",
                            1000,
                        ]}
                        speed={1}
                        repeat={Infinity}
                        id={'heading3'}
                        style={{ fontSize: '2em' }}
                    />
                    </p>
                    <p id='heading4'>I'm a <b>{daysPassed}</b>   days old  code wrangler, tech tinkerer, and certified caffeine enthusiast. I spend my days turning <b>coffee into code</b> <br />and solving problems with a dash of creativity and a sprinkle of sheer stubbornness.</p>
                </div>
                <div className="item2">
                    <img id='image1' src={image1} />
                </div>
            </div>


            {/* about me  */}
            <div className='container2'>
                <div className='item3'>
                    <img id='image2' src={image2} />
                </div>
                <div className="item4">
                    <p id='text1'>About me</p>
                    <p id='text2'>I'm a programmer who turns caffeine into code and ideas into reality. Whether it's crafting sleek designs, solving complex problems, or mastering both frontend and backend, I've got web development covered.<br /><br />
                        When I'm not coding, I'm diving into Blender, bringing 3D models and animations to life. I also pride myself on juggling deadlines with precision and creativity.<br /><br />
                        In a nutshell: I'm a tech-savvy, multitasking creative with a love for all things digital. Now, if you'll excuse me, I have a 3D masterpiece to render and a few designs to perfect!<br /><br />
                    </p>
                </div>
            </div>




            {/* tech stack */}
            <div className="container3">
                <div className="item5">
                    <p id='text3'>
                        Tech Stack
                    </p>
                    <p id='text4'>
                        web-dev
                    </p>
                    <div className="iconbox">
                        <img className='devicon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                        <img className='devicon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
                        <img className='devicon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                        <img className='devicon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg" />
                        <i id='devicon' class="devicon-express-original"></i>
                        <img className='devicon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                        <img className='devicon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />
                        <i id='devicon' class="devicon-flask-original-wordmark"></i>
                    </div>

                    <p id='text4'>
                        languages
                    </p>
                    <div className="iconbox">
                        <img className='devicon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
                        <img className='devicon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" />
                        <img className='devicon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" />
                        <img className='devicon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" />
                    </div>


                    <p id='text4'>
                        tools
                    </p>
                    <div className="iconbox">
                        <i id='devicon' class="devicon-github-original-wordmark"></i>
                        <img className='devicon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" />
                        <img className='devicon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ubuntu/ubuntu-original.svg" />
                        <img className='devicon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg" />
                        <img className='devicon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />
                        <img className='devicon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" />
                    </div>
                </div>
            </div>



            {/* contact page */}
            <div className="container4">
                <div className="item6">
                    <p id='connect'>Let's join forces!</p>
                    <p id='text5'>I'm on the hunt for new adventures, so if you’ve got an opportunity or just want to say "hey," my inbox is wide open—like, pizza box open. Whether it’s business or banter, drop me a line, and I’ll do my best to reply faster than a cat video goes viral!</p>
                    <div className="iconbox">
                        <i id='devicon1' class="devicon-linkedin-plain colored"></i>
                        <i id='devicon1' class="devicon-twitter-original"></i>
                        <i id='devicon1' class="devicon-github-original-wordmark"></i> </div>

                </div>
                <div className="item7">
                    <table id='mailto'>
                        <thead>
                            <tr>
                                <td>
                                    <p id='label1'>your email</p>
                                    <input id='inp1' type='text' placeholder='123@gmail.com' />
                                </td>
                            </tr>
                        </thead>
                        <thead>
                            <tr>
                                <td>
                                    <p id='label1'>Subject</p>
                                    <input id='inp1' type='text' placeholder='Your Subject..' />
                                </td>
                            </tr>
                        </thead>
                        <thead>
                            <tr>
                                <td>
                                    <p id='label1'>Message</p>
                                    <input id='inp1' type='text' placeholder='Message goes here...' />
                                </td>
                            </tr>
                        </thead>
                        <thead>
                            <tr>
                                <td>
                                    <input id='sendmail' type='submit' value="submit" />
                                </td>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>




            {/* footer */}
            <div className="footer">
                <i><p id='footertext'>"Code hard, nap hard."</p></i>
                <div className="smallbox">
                    <a href="https://www.linkedin.com/in/girish-mogaveera-852860275/"><i id='devicon2' class="devicon-linkedin-plain colored"></i></a>
                    <i id='devicon2' class="devicon-twitter-original"></i>
                    <i id='devicon2' class="devicon-github-original-wordmark"></i>
                </div>
            </div>
        </>
    )
}

export default App;
