
import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

const Home = () => {
  
  
  return (
    <div>
      <marquee behavior="" direction="left" scrollamount="28" >
      <img className="mx-3" src="https://thumbs.dreamstime.com/b/happy-young-man-leaning-against-wall-24011707.jpg" alt="" style={{width:'10%'}}/><img src="https://logos-world.net/wp-content/uploads/2020/05/Nike-Logo.jpg" alt=""  style={{width:'20%'}}/> <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Adidas_logo.png" alt="" style={{width:'20%'}}/><img className="mx-3" src="https://1000logos.net/wp-content/uploads/2021/04/Puma-logo.png" alt="" style={{width:'20%'}}/>
      <img className="mx-3" src="https://typographyfall2016.wordpress.com/wp-content/uploads/2016/09/birkenstock-logo.png" alt="" style={{width:'20%'}}/>
      <img className="mx-3" src="https://www.logo.wine/a/logo/Crocs/Crocs-Logo.wine.svg" alt="" style={{width:'20%'}}/>
      <img className="mx-3" src="https://thumbs.dreamstime.com/b/happy-young-man-leaning-against-wall-24011707.jpg" alt="" style={{width:'10%'}}/>
      </marquee>
      <h1 className="text-danger d-flex justify-content-center">Welcome To My SHOE-RACK</h1>
      <marquee scrollamount="17"  behavior="" direction="left"><h4>Step Into Style,One Shoe At A Time</h4> </marquee>
      
      <Link to={'/women'}><button className="btn btn-danger mx-5">WOMEN</button></Link>
      <br /><br />
      <h5 className="mx-5">MEN</h5>
      <div className="row d-flex mt-5 ">
        <h1>Nike</h1>
        <div className="col-md-3 p-3 shaddow mx-3">
        <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src="https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/963bd9d0-1196-46e8-a6ac-f52824e3bb42/NIKE+AIR+MAX+IMPACT+4.png" />
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
      <Card.Img variant="top" src="https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/29922531/2024/6/8/5fa401db-ee8b-454f-bfde-58d4273dadfc1717830065918NikeQuest6MensRoadRunningShoes1.jpg" />
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
      <Card.Img variant="top" src="https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/d90e3112-ea64-4068-be0d-1e832af89fe8/AIR+MAX+DN.png" />
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
      <Card.Img variant="top" src="https://extrabutterny.in/cdn/shop/files/IG1024-1.jpg?v=1699649962" />
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
      <Card.Img variant="top" src="https://assets.adidas.com/images/w_600,f_auto,q_auto/02dd3b925584404d9da21289d91bea19_9366/Daily_3.0_Shoes_Green_IF7487_01_standard.jpg" />
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
      <Card.Img variant="top" src="https://rukminim1.flixcart.com/image/300/300/jic0u4w0/shoe/a/g/a/eqt-bask-adv-ss18-9-adidas-originals-cblack-cblack-blutin-original-imaf65h3mappmatf.jpeg" />
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
      <Card.Img variant="top" src="https://extrabutterny.in/cdn/shop/files/SpeedcatBlack1_x2400.webp?v=1726490284" />
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
      <Card.Img variant="top" src="https://assets.ajio.com/medias/sys_master/root/20231116/yIxs/65562874afa4cf41f58e020b/-473Wx593H-469534544-white-MODEL3.jpg" />
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
        <Card style={{ width: '100%', height:'610px'  }}>
      <Card.Img variant="top" src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/355110/32/fnd/PNA/fmt/png/Suede-Sneakers-Big-Kids" />
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