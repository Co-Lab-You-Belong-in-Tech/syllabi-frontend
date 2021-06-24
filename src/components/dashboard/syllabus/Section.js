import React, { useState } from 'react';
import { IoIosAddCircleOutline } from 'react-icons/io';

const Section = (props) => {
    const [cFields, setCFields] = useState(props.syllabus.requirements);
    const [section, setSection] = useState(4);

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
                    Section 6 
                </h2>
                <span>English 101. Spring 2021</span>
            </div>
            <div className="syllabus-formscontent-cont">
                <div id="section-fields-cont">
                    <div id="section-title-cont">
                        <span>Section Name</span>
                        <input
                            id="section-title-field"
                        />
                    </div>
                    
                    <div id="section-desc-cont">
                        <span>Section Description</span>
                        <textarea 
                            id="section-desc-field" 

                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                </div>
                <div className="syllabus-btncontent-cont">
                    <div className="add-field-div">
                        <span>Add Section</span>
                        <IoIosAddCircleOutline
                            style={{ fontSize: '250%' }}
                            onClick={() => {
                                setSection(section + 1);
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
                            onClick={() => props.setCurrent('format')}
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

export default Section;
