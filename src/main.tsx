import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { store } from "./store/index.ts"
import App from './components/app/App.tsx'
import './style/index.css'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
