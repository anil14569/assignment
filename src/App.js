import './App.css'

import DashBoardView from './components/DashBoardView'
import SideDashBoard from './components/SideDashBoard'

const App = () => (
  <>
    <div className="mainAppContainer">
      <div>
        <SideDashBoard />
      </div>
      <DashBoardView />
    </div>
  </>
)

export default App
