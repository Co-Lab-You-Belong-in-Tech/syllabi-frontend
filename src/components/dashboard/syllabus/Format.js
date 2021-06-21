import React, { useState } from 'react';
import { IoIosAddCircleOutline } from 'react-icons/io';

const Requirements = (props) => {
    const [cFields, setCFields] = useState(props.syllabus.requirements);
    const [requirements, setRequirements] = useState(4);

    const handleChange = e => {
        let array = [...cFields]
        array[e.target.name] = {...array[e.target.name], data:e.target.value}
        setCFields(array)
    };

    const handleBlur = (e) => {
        props.setSyllabus({
            ...props.syllabus,
            requirements: cFields,
        });
    };
    return (
        <div id="syllabus-content-cont" className="container">
            <div className="syllabus-textcontent-cont">
                <h2 className="page-section-title">
                    Section 4 (Required Texts and Materials)
                </h2>
                <span>English 101. Spring 2021</span>
            </div>
            <div className="syllabus-formscontent-cont">
                <div id="syllabus-outcome-fields">
                    {cFields.map((item, i) => {
                        return (
                            <div id="outcome-mapped-items">
                                <span className="outcome-label">
                                    Requirement {item.requirement}
                                </span>
                                <input
                                    name={i}
                                    className="outcome-field" 
                                    value={cFields[i].data}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
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
                                setRequirements(requirements + 1);
                                props.setSyllabus({...props.syllabus,
                                    requirements:[
                                    ...cFields,
                                    {
                                        requirement: props.syllabus.requirements.length + 1,
                                        data: '',
                                    },
                                ]}); 
                                
                            }}
                        />
                    </div>

                    <div className="syllabus-prevnext-btns">
                        <button
                            className="btn-primary"
                            onClick={() => props.setCurrent('outcome')}
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

export default Requirements;
