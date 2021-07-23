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
        ]
    });
    
    const [order, setOrder] = useState([
        'Heading',
        'Description',
        'Course Learning Outcomes',
        'Requried Materials'
    ]);

    const [sections, setSections] = useState([
        {
            contents: [
                {
                    type: 'paragraph',
                    content: ''
                }
            ],
            order: 0 ,
            sectionName: `Description`,
        }, 
        {
            contents: [
                {
                    type: 'list',
                    main: '',
                    subsType:'disc',
                    subs:[]
                }
            ],
            order: 1 ,
            sectionName: `Course Learning Outcomes`,
        }, 
        {
            contents: [
                {
                    type: 'list',
                    main: '',
                    subsType:'disc',
                    subs:[]
                }
            ],
            order: 2 ,
            sectionName: `Requried Materials`,
        }, 
        {
            contents: [],
            order: 3 ,
            sectionName: `Format and Requirements`,
        }, 
    ]);

    const [sectionData, setSectionData] = useState(syllabus[current]);

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
            default:
                return (
                    <Section
                        courseTitle={headers.courseTitle} 
                        setCurrent={setCurrent}

                        order={order}
                        setOrder={setOrder}

                        sectionData={sectionData}
                        setSectionData={setSectionData}

                        sections={sections}
                        setSections={setSections}
                    />
                )
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
                                            <DocGenerator data={headers} syllabus={syllabus} sections={sections}> 
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
                        <span className='side-nav-link'
                            onClick={e => {
                                let tempSections = [...sections];

                                let newSection = {
                                    contents: [
                                        {
                                            type: 'paragraph',
                                            content: ''
                                        },
                                        {
                                            type: 'list',
                                            main: '',
                                            subs: [],
                                            subsType:'disc'
                                        }
                                    ],
                                    order: order.length + 1 ,
                                    sectionName: `Section`,
                                };

                                tempSections.push(newSection);

                                setSections(tempSections);
                            }}
                        >
                            <IoIosAddCircleOutline style={{ fontSize: '200%' }} />
                        </span>
                        <span className={`side-nav-link `} onClick={() => null}>Edit</span>
                    </div>
                    <span className={`side-nav-link ${current ==='heading'? "active-side-nav" :null}`} onClick={() => setCurrent('heading')}>Header</span>
                    {sections.map((section, sectionIdx) => {console.log(sectionIdx)
                        return (
                            <span 
                              key={sectionIdx} 
                              className={`side-nav-link ${current === `${section.sectionName}`? "active-side-nav" :null}`} 
                              onClick={() => {
                                  setCurrent(section.sectionName);
                                  setSectionData(section)
                              }}
                            >
                                {section.sectionName}
                            </span>
                        )
                    })}
                </div>
                <SwitchCase />
            </div>
        </div>
    );
};

export default NewSyllabus;
