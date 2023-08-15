import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Cardsdata from './CardsData'
import "./style.css";
import {useDispatch} from 'react-redux';
import { ADD } from '../redux/actions/action';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Cards = () => {
  const [data, setData] = useState(Cardsdata);
 
     const dispatch = useDispatch();
     const send = (e) => {
      dispatch(ADD(e));
      toast.success('Your item is added to the cart.', {
        position: toast.POSITION.TOP_CENTER, // Set the position of the notification
        autoClose: 500, // Hide the notification after 3 seconds (adjust the time as needed)
      });
    };
      
      
    
  return (
    <div className='container mt-10 mx-400'>
      {/* <h2 className='text-center'>The Paper Magic </h2> */}

      <div className='row d-flex justify-content-center align-items-center'>
        {
          data.map((element, id) => {
            return (
              <>
                <Card style={{ width: '22rem',border:"none" }} className="mx-2 mt-4 card_style">
                  <Card.Img variant="top" src={element.imgdata} style={{height:"16rem"}} className="mt-3"/>
                  <Card.Body>
                    <Card.Title>{element.rname}</Card.Title>
                    <Card.Text>
                       price: ₹{element.price}
                    </Card.Text>
                    <div className="button_div d-flex justify-content-center">
                    <Button variant="primary"
                    onClick = {()=>send(element)}
                    className='col-lg-12'>Add to Cart</Button>
                    </div>
                  </Card.Body>
                </Card>
              </>
            )
          })
        }

      </div>
      <ToastContainer />
    </div>
  );
};



export default Cards