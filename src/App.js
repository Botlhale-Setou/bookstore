import './App.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Routes, Route } from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Categories';

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="categories" element={<Categories />} />
    </Routes>
  </div>
);

export default App;
