import { Navbar } from './components/common/Navbar';
import HomePage from './pages/home';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-[#3B82F6] selection:text-white relative">
      <Navbar />
      <HomePage />
    </div>
  );
}
