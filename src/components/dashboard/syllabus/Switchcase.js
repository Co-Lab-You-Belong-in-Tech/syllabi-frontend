const SwitchCase = prp[] => {

    switch (current) {
        case 'heading':
            return (
                <Heading
                    headers={headers}
                    setCurrent={setCurrent}
                    setHeaders={setHeaders}
                />
            );

        case 'description':
            return (
                <Description
                    courseTitle={headers.courseTitle} 
                    syllabus={syllabus}
                    description={syllabus.description}
                    setSyllabus={setSyllabus}
                    setCurrent={setCurrent}
                />
            );
        case 'outcome':
            return (
                <Outcomes
                    courseTitle={headers.courseTitle} 
                    syllabus={syllabus} 
                    setCurrent={setCurrent}
                    setSyllabus={setSyllabus}
                />
            );
        case 'requirements':
            return (
                <Requirements
                    courseTitle={headers.courseTitle} 
                    syllabus={syllabus} 
                    setCurrent={setCurrent}
                    setSyllabus={setSyllabus}
                />
            )
        case 'format':
            return (
                <Format 
                    courseTitle={headers.courseTitle}
                    syllabus={syllabus} 
                    setCurrent={setCurrent}
                    setSyllabus={setSyllabus}
                />
            )
        case 'section':
            return (
                <Section
                    courseTitle={headers.courseTitle} 
                    syllabus={syllabus} 
                    setCurrent={setCurrent}
                    setSyllabus={setSyllabus}
                    sectionData={sectionData}
                />
            )
        case 'preview':
            return <Preview />;
        default:
            return <h1>No Component Rendered</h1>;
    }
};