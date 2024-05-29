import "./App.css";
import { FaceBook } from "./components/FaceBook/FaceBook";

function App() {
  return (
    <div className="app-container">
      <header>
        <h1 className="app-header">Welcome to My Facebook Login App</h1>
      </header>
      <main>
        <div className="app-content">
          <FaceBook />
        </div>
      </main>
      <footer className="app-footer">
        <p>&copy; 2024 My Facebook Login App</p>
      </footer>
    </div>
  );
}

export default App;
