import React, { useState } from 'react';
import { IoIosAddCircleOutline } from 'react-icons/io';

const Format = (props) => {
    const [cFields, setCFields] = useState(props.syllabus.format);
    const [format, setFormat] = useState(4);
    const [show, setShow] = useState([true])
    const [listType, setListType] = useState(['a'])

    const handleChange = e => {
        let array = [...cFields]
        array[e.target.name] = {...array[e.target.name], data:e.target.value}
        setCFields(array)
    };
    
    const handlePointChange = (e, i, idx)=> {
        e.persist();
        console.log(i, idx)
        let array = [...cFields]
        array[i].points[idx] = e.target.value
        setCFields(array)
        console.log(cFields, show)
    };

    const handleBlur = (e) => {
        props.setSyllabus({
            ...props.syllabus,
            format: cFields,
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
                                <textarea
                                    name={i}
                                    className="outcome-field" 
                                    value={cFields[i].data}
                                    onChange={handleChange}
                                />
                                <div>
                                    <span id="format-add-list" onClick={()=> {
                                        let showArray = [...cFields]
                                        showArray[i].list = !showArray[i].list
                                        setCFields(showArray)
                                    }} onBlur={handleBlur}>{cFields[i].list? 'Remove List': 'Add List'} </span>

                                    <span id="format-add-list"
                                        onClick={e => {
                                            let cFieldsArray = [...cFields];
                                            cFieldsArray[i].points.push('');
                                            setCFields(cFieldsArray)
                                        }}
                                    >Add Point</span>
                                    <select 
                                        onChange = {e => { 
                                            let listTypeChanger = [...cFields]
                                            listTypeChanger[i].listType = e.target.value
                                            setCFields(listTypeChanger)
                                            console.log(cFields)
                                        }}
                                    >
                                       <option value="ul">Bullet</option>
                                       <option value='a'>Letter</option>  
                                       <option value="1">Number</option>
                                    </select>
                                </div>
                                { cFields[i].listType ==='ul'? 
                                <ul>
                                {cFields[i].list && item.points.map((point, idx) => {
                                    return( 
                                        <li style={{'listStyle': 'disc'}}> 
                                            <input 
                                                value={cFields[i].points[idx]} 
                                                onChange={e => {handlePointChange(e ,i, idx)}} 
                                            />
                                        </li>)
                                })}
                                </ul>
                                :
                                <ol type={cFields[i].listType}>
                                {cFields[i].list && item.points.map((point, idx) => {
                                    return <li> <input 
                                        value={cFields[i].points[idx]} 
                                        onChange={e => {handlePointChange(e ,i, idx)}} 
                                    /> </li>
                                })}
                                </ol>}
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
                                        listType:'ul',
                                        points: ['']
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
