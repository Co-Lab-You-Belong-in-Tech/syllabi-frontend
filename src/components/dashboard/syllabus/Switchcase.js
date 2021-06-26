import Heading from './Heading';
import Description from './Description.js';
import Outcomes from './Outcomes.js';
import Requirements from './Requirements.js'
import Format from './Format.js'
import Section from './Section.js'
import Preview from './Preview';

const SwitchCase = props => {
    switch (props.current) {
        case 'heading':
            return (
                <Heading
                    headers={props.headers}
                    setCurrent={props.setCurrent}
                    setHeaders={props.setHeaders}
                />
            );

        case 'description':
            return (
                <Description
                    courseTitle={props.headers.courseTitle} 
                    syllabus={props.syllabus}
                    description={props.syllabus.description}
                    setSyllabus={props.setSyllabus}
                    setCurrent={props.setCurrent}
                />
            );
        case 'outcome':
            return (
                <Outcomes
                    courseTitle={props.headers.courseTitle} 
                    syllabus={props.syllabus} 
                    setCurrent={props.setCurrent}
                    setSyllabus={props.setSyllabus}
                />
            );
        case 'requirements':
            return (
                <Requirements
                    courseTitle={props.headers.courseTitle} 
                    syllabus={props.syllabus} 
                    setCurrent={props.setCurrent}
                    setSyllabus={props.setSyllabus}
                />
            )
        case 'format':
            return (
                <Format 
                    courseTitle={props.headers.courseTitle}
                    syllabus={props.syllabus} 
                    setCurrent={props.setCurrent}
                    setSyllabus={props.setSyllabus}
                />
            )
        case 'section':
            return (
                <Section
                    courseTitle={props.headers.courseTitle} 
                    syllabus={props.syllabus} 
                    setCurrent={props.setCurrent}
                    setSyllabus={props.setSyllabus}
                    sectionData={props.sectionData}
                />
            )
        case 'preview':
            return <Preview />;
        default:
            return <h1>No Component Rendered</h1>;
    }
};

export default SwitchCase