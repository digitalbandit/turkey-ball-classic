import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { DetailsPage } from './pages/DetailsPage'
import { FaqPage } from './pages/FaqPage'
import { HomePage } from './pages/HomePage'
import { ImInPage } from './pages/ImInPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { RulesPage } from './pages/RulesPage'
import { TeamsPage } from './pages/TeamsPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="details" element={<DetailsPage />} />
          <Route path="rules" element={<RulesPage />} />
          <Route path="teams" element={<TeamsPage />} />
          <Route path="faq" element={<FaqPage />} />
          <Route path="im-in" element={<ImInPage />} />
          <Route path="rsvp" element={<Navigate to="/im-in" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
