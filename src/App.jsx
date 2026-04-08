import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import AdvisorsPage from './pages/AdvisorsPage'
import AdvisorDetailPage from './pages/AdvisorDetailPage'
import ContactPage from './pages/ContactPage'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/expert-advisors" element={<AdvisorsPage />} />
        <Route path="/expert-advisors/:slug" element={<AdvisorDetailPage />} />
        <Route path="/contacts" element={<ContactPage />} />
      </Routes>
    </Layout>
  )
}
