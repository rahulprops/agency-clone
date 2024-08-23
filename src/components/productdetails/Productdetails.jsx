import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReactImageMagnify from 'react-image-magnify';
import { addToCard } from '../../store/slices/cartSlice';
import { useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';





export const Productdetails = () => {
  const _useParams=useParams()
  let { id } = useParams();
  const disptach = useDispatch()
  const [state,setState]=useState({

    title: '',
    price: '',
    category: '',
    description: '',
    image: ''
})
  // alert(id)
  // console.log(id);

  useEffect(()=>{
    window.scrollTo(0, 10);
    axios.get("https://fakestoreapi.com/products/"+id)
    .then((res)=>{
      console.log(res);
      setState(res.data)
    })
  },[])

  const addToCardData=(item)=>{
    disptach(addToCard(item))
   toast.success('Cart Add SucessfullY !');
  }
  return (
    <>
    <Toaster/>
      <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-6">
                                    {/* <img src={state.image} style={{width:"100%",height:"550px"}} className="img-fluid rounded-start" alt="..." /> */}
                                    <div style={{ width: "500px" }}>
                                        <ReactImageMagnify {...{
                                            smallImage: {
                                                alt: 'Wristwatch by Ted Baker London',
                                                // isFluidWidth: true,

                                                src: state.image,
                                                width: 550,
                                                height: 462
                                            },
                                            largeImage: {
                                                src: state.image,
                                                width: 800,
                                                height: 1100
                                            }
                                        }} />
                                        
                                    </div>
                                   
                                </div>
                                <div className="col-md-6">
                                    <div className="card-body">
                                    <h5 class="card-title">{state.title}</h5>
                                        <p class="card-text">{state.description}</p>
                                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                                        <br />
                                        <br />
                                        {/* <Button variant="contained" size="medium" >Add to card</Button> */}
                                        <button  className="btn btn-danger btn-sm" onClick={()=>{addToCardData(state)}} >Add to Card</button>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
    </>
  )
}
