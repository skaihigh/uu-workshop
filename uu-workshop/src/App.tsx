import type { RouteObject } from 'react-router-dom'
import { Outlet, Link, useRoutes } from 'react-router-dom'
import { subRoutes } from './routes/subRoutes'

import WcagViewer from './Wcag/WcagViewer'
import { Footer } from './components/Footer'
import { SkipLinks } from './components/SkipLinks'
import './app.scss'

export default function App(): JSX.Element {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <Layout />,
      children: subRoutes,
    },
  ]
  return <>{useRoutes(routes)}</>
}

function Layout(): JSX.Element {
  return (
    <>
      <SkipLinks />
      <header className="header">
        {/* https://www.w3.org/WAI/standards-guidelines/wcag/conformance-logos/ */}
        <div role="banner">
          <Link title="Gå til forsiden" tabIndex={-1} to="/">
            Miles + W3C === &#34;sant&#34;
          </Link>
        </div>
        <nav>
          <Link title="Eksempler" to="/eksempler">
            Eksempler
          </Link>
          <Link title="Lysbilder" to="/lysbilder">
            Lysbilder
          </Link>
          <Link title="Oppgaver" to="/oppgaver">
            Oppgaver
          </Link>
        </nav>
      </header>
      <main className="main">
        {/*
          https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA12 }
          <aside className="aside">
          <div
            id="primary_menu"
            aria-level={1}
            role="heading"
            aria-label="Eksempler"
          >
          
            Eksempler
          </div>
        </aside>
      
      */}
        <p className="skip">
          <a title="Hovedinnhold" href="#content" id="content">
            Slides og Eksempler.
          </a>
        </p>
        <Outlet />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
      {import.meta.env.MODE === 'development' && <WcagViewer />}
    </>
  )
}
