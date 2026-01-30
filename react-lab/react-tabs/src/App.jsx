import { useState } from 'react'
import Overview from './components/Overview'
import Features from './components/Features'
import Pricing from './components/Pricing'
import './App.css'

function App() {

  const [tab, setTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', component: <Overview /> },
    { id: 'features', label: 'Features', component: <Features /> },
    { id: 'pricing', label: 'Pricing', component: <Pricing /> }
  ];

  return (
    <>
      <div>
        {tabs.map((tabItem) => (
          <button 
            key={tabItem.id}
            onClick={() => setTab(tabItem.id)}
          >
            {tabItem.label}
          </button>
        ))}
      </div>
      <div className='content'>
        {tabs.map((tabItem) => (
          tab === tabItem.id && tabItem.component
        ))}
      </div>
    </>
  )
}

export default App
