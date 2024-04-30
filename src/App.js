import Navbar from './Component/Navbar';
import Sidebar from './Component/Sidebar';
import './App.css';
import MainContainer from './Component/MainContainer';

function App() {
  return (
    <div className="App w-full h-auto bg-white ">
      <Navbar />
      <Sidebar />
      <MainContainer />
    </div>
  );
}

export default App;
