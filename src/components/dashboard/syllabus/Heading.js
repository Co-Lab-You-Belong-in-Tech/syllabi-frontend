import React from 'react';

const Heading = props => {
    return (
        <div id="heading-cont">
            <div id="heading-content-cont">
                <span id="heading-header">Write in the essential information first... we'll make sure it's ADA compliant!</span>
                <form id="heading-form">
                    <div className="heading-input-label">
                        <span className="heading-input-heading">Course Title</span>
                        <input
                            className="heading-input"
                        />
                    </div>
                    <div className="heading-input-label">
                        <span className="heading-input-heading">Course Subtitle</span>
                        <input
                            className="heading-input"
                        />
                    </div>
                    <div className="heading-input-label">
                        <span className="heading-input-heading">Date and Time</span>
                        <input
                            className="heading-input"
                        />
                    </div>
                    <div className="heading-input-label">
                        <span className="heading-input-heading">Professor Name</span>
                        <input
                            className="heading-input"
                        />
                    </div>
                    <div className="heading-input-label">
                        <span className="heading-input-heading">Professor Email</span>
                        <input
                            className="heading-input"
                        />
                    </div>
                    <div className="heading-input-label">
                        <span className="heading-input-heading">Professor Phone Number</span>
                        <input
                            className="heading-input"
                        />
                    </div>
                    <div className="heading-input-label">
                        <span className="heading-input-heading">Location</span>
                        <input
                            className="heading-input"
                        />
                    </div>
                    <div className="heading-input-label">
                        <span className="heading-input-heading">Office Hours</span>
                        <input
                            className="heading-input"
                        />
                    </div>
                    <button onClick={() => {
                        props.setCurrent('component')
                    }}>Next</button>
                </form>
            </div>
        </div>
    )
};

export default Heading;