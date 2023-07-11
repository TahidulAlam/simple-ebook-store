import './App.css'
import Content from './components/content/Index'
import Header from './components/header/Index'
function App() {
  // Header
  Content
  return (
    <>
    <div className="fixedHeader">
    <Header />
    </div>
     <div className="bodyContent">
     <Content />
     </div>
    </>
  )
}

export default App
