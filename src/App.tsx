import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ClientsPage from './pages/ClientsPage';
import ServicesPage from './pages/ServicesPage';
import ContactsPage from './pages/ContactsPage';
import FAQPage from './pages/FAQPage';
import BlogPage from './pages/BlogPage';
import WorksPage from './pages/WorksPage';
import PolicyPage from './pages/PolicyPage';
import PostPage from './pages/PostPage';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/works" element={<WorksPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/policy" element={<PolicyPage />} />
        <Route path="/blog/:slug" element={<PostPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
