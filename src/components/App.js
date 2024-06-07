// src/components/App.js
import React from 'react';
import Editor from './Editor';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>My Custom CodePen Clone</h1>
            </header>
            <main>
                <Editor />
                {/* Add any new components or modify existing ones here */}
            </main>
        </div>
    );
}

export default App;
