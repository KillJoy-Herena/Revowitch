import'./sass/Espacios.scss';
import img1 from '../img/perfil.jpg';
import home1 from "../img/skate-ecofriendly.jpg" 
import Card from 'react-bootstrap/Card';
import home2 from "../img/mural-eco.jpg";
import home3 from "../img/muebles-reciclados.jpg";
import home4 from "../img/hogar-ecologico.jpg";
import home5 from "../img/hogar-y-jardin.jpg";
import home6 from "../img/hogar-reciclado.jpg";
function Espacios(){
  
    return(
        <section className='seccion'>
        <div className="container-md ">
      
      <div className="row" >
 <div className="col-sm-11 col-md-5 col-lg-4 mb-4 " ><Card className="card text-white card-has-bg click-col cardimg1 " 
>       <Card.Img src={home6} alt="Card image" />
        <Card.ImgOverlay className=" Overlay d-flex flex-column">
         <div className="card-body">
            <small className="card-meta mb-2">Espacios ecofriendly</small>
            <h4 className="card-title mt-0 ">La armonia que necesitas en tu jardin</h4>
           <small><i className="far fa-clock"></i> October 15, 2020</small>
          </div>
          <div className="card-footer">
           <div className="media">
  <img className="mr-3 rounded-circle" src={img1} alt="Generic placeholder " />
  <div className="media-body">
    <h6 className="my-0 text-white d-block">Mael Morningstar</h6>
     <small>Director of UI/UX</small>
  </div>
</div>
          </div>
        </Card.ImgOverlay>
      </Card></div>
     <div className="col-sm-12 col-md-6 col-lg-4 mb-4"><Card className="card text-white card-has-bg click-col cardimg2" >
     <Card.Img src={home3} alt="Card image" />
        <Card.ImgOverlay className=" Overlay d-flex flex-column">
         <div className="card-body">
            <small className="card-meta mb-2">Espacios ecofriendly</small>
            <h4 className="card-title mt-0 ">Armoniza tu recamara y la naturaleza</h4>
           <small><i className="far fa-clock"></i> October 15, 2020</small>
          </div>
          <div className="card-footer">
           <div className="media">
  <img className="mr-3 rounded-circle" src={img1} alt="Generic placeholder" />
  <div className="media-body">
    <h6 className="my-0 text-white d-block">Mael Morningstar</h6>
     <small>CEO Revowitch</small>
  </div>
</div>
          </div>
        </Card.ImgOverlay>
      </Card></div>
  <div className="col-sm-12 col-md-6 col-lg-4 mb-4"><Card className="card text-white card-has-bg click-col cardimg3" >
        <Card.Img src={home4} alt="Card image" />
        <Card.ImgOverlay className="Overlay d-flex flex-column">
         <div className="card-body">
            <small className="card-meta mb-2">Espacios ecofriendly</small>
            <h4 className="card-title mt-0 ">La belleza esta en la simplicidad de un hogar lo que destaque seras tu</h4>
           <small><i className="far fa-clock"></i> October 15, 2020</small>
          </div>
          <div className="card-footer">
           <div className="media">
  <img className="mr-3 rounded-circle" src={img1} alt="Generic placeholder" />
  <div className="media-body">
    <h6 className="my-0 text-white d-block">Mael Morningstar</h6>
     <small>Director of UI/UX</small>
  </div>
</div>
          </div>
        </Card.ImgOverlay>
      </Card></div>
   
    <div className="col-sm-12 col-md-6 col-lg-4 mb-4"><Card className="card text-white card-has-bg click-col cardimg4" >
    <Card.Img src={home5} alt="Card image" />
        <Card.ImgOverlay className=" Overlay d-flex flex-column">
         <div className="card-body">
            <small className="card-meta mb-2">Espacios verdes</small>
            <h4 className="card-title mt-0 "> Creatividad, sencilles y personalidad</h4>
           <small><i className="far fa-clock"></i> October 15, 2020</small>
          </div>
          <div className="card-footer">
           <div className="media">
  <img className="mr-3 rounded-circle" src={img1} alt="Generic placeholder" />
  <div className="media-body">
    <h6 className="my-0 text-white d-block">Mael Morningstar</h6>
     <small>Director of UI/UX</small>
  </div>
</div>
          </div>
        </Card.ImgOverlay>
      </Card></div>
     <div className="col-sm-12 col-md-6 col-lg-4 mb-4"><Card className="card text-white card-has-bg click-col cardimg5">
     <Card.Img src={home2} alt="Card image" />
        <Card.ImgOverlay className=" Overlay d-flex flex-column">
         <div className="card-body">
            <small className="card-meta mb-2">Murales </small>
            <h4 className="card-title mt-0 "> Mira tu espacio disfrutalo y cuidalo es tuyo</h4>
           <small><i className="far fa-clock"></i> October 15, 2020</small>
          </div>
          <div className="card-footer">
           <div className="media">
  <img className="mr-3 rounded-circle" src={img1} alt="Generic placeholder" />
  <div className="media-body">
    <h6 className="my-0 text-white d-block">Mael Morningstar</h6>
     <small>Director of UI/UX</small>
  </div>
</div>
          </div>
        </Card.ImgOverlay>
      </Card></div>
  <div className="col-sm-12 col-md-6 col-lg-4 mb-4"><Card className="card text-white card-has-bg click-col ">
     <Card.Img src={home1} alt="Card image" />
        <Card.ImgOverlay className="Overlay d-flex flex-column">
         <div className="card-body">
            <small className="card-meta mb-2">Espacios verdes</small>
            <h4 className="card-title mt-0 "> Demuestra tu origanilidad en cada espacio de tu casa</h4>
           <small><i className="far fa-clock"></i> October 15, 2020</small>
          </div>
          <div className="card-footer">
           <div className="media">
  <img className="mr-3 rounded-circle" src={img1} alt="Generic placeholder" />
  <div className="media-body">
    <h6 className="my-0 text-white d-block">Mael Morningstart</h6>
     <small>Director of UI/UX</small>
  </div>
</div>
          </div>
        </Card.ImgOverlay>
      </Card></div>
  
</div>
        </div>
        </section>
    );
}
export default Espacios;