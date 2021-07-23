import React, { useEffect, useState } from 'react';
import { IoIosAddCircleOutline } from 'react-icons/io';

const Section = (props) => {
    const [cFields, setCFields] = useState(props.sectionData);
    const [localSections, setLocalSections] = useState(props.sections);


    const handleChange = (contentIdx, e) => {
        console.log(cFields)
        console.log(localSections)
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

        console.log(cFields)

        console.log(tempSections)
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
                    {`Section ${cFields.order + 2}`}
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
                            if (content.type === 'paragraph'){
                                return ( 
                                    <div className="section-contents-cont" key={contentIdx}>
                                        <span className="section-contents-span">{`${content.type}`}</span>
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
                                        <span className="section-contents-span">{`${content.type}`}</span>
                                        <textarea 
                                            id="section-desc-field" 
                                            name="content"
                                            value={content.main}
                                            onChange={(e) => {handleChange(contentIdx, e)}}
                                            onBlur={handleBlur}
                                        />
                                        <div id="section-list-settings">
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
                                                <option>cust</option>
                                            </select>
                                        </div>
                                        <ol>
                                            {content.subs.length > 0? content.subs.map((subPoint, subIdx) => {
                                                return (
                                                    <li style={{'listStyle': content.subsType}}>
                                                        <div className="section-point-inputcont">
                                                        <input 
                                                            className="section-point-input"
                                                            key={subIdx}
                                                            onChange={(e) => {changePoint(contentIdx, subIdx, e)}} 
                                                            value={subPoint}
                                                        />
                                                        </div>
                                                    </li>
                                                )
                                            }) : null}
                                        </ol>
                                    </div>
                                )
                            }
                        })}
                    </div>        
                </div>

                <div className="syllabus-btncontent-cont">
                    <div className="add-field-div" >
                        <div className="section-add-field">
                        <span>Add Paragraph</span>
                        <IoIosAddCircleOutline
                            style={{ fontSize: '250%' }}
                            onClick={() => {
                                let tempContents = [...cFields.contents];
                                tempContents.push({
                                    type: 'paragraph',
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
                                    subsType:'disc',
                                    subs:[]
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

                    <div className="syllabus-prevnext-btns">
                        <button
                            className="btn-primary"
                            onClick={() => {}}
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section;
