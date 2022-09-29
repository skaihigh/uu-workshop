import { SiteSection, Toc } from '../components'

export function Tasks(): JSX.Element {
  const sectionNames = [['Oppgave 1', 'task1']]
  return (
    <>
      <Toc sectionNames={sectionNames} title="Naviger eksempler" id="toc" />
      <h1>Oppgaver</h1>
      <SiteSection title="Forklaring" anchorName="explain">
        <p>vi forklarer vi forklarer vi forklarer vi forklarer</p>
      </SiteSection>
    </>
  )
}
