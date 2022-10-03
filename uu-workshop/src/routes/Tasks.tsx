import { SiteSection, Toc } from '../components'
import { ScreenReader } from '../tasks/ScreenReader'
import { UserNotification } from '../tasks/UserNotification'

export function Tasks(): JSX.Element {
  const sectionNames = [
    ['Bruk skjermleser', 'task1'],
    ['Varsel til bruker', 'task2'],
  ]
  return (
    <>
      <Toc sectionNames={sectionNames} title="Naviger eksempler" id="toc" />
      <h1 id="maincontent">Oppgaver</h1>
      <SiteSection title="Forklaring" anchorName="explain">
        <p>vi forklarer vi forklarer vi forklarer vi forklarer</p>
      </SiteSection>

      <SiteSection title="Lær å bruke skjermleser" anchorName="task1">
        <ScreenReader />
      </SiteSection>
      <SiteSection title="Varsel til bruker" anchorName="task2">
        <UserNotification />
      </SiteSection>
    </>
  )
}
