import React, { useState, useEffect } from 'react';
import Heading from './Heading';
import DocGenerator from '../document/DocGenerator.js';
import CourseDes from './CourseDes.js'
import Outcomes from './Outcomes';

const NewSyallbus = () => {
    const [current, setCurrent] = useState('heading');
    const [user, setUser] = useState('user');
    const [headers, setHeaders] = useState({
        syllabus: '',
        docTitle: '',
        courseTitle: '',
        subtitle: '',
        name: '',
        startDate: '',
        endDate: '',
        startTime: '',
        endTime: '',
        room: '',
        email: '',
        number: '',
        officeHours: '',
        addTitle: '',
    });

    const [download, setDownload] = useState(false);

    const SwitchCase = () => {
        switch (current) {
            case 'heading':
                return (
                    <Heading
                        headers={headers}
                        current={current}
                        setCurrent={setCurrent}
                        setHeaders={setHeaders}
                    />
                );

            case 'description':
                return (
                    <CourseDes
                        setCurrent={setCurrent}
                    />
                );
            case 'outcome':
                return (
                    <Outcomes 
                        setCurrent={setCurrent}
                    />
                )
            default:
                return <h1>Hi</h1>;
        }
    };

    return (
        <div id="new-syllabus-cont">
            <div id="new-syllabus-nav">
                <div className="new-syllabus-navdivs">
                    <div id="new-syllabus-downloadcont">
                        <div className="dropdown">
                            <button
                                className="new-syllabus-download"
                                onClick={() => {
                                    setDownload(!download);
                                }}
                            >
                                Download
                            </button>
                            {download && (
                                <div className="dropdown-content">
                                    <div className="new-syllabus-dropdown">
                                        <div id="download-h6">
                                            <span>Select File Type</span>
                                        </div>
                                        <div className="dropdown-choice">
                                            Word Doc (.docx)
                                        </div>
                                        <div>
                                            <DocGenerator data={headers}>
                                                Download
                                            </DocGenerator>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <SwitchCase />
        </div>
    );
};

export default NewSyallbus;
