import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import HomePage from './pages/home';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-[#3B82F6] selection:text-white relative flex flex-col justify-between">
      <Navbar />
      <main className="flex-1">
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}
