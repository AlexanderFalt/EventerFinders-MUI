import { ThemeProvider } from '@mui/material/styles';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/wrapper-components/LandingPage.jsx';
import SigninPage from './components/wrapper-components/SigninPage.jsx';
import RegisterPage from './components/wrapper-components/RegisterPage.jsx';
import HomePage from './components/wrapper-components/HomePage.jsx';
import EventsPage from './components/wrapper-components/EventsPage.jsx';
import CalenderPage from './components/wrapper-components/CalenderPage.jsx';
import CallspeakersPage from './components/wrapper-components/CallspeakersPage.jsx';
import TopSpeakersPage from './components/wrapper-components/TopSpeakersPage.jsx';
import TopEventsPage from './components/wrapper-components/TopEventsPage.jsx';
import DocumentationPage from './components/wrapper-components/DocumentationPage.jsx';
import SettingsPage from './components/wrapper-components/SettingsPage.jsx';
import theme from './styles';  // Import the theme from your styles.js

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router basename='/EventerFinders-MUI/'>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/sign-in" element={<SigninPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/main-page/home" element={<HomePage />} />
          <Route path="/main-page/calender" element={<CalenderPage />} />
          <Route path="/main-page/find-events" element={<EventsPage />} />
          <Route path="/main-page/call-speakers" element={<CallspeakersPage />} />
          <Route path="/main-page/top-speakers" element={<TopSpeakersPage />} />
          <Route path="/main-page/top-events" element={<TopEventsPage />} />
          <Route path="/main-page/documentation" element={<DocumentationPage />} />
          <Route path="/main-page/settings" element={<SettingsPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}