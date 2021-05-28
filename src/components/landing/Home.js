import React from 'react';

const Home = () => {
    return (
        <div id="landing-page-cont">
            
            <div id="landing-getstarted-cont">
                <div id="getstarted-content-cont">
                    <div id="getstarted-content">
                        <span>Make your syllabus ADA compliant</span>
                        <span>Use our tool to make an inclusive syllabus in minutes!</span>
                        <div id="getstarted-btn-cont"><button>Get Started</button></div>
                    </div>
                </div>
                <div id="getstarted-images"></div>
            </div>
            
            <div id="landing-testimonal-cont">
                <div id="testimonial-content-cont">
                    <div id="testimonial-bubble"></div>
                    <div id="testimonial-triangle"></div>
                    <div id="testimonial-person-cont">
                        <div id="testimonial-person-img"></div>
                        <div id="testimonial-person-info">
                            <span>Jane Smith</span>
                            <span>Professor of English,</span>
                            <span>Laney College</span>
                        </div>
                    </div>
                </div>
            </div>

            <div id="landing-how-cont">
                <div id="how-heading-cont">
                    <span>How it works</span>
                </div>
                <div id="how-subheading-cont">
                    <span>Follow a few simple steps to make an ADA compliant syllabus,</span>
                    <span>and an inclusive classroom</span>
                </div>
                <div id="how-steps-cont">
                    <div id="how-steps-innercont">
                        <div id="how-steps-leftcont">
                            <div className="top-step-cont">
                                <div className="how-step-img"></div>
                                <div className="how-step-header">
                                    <span>Enter your syllabus</span>
                                    <span>essentials</span>
                                </div>
                                <div className="how-step-info">
                                    <span>Folllw the prompts on our builder page!</span>
                                </div>
                            </div>
                            <div className="btm-step-cont">
                                <div className="how-step-img"></div>
                                <div className="how-step-header">
                                    <span>Download</span>
                                </div>
                                <div className="how-step-info">
                                    <span>Choose the file format you want and click</span>
                                    <span>download!</span>
                                </div>
                            </div>
                        </div>
                        
                        <div id="how-steps-midcont">
                            <div className="top-step-cont">
                                <div className="how-step-img"></div>
                                <div className="how-step-header">
                                    <span>Add components to</span>
                                    <span>customize it</span>
                                </div>
                                <div className="how-step-info">
                                    <span>Add text blocks and images as you need, in</span>
                                    <span>the order you need</span>
                                </div>
                            </div>
                        </div>

                        <div id="how-steps-rightcont">
                            <div className="top-step-cont">
                                <div className="how-step-img"></div>
                                <div className="how-step-header">
                                    <span>Save</span>
                                </div>
                                <div className="how-step-info">
                                    <span>Our builder will autosave as you work. Save</span>
                                    <span> your draft and come back to it later.</span>
                                </div>
                            </div>
                            <div className="btm-step-cont">
                                <div className="how-step-img"></div>
                                <div className="how-step-header">
                                    <span>Come back later</span>
                                </div>
                                <div className="how-step-info">
                                    <span>Teaching the same course next semester? No</span>
                                    <span>problem, make edits and download again</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Home;