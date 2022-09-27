import { Link, RouteObject } from 'react-router-dom'
import { Home, Sound, Colors, Form, TabOrder, Font } from '.'

export const subRoutes: RouteObject[] = [
  { index: true, element: <Home /> },
  {
    path: '/lyd',
    element: <Sound />,
  },
  {
    path: '/farger',
    element: <Colors />,
  },
  {
    path: '/skjema',
    element: <Form />,
  },

  {
    path: '/tabrekkefølge',
    element: <TabOrder />,
  },
  {
    path: '/skrift',
    element: <Font />,
  },
  { path: '*', element: <NoMatch /> },
]

function NoMatch(): JSX.Element {
  return (
    <div>
      <h2>It looks like you are lost lost...</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  )
}