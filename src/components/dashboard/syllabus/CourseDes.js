import React from 'react';
import {IoIosAddCircleOutline} from 'react-icons/io';

const CourseDes = props => {
    return (
        <div id="syllabus-content-cont">
            <div className="syllabus-textcontent-cont">
                    <span>Section 2 (Course Description)</span>
                    <span>English 101. Spring 2021</span>
            </div>
            <div className="syllabus-formscontent-cont">
                <span>Course Description</span>
                <textarea
                    id="description-form"
                />

                <div className="syllabus-btncontent-cont">
                    <div className="add-field-div">
                        <span>Add a field</span>
                        <IoIosAddCircleOutline style={{'fontSize': "250%"}}/>
                    </div>
                    
                    <div className="syllabus-prevnext-btns">
                        <button
                            className="new-syllabus-nextbtn"
                            onClick={()=> props.setCurrent('heading')}
                        >
                        Previous Section
                        </button>
                        <button
                            className="new-syllabus-nextbtn"
                            onClick={()=> props.setCurrent('outcome')}
                        >
                        Next Section
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDes;