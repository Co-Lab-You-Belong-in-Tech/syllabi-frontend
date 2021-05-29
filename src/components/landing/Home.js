import React from 'react';
import mainImage from '../../img/Plage-braille.jpg';
import headShot from '../../img/testimonial-headshot.jpg';

const Home = () => {
    return (
        <div id="landing-page-cont">
            {/* Hero section */}
            <header id="landing-getstarted-cont" className="container">
                <div id="getstarted-content-cont">
                    <div id="getstarted-content">
                        <h1>Make your syllabus ADA compliant</h1>
                        <p>
                            Use our tool to make an inclusive syllabus in
                            minutes!
                        </p>
                        <button id="getstarted-btn-cont">Get Started</button>
                    </div>
                </div>
                <div id="getstarted-images">
                    <img src={mainImage} alt="Braille Terminal Image"></img>
                </div>
            </header>

            {/* Testimonial section */}
            <main>
                <section id="landing-testimonal-cont">
                    <div id="testimonial-content-cont" className="container">
                        <div id="testimonial-bubble">
                            <p>
                                I care about creating an inclusive classroom,
                                and hope all my materials can meet the needs of
                                my students. But making my documents ADA
                                compliant, was overwhelming and highly
                                technical. This website has saved me hours of
                                frustration.
                            </p>
                        </div>
                        <div id="testimonial-triangle"></div>
                        <div id="testimonial-person-cont">
                            <div id="testimonial-person-img">
                                <img
                                    src={headShot}
                                    alt="Testimonial Image"
                                ></img>
                            </div>
                            <div id="testimonial-person-info">
                                <span>Jane Smith</span>
                                <span>Professor of English,</span>
                                <span>Laney College</span>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Instructional section */}
                <section id="landing-how-cont" className="container">
                    <div id="how-heading-cont">
                        <h2>How it works</h2>
                        <p>
                            Follow a few simple steps to make an ADA compliant
                            syllabus, and an inclusive classroom!
                        </p>
                    </div>
                    <div id="how-steps-cont">
                        <div id="how-steps-innercont">
                            <div className="how-steps-box">
                                <div className="how-step-img"></div>
                                <div className="how-step-header">
                                    <h3>Enter your syllabus essentials</h3>
                                </div>
                                <div className="how-step-info">
                                    <p>
                                        Follow the prompts on our builder page!
                                    </p>
                                </div>
                            </div>
                            <div className="how-steps-box">
                                <div className="how-step-img"></div>
                                <div className="how-step-header">
                                    <h3>Download</h3>
                                </div>
                                <div className="how-step-info">
                                    <p>
                                        Choose the file format you want and
                                        click download!
                                    </p>
                                </div>
                            </div>
                            <div className="how-steps-box">
                                <div className="how-step-img"></div>
                                <div className="how-step-header">
                                    <h3>Add components to customize it</h3>
                                </div>
                                <div className="how-step-info">
                                    <p>
                                        Add text blocks and images as you need,
                                        in the order you need.
                                    </p>
                                </div>
                            </div>
                            <div className="how-steps-box">
                                <div className="how-step-img"></div>
                                <div className="how-step-header">
                                    <h3>Save</h3>
                                </div>
                                <div className="how-step-info">
                                    <p>
                                        Our builder will autosave as you work.
                                        Save your draft and come back to it
                                        later.
                                    </p>
                                </div>
                            </div>
                            <div className="how-steps-box">
                                <div className="how-step-img"></div>
                                <div className="how-step-header">
                                    <h3>Come back later</h3>
                                </div>
                                <div className="how-step-info">
                                    <p>
                                        Teaching the same course next semester?
                                        No problem, make edits and download
                                        again.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Home;
