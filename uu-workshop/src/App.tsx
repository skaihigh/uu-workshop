import type { RouteObject } from 'react-router-dom'
import { Outlet, Link, useRoutes } from 'react-router-dom'
import { slideRoutes, subRoutes } from './routes/subRoutes'

import { MenuItems } from './components/MenuItems'
import WcagViewer from './Wcag/WcagViewer'
import { Footer } from './components/Footer'
import { SkipLinks } from './components/SkipLinks'
import './app.scss'

export default function App(): JSX.Element {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <Layout />,
      children: subRoutes.concat(slideRoutes),
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
        <Link title="Gå til forsiden" role="banner" to="/">
          Miles + W3C === &#34;sant&#34;
        </Link>
      </header>
      <main className="main">
        <aside className="aside">
          <div
            id="primary_menu"
            aria-level={1}
            role="heading"
            aria-label="Eksempler"
          >
            {/* https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA12  */}
            Eksempler
          </div>
          <nav role="menu" aria-labelledby="primary_menu">
            <MenuItems subRoutes={subRoutes} />
          </nav>
          <div
            id="secondary_menu"
            aria-level={1}
            role="heading"
            aria-label="Slides"
          >
            Lysbilder
          </div>
          <nav role="menu" aria-label="secondary_menu">
            <MenuItems subRoutes={slideRoutes} />
          </nav>
        </aside>
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
