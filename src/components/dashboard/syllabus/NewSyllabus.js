import React, { useState, useEffect } from 'react';
import Heading from './Heading';

const NewSyallbus = () => {
    const [current, setCurrent] = useState('heading');
    const [syllabus, setSyllabus] = useState({
        user: '1234',
        data: {
            heading: {
                title: 'Enter syllabus title',
                subtitle: '',
                date: '',
                time: '',
                name: '',
                email: '',
                number: '',
                location: '',
                officeHours: '',
            },
        },
    });

    const [download, setDownload] = useState(false);

    const SwitchCase = () => {
        switch (current) {
            case 'heading':
                return (
                    <Heading
                        data={syllabus.data}
                        current={current}
                        setCurrent={setCurrent}
                    />
                );
            case 'component':
                return 'this is the component';
            default:
                return <h1>Hi</h1>;
        }
    };

    // const handleChange = e => {
    //     setSyllabus({
    //         ...syllabus,
    //         syllabus.data: {

    //         }
    //     })
    // }

    return (
        <div id="new-syllabus-cont">
            <div id="new-syllabus-nav">
                <div className="new-syllabus-navdivs">
                    <span className="new-syllabus-navtext">Home</span>
                </div>

                <div className="new-syllabus-navdivs">
                    <input
                        onChange={(e) => {
                            setSyllabus({
                                ...syllabus,
                                data: {
                                    ...syllabus.data,
                                    heading: {
                                        ...syllabus.data.heading,
                                        title: e.target.value,
                                    },
                                },
                            });
                        }}
                        id="new-syllabus-titleform"
                        value={syllabus.data.heading.title}
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
