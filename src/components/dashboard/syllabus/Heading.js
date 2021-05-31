import React, { useState } from 'react';

const Heading = props => {
    const [headers, setHeaders] = useState({
            syllabus: props.headers.syllabus,
            title: props.headers.title,
            subtitle: props.headers.subtitle,
            startDate: props.headers.startDate,
            endDate: props.headers.endDate,
            startTime: props.headers.startTime,
            endTime: props.headers.endTime,
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
                        <span className="heading-input-heading">Start Date</span>
                        <input
                            name="startDate"
                            type="date"
                            className="heading-input"
                            value={headers.startDate}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>

                    <div className="heading-input-label">
                        <span className="heading-input-heading">End Date</span>
                        <input
                            name="endDate"
                            type="date"
                            className="heading-input"
                            value={headers.endDate}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    <div className="heading-input-label">
                        <span className="heading-input-heading">Start Time</span>
                        <input
                            name="startDate"
                            type="time"
                            className="heading-input"
                            value={headers.startTime}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>

                    <div className="heading-input-label">
                        <span className="heading-input-heading">End Time</span>
                        <input
                            name="endDate"
                            type="time"
                            className="heading-input"
                            value={headers.endTime}
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