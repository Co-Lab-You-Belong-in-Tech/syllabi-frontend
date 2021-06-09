import React, { useState } from 'react';

const Outcomes = (props) => {
    const [cFields, setCFields] = useState([
        {
            outcome: 1,
            data: '',
        },
        {
            outcome: 2,
            data: '',
        },
        {
            outcome: 3,
            data: '',
        },
    ]);
    const [outcome, setOutcome] = useState(4);
    return (
        <div id="syllabus-content-cont" className="container">
            <div className="syllabus-textcontent-cont">
                <h2 className="page-section-title">
                    Section 3 (Student Learning Outcomes)
                </h2>
                <span>English 101. Spring 2021</span>
            </div>
            <div className="syllabus-formscontent-cont">
                <div id="syllabus-outcome-fields">
                    {cFields.map((item) => {
                        return (
                            <div id="outcome-mapped-items">
                                <span className="outcome-label">
                                    Outcome {item.outcome}
                                </span>
                                <input className="outcome-field" />
                            </div>
                        );
                    })}
                </div>
                <div className="syllabus-btncontent-cont">
                    <div className="add-field-div">
                        <span>Add A Field</span>
                        <button className="add-field-btn">
                            <div className="add-field-btn-line line-1"></div>
                            <div className="add-field-btn-line line-2"></div>
                            {/* onClick=
                            {() => {
                                setOutcome(outcome + 1);
                                setCFields([
                                    ...cFields,
                                    {
                                        outcome: outcome,
                                        data: '',
                                    },
                                ]);
                            }} */}
                        </button>
                    </div>

                    <div className="syllabus-prevnext-btns">
                        <button
                            className="btn-primary"
                            onClick={() => props.setCurrent('description')}
                        >
                            Previous Section
                        </button>
                        <button
                            className="btn-primary"
                            onClick={() => props.setCurrent('preview')}
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
