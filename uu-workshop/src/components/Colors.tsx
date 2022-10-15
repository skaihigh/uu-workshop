import './Colors.scss'

export function Colors(): JSX.Element {
  return (
  <div className="colors">
    <div className="colors__panels">
      <div className="colors__panels__panel colors__panels__panel--low-contrast">
        Det var en gang
        <br />
        Lisa gikk til skolen
        <br />
        Gubben Noa beit i tåa
        <br />
        Tenk å lese masse tekst med denne fargekontrasten
        <br />
        Io (eller Jupiter I) er den innerste av de fire galileiske månene og den femte av månene som kretser rundt planeten Jupiter
        <br />
        Sliten i øynene etter hvert?
        <br />
        Programmering består av å designe, skrive, teste, feilsøke og vedlikeholde kildekoden til et program som skal tolkes av en datamaskin
        <br />
        Tenk hvis du var svaksynt
      </div>

      <div className="colors__panels__panel colors__panels__panel--dark-mode">
        Mange (nerder) liker 'dark mode', og hvis sort-på-hvit gir nok kontrast, gjør vel hvit-på-sort også det?
        <br />
        <a href="#">Her er et link med standard blåfarge, kan du se det?</a>
        <br />
        Visste du at folk med dysleksi generelt syns det er lettere å lese mørk tekst mot lys bakgrunn?
      </div>

      <div className="colors__panels__panel colors__panels__panel--light-mode">
        Mange (nerder) liker 'dark mode', og hvis sort-på-hvit gir nok kontrast, gjør vel hvit-på-sort også det?
        <br />
        <a href="#">Her er et link med standard blåfarge, kan du se det?</a>
        <br />
        Visste du at folk med dysleksi generelt syns det er lettere å lese mørk tekst mot lys bakgrunn?
      </div>
    </div>

    <div className="colors__too-many">
      <div>Mer</div>
      <div>festlig</div>
      <div>med</div>
      <div>mange</div>
      <div>farger?</div>
    </div>

    <div className="colors__not-many">
      Mye lettere å lese når det bare er én farge?
    </div>


    <div className="colors__dark-and-smaller">
      Dette er en vanlig skriftstørrelse. Lett å lese?
    </div>
    
  </div>)
}
