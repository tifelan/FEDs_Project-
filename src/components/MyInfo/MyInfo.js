import React from 'react';
import ReactDOM  from 'react-dom';

const MyInfo = () => {
    return (
        <div>
            <h1>
                I am Tife
                I like doing thr ffing things
                <ul>
                    <li>Coding</li>
                    <li>Design</li>
                    <li>Singing</li>
                </ul>
            </h1>
        </div>
    )
}

export default MyInfo

ReactDOM.render(<MyInfo/>, document.getElementById("root"))