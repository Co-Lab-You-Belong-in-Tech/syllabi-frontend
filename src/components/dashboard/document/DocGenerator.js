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
                    text: 'English 101: College Reading and Composition',
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
                            text:`Fall 202 Section: 13177`,
                            break: 1
                        }),

                    ]
                }),
               new Paragraph({
                   alignment: AlignmentType.LEFT,
                   children: [
                       new TextRun({
                           text:'Instructor:',
                           break: 2
                       }),
                       new TextRun({
                           text:'Greg menubar, Ed.D.',
                           break: 1
                       }),
                       new TextRun({
                           text: 'Office Hours:',
                           break: 2
                       }),
                       new TextRun({
                           text: 'Mondays and Wednesday from 10:00 to 12:00 via Zoom',
                           break: 1
                       }),
                       new TextRun({
                           text: 'Email:',
                           break: 2
                       }),
                       new TextRun({
                           text: 'menagm@elac.edu',
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
            onClick={()=> {
                Packer.toBlob(doc).then((blob) => {
                    saveAs(blob, "syllabus.docx");
                })
            }}
        >docx</button>
    )
};

export default DocGenerator;