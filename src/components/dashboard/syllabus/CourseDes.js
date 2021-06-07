import React from 'react';

const CourseDes = props => {
    return (
        <div id="syllabus-content-cont">
            <div className="syllabus-textcontent-cont">
                <div className="syllabus-text-content">
                    <span>Section 2 (Course Description)</span>
                    <span>English 101. Spring 2021</span>
                </div>
            </div>
            <div className="syllabus-formscontent-cont">
                <span>Course Description</span>
                <input />
                <div className="syllabus-btncontent-cont">
                    <span>Add a field</span>
                <div className="syllabus-prevnext-btns">
                    <button>Previous Section</button>
                    <button>Next Section</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDes;