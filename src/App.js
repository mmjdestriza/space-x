import { lazy, Suspense } from "react";
import SearchBar from "./components/SearchBar";
import Loading from "./img/loading.gif"
import './App.css';

const List = lazy (()=> import('./components/List'));

function App() {
  
  return (
    <div className="App">
      <SearchBar/>
      <Suspense fallback={<img src={Loading} className="loading-gif"/>}>
      <List/>
      </Suspense>
    </div>
  );
}

export default App;
