import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NotFound from './components/NotFound';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Fallback route for unmatched URLs */}
        <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App;
