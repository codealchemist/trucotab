import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import Root from './routes/root'
import Home from './routes/home'
import About from './routes/about'
import JsExample from './routes/js-example'
import Settings from './routes/settings'
import LogRoute from './routes/log'
import LeaderboardPositionsRoute from './routes/leaderboard-positions'
import store, { persistor } from './store'
import './styles.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useSelector } from 'react-redux'

function ThemedToast() {
  const theme = useSelector(
    s => (s && s.settings && s.settings.theme) || 'dark',
  )
  // react-toastify expects 'light' | 'dark' | 'colored'
  const t = theme === 'dark' ? 'dark' : 'light'
  return <ToastContainer theme={t} position="bottom-center" />
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: async () => {
          return { message: 'Bienvenido! 🖖' }
        },
      },
      { path: 'about', element: <About /> },
      { path: 'js', element: <JsExample /> },
      { path: 'settings', element: <Settings /> },
      { path: 'log', element: <LogRoute /> },
      { path: 'leaderboard', element: <LeaderboardPositionsRoute /> },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<div />} persistor={persistor}>
        <RouterProvider router={router} />
        <ThemedToast />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
