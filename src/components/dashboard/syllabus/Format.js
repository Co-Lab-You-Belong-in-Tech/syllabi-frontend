import React, { useState } from 'react';
import { IoIosAddCircleOutline } from 'react-icons/io';

const Format = (props) => {
    const [cFields, setCFields] = useState(props.syllabus.format);
    const [format, setFormat] = useState(4);
    const [show, setShow] = useState([true])

    const handleChange = e => {
        let array = [...cFields]
        array[e.target.name] = {...array[e.target.name], data:e.target.value}
        setCFields(array)
    };

    const handleBlur = (e) => {
        props.setSyllabus({
            ...props.syllabus,
            requirements: cFields,
        });
    };
    return (
        <div id="syllabus-content-cont" className="container">
            <div className="syllabus-textcontent-cont">
                <h2 className="page-section-title">
                    Section 5 (Course Format and Requirements)
                </h2>
                <span>{props.courseTitle}</span>
            </div>
            <div className="syllabus-formscontent-cont">
                <div id="syllabus-outcome-fields">
                    {cFields.map((item, i) => {
                        return (
                            <div id="outcome-mapped-items">
                                <span className="outcome-label">
                                    Format/Requirement {item.format}
                                </span>
                                <input
                                    name={i}
                                    className="outcome-field" 
                                    value={cFields[i].data}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <div>
                                    <span onClick={()=> {
                                        let array = [...show]
                                        array[i] = !array[i]
                                        setShow(array)
                                    }}>Add List</span>
                                    <select>
                                       <option>Bullet</option>
                                       <option>Letters</option>  
                                       <option>Number</option>
                                    </select>
                                </div>
                                <ol type="a">
                                {show[i] && item.points.map((point) => {
                                    return point
                                })}
                                </ol>
                            </div>
                        );
                    })}
                </div>
                <div className="syllabus-btncontent-cont">
                    <div className="add-field-div">
                        <span>Add a field</span>
                        <IoIosAddCircleOutline
                            style={{ fontSize: '250%' }}
                            onClick={() => {
                                let array = [...show]
                                array.push(false)
                                setFormat(format + 1);
                                props.setSyllabus({...props.syllabus,
                                    format:[
                                    ...cFields,
                                    {
                                        format: props.syllabus.format.length + 1,
                                        data: '',
                                        list: false,
                                        points: ['h']
                                    },
                                ]}); 
                                
                            }}
                        />
                    </div>

                    <div className="syllabus-prevnext-btns">
                        <button
                            className="btn-primary"
                            onClick={() => props.setCurrent('requirements')}
                        >
                            Previous Section
                        </button>
                        <button
                            className="btn-primary"
                            onClick={() => props.setCurrent('section')}
                        >
                            Next Section
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Format;
