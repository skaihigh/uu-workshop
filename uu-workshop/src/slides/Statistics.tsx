import './Slides.scss'
export function Statistics(): JSX.Element {
  return (
    <section>
      <h1>Statistikk</h1>
      <p>Bla bla bla har ansvar for tilsyn osv osv</p>
      <figure>
        <img
          width="500"
          src="/src/assets/statistikk_feil.png"
          alt="stolpediagram som beskriver fordelingen av de vanligste feil på norske nettsider."
        />
        <figcaption>
          Diagrammet viser prosentandelen avslutta tilsyn der det er avdekka
          brot på enkeltkrav (suksesskriterium) i regelverket for universell
          utforming av ikt. Vi har teke med krav som har inngått i minst 10
          tilsyn, og der regelverksbrot er avdekka i minst 50 % av tilsyna.
        </figcaption>
      </figure>
      <p>
        Kilde:
        <a href="https://www.uutilsynet.no/statistikk-og-rapporter/digitale-barrierar-avdekka-i-tilsyn/1166">
          UUtilsynet
        </a>
      </p>
    </section>
  )
}
