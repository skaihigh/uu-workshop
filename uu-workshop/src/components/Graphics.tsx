import './Graphics.scss'

export function Graphics(): JSX.Element {
  return (
    <div className="graphics">
      <div>Using images as links (bilde "Klikk her" uten title-attributt på link eller alt-attributt på bilde &gt; vis kode)</div>
      <div>Not using alt text (bilde uten alt-attributt &gt; vis kode)</div>
      <div>Using only visual design elements without providing any text (innhold kun bestående av bilder uten alt &gt; vis kode)</div>
    </div>
  )
}
