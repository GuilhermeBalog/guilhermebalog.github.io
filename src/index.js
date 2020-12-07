import React from 'react';
import { render } from 'react-snapshot';

import './index.css'

import App from './pages';

const rootElement = document.getElementById('root')

render(<App />, rootElement)
