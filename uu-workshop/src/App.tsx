import type { RouteObject } from 'react-router-dom'
import { Outlet, Link, useRoutes } from 'react-router-dom'
import { subRoutes } from './routes/subRoutes'
import './app.scss'
import { MenuItems } from './components/MenuItems'
import WcagViewer from './Wcag/WcagViewer'

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
      <header className="header">
        {/* https://www.w3.org/WAI/standards-guidelines/wcag/conformance-logos/ */}
        <Link title="Gå til forsiden" role="logo" to="/">
          Miles + W3C === &#34;sant&#34;
        </Link>
      </header>
      <main className="main">
        <aside className="aside">
          <div id="primary_menu" role="heading" aria-label="Eksempler"></div>
          <nav aria-labelledby="primary_menu">
            <MenuItems subRoutes={subRoutes} />
          </nav>
          <div id="secondary_menu" role="heading" aria-label="Slides"></div>
          <nav aria-label="secondary_menu">...a list of cool slides ...</nav>
        </aside>
        <section>
          <Outlet />
        </section>
      </main>
      <footer className="footer">Footer</footer>
      {import.meta.env.MODE === 'development' && <WcagViewer />}
    </>
  )
}
