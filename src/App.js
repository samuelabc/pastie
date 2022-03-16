import logo from './pastie.png';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";

import CreateArticleForm from './components/CreateArticleForm'
import ListArticlePage from './components/ListArticlePage'
import NavigationBar from './components/NavigationBar'
import ArticlePage from './components/ArticlePage'
import { Space, Typography } from 'antd'

const { Title } = Typography
function App() {
  return (
    <div className="App">
      <Space direction="horizontal" align="end">
        <Link to="/">
          <img src={logo} className="logo" alt="logo"
            width={60}
            height={60}
          />
        </Link>
        <Title>Pastie</Title>
      </Space>

      <NavigationBar />
      <br />

      <Routes>
        <Route path="/" element={<CreateArticleForm />} />
        <Route path="archives/:articleID" element={<ArticlePage />} />
        <Route path="archives" element={<ListArticlePage />} />
      </Routes>
    </div>

  );
}

export default App;
