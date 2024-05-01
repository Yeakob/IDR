import Navbar from './Component/Navbar';
import Sidebar from './Component/Sidebar';
import './App.css';
import MainContainer from './Component/MainContainer';

function App() {
  return (
    <div className=" App w-full overflow-hidden no-scrollbar fixed h-screen bg-white ">
      <Navbar />
      <Sidebar />
      <MainContainer />
    </div>
  );
}

export default App;
