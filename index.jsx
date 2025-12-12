import ReactDOM from 'react-dom/client';
import Badge from "./components/Badge/Badge"


function App() {
  return (
    <Badge color="gray">Badge</Badge>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
