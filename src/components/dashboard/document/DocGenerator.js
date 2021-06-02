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
                new Paragraph({
                    text: props.data.title,
                    heading: HeadingLevel.HEADING_1,
                    alignment: AlignmentType.CENTER,
    
                }),
                new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [
                        new TextRun({
                            text:`Course Syllabus`,
                            break: 1
                        }),
                        new TextRun({
                            text: props.data.subtitle,
                            break: 1
                        }),

                    ]
                }),
               new Paragraph({
                   alignment: AlignmentType.LEFT,
                   children: [
                       new TextRun({
                           text:'Instructor:',
                           size: 100,
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
                    saveAs(blob, `${props.data.syllabus}`);
                })
            }}
        >Download</button>
    )
};

export default DocGenerator;