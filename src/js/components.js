
import '../css/components.css'
// import logowebpack from "../assets/img/webpack-logo.png";
const divImg =  document.querySelector('.title-body')

export const proyecto = ( nombreProyecto ) => {

  const divText = document.createElement('h1')
  divText.innerText = `${nombreProyecto}`
  divImg.append( divText )
  
  
  // *Img forma de pintar imagenes en el html creado a traves de JS
  // console.log({logowebpack})
  // const img = document.createElement('img')
  // img.src = logowebpack;
  // document.body.append(img)




}
