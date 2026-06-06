import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './app/App'
import './app/styles/index.css'
import ModalState from './features/modal/ui/ModalState'
import QueryProvider from './app/providers/QueryProvider'
import { ThemeProvider } from './features/theme-switch/ThemeProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryProvider>
    <ThemeProvider>
    <BrowserRouter>
      <ModalState>
        <App />
      </ModalState>
    </BrowserRouter>
    </ThemeProvider>
  </QueryProvider>
)
