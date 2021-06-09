import {
    AlignmentType,
    Document,
    HeadingLevel,
    Packer,
    Paragraph,
    TabStopPosition,
    TabStopType,
    TextRun
} from "docx";

import {saveAs} from 'file-saver';

const DocGenerator = props => {

    const doc = new Document({
    sections:[
        {
            children: [
                // Heading Section
                new Paragraph({
                    text: props.data.courseTitle,
                    heading: HeadingLevel.HEADING_1,
                    alignment: AlignmentType.CENTER,
    
                }),
                new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [
                        new TextRun({
                            text:`Course Syllabus`
                        }),
                        new TextRun({
                            text: `${props.data.semester}`,
                            break: 1
                        }),
                        new TextRun({
                            text: `Section: ${props.data.section}`,
                            break: 1
                        }),
                        new TextRun({
                            text: `${props.data.college}, ${props.data.section}`,
                            break: 1
                        }),
                        new TextRun({
                            text: `${props.data.meetingDays}, ${props.data.startTime} to ${props.data.endTime}`,
                            break: 1
                        }),
                    ]
                }),

                // Professor Information
               new Paragraph({
                   alignment: AlignmentType.LEFT,
                   children: [
                       new TextRun({
                           text:'Instructor:',
                           break: 2
                       }),
                       new TextRun({
                           text: props.data.name,
                           break: 1
                       }),
                       new TextRun({
                           text: 'Office Hours:',
                           break: 2
                       }),
                       new TextRun({
                           text: props.data.officeHours,
                           break: 1
                       }),
                       new TextRun({
                           text: 'Email:',
                           break: 2
                       }),
                       new TextRun({
                           text: props.data.email,
                           break: 1
                       })
                   ]
               }),

               new Paragraph({
                   text: 'Course Description',
                   heading: HeadingLevel.HEADING_2,
                   alignment: AlignmentType.LEFT
               }),
               new Paragraph({
                   text: props.syllabus.description,
               })
            ]
        }
    ]
    });
    


    return(
        <button
            className="new-syllabus-download"

            onClick={()=> {
                Packer.toBlob(doc).then((blob) => {
                    saveAs(blob, `${props.data.syllabus}.docx`);
                })
            }}
        >Download</button>
    )
};

export default DocGenerator;