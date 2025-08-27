import Header from './components/Header'
import Hero from './components/Hero'
import ServiceCards from './components/ServiceCard'
import UIUXSection from './components/UIUXSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import './styles.css'
export function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <ServiceCards />
        <UIUXSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
