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
        <div>
            <div>
                <div><span>Home</span></div>
                <div>
                    <input
                        placeholder="Enter syllabus Title"
                    />
                </div>
                <div>
                    <span>See Preview</span>
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