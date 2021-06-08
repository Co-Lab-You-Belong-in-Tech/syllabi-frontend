import React, { useState } from 'react';
import { IoIosAddCircleOutline } from 'react-icons/io';

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
                        <span>Add a field</span>
                        <IoIosAddCircleOutline
                            style={{ fontSize: '250%' }}
                            onClick={() => {
                                setOutcome(outcome + 1);
                                setCFields([
                                    ...cFields,
                                    {
                                        outcome: outcome,
                                        data: '',
                                    },
                                ]);
                            }}
                        />
                    </div>

                    <div className="syllabus-prevnext-btns">
                        <button
                            className="new-syllabus-nextbtn"
                            onClick={() => props.setCurrent('description')}
                        >
                            Previous Section
                        </button>
                        <button
                            className="new-syllabus-nextbtn"
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
