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
          <Link title="Hvem er vi?" to="/">
            De tre musketerer
          </Link>
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
        <Outlet />
      </main>
      <footer className="footer">
        <Footer />
        <a href="#root" aria-label="naviger til toppen av siden">
          Til topps
        </a>
      </footer>
      {import.meta.env.MODE === 'development' && <WcagViewer />}
    </>
  )
}
