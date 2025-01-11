import { createRoot } from 'react-dom/client'
import './index.css'
import './utils/i18n.ts'
import { BrowserRouter ,Route,Routes} from "react-router-dom"
import { Provider } from 'react-redux'
import store from './store/index.ts'
import { Toaster } from 'react-hot-toast'
import App from './App.tsx'
import Contexts from './context/Contexts.tsx'


createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
    <Provider store={store}>
      <Contexts>
        <Routes>
          <Route path='/*' element={<App />} />
        </Routes>
        <Toaster 
            toastOptions={{
              position:"top-right",
              className:"noOutline"
            }}
          />
      </Contexts>
      </Provider>
    </BrowserRouter>,
)
