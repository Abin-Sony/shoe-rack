// src/pages/About.js
import React from "react";

const About = () => {
  return (
    <div className="row">
      <div className="col-md-2"></div>
      <div className="col-md-8">
      <h1 className="justify-content-center">ABOUT </h1>
      <p style={{textAlign:'start',textSizeAdjust:'auto'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint consequatur debitis, quia aliquam illum excepturi, cumque, reiciendis velit consequuntur veritatis voluptatibus. Id ad qui fuga nemo similique nisi quis ducimus? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit at ipsam aut repudiandae iste unde minus, mollitia magni aspernatur sed eius autem, quos maxime, molestias voluptate nihil ea consequatur esse! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos praesentium ipsam libero, similique sed tempora veniam provident cumque, officiis, laborum vero quisquam iure modi nostrum? Suscipit in cupiditate itaque ea. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda autem a aliquid earum ducimus at? Fugit atque deleniti incidunt ullam? Quasi aspernatur accusamus incidunt nostrum unde a doloremque debitis quae! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, eveniet quis. Architecto iusto accusantium deleniti dicta culpa iure doloremque voluptatum ut obcaecati, temporibus molestias ad minima modi sequi perferendis error?</p><br />
      <br />
      <h3>OUR BRAND PARTNERS</h3>
      <marquee behavior="" direction="left" scrollamount="28" ><img src="https://logos-world.net/wp-content/uploads/2020/05/Nike-Logo.jpg" alt=""  style={{width:'50%'}}/> <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Adidas_logo.png" alt="" style={{width:'50%'}}/><img className="mx-3" src="https://1000logos.net/wp-content/uploads/2021/04/Puma-logo.png" alt="" style={{width:'50%'}}/></marquee>
      </div>
      <div className="col-md-2"></div>
      
    </div>
  );
};

export default About;