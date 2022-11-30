import {React,useState,useEffect} from 'react'
import Image1 from '../assets/trend1.webp';
import Image2 from '../assets/trend2.webp';
import Image3 from '../assets/trend3.webp';
import Image4 from '../assets/trend4.jpg';


const Trending=()=>{
	const [column , setcolumn]=useState([
		{
		"Image":`${Image1}`,
		"productName":"Beauty",
		"price":"$200"
	    },
	    {
	    "Image":`${Image2}`,
		"productName":"Home",
		"price":"$250"
	    },
	    {
	    "Image":`${Image3}`,
		"productName":"Electronics",
		"price":"$300"
	    },
	    {
	    "Image":`${Image4}`,
		"productName":"Gorgeous Men Caps",
		"price":"$350"
	    }
		]);

		const [data,setData]=useState([])
	

		useEffect(()=>{
			fetch(" http://www.omdbapi.com/?s=avatar&apikey=8a1d89fa")
			.then((response)=>response.json())
			.then((data)=>{
				console.log(data)
			}	)
		},[]);
		

	return(
		<>
		<section className="trend-sec container">
			<div className="grey sub-content content-font text-center subtitle">
			    Explore the Features 
			</div>
			<h2 className="text-black Heading text-center">What's trending </h2>
			<div className="row mx-0">
			{
				column.map((value)=>{
					const {Image,id,productName,price}=value
					return(
					<div className="col-md-3" key={id}>
						<div className='shadow'>
							<img src={Image}  className="img-fluid w-100" style={{"objectFit": "cover","minHeight":"500px","maxHeight":"500px"}}/>
							<div className='px-2 py-2'>
								<h4 className='grey fs-5 mt-2'>{productName}</h4>
								<h5 className='grey fw-bold fs-4 text-black' >{price}
								</h5>
								<div className='delivery fs-6'>
									free delivery
								</div>
								<div className='reviews-wrapper d-flex mt-3'>
									<div className='rating-count me-2'>
										<a href="#" className=' text-white bg-green rounded py-2 px-3 text-decoration-none'>3.9</a>
									</div>
									<div className='star d-flex'>
										<a href="#"><i className='fa fa-star grey me-2'></i></a>
										<a href="#"><i className='fa fa-star grey me-2'></i></a>
										<a href="#"><i className='fa fa-star grey me-2'></i></a>
										<a href="#"><i className='fa fa-star grey me-2'></i></a>
										<a href="#"><i className='fa fa-star grey me-2'></i></a>
									</div>
								</div>
								<button type="button" className='w-100 bg-green text-center text-white border-0 mt-4 py-2'>Add to Cart</button>
							</div>
						</div>
					</div>
					)

				})
			}
			</div>

		</section>

		</>

	)

}


export default Trending