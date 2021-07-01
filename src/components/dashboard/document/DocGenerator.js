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
                           text:`Instructor: \t\t${props.data.name}`,
                           break: 1
                       }),
                       new TextRun({
                           text: `Office Location: \t\tPierce College`,
                           break: 1
                       }),
                       new TextRun({
                           text: `Office Hours:`,
                           break: 1
                       }),
                       new TextRun({
                        text: `\t\t${props.data.officeHours}`,
                        alignment: AlignmentType.CENTER
                        }),
                       new TextRun({
                           text: `Email: \t\t\t${props.data.email}`,
                           break: 1
                       }),
                       new TextRun({
                           text: `Office Phone: \t\t${props.data.number}`,
                           break: 1
                       })
                   ]
               }),
                // Course Description
                new Paragraph({
                   heading: HeadingLevel.HEADING_2,
                   alignment: AlignmentType.LEFT,
                   children: [
                    new TextRun({
                        text: 'Course Description',
                        break: 1
                    })
                   ]
                }),
                new Paragraph({
                   text: props.syllabus.description,
                }),

                // Learning Outcomes
                new Paragraph({
                    heading: HeadingLevel.HEADING_2,
                    alignment: AlignmentType.LEFT,
                    children: [
                     new TextRun({
                         text: 'Course Learning Outcomes',
                         break: 1
                     })
                    ]
                }),

                ...props.syllabus.outcomes.map(outcome => {
                    return new Paragraph({
                        children: [
                            new TextRun({
                                text: `CLO ${outcome.outcome} - `,
                                bold: true
                            }),
                            new TextRun({
                                text:outcome.data
                            }),
                        ]
                    })
                }),

                // Required Text and Materials
                new Paragraph({
                    heading: HeadingLevel.HEADING_2,
                    alignment: AlignmentType.LEFT,
                    children: [
                     new TextRun({
                         text: 'Required Texts and Materials',
                         break: 1
                     })
                    ]
                }),

                ...props.syllabus.requirements.map(requirement => {
                    return new Paragraph({
                        text: requirement.data,
                        bullet: {
                            level: 0
                        }
                    })
                }),

                // Course Format and Requirements
                new Paragraph({
                    heading: HeadingLevel.HEADING_2,
                    alignment: AlignmentType.LEFT,
                    children: [
                     new TextRun({
                         text: 'Course Format and Requirements',
                         break: 1
                     })
                    ]
                }),

                ...props.syllabus.format.map(format => {
                    return new Paragraph({
                
                        children: [
                            new TextRun({
                                text: format.data,
                                bullet: {
                                    level: 0
                                }
                            }),
                            ...format.points.map(point => {
                                return new TextRun({
                                    text: point,
                                    bullet: {
                                        level: 1
                                    }
                                })
                            })
                        ]
                    })
                }),
            ]
        }
    ]
    });
    


    return(
        <button
            className="new-syllabus-download"

            onClick={()=> {
                Packer.toBlob(doc).then((blob) => {
                    console.log(props.syllabus)

                    saveAs(blob, `${props.data.syllabus}`);
                })
            }}
        >Download</button>
    )
};

export default DocGenerator;