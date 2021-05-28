import React, {useState, useEffect } from 'react';
import Heading from './Heading';

const NewSyallbus = () => {
    const [current, setCurrent] = useState('heading')
    const [heading, setHeading] = useState({
        title: "Enter syllabus title",
        subtitle: "",
        date: "",
        time: "",
        name: "",
        email: "",
        number: "",
        location: "",
        officeHours : ""
    })
    const [content, setContent] = useState([
        {}
    ]);

    const [download, setDownload] = useState(false);

    // const changeHeading = e => {
    //     setHeading({
    //         ...heading,
    //         [e.target.name] : e.target.value
    //     })
    // }

    const SwitchCase = () => {
        switch(current) {
            case 'heading':
                return <Heading setHeading={setHeading} heading={heading} current={current} setCurrent={setCurrent} />
            case 'component':
                return 'this is the component'
            default:
                return <h1>Hi</h1>
        }
    };

    

    return (
        <div id="new-syllabus-cont">
            <div id="new-syllabus-nav" style={{'backgroundColor':'linearGradient("to right", blue, rgba(255,0,0,1))'}}>
                <div className="new-syllabus-navdivs" style={{'padding-left': '1%'}}>
                    <span className="new-syllabus-navtext">Home</span>
                </div>

                <div className="new-syllabus-navdivs" style={{'justifyContent': 'center'}}>
                    <input
                        onChange={(e) => {
                            setHeading({
                                [e.target.name]: [e.target.value]
                            })
                        }}
                        id="new-syllabus-titleform"
                        value={heading.title}
                    />
                </div>

                <div className="new-syllabus-navdivs" style={{'padding-right': '1%', 'justifyContent': 'flex-end'}}>
                    <div id="new-syllabus-downloadcont">
                        <span className="new-syllabus-navtext">See Preview</span>
                        <div className="dropdown">
                        <button className="new-syllabus-download" onClick={() => {
                            setDownload(!download)
                        }}>Download</button>
                        {download && 
                            <div className="dropdown-content">
                            <div className="new-syllabus-dropdown">
                                <div id="download-h6"><span style={{'fontSize': '12px'}}>Select File Type</span></div>
                                <div className="dropdown-choice">Word Doc (.docx)</div>
                                <div><button className="new-syllabus-download">Download</button></div>
                            </div>
                            </div>
                        }
                        </div>
                    </div>
                </div>
            </div>
            <SwitchCase />
        </div>
    )


};

export default NewSyallbus;