import logo from './pastie.png';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";

import CreateArticleForm from './components/CreateArticleForm'
import ListArticlePage from './components/ListArticlePage'
import NavigationBar from './components/NavigationBar'

function App() {
  return (
    <div className="App">
      <Link to="/">
        <img src={logo} className="logo" alt="logo"
          width={50}
          height={50}
        />
      </Link>

      <h1>Pastie</h1>
      <NavigationBar />
			<br />

      <Routes>
        <Route path="/" element={<CreateArticleForm />} />
        <Route path="archives" element={<ListArticlePage />} />
      </Routes>
    </div>

  );
}

export default App;
