import type { RouteObject } from 'react-router-dom'
import { Outlet, Link, useRoutes } from 'react-router-dom'
import { subRoutes } from './routes/subRoutes'
// import WcagViewer from './Wcag/WcagViewer'
import styles from './App.module.scss'

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
      <header className={styles.header}>
        {/* https://www.w3.org/WAI/standards-guidelines/wcag/conformance-logos/ */}
        <Link title="Gå til forsiden" role="logo" to="/">
          Miles + W3C === &#34;sant&#34;
        </Link>
      </header>
      <main className={styles.main}>
        <aside className={styles.aside}>
          <nav aria-label="Sidemeny">
            {subRoutes.map((route, index) => {
              if (
                route?.index === true ||
                route?.path === '*' ||
                route.path === undefined
              )
                return null
              return (
                <Link key={index} to={route.path}>
                  {capitalizeString(route.path)}
                </Link>
              )
            })}
          </nav>
          <nav aria-label="Workshop slides">...a list of slides ...</nav>
        </aside>
        <section>
          <Outlet />
        </section>
      </main>
      <footer className={styles.footer}>Footer</footer>
      {/* import.meta.env.MODE === 'development' && <WcagViewer /> */}
    </>
  )
}

function capitalizeString(s: string): string {
  return (s.charAt(0).toUpperCase() + s.slice(1)).replace('/', '')
}
