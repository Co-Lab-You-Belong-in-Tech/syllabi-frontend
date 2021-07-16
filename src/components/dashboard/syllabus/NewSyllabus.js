import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { IoIosAddCircleOutline } from 'react-icons/io';


// components
import Heading from './Heading';
import Description from './Description.js';
import Outcomes from './Outcomes.js';
import Requirements from './Requirements.js'
import Format from './Format.js'
import Section from './Section.js'
import Preview from './Preview';

import DocGenerator from '../document/DocGenerator.js';

// assets
import lightbulb from '../../../img/light-bulb.svg';

const NewSyllabus = () => {
    const [current, setCurrent] = useState('heading');
    const [user, setUser] = useState('user');
    const [headers, setHeaders] = useState({
        syllabus: '',
        courseTitle: '',
        semester:'',
        section: '',
        name: '',
        meetingDays: '',
        college:'',
        startTime: '',
        endTime: '',
        room: '',
        email: '',
        number: '',
        officeHours: '',
    });

    const [syllabus, setSyllabus] = useState({
        description: '',
        outcomes: [
            {
                outcome: 1,
                data: '',
            }
        ],
        requirements: [
            {
                requirement: 1,
                data: ''
            }
        ], 
        format: [
            {
                format: 1,
                data:'',
                list: false,
                listType: 'ul',
                points: ['']
            }
        ],
        sections: [
        ]
    });

    const [sectionData, setSectionData] = useState()

    const [download, setDownload] = useState(false);

    const SwitchCase = () => {
        switch (current) {
            case 'heading':
                return (
                    <Heading
                        headers={headers}
                        setCurrent={setCurrent}
                        setHeaders={setHeaders}
                    />
                );

            case 'description':
                return (
                    <Description
                        courseTitle={headers.courseTitle} 
                        syllabus={syllabus}
                        description={syllabus.description}
                        setSyllabus={setSyllabus}
                        setCurrent={setCurrent}
                    />
                );
            case 'outcome':
                return (
                    <Outcomes
                        courseTitle={headers.courseTitle} 
                        syllabus={syllabus} 
                        setCurrent={setCurrent}
                        setSyllabus={setSyllabus}
                    />
                );
            case 'requirements':
                return (
                    <Requirements
                        courseTitle={headers.courseTitle} 
                        syllabus={syllabus} 
                        setCurrent={setCurrent}
                        setSyllabus={setSyllabus}
                    />
                )
            case 'format':
                return (
                    <Format 
                        courseTitle={headers.courseTitle}
                        syllabus={syllabus} 
                        setCurrent={setCurrent}
                        setSyllabus={setSyllabus}
                    />
                )
            case 'section':
                return (
                    <Section
                        courseTitle={headers.courseTitle} 
                        syllabus={syllabus} 
                        setCurrent={setCurrent}
                        setSyllabus={setSyllabus}
                        sectionData={sectionData}
                    />
                )
            case 'preview':
                return <Preview />;
            default:
                return <h1>No Component Rendered</h1>;
        }
    };

    return (
        <div id="new-syllabus-cont">
            <div id="new-syllabus-nav">
                <div className="new-syllabus-navdivs">
                    <div className="logo">
                        <img src={lightbulb} alt="logo"></img>
                        <Link to="/">Inclusive Syllabi</Link>
                    </div>
                    <div id="new-syllabus-downloadcont">
                        <div className="dropdown">
                            <div
                                className="btn-primary"
                                onClick={() => {
                                    setDownload(!download);
                                }}
                            >
                                File
                            </div>
                            {download && (
                                <div className="dropdown-content">
                                    <div className="new-syllabus-dropdown">
                                        <button className="btn-secondary">Save Draft</button>
                                        <button className="btn-primary">
                                            <DocGenerator data={headers} syllabus={syllabus}>
                                                Download
                                            </DocGenerator>
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div id="new-syllabus-content-cont">
                <div id="side-nav-cont"  >
                    <div id="side-nav-top">
                        <span className={`side-nav-link `} 
                            onClick={e => {
                                e.preventDefault();
                                let newSections = [...syllabus.sections];

                                newSections.push({
                                    sectionName: 'New Section',
                                    content: '',
                                    table:[]
                                });
                                setSyllabus({...syllabus,
                                    sections: newSections});
                                
                            }}
                        >
                            <IoIosAddCircleOutline style={{ fontSize: '200%' }} />
                        </span>
                        <span className={`side-nav-link `} onClick={() => null}>Edit</span>
                    </div>
                    <span className={`side-nav-link ${current ==='heading'? "active-side-nav" :null}`} onClick={() => setCurrent('heading')}>Header</span>
                    <span className={`side-nav-link ${current ==='description'? "active-side-nav" :null}`} onClick={() => setCurrent('description')}>Description</span> 
                    <span className={`side-nav-link ${current ==='outcome'? "active-side-nav" :null}`} onClick={() => setCurrent('outcome')}>Student Learning Outcomes</span>
                    <span className={`side-nav-link ${current ==='requirements'? "active-side-nav" :null}`} onClick={() => setCurrent('requirements')}>Required Materials</span>
                    <span className={`side-nav-link ${current ==='format'? "active-side-nav" :null}`} onClick={() => setCurrent('format')}>Format and Requirements</span>
                    {syllabus.sections.map((section, idx) => {
                        return <span className={`side-nav-link ${current === `section`? sectionData.section.sectionName === section.sectionName? 'active-side-nav' :null :null}`} onClick={() => {setSectionData({section, idx}); setCurrent(`section`); console.log(sectionData)}}>{section.sectionName}</span>
                    })}


                </div>
                <SwitchCase />
            </div>
        </div>
    );
};

export default NewSyllabus;
