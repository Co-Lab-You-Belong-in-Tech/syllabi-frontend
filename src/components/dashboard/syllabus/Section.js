import React, { useEffect, useState } from 'react';
import { IoIosAddCircleOutline } from 'react-icons/io';

const Section = (props) => {
    const [cFields, setCFields] = useState(props.sectionData);
    const [localSections, setLocalSections] = useState(props.sections);


    const handleChange = (e) => {
        let tempSection = {...cFields, [e.target.name]: e.target.value};

        setCFields(tempSection)
    };

    const handleBlur = async (e) => {
        let tempSections = [...localSections];

        tempSections[cFields.order] = cFields

        props.setSectionData(cFields)
        props.setSections([...tempSections]);
    };

    return (
        <div id="syllabus-content-cont" className="container">
            <div className="syllabus-textcontent-cont">
                <h2 className="page-section-title">
                    Section 6 
                </h2>
                <span>{props.courseTitle}</span>
            </div>
            <div className="syllabus-formscontent-cont">
                <div id="section-fields-cont">
                    <div id="section-title-cont">
                        <span>Section Name</span>
                        <input
                            id="section-title-field"
                            value={cFields.sectionName}
                            name='sectionName'
                            onChange={(e) => {handleChange(e)}}
                            onBlur={handleBlur}
                        />
                    </div>
                    
                    <div id="section-desc-cont">
                        <span>Section Description</span>
                        <textarea 
                            id="section-desc-field" 
                            name="content"
                            value={cFields.content}
                            onChange={(e) => {handleChange(e)}}
                            onBlur={handleBlur}
                        />
                    </div>
                </div>
                <div className="syllabus-btncontent-cont">
                    <div className="add-field-div" >
                        <div className="section-add-field">
                        <span>Add Field</span>
                        <IoIosAddCircleOutline
                            style={{ fontSize: '250%' }}
                            onClick={() => {
                                
                            }}
                        />
                        </div>

                        <div className="section-add-field">
                        <span>Add List</span>
                        <IoIosAddCircleOutline
                            style={{ fontSize: '250%' }}
                            onClick={() => {
                                
                            }}
                        />
                        </div>

                        <div className="section-add-field">
                        <span>Add Table</span>
                        <IoIosAddCircleOutline
                            style={{ fontSize: '250%' }}
                            onClick={() => {
                                
                            }}
                        />
                        </div>
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
                            onClick={() => props.setCurrent('section')}
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
