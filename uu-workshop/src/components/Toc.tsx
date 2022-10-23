import '../../scss/Toc.scss'

export interface TocProps {
  sectionNames: string[][]
  title: string
  id: string
}

export function Toc({ sectionNames, title, id }: TocProps): JSX.Element {
  return (
    <>
      <aside>
        <nav>
          <p id={id} aria-label="dokumentnavigasjon">
            {title}
          </p>
          <ul aria-describedby={id}>
            {sectionNames.map((sectionName, index) => {
              return (
                <li key={index}>
                  <a href={`#${sectionName[1]}`}>{sectionName[0]}</a>
                </li>
              )
            })}
          </ul>
        </nav>
      </aside>
    </>
  )
}
