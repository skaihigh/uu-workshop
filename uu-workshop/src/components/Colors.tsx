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
          Io (eller Jupiter I) er den innerste av de fire galileiske månene og
          den femte av månene som kretser rundt planeten Jupiter
          <br />
          Sliten i øynene etter hvert?
          <br />
          Programmering består av å designe, skrive, teste, feilsøke og
          vedlikeholde kildekoden til et program som skal tolkes av en
          datamaskin
          <br />
          Tenk hvis du var svaksynt
        </div>

        <div className="colors__panels__panel colors__panels__panel--dark-mode">
          Mange (nerder) liker 'dark mode', og hvis sort-på-hvit gir nok
          kontrast, gjør vel hvit-på-sort også det?
          <br />
          <br />
          <a href="#">Her er et link med standard blåfarge, kan du se det?</a>
          <br />
          <br />
          Denne fargekontrasten vil ikke feile i accessibility-tester.
          <br />
          <br />
          Visste du at folk med dysleksi generelt syns det er vanskeligere å
          lese lys tekst mot mørk bakgrunn?
        </div>

        <div className="colors__panels__panel colors__panels__panel--light-mode">
          Denne teksten er (kanskje) lettere å lese, men har for lav kontrast
          mot bakgrunnen og vil feile i accessibility-test.
          <br />
          <br />
          <a href="#">Her er et link med standard blåfarge, kan du se det?</a>
        </div>
      </div>

      <div className="colors__too-many">
        <div>Flere</div>
        <div>farger</div>
        <div>gjør</div>
        <div>web</div>
        <div>mer</div>
        <div>festlig</div>
        <div>?</div>
      </div>

      <div className="colors__not-many">
        <div>
          Det er kanskje lettest å lese teksten når den bare har én farge?
        </div>
        <div>
          For en med rød/grønn-fargeblindhet, vil den røde teksten se ca. sånn
          ut.
          {/* https://www.color-blindness.com/coblis-color-blindness-simulator/ */}
        </div>
        <div>Spiller det noen rolle hvilken farge teksten har?</div>
      </div>

      <div className="colors__dark-and-smaller">
        Eller hvor stor den er? Dette er en vanlig skriftstørrelse. Hverken
        størrelse eller fargekontrast vil feile i a11y-test - men er det
        brukervennlig?
      </div>
    </div>
  )
}
