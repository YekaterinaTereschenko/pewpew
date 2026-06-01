import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import ModalState from './components/context/ModalState'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ModalState>
      <App />
    </ModalState>
  </BrowserRouter>
)