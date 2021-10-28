
import '../css/components.css'
// import logowebpack from "../assets/img/webpack-logo.png";



export const saludar = ( nombre ) => {
  console.log(` Funcion saludar `)

  const h1 = document.createElement('h1');
  h1.innerText = ` Hola, ${nombre}!!`

  document.body.append( h1 )

  // *Img forma de pintar imagenes en el html creado a traves de JS
  // console.log({logowebpack})
  // const img = document.createElement('img')
  // img.src = logowebpack;
  // document.body.append(img)




}
