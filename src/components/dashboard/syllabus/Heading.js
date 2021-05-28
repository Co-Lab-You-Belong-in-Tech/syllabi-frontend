import React, { useState } from 'react';

const Heading = props => {
    const [headers, setHeaders] = useState({
            title: props.headers.title,
            subtitle: props.headers.subtitle,
            dateTime: props.headers.dateTime,
            name: props.headers.name,
            email: props.headers.email,
            number: props.headers.number,
            location: props.headers.location,
            officeHours: props.headers.officeHours,
    })
    const handleChange = e => {
        setHeaders({
            ...headers,
            [e.target.name]: e.target.value
        })
    }

    const handleBlur = e => {
        props.setHeaders({
            ...props.headers,
            [e.target.name]: headers.[e.target.name]
        })
    }
    return (
        <div id="heading-cont">
            <div id="heading-content-cont">
                <span id="heading-header">Write in the essential information first...we'll make sure it's ADA compliant!</span>
                <form id="heading-form">
                    <div className="heading-input-label">
                        <span className="heading-input-heading">Course Title</span>
                        <input
                            name="title"
                            className="heading-input"
                            value={headers.title}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    <div className="heading-input-label">
                        <span className="heading-input-heading">Course Subtitle</span>
                        <input
                            name="subtitle"
                            className="heading-input"
                            value={headers.subtitle}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    <div className="heading-input-label">
                        <span className="heading-input-heading">Date and Time</span>
                        <input
                            name="dateTime"
                            className="heading-input"
                            value={headers.dateTime}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    <div className="heading-input-label">
                        <span className="heading-input-heading">Professor Name</span>
                        <input
                            name="name"
                            className="heading-input"
                            value={headers.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    <div className="heading-input-label">
                        <span className="heading-input-heading">Professor Email</span>
                        <input
                            name="email"
                            className="heading-input"
                            value={headers.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    <div className="heading-input-label">
                        <span className="heading-input-heading">Professor Phone Number</span>
                        <input
                            name="number"
                            className="heading-input"
                            value={headers.number}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    <div className="heading-input-label">
                        <span className="heading-input-heading">Location</span>
                        <input
                            name="location"
                            className="heading-input"
                            value={headers.location}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    <div className="heading-input-label">
                        <span className="heading-input-heading">Office Hours</span>
                        <input
                            name="officeHours"
                            className="heading-input"
                            value={headers.officeHours}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    <button
                    className="new-syllabus-nextbtn "
                    onClick={() => {
                        props.setCurrent('component')
                    }}>Next</button>
                </form>
            </div>
        </div>
    )
};

export default Heading;