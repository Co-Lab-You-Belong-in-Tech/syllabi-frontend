import React, {useState, useEffect } from 'react';

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

    const SwitchCase = () => {
        switch(current) {
            case 'heading':
                return (
                    'heading only'
                )
            default:
                return <h1>Hi</h1>
        }
    };

    return (
        <div><SwitchCase /></div>
    )


};

export default NewSyallbus;