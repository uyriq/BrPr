import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import App from './app'

const rootElement = document.getElementById('root') as HTMLElement
const root = createRoot(rootElement)

root.render(
    <StrictMode>
        <App />
    </StrictMode>
)
