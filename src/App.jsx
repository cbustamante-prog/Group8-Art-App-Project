import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import ScrollToTop from './components/ScrollToTop';
import ClickMusicNotes from './components/ClickMusicNotes';
import BackgroundMusicEffects from './components/BackgroundMusicEffects';
import Home from './pages/Home';

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <ScrollToTop />
        <ClickMusicNotes />
        <div className="relative isolate min-h-screen">
          <BackgroundMusicEffects />
          <div className="relative z-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
        </div>
      </Router>
      <Toaster />
    </QueryClientProvider>
  )
}

export default App