import './App.css';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Details from './Details';

function App() {

  return (
    <div className="app">
      <div className="app-inside">
        <Sidebar/>
        <div className="center">
          <Navbar/>
          <Details/>        
        </div>
      </div>
    </div>
  );
}

export default App;
