import React, { useState } from 'react';
import { IoIosAddCircleOutline } from 'react-icons/io';

const Section = (props) => {
    const [cFields, setCFields] = useState(props.syllabus.sections);
    const [section, setSection] = useState(4);

    const handleChange = (e, idx) => {
        let sections = [...cFields]
        console.log(cFields)
        sections[idx] = {...sections[idx], [e.target.name]:e.target.value}
        setCFields(sections)
    };

    const handleBlur = (e) => {
        props.setSyllabus({
            ...props.syllabus,
            sections: cFields,
        });
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
                            value={cFields[props.sectionData.idx].sectionName}
                            name='sectionName'
                            onChange={(e) => {handleChange(e, props.sectionData.idx)}}
                            onBlur={handleBlur}
                        />
                    </div>
                    
                    <div id="section-desc-cont">
                        <span>Section Description</span>
                        <textarea 
                            id="section-desc-field" 
                            name="content"
                            value={cFields[props.sectionData.idx].content}
                            onChange={(e) => {handleChange(e, props.sectionData.idx)}}
                            onBlur={handleBlur}
                        />
                    </div>
                </div>
                <div className="syllabus-btncontent-cont">
                    <div className="add-field-div">
                        
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
