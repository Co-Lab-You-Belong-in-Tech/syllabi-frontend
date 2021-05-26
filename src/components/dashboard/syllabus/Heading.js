import React from 'react';

const Heading = props => {
    return (
        <div id="heading-cont">
            <div id="heading-content-cont">
                <span id="heading-header">Write in the essential information first... we'll make sure it's ADA compliant!</span>
                <form>
                    <input />
                    <input />
                    <input />
                    <input />
                    <input />
                    <input />
                    <input />
                    <input />
                    <button onClick={() => {
                        props.setCurrent('component')
                    }}>Next</button>
                </form>
            </div>
        </div>
    )
};

export default Heading;