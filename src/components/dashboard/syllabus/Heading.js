import React, { useState } from 'react';

const Heading = (props) => {
    const [headers, setHeaders] = useState({
        syllabus: props.headers.syllabus,
        title: props.headers.docTitle,
        title: props.headers.courseTitle,
        subtitle: props.headers.subtitle,
        name: props.headers.name,
        startDate: props.headers.startDate,
        endDate: props.headers.endDate,
        startTime: props.headers.startTime,
        endTime: props.headers.endTime,
        endTime: props.headers.room,
        email: props.headers.email,
        number: props.headers.number,
        officeHours: props.headers.officeHours,
        location: props.headers.addTitle,
    });
    const handleChange = (e) => {
        setHeaders({
            ...headers,
            [e.target.name]: e.target.value,
        });
    };

    const handleBlur = (e) => {
        props.setHeaders({
            ...props.headers,
            [e.target.name]: headers[e.target.name],
        });
    };
    return (
        <main id="heading-cont">
            <section id="heading-content-cont" className="container">
                <h1 id="heading-header">
                    Write in the essential information first...we'll make sure
                    it's ADA compliant!
                </h1>
                <form id="heading-form">
                    {/* Document title */}
                    <div className="heading-input-cont">
                        <h2 className="page-section-title">
                            Section 1 (Course Header)
                        </h2>
                        <label for="docTitle" className="heading-label">
                            Document Title
                        </label>
                        <input
                            id="docTitle"
                            name="docTitle"
                            className="heading-input doc-title"
                            type="text"
                            value={headers.docTitle}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>

                    <div className="syllabus-grid">
                        <div className="syllabus-grid-wrapper">
                            {/* Course title */}
                            <div className="heading-input-cont">
                                <label
                                    for="courseTitle"
                                    className="heading-label"
                                >
                                    Course Title
                                </label>
                                <input
                                    id="courseTitle"
                                    name="courseTitle"
                                    className="heading-input"
                                    type="text"
                                    value={headers.courseTitle}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </div>
                            {/* Course subtitle */}
                            <div className="heading-input-cont">
                                <label for="subtitle" className="heading-label">
                                    Course Subtitle
                                </label>
                                <input
                                    id="subtitle"
                                    name="subtitle"
                                    className="heading-input"
                                    type="text"
                                    value={headers.subtitle}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </div>
                            {/* Professor name */}
                            <div className="heading-input-cont">
                                <label for="name" className="heading-label">
                                    Professor Name
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    className="heading-input"
                                    type="text"
                                    value={headers.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </div>
                            <div className="syllabus-flex">
                                {/* Start Date */}
                                <div className="heading-input-cont">
                                    <label
                                        for="start-date"
                                        className="heading-label"
                                    >
                                        Start Date
                                    </label>
                                    <input
                                        id="start-date"
                                        name="startDate"
                                        className="heading-input input-spacing"
                                        type="date"
                                        value={headers.startDate}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </div>
                                {/* End Date */}
                                <div className="heading-input-cont">
                                    <label
                                        for="end-date"
                                        className="heading-label"
                                    >
                                        End Date
                                    </label>
                                    <input
                                        id="end-date"
                                        name="endDate"
                                        className="heading-input"
                                        type="date"
                                        value={headers.endDate}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </div>
                            </div>
                            <div className="syllabus-flex">
                                {/* Start Time */}
                                <div className="heading-input-cont">
                                    <label
                                        for="start-time"
                                        className="heading-label"
                                    >
                                        Start Time
                                    </label>
                                    <input
                                        id="start-time"
                                        name="startTime"
                                        className="heading-input input-spacing"
                                        type="time"
                                        value={headers.startTime}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </div>
                                {/* End Time */}
                                <div className="heading-input-cont">
                                    <label
                                        for="end-time"
                                        className="heading-label"
                                    >
                                        End Time
                                    </label>
                                    <input
                                        id="end-time"
                                        name="endTime"
                                        className="heading-input"
                                        type="time"
                                        value={headers.endTime}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="syllabus-grid-wrapper">
                            {/* Classroom or Weblink */}
                            <div className="heading-input-cont">
                                <label for="room" className="heading-label">
                                    Classroom or Weblink
                                </label>
                                <input
                                    id="room"
                                    name="room"
                                    className="heading-input"
                                    type="text"
                                    value={headers.room}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </div>
                            {/* Professor email */}
                            <div className="heading-input-cont">
                                <label for="email" className="heading-label">
                                    Professor Email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    className="heading-input"
                                    type="email"
                                    value={headers.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </div>
                            {/* Professor phone number */}
                            <div className="heading-input-cont">
                                <label for="number" className="heading-label">
                                    Professor Phone Number
                                </label>
                                <input
                                    id="number"
                                    name="number"
                                    className="heading-input"
                                    type="tel"
                                    value={headers.number}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </div>
                            {/* Office hours */}
                            <div className="heading-input-cont">
                                <label for="hours" className="heading-label">
                                    Office Hours
                                </label>
                                <input
                                    id="hours"
                                    name="officeHours"
                                    className="heading-input"
                                    type="text"
                                    value={headers.officeHours}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="syllabus-btn-flex">
                        <button className="addField-btn">Add a field</button>
                        <button
                            className="new-syllabus-nextbtn"
                            onClick={() => {
                                props.setCurrent('description');
                            }}
                        >
                            Next Section
                        </button>
                    </div>
                </form>
            </section>
        </main>
    );
};

export default Heading;
