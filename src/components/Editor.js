// src/components/Editor.js
import React, { useState } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';
import './Editor.css';

function Editor() {
    const [code, setCode] = useState('// Write your code here...');

    return (
        <div className="editor-container">
            <CodeMirror
                value={code}
                options={{
                    mode: 'javascript',
                    theme: 'material',
                    lineNumbers: true,
                }}
                onBeforeChange={(editor, data, value) => {
                    setCode(value);
                }}
            />
        </div>
    );
}

export default Editor;
