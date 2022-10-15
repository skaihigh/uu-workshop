import { Link } from 'react-router-dom'

export function ScreenReader(): JSX.Element {
  return (
    <>
      <p>
        Bruk den innebygde skjermleseren i MacOs eller Windows.
        {/* <Link
          to="https://www.nvaccess.org/download/"
          title="Last ned NVaccess skjermleser"
        >
          NVaccess
        </Link>
        skjermleseren for windows. */}
      </p>
      <p>
        Naviger til{' '}
        <Link to="/#christian" title="Les om Christian">
          informasjonen om Christian
        </Link>
        . Finn ut hva slags hobbier han driver med når han ikke koder.
      </p>
    </>
  )
}
