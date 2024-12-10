
import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

const Home = () => {
  
  
  return (
    <div>
       <marquee behavior="" direction="left" scrollamount="25" >
       <img className="mx-3" src="https://media.istockphoto.com/id/914126350/photo/back-view-of-standing-girl-pulling-a-rope-from-the-top-or-cling.jpg?s=612x612&w=0&k=20&c=8oiy45Y99FE00M0_MQqTlGkcjrqcGnmMuTkKQqTA78g=" alt="" style={{width:'10%'}}/><img src="https://logos-world.net/wp-content/uploads/2020/05/Nike-Logo.jpg" alt=""  style={{width:'20%'}}/> <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Adidas_logo.png" alt="" style={{width:'20%'}}/><img className="mx-3" src="https://1000logos.net/wp-content/uploads/2021/04/Puma-logo.png" alt="" style={{width:'20%'}}/>
      <img className="mx-3" src="https://typographyfall2016.wordpress.com/wp-content/uploads/2016/09/birkenstock-logo.png" alt="" style={{width:'20%'}}/>
      <img className="mx-3" src="https://www.logo.wine/a/logo/Crocs/Crocs-Logo.wine.svg" alt="" style={{width:'20%'}}/>
      <img className="mx-3" src="https://media.istockphoto.com/id/510790330/photo/woman-pushing.jpg?s=612x612&w=0&k=20&c=bO6a5g7tQinng8ZzZWZELBwvnuzV727xdeF-DPg-AmQ=" alt="" style={{width:'10%'}}/>
      </marquee>
      <h1 className="text-danger d-flex justify-content-center">Welcome To My SHOE-RACK</h1>
      <marquee class="text-black text-9xl md:text-9xl text-6xl" scrollamount="17"  behavior="" direction="left"><h4>Step Into Style,One Shoe At A Time</h4> </marquee>
      
      <Link to={'/'}><button className="btn btn-danger mx-5">MEN</button></Link>
      <br /><br />
      <h5 className="mx-5">WOMEN</h5>
      <div className="row d-flex mt-5 ">
        <h1>Nike</h1>
        <div className="col-md-3 p-3 shaddow mx-3">
        <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM2ufmf2AjQnVgrf8pQjtuVo7AomGPxGqpgg&s" style={{width:'100%'}}/>
      <Card.Body>
        <Card.Title>BASKETBALL SHOE</Card.Title>
        <Card.Text>
          <h3 className="text-danger">$5999</h3>
        </Card.Text>
        <Button className="btn btn-danger mx-5">Buy</Button>
        <Button className="btn btn-danger" >Add</Button>
      </Card.Body>
    </Card>
        </div>
        <div className="col-md-3 p-3 mx-3  shaddow">
        <Card style={{ width: '100%', }}>
      <Card.Img variant="top" src="https://assets.ajio.com/medias/sys_master/root/20230717/TDRi/64b57868eebac147fc74b54f/-473Wx593H-469472206-red-MODEL.jpg"style={{width:'100%'}} />
      <Card.Body>
        <Card.Title>QUEST</Card.Title>
        <Card.Text>
          <h3 className="text-danger">$3990</h3>
        </Card.Text>
        <Button className="btn btn-danger mx-5">Buy</Button>
        <Button className="btn btn-danger">Add</Button>
      </Card.Body>
    </Card>
        </div>
        <div className="col-md-3 mx-3 P-3 shaddow ">
        <Card style={{ width: '100%' ,height:'638px'  }}>
      <Card.Img variant="top" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2de63612-3f6f-48df-9ba5-0c35daae858d/AIR+MAX+90+EASYON+LIL++%28PS%29.png" style={{width:'100%'}}/>
      <Card.Body>
        <Card.Title>AIR MAX</Card.Title>
        <Card.Text>
          <h3 className="text-danger">$3990</h3>
        </Card.Text>
        <Button className="btn btn-danger mx-5">Buy</Button>
        <Button className="btn btn-danger">Add</Button>
      </Card.Body>
    </Card>
        </div>

      </div>

   {/* addidas */}
   <div className="row d-flex mt-5 ">
        <h1>Adidas</h1>
        <div className="col-md-3 p-3 shaddow mx-3">
        <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1avk6uvNrFcL7yCnqZYCS73YSNogDx6Rgig&s" style={{width:'100%'}}/>
      <Card.Body>
        <Card.Title>PRM SNEAKER</Card.Title>
        <Card.Text>
          <h3 className="text-danger">$1999</h3>
        </Card.Text>
        <Button className="btn btn-danger mx-5">Buy</Button>
        <Button className="btn btn-danger" >Add</Button>
      </Card.Body>
    </Card>
        </div>
        <div className="col-md-3 p-3 mx-3  shaddow">
        <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src="https://assets.ajio.com/medias/sys_master/root/20230306/Hbwb/64061889aeb26924e3a94f31/-288Wx360H-410264656-clearpink-MODEL.jpg"style={{width:'100%'}} />
      <Card.Body>
        <Card.Title>DAILY 3.0</Card.Title>
        <Card.Text>
          <h3 className="text-danger">$5990</h3>
        </Card.Text>
        <Button className="btn btn-danger mx-5">Buy</Button>
        <Button className="btn btn-danger">Add</Button>
      </Card.Body>
    </Card>
        </div>
        <div className="col-md-3 mx-3 P-3 shaddow ">
        <Card style={{ width: '100%', height:'518px'  }}>
      <Card.Img variant="top" src="https://m.media-amazon.com/images/I/714FQkbd+HL._AC_UY900_.jpg"style={{width:'100%'}} />
      <Card.Body>
        <Card.Title>EQT</Card.Title>
        <Card.Text>
          <h3 className="text-danger">$3790</h3>
        </Card.Text>
        <Button className="btn btn-danger mx-5">Buy</Button>
        <Button className="btn btn-danger">Add</Button>
      </Card.Body>
    </Card>
        </div>

      </div>

      {/* puma */}
   <div className="row d-flex mt-5 ">
        <h1>PUMA</h1>
        <div className="col-md-3 p-3 shaddow mx-3">
        <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn3bnX9mHsdWJoAybqBQoN8-vs73-wKiuRag&s" style={{width:'100%'}} />
      <Card.Body>
        <Card.Title>SPEEDCAT</Card.Title>
        <Card.Text>
          <h3 className="text-danger">$1999</h3>
        </Card.Text>
        <Button className="btn btn-danger mx-5">Buy</Button>
        <Button className="btn btn-danger" >Add</Button>
      </Card.Body>
    </Card>
        </div>
        <div className="col-md-3 p-3 mx-3  shaddow">
        <Card style={{ width: '100%', }}>
      <Card.Img variant="top" src="https://assets.ajio.com/medias/sys_master/root/20230628/ZOxZ/649bbc23eebac147fc1e6ab6/-473Wx593H-465718665-white-MODEL.jpg"style={{width:'100%'}} />
      <Card.Body>
        <Card.Title>RS-X</Card.Title>
        <Card.Text>
          <h3 className="text-danger">$5990</h3>
        </Card.Text>
        <Button className="btn btn-danger mx-5">Buy</Button>
        <Button className="btn btn-danger">Add</Button>
      </Card.Body>
    </Card>
        </div>
        <div className="col-md-3 mx-3 P-3 shaddow ">
        <Card style={{ width: '100%',   }}>
      <Card.Img variant="top" src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/390865/01/fnd/IND/fmt/png/PUMA-x-SPONGEBOB-Carina-2.0-Girl's-Sneakers" style={{width:'100%'}}/>
      <Card.Body>
        <Card.Title>SUEDE</Card.Title>
        <Card.Text>
          <h3 className="text-danger">$3790</h3>
        </Card.Text>
        <Button className="btn btn-danger mx-5">Buy</Button>
        <Button className="btn btn-danger">Add</Button>
      </Card.Body>
    </Card>
        </div>

      </div>
      
      
    </div>
  );
};

export default Home;