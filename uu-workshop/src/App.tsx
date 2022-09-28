import type { RouteObject } from 'react-router-dom'
import { Outlet, Link, useRoutes } from 'react-router-dom'
import { subRoutes } from './routes/subRoutes'
// import WcagViewer from './Wcag/WcagViewer'
import './app.scss'
import { MenuItems } from './components/MenuItems'

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
          <nav aria-label="Sidemeny">
            <MenuItems subRoutes={subRoutes} />
          </nav>
          <nav aria-label="Workshop slides">...a list of slides ...</nav>
        </aside>
        <section>
          <Outlet />
        </section>
      </main>
      <footer className="footer">Footer</footer>
      {/* import.meta.env.MODE === 'development' && <WcagViewer /> */}
    </>
  )
}
