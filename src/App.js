import logo from './logo.svg';
import './App.css';
import AppRouter from './Config/router';
import DrawerAppBar from './component/navbar';

function App() {
  return (
    <div className="App">
     <AppRouter/>
     <DrawerAppBar/>
    </div>
  );
}

export default App;
