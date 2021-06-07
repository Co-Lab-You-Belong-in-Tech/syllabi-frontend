import React from 'react';

const Outcomes = props => {
    return (
        <div id="syllabus-content-cont">
            <div className="syllabus-textcontent-cont">
                    <span>Section 3 (Student Learning Outcomes)</span>
                    <span>English 101. Spring 2021</span>
            </div>
            <div className="syllabus-formscontent-cont">
                <div id="syllabus-outcome-fields">
                <span style={{"fontSize": "14px"}}>Outcome 1</span>
                <input
                    className="outcome-field"
                />

                <span className="outcome-label">Outcome 2</span>
                <input
                    className="outcome-field"
                />

                <span className="outcome-label">Outcome 3</span>
                <input
                    className="outcome-field"
                />
                </div>
                <div className="syllabus-btncontent-cont">
                    <span>Add a field</span>
                    
                    <div className="syllabus-prevnext-btns">
                        <button
                            className="new-syllabus-nextbtn"
                            onClick={()=> props.setCurrent('description')}
                        >
                        Previous Section
                        </button>
                        <button
                            className="new-syllabus-nextbtn"
                        >
                        Next Section
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Outcomes;