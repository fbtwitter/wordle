import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App'

import './reset.css'
import './styles.css'

createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
