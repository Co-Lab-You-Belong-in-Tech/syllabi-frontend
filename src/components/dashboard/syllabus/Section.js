import React, { useEffect, useState } from 'react';
import { IoIosAddCircleOutline } from 'react-icons/io';

const Section = (props) => {
    const [cFields, setCFields] = useState(props.sectionData);
    const [localSections, setLocalSections] = useState(props.sections);


    const handleChange = (contentIdx, e) => {
        if (e.target.name === 'sectionName') {

            let tempSection = {...cFields, [e.target.name]: e.target.value};
            setCFields(tempSection)

        } else  {

            let tempContents = [...cFields.contents];
            tempContents[contentIdx] = {
                ...tempContents[contentIdx],
                [e.target.name]:e.target.value
            };
            setCFields({...cFields,
                contents: tempContents
            });
      
        } 
    };

    const handleBlur = async (e) => {

        let tempSections = [...localSections];
        tempSections[cFields.order] = cFields;

        props.setSectionData(cFields);
        props.setSections([...tempSections]);
    };

    const addPoint = (contentIdx, e) => {
        let tempContents = [...cFields.contents];

        let tempSubs = tempContents[contentIdx]['subs']

        tempSubs.push('')

        setCFields({...cFields, contents: tempContents})
    };

    const changePoint = (contentIdx, subIdx, e) => {
        let tempContents = [...cFields.contents];

        let tempSubs = tempContents[contentIdx]['subs']

        tempSubs[subIdx] = e.target.value

        setCFields({...cFields, contents: tempContents})
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
                            onChange={(e) => {handleChange(null, e)}}
                            onBlur={handleBlur}
                        />
                    </div>
                    
                    <div id="section-desc-cont">
                        {cFields.contents.map((content, contentIdx) => {
                            if (content.type === 'field'){
                                return ( 
                                    <div className="section-contents-cont" key={contentIdx}>
                                        <span className="section-contents-span">{`section ${content.type}`}</span>
                                        <textarea 
                                            id="section-desc-field" 
                                            name="content"
                                            value={content.content}
                                            onChange={(e) => {handleChange(contentIdx, e)}}
                                            onBlur={handleBlur}
                                        />
                                    </div>
                                )
                            } else if (content.type === 'table') {
                                return <h1>Hello</h1>
                            } else if (content.type === 'list') {
                                return (
                                    <div className="section-contents-cont" key={contentIdx}>
                                        <span className="section-contents-span">{`section ${content.type}`}</span>
                                        <textarea 
                                            id="section-desc-field" 
                                            name="content"
                                            value={content.main}
                                            onChange={(e) => {handleChange(contentIdx, e)}}
                                            onBlur={handleBlur}
                                        />
                                        <div>
                                            <button
                                              onClick={(e) => {
                                                addPoint(contentIdx, e)
                                              }}
                                            >
                                                Add Point
                                            </button>
                                            <select>
                                                <option>•</option>
                                                <option>A.</option>
                                                <option>a.</option>
                                                <option>I.</option>
                                            </select>
                                        </div>
                                        {content.subs.length > 0? content.subs.map(( subPoint, subIdx) => {
                                            return (
                                                <input 
                                                    key={subIdx}
                                                    onChange={(e) => {changePoint(contentIdx, subIdx, e)}} 
                                                    value={subPoint}
                                                />
                                            )
                                        }) : null}
                                    </div>
                                )
                            }
                        })}
                        
                        
                    </div>

                    
                </div>
                <div className="syllabus-btncontent-cont">
                    <div className="add-field-div" >
                        <div className="section-add-field">
                        <span>Add Field</span>
                        <IoIosAddCircleOutline
                            style={{ fontSize: '250%' }}
                            onClick={() => {
                                let tempContents = [...cFields.contents];
                                tempContents.push({
                                    type: 'field',
                                    content: ''
                                });
                                setCFields({
                                    ...cFields,
                                    contents: tempContents
                                })
                            }}
                        />
                        </div>

                        <div className="section-add-field">
                        <span>Add List</span>
                        <IoIosAddCircleOutline
                            style={{ fontSize: '250%' }}
                            onClick={() => {
                                let tempContents = [...cFields.contents];
                                tempContents.push({
                                    type: 'list',
                                    main: '',
                                    subs:['hello']
                                });
                                setCFields({
                                    ...cFields,
                                    contents: tempContents
                                })
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
                </div>
            </div>
        </div>
    );
};

export default Section;
