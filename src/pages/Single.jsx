import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Edit from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";
const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <div className="info">
            <span>Benjamin</span>
            <p>posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link className="link" to={`/create?edit=2`}>
              <Edit className="edit__post" />
            </Link>
            <DeleteIcon className="edit__post delete" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, esse
          aperiam praesentium molestiae optio maxime! Minima mollitia numquam
          officia nisi adipisci totam est ea provident earum, officiis
          consectetur porro expedita, sapiente nobis repudiandae eveniet, ullam
          laborum maxime! Incidunt, quisquam mollitia! Nisi quo iusto asperiores
          perspiciatis sed? Ut nemo eaque praesentium. Lorem ipsum dolor sit,
          amet consectetur adipisicing elit. Quisquam ipsa neque exercitationem
          optio impedit? Numquam sapiente consequatur alias vel, dolore veniam.
          Pariatur obcaecati nesciunt, laudantium nam qui iure magni aliquid
          illo, commodi doloribus odit optio amet eum esse! Ratione aperiam
          reprehenderit fugiat perspiciatis, ipsa maxime veniam accusantium
          facilis ducimus et quis temporibus ad, pariatur non vel sequi quasi,
          doloremque voluptatibus excepturi iure? Sequi cumque amet alias
          delectus, a perferendis vitae placeat, nulla maiores tempore impedit
          nostrum nihil officia harum autem odit corrupti rem eius. Recusandae
          voluptatem tempora facere consectetur adipisci.
        </p>
      </div>
      <div className="menu">
        <Menu />
      </div>
    </div>
  );
};

export default Single;
