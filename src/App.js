import logo from './pastie.png';
import './App.css';
import CreateArticleForm from './components/CreateArticleForm'
function App() {
  return (
    <div className="App">
      <img src={logo} className="logo" alt="logo"
        width={40}
        height={40} />
      <h1>Pastie</h1>
      <CreateArticleForm />
    </div>
  );
}

export default App;
