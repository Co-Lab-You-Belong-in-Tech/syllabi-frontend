import React from 'react';
import { IoIosAddCircleOutline } from 'react-icons/io';

const Description = (props) => {
    return (
        <div id="syllabus-content-cont" className="container">
            <div className="syllabus-textcontent-cont">
                <h2 className="page-section-title">
                    Section 2 (Course Description)
                </h2>
                <span>English 101. Spring 2021</span>
            </div>
            <div className="syllabus-formscontent-cont">
                <span className="outcome-label">Course Description</span>
                <textarea id="description-form" />

                <div className="syllabus-btncontent-cont">
                    <div className="add-field-div">
                        <span>Add a field</span>
                        <IoIosAddCircleOutline style={{ fontSize: '250%' }} />
                    </div>

                    <div className="syllabus-prevnext-btns">
                        <button
                            className="btn-primary"
                            onClick={() => props.setCurrent('heading')}
                        >
                            Previous Section
                        </button>
                        <button
                            className="btn-primary"
                            onClick={() => props.setCurrent('outcome')}
                        >
                            Next Section
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Description;
