import { SiteSection, Toc } from '../components'

export function WhoWeAre(): JSX.Element {
  const sectionNames = [
    ['Wenche', 'wenche'],
    ['Henriette', 'henriette'],
    ['Christian', 'christian'],
  ]

  const ImgUrls = {
    wenche:
      'https://res.cloudinary.com/miles/image/upload/v1650626189/People/Wenche-1600x400.jpg',
    henriette:
      'https://res.cloudinary.com/miles/image/upload/v1620732575/Henriette-1600x400_f1ki6h.jpg',
    christian:
      'https://res.cloudinary.com/miles/image/upload/v1620732575/Christian-1600x400_vp9r6z.jpg',
  }
  return (
    <>
      <Toc sectionNames={sectionNames} title="Naviger oss" id="toc" />
      <h1>Om oss</h1>
      <SiteSection title="Forklaring" anchorName="explain">
        <p>vi forklarer vi forklarer vi forklarer vi forklarer</p>
      </SiteSection>
      <SiteSection title="Wenche" anchorName="wenche">
        <p>Wenche tata!</p>
        <img src={ImgUrls.wenche} alt="Bilde av Wenche" />
      </SiteSection>
      <SiteSection title="Henriette" anchorName="henriette">
        <p>Henriette voila!</p>
        <img src={ImgUrls.henriette} alt="Bilde av Henriette" />
      </SiteSection>
      <SiteSection title="Christian" anchorName="christian">
        <p>Christian badambish!</p>
        <img src={ImgUrls.christian} alt="Bilde av Christian" />
      </SiteSection>
    </>
  )
}
