import type { RouteObject } from 'react-router-dom'
import { Outlet, Link, useRoutes } from 'react-router-dom'
import { subRoutes } from './routes/subRoutes'

import WcagViewer from './Wcag/WcagViewer'
import { Footer } from './components/Footer'
import { SkipLinks } from './components/SkipLinks'
import { Toggle } from './components/'
import './app.scss'
import { useState } from 'react'

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
  const [visualMode, setVisualMode] = useState(false)

  return (
    <>
      <SkipLinks />
      <header className={`header ${visualMode ? 'visuallyhidden' : ''}`}>
        {/* https://www.w3.org/WAI/standards-guidelines/wcag/conformance-logos/ */}
        <div role="banner">
          <Link title="Gå til forsiden" tabIndex={-1} to="/">
            Miles + W3C === &#34;sant&#34;
          </Link>
          <blockquote lang="en">
            “Nobody puts Baby in the corner” - Johnny Castle
          </blockquote>
        </div>
        <nav>
          <Link title="Hvem er vi?" to="/">
            De tre musketerer
          </Link>
          <Link title="Påstander" to="/paastander">
            Påstander
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
      {/* visuallyhidden */}
      <main className={`main ${visualMode ? 'visuallyhidden' : ''}`} id="main">
        <Outlet />
      </main>
      <footer className={`footer ${visualMode ? 'visuallyhidden' : ''}`}>
        <Footer />
      </footer>
      <div className="footer-addons">
        <a href="#root" aria-label="naviger til toppen av siden">
          Til topps
        </a>
        <Toggle
          label="blind modus"
          checked={false}
          onChange={() => {
            setVisualMode(!visualMode)
          }}
        />
      </div>
      {import.meta.env.MODE === 'development' && <WcagViewer />}
    </>
  )
}
