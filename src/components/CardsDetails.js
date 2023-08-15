import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DLT } from '../redux/actions/action';
import { ADD, REMOVE } from '../redux/actions/action';

const CardsDetails = () => {
  const { id } = useParams();
  const history = useNavigate();
  const dispatch = useDispatch();
  const getdata = useSelector((state) => state.cartreducer.carts);
  
  // Get the selected product from the cart
  const selectedProduct = getdata.find((item) => item.id === parseInt(id, 10));

  // add data -> basically increase the quantity
  const send = (e) => {
    dispatch(ADD(e));
  };

  // delete data
  const dlt = (id) => {
    dispatch(DLT(id));
    history("/");
  };

  const remove = (e) => {
    dispatch(REMOVE(e));
  };

  useEffect(() => {
    // Fetch data from the Redux store based on the ID
  }, [id]);

  return (
    <>
      <div className='container mt-2'>
      <h2 className='text-center' style={{ marginTop: '50px', fontFamily: 'Arial, sans-serif' }}>Items Details Page</h2>

        {/* <h2 className='text-center'>Items Details Page</h2> */}
        <section className='container mt-3'>
          <div className='iteamsdetails'>
            {selectedProduct && (
              <React.Fragment>
                <div className="items_img">
                  <img src={selectedProduct.imgdata} alt={selectedProduct.rname} />
                </div>
                <div className='details'>
                  <Table>
                    <tbody>
                      <tr>
                        <td>
                          <p><strong>Store</strong>: </p>
                          <p><strong>Price</strong>: ₹{selectedProduct.price}</p>
                          <p><strong>Category</strong>: {selectedProduct.address}</p>
                          <p><strong>Total</strong>: {selectedProduct.price * selectedProduct.qnty}</p>
                          <div className='mt-5 d-flex justify-content-between align-items-center' style={{ width: 100, cursor: "pointer", background: "#ddd", color: "#111" }}>
                            <span style={{ fontSize: 24 }} onClick={selectedProduct.qnty<=1 ?()=>dlt(selectedProduct.id) : () => remove(selectedProduct)}>-</span>
                            <span style={{ fontSize: 22 }}>{selectedProduct.qnty}</span>
                            <span style={{ fontSize: 24 }} onClick={() => send(selectedProduct)}>+</span>
                          </div>
                        </td>
                        <td>
                          <p><strong>Rating :</strong><span style={{ background: "green", color: '#fff', padding: "2px 5px", borderRadius: '5px' }}>{selectedProduct.rating} ★</span></p>
                          <p><strong>Order Review :</strong><span>{selectedProduct.somedata}</span></p>
                          <p><strong>Remove :</strong><span><i className='fas fa-trash' onClick={() => dlt(selectedProduct.id)} style={{ color: 'red', fontsize: 20, cursor: 'pointer' }}></i></span></p>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </React.Fragment>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default CardsDetails;


// import React, { useState, useEffect} from 'react';
// import { useNavigate } from 'react-router-dom';
// // import React from 'react'
// import Table from 'react-bootstrap/Table'
// import {useParams} from 'react-router-dom'
// import {useDispatch, useSelector } from 'react-redux'
// import {DLT} from '../redux/actions/action'
// import {ADD,REMOVE} from '../redux/actions/action'




// const CardsDetails = () => {
//  const[data,setData] = useState([])
// const {id} = useParams();

// const history = useNavigate();

// const dispatch = useDispatch();
// const getdata = useSelector((state)=>state.cartreducer.carts);
  
// const compare = ()=>{
//   let comparedata = getdata.filter((e)=>{
//     return e.id == id
//   });
//  // console.log("comparedata:", comparedata);
//   setData(comparedata);
// }
// //add data->basically increase the quantity
// const send = (e)=>{
//   dispatch(ADD(e));
// }

// //delete data
// const dlt = (id)=>{
//   dispatch(DLT(id))
//   history("/");
// }
// const remove = (item)=>{
//   dispatch(REMOVE(item))
// }

// useEffect(()=>{
//   compare();
// },[id]);
//   return (
//     <>
//       <div className='container mt-2'>
//         <h2 className='text-center'>Items Deatils Page</h2>
//         <section className='container mt-3'>
//           <div className='iteamsdetails'>
//             {
//             data.map((ele)=>{
//              // console.log("ele:", ele); 
//               return (
//                 <>
//                  <div className="items_img">
//               <img src={ele.imgdata} />

//             </div>
//             <div className='details'>
//              <Table>
//               <tr>
//                 <td>
//                   <p><strong>Restaurant</strong>: </p>
//                   <p><strong>Price</strong>: ₹{ele.price}</p>
//                   <p><strong>Dishes</strong> : {ele.address}</p>
//                   <p><strong>Total</strong>: ₹ {ele.price * ele.qnty}</p>
//                   <div className='mt-5 d-flex justify-content-between align-items-center' style = {{width:100,cursor:"pointer",background:"#ddd",color:"#111"}}>
//                   <span style={{fontSize:24}} onClick = {ele.qnty<=1 ? ()=>dlt(ele.id) : ()=>remove(ele)}>-</span>
//                   <span style={{fontSize:22}}>{ele.qnty}</span>
//                   <span style={{fontSize:24}} onClick={()=>send(ele)}>+</span>
//                   </div>
//                 </td>
//                 <td>
//                 <p><strong>Rating :</strong><span style={{background:"green",color:'#fff',padding:"2px 5px",borderRadius:'5px'}}>{ele.rating} ★</span></p>
//                 <p><strong>Order Review :</strong><span>{ele.somedata}</span></p>
//                 <p><strong>Remove :</strong><span><i className='fas fa-trash' onClick = {()=>dlt(ele.id)} style={{color:'red',fontsize:20,cursor:'pointer'}}></i></span></p>
//                 </td>
//               </tr>
//              </Table>
//             </div>
//                 </>
//               )
//             })
//           }
            
           
//           </div>
//         </section>
//       </div>
//     </>
//   )
// }

// export default CardsDetails