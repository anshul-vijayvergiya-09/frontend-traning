import { useState } from 'react'
import Overview from './components/Overview'
import Features from './components/Features'
import Pricing from './components/Pricing'
import FAQitem from './components/FAQitem'
import Card from './components/Card'
import './App.css'

function App() {

  const [tab, setTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', component: <Overview /> },
    { id: 'features', label: 'Features', component: <Features /> },
    { id: 'pricing', label: 'Pricing', component: <Pricing /> }
  ];

    const FAQs = [
    {id: 1, question: 'How does the AI help me stay productive?', answer: 'The AI analyzes your tasks and priorities to help you focus on what matters most.'},
    {id: 2, question: 'Can I use this tool for team collaboration?', answer: 'Yes, you can share tasks, notes, and insights with your team in real time.'},
    {id: 3, question: 'Is my data secure?', answer: 'Your data is encrypted and handled with industry-standard security practices.'}
  ];

    const Cards = [
      {id: 1, title: 'Title 1', desc: 'Less Water is Not Healthy'},
      {id: 2, title: 'Title 2', desc: 'More Water is Dangerous'},
      {id: 3, title: 'Title 3', desc: 'Byte Go is one of the best website'}
    ]

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div>
        {tabs.map((tabItem) => (
          <button className='btn'
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
      <div>
        <h1 className='m-12'>Frequently Asked Questions</h1>
        <div className='flex flex-col gap-6 m-6'>
          {FAQs.map((FAQ, index) => (
            <FAQitem key={FAQ.id} 
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)} 
              question={FAQ.question} 
              answer={FAQ.answer}>
            </FAQitem>
          ))}
        </div>
        <div className='flex flex-col gap-6 m-6'>
            {
              Cards.map((card) => (
                <Card key={card.id} title={card.title} desc={card.desc}></Card>
              ))
            }
        </div>
      </div>
    </>
  )
}

export default App
