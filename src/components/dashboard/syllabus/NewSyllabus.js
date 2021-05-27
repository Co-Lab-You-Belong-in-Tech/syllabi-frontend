import React, {useState, useEffect } from 'react';
import Heading from './Heading';

const NewSyallbus = () => {
    const [current, setCurrent] = useState('heading')
    const [syllabus, setSyllabus] = useState({
        user: '1234',
        data: {
            headings: {
                title: "",
                subtitle: "",
                date: "",
                time: "",
                name: "",
                email: "",
                number: "",
                location: "",
                officeHours : ""
            }
        }
    });

    const [download, setDownload] = useState(false);

    const SwitchCase = () => {
        switch(current) {
            case 'heading':
                return <Heading data={syllabus.data} current={current} setCurrent={setCurrent} />
            case 'component':
                return 'this is the component'
            default:
                return <h1>Hi</h1>
        }
    };

    return (
        <div id="new-syllabus-cont">
            <div id="new-syllabus-nav">
                <div className="new-syllabus-navdivs" style={{'padding-left': '1%'}}>
                    <span className="new-syllabus-navtext">Home</span>
                </div>

                <div className="new-syllabus-navdivs" style={{'justifyContent': 'center'}}>
                    <input
                        placeholder="Enter syllabus Title"
                    />
                </div>
                
                <div className="new-syllabus-navdivs" style={{'padding-right': '1%', 'justifyContent': 'flex-end'}}>
                    <span className="new-syllabus-navtext">See Preview</span>
                    <button onClick={() => {
                        setDownload(!download)
                    }}>Download</button>
                    {download && 
                        <div id="download-container">
                            <div id="download-h6"><span>Select File Type</span></div>
                            <div>Word Doc (.docx)</div>
                            <div><button>Download</button></div>
                        </div>
                    }
                </div>
            </div>
            <SwitchCase />
        </div>
    )


};

export default NewSyallbus;