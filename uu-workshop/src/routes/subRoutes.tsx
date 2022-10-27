import { Link, RouteObject } from 'react-router-dom'
import { Claims, Examples, Slides, Tasks, Tools, WhoWeAre } from '.'

export const subRoutes: RouteObject[] = [
  {
    path: '/paastander',
    element: <Claims />,
  },
  {
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
  {
    path: '/verktoey',
    element: <Tools />,
  },
  {
    index: true,
    element: <WhoWeAre />,
  },

  { path: '*', element: <NoMatch /> },
]

function NoMatch(): JSX.Element {
  return (
    <div>
      <h2>Nei, men stakkars... Har du gått deg bort du da?</h2>

      <p>
        Det kan ha vært dårlig skilta, høl i veien eller rett og slett uflaks,
        men bli med her du så skal jeg hjelpe deg med
        <Link to="/">å finne hjem</Link>
      </p>
    </div>
  )
}
