import React, { useState } from 'react';
import { useTabIndex } from 'react-tabindex';


const Heading = (props) => {
    

    const tabIdx = useTabIndex();

    const [headers, setHeaders] = useState({
        syllabus: props.headers.syllabus,
        courseTitle: props.headers.courseTitle,
        semester: props.headers.semester,
        section: props.headers.section,
        name: props.headers.name,
        college:props.headers.college,
        meetingDays: props.headers.meetingDays,
        startTime: props.headers.startTime,
        endTime: props.headers.endTime,
        room: props.headers.room,
        email: props.headers.email,
        number: props.headers.number,
        officeHours: props.headers.officeHours,
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
                <form id="heading-form" tabIndex={0}>
                    {/* Document title */}
                    <div className="heading-input-cont" >
                        <h2 className="page-section-title">
                            Section 1 (Course Header)
                        </h2>
                        <label for="docTitle" className="heading-label">
                            Document Title
                        </label>
                        <input
                            tabIndex={0}
                            id="docTitle"
                            name="syllabus"
                            className="heading-input doc-title"
                            type="text"
                            value={headers.syllabus}
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
                            {/* Semester Section */}
                            <div className="syllabus-flex">
                                {/* Semester */}
                                <div className="heading-input-cont">
                                    <label
                                        for="start-date"
                                        className="heading-label"
                                    >
                                        Semester
                                    </label>
                                    <input
                                        id="semester"
                                        name="semester"
                                        className="heading-input input-spacing"
                                        type="text"
                                        value={headers.semester}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </div>
                                {/* Section */}
                                <div className="heading-input-cont">
                                    <label
                                        for="end-date"
                                        className="heading-label"
                                    >
                                        Section
                                    </label>
                                    <input
                                        id="section"
                                        name="section"
                                        className="heading-input"
                                        type="text"
                                        value={headers.section}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </div>
                            </div>

                            {/* College */}
                            <div className="heading-input-cont">
                                <label
                                    for="college"
                                    className="heading-label"
                                >
                                    University/College
                                </label>
                                <input
                                    id="college"
                                    name="college"
                                    className="heading-input input-spacing"
                                    value={headers.college}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </div>
                            
                            {/* Meeting Days */}
                            <div className="heading-input-cont">
                                <label
                                    for="start-date"
                                    className="heading-label"
                                >
                                    Meeting Day(s)
                                </label>
                                <input
                                    id="start-date"
                                    name="meetingDays"
                                    className="heading-input input-spacing"
                                    value={headers.meetingDays}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </div>
                            <div id="header-time" className="syllabus-flex header-time" >
                                {/* Start Time */}
                                <div className="heading-input-cont time-input">
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
                                <div className="heading-input-cont time-input">
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
                        <div className="add-field-div">
                            <span>Add A Field</span>
                            <button className="add-field-btn">
                                <div className="add-field-btn-line line-1"></div>
                                <div className="add-field-btn-line line-2"></div>
                            </button>
                        </div>
                        <button
                            className="btn-primary"
                            onClick={() => {
                                console.log(headers)
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

