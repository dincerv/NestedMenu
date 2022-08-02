import '../styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Sidebar from '../components/Sidebar'

function App() {
  return (
    <div className="main">
      <Sidebar />
      <div className="container">
        <h1>JavaScript Nested MENU Project</h1>
        <i className="bi bi-arrow-down-square-fill" />
        <p>Dincer Velioglu</p>
      </div>
    </div>
  )
}
export default App
