import React, { useState, useEffect } from 'react';
import Heading from './Heading';

const NewSyallbus = () => {
    const [current, setCurrent] = useState('heading');
    const [user, setUser] = useState('user')
    const [headers, setHeaders] = useState({
            title: 'Enter syllabus title',
            subtitle: '',
            date: '',
            time: '',
            name: '',
            email: '',
            number: '',
            location: '',
            officeHours: '',
    });


    const [download, setDownload] = useState(false);



    const SwitchCase = () => {
        switch (current) {
            case 'heading':
                return (
                    <Heading
                        headers={headers}
                        current={current}
                        setHeaders={setHeaders}
                    />
                );

            case 'component':
                return 'this is the component';
            default:
                return <h1>Hi</h1>;
        }
    };


    return (
        <div id="new-syllabus-cont">
            <div id="new-syllabus-nav">
                <div className="new-syllabus-navdivs">
                    <span className="new-syllabus-navtext">Home</span>
                </div>

                <div className="new-syllabus-navdivs">
                    <input

                        id="new-syllabus-titleform"
                        value={headers.title}
                    />
                </div>

                <div className="new-syllabus-navdivs">
                    <div id="new-syllabus-downloadcont">
                        <span className="new-syllabus-navtext">
                            See Preview
                        </span>
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
                                            <button className="new-syllabus-download">
                                                Download
                                            </button>
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
