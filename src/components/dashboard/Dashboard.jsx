import React, { useEffect, useState } from 'react'
import { Sliders } from './Sliders'
import axios from 'axios'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { addToCard } from '../../store/slices/cartSlice';
import { useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';





export const Dashboard = () => {
    const [state, setState] = useState([]);
    const [cate,setCate]=useState([])
    const disptach = useDispatch()
    const [searchParams] = useSearchParams();
    const query = searchParams.get('cate_name');
    const _useNavigate=useNavigate()
    // alert(query)

    const getAllCategoery=()=>{
        axios.get("https://fakestoreapi.com/products/categories")
        .then((res)=>{setCate(res.data)})
    }

    const getAllProducts=()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((res) => {
            console.log(res);
            setState(res.data)
        })
    }

    const getDataByCategoreyName=(cate_name)=>{
        // alert(cate_name)
        axios.get("https://fakestoreapi.com/products/category/"+cate_name)
        .then((res)=>{
            // console.log(res.data);
            setState(res.data)
        })
    }
    useEffect(() => {
        // getAllProducts()
        // getAllCategoery()
        if(query!=null)
        {
            getAllProducts()
            getAllCategoery()
            getDataByCategoreyName(query)
        }
        else 
        {
            getAllProducts()
            getAllCategoery()
        }
    }, [query])



    const addToCardData=(item)=>{
        // alert(data)
        disptach(addToCard(item))
        toast.success('Cart Add SucessfullY !');

    }

    const gotoProdcutDetail=(id)=>{
        // alert(id)
        // _useNavigate("/product-details/")
        _useNavigate(`product-detail/${id}`)
    }
    return (
        <>
         <Toaster />
            <Sliders />
            <div className="container-fluid" style={{ marginTop: "2%" }}>
                <div className="row">
                    <div className="col-md-2">
                        <ul class="list-group"  style={{paddingTop:"10%"}}>
                            <li class="list-group-item active" aria-current="true">Select Categorey</li>
                            {
                                cate.map((item,index)=>
                                    <li key={index} class="list-group-item" style={{textTransform:"capitalize"}}>
                                        <a href="javascript:void(0);" onClick={()=>{getDataByCategoreyName(item)}} style={{textDecoration:"none"}}>{item}</a>
                                    </li>
                                )
                            }
                            
                            
                        </ul>
                    </div>
                    <div className="col-md-10">
                        <div className="container">
                            <div className="row">
                                {
                                    state.map((item, index) =>
                                        <div className="col-md-3"  key={index}  style={{paddingTop:"2%"}}>

                                        <Card
                                            raised
                                            sx={{
                                                maxWidth: 300,
                                                margin: "0 auto",
                                                padding: "0.1em",
                                            }}
                                        >
                                            <CardMedia
                                                component="img"
                                                alt="green iguana"
                                                height="200"
                                                image={item.image}
                                                sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div" sx={{fontSize:"20px"}}>
                                                   {item.title.substring(0,20)}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                   {item.description.substring(0,60)}
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                {/* <Button  variant="contained" size="medium" cl>Add to card</Button> */}
                                                <input type="submit" value="Add To Card" className="btn btn-success" onClick={()=>{addToCardData(item)}} />
                                               
                                               <span style={{marginLeft:"28%"}}>
                                                    <Button variant="contained" size="medium" onClick={()=>{gotoProdcutDetail(item.id)}}>View</Button>
                                               </span> 
                                            </CardActions>
                                        </Card>
                                        </div>
                                    )
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
