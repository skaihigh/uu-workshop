import { Link } from 'react-router-dom'
import './Slides.scss'
export function Statistics(): JSX.Element {
  return (
    <section>
      <p>Bla bla bla har ansvar for tilsyn osv osv</p>
      <figure>
        <img
          width="500"
          src="/statistikk_feil.png"
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

      <p>
        Hvis vi lager et lager et litt tøysete regnestykke for å illustrere hvor
        mye mennesker med nedsatt funksjonsevne potensielle kjøpekraft kan det
        se slik ut:
      </p>
      <code>
        15% av nordmenn blir 810 000 mennsker. I følge SSB bruker en person i
        gjennomsnitt 265 000kr på privathusholdning. 810 000 * 265 000 = 214 350
        000 000kr. Det er 214 milliarder kroner. Slurv og unnlatenhet koster
        penger!
      </code>
      <p>
        Kilde:{' '}
        <Link
          title="Les mer om forbruk hos SSB"
          to="https://www.ssb.no/nasjonalregnskap-og-konjunkturer/nasjonalregnskap/artikler/dette-bruker-nordmenn-penger-pa#:~:text=Husholdningenes%20konsumutgifter%20i%202017%2C%201391,prosent%20fra%201980%20til%202017"
        >
          SSB
        </Link>
        .
      </p>
    </section>
  )
}
