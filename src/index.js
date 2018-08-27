import React, { Component } from 'react';
import { render } from 'react-dom';
import { EditorMaster } from './components/EditorMaster';
import './style.css';

render(<EditorMaster />, document.getElementById('root'));

/*A comment about letterIndex and lineIndex
 *in editorWrapper component, the letterIndex
 *ranges from [0, line.width] (where 0 
 *should be treated as cursor before first character
 *and line.width should be treated as cursor after last
 *character) inclusive. whereas, the lineIndex
 *ranges from [0, line.height) exclusive
 *of height of the line.
 *
 *TODO:
 *Space should render correct.
*/