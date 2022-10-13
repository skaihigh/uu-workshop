import './Colors.scss'

export function Colors(): JSX.Element {
  return (
  <div className="colors">
    <div className="colors__low-contrast">
      Det var en gang Lisa gikk til skolen Gubben Noa beit i tåa Tenk å lese masse tekst med denne fargekontrasten Io (eller Jupiter I) er den innerste av de fire galileiske månene og den femte av månene som kretser rundt planeten Jupiter Sliten i øynene etter hvert? Programmering består av å designe, skrive, teste, feilsøke og vedlikeholde kildekoden til et program som skal tolkes av en datamaskin Tenk hvis du var svaksynt
    </div>

    <div className="colors__too-many">
      <div>Da</div>
      <div>er</div>
      <div>vel</div>
      <div>dette</div>
      <div>bedre?</div>
    </div>

    <div className="colors__not-many">Ikke så mange farger, kanskje - mye lettere å lese når det bare er én?</div>

    <div className="colors__dark-mode">
      Mange (nerder) liker 'dark mode', og hvis sort-på-hvit gir nok kontrast, gjør vel hvit-på-sort også det? <a href="#">Her er et link med standard blåfarge, kan du se det?</a> Visste du at folk med dysleksi generelt syns det er lettere å lese mørk tekst mot lys bakgrunn?
    </div>

    <div className="colors__dark-mode colors__dark-mode--smaller">
      Hvis teksten blir litt mindre, blir det ekstra bra
    </div>
    
  </div>)
}
