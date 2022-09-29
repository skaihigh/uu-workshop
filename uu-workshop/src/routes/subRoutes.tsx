import { Link, RouteObject } from 'react-router-dom'
import { Examples, Slides, Tasks } from '.'

export const subRoutes: RouteObject[] = [
  {
    index: true,
    path: '/eksempler',
    element: <Examples />,
  },
  {
    path: '/lysbilder',
    element: <Slides />,
  },
  {
    path: '/oppgaver',
    element: <Tasks />,
  },

  { path: '*', element: <NoMatch /> },
]

function NoMatch(): JSX.Element {
  return (
    <div>
      <h2>Nei, men stakars... Har du gått deg bort du da?</h2>

      <p>
        Det kan ha vært dårlig skilta, høl i veien eller rett og slett uflaks,
        men bli med her du så skal jeg hjelpe deg med
        <Link to="/">å finne hjem</Link>
      </p>
    </div>
  )
}
