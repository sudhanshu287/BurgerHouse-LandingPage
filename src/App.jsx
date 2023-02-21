
import BookTable from "./components/BookTable"
import Features from "./components/Features"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Menu from "./components/Menu"
import Upcoming from "./components/Upcoming"

function App() {


  return (
    <div>
      <div className="headContainer">
        <div className="container-alt">
          <Header />
        </div>
      </div>
      <div className="container">
        <Features/>
        <Menu />
        <Upcoming/>
        <BookTable/>
      </div>
      <div className="container-alt">
        <Footer/>
      </div>
    </div>
  )
}

export default App
