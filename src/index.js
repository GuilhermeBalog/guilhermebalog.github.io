import React from 'react';
import { render } from 'react-snapshot';

import './index.css'

import App from './App';

const rootElement = document.getElementById('root')

render(<App />, rootElement)
