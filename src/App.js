import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Categories from './components/Categories';
import Layout from './components/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/categories" element={<Categories />} />
        </Route>
      </Routes>

    </>
  );
}

export default App;
