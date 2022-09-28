import { Link, RouteObject } from 'react-router-dom'

export function MenuItems(props: { subRoutes: RouteObject[] }): JSX.Element {
  const { subRoutes } = props

  return (
    <>
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
    </>
  )
}

function capitalizeString(s: string): string {
  if (s.length < 2) {
    return s
  } else {
    s = s.replace('/', '')
  }

  return s.charAt(0).toUpperCase() + s.slice(1)
}
