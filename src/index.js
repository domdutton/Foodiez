import React from 'react'
import { createRoot } from 'react-dom/client'
import Foodiez from './Foodiez'
import './style/index.css'

const root = createRoot(document.getElementById('content'))
root.render(<Foodiez />)