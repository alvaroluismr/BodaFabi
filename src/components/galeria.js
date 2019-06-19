import React from "react"
import ImageGallery from 'react-image-gallery';

 
class MyComponent extends React.Component {
 
  render() {
 
    const images = [
      {
        original: 'https://raw.githubusercontent.com/alvaroluismr/BodaFabi/fabi/src/img/pareja1.jpg',
      },
      {
        original: 'https://raw.githubusercontent.com/alvaroluismr/BodaFabi/fabi/src/img/pareja3.jpg',
      },
      {
          original: 'https://raw.githubusercontent.com/alvaroluismr/BodaFabi/fabi/src/img/pareja4.jpg',
      }
    ]
 
    return (
      <ImageGallery items={images} autoPlay="true"/>
    );
  }
 
}



export default () => {

    return (
        /*<div className={galeriaStyle.galeriacontenedor}>
            <div className={galeriaStyle.migaleria}>
                <figure className={galeriaStyle.foto1}>
                <img src={pareja1} alt="Dani y Fabi con mar de fondo" />
                </figure>
                <figure className={galeriaStyle.foto2}>
                <img src={pareja2} alt="Dani y Fabi con fecha" />
                </figure>
                <figure className={galeriaStyle.foto2}>
                <img src={pareja3} alt="Dani y Fabi con iglesia de fondo" />
                </figure>
                <figure className={galeriaStyle.foto2}>
                <img src={pareja4} alt="Dani y Fabi bailando" />
                </figure>
            </div>
        </div>*/
        <MyComponent />
    )
}