import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './componants/index.css'
import InputValidation from './assessment-1/InputValidation.tsx'
// import MovingCar from './assessment-2/MovingCar.tsx'

// createRoot(document.getElementById('root')!).render(<BrowserRouter><Launcher /></BrowserRouter>)
createRoot(document.getElementById('root')!).render(<BrowserRouter><InputValidation /></BrowserRouter>)
