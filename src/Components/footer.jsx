import {React,useState} from 'react';
import { NavLink} from 'react-router-dom';



const Footer=()=>{

	// const [footerCol ,setfooterCol]=useState([
	// 	{
	// 		"columnClass":"col-lg-3",
	// 		"head":'Information',
	// 		"list1":"Pages",
	// 		"list2":"Our Team",
	// 		"list3":"Feuchers",
	// 		"list4":"Pricing",

	// 	},
	// 	{
	// 		"columnClass":"col-lg-3",
	// 		"head":'Resources',
	// 		"list1":"Monitoring Grader",
	// 		"list2":"Video Tutorial",
	// 		"list3":"Video Tutorial",
	// 		"list4":"Video Tutorial",

	// 	},
	// 	{
	// 		"columnClass":"col-lg-2",
	// 		"head":'Resources',
	// 		"list1":"Monitoring Grader2",
	// 		"list2":"Video Tutorial",
	// 		"list3":"Video Tutorial",
	// 		"list4":"Video Tutorial",

	// 	},

	// ])

	const [lists ,selists]=useState([
	 	{
	 		"list1":"Full 2021 season overview ",
	 	},
	 	{
	 		"list1":"Top ten defensive tactics",
	 	},
	 	{
	 		"list1":"Meet this year’s team captain ",
	 	},
	 	{
	 		"list1":"Monthly match analysis ",
	 	},
	 	{
	 		"list1":"Learn who’s who on the pitch ",
	 	},
	 	{
	 		"list1":"It’s time for coaching 101",
	 	}
	 	])


	return(
		<>
		<footer className="section bg-footer bg-black">
	        <div className="container">
	            <div className="row">
	               {/* {
	                	footerCol.map((value)=>{
	                		const {head,list1,list2,list3,list4,columnClass,id}=value
							return(
	                	<div className={columnClass} key={id}>
		                    <div className="">
		                        <h5 className="footer-heading text-uppercase text-white">{head}</h5>
		                        <ul className="list-unstyled footer-link mt-4">
		                            <li><NavLink to="#">{list1}</NavLink></li>
		                            <li><NavLink to="#">{list2}</NavLink></li>
		                            <li><NavLink to="#">{list3}</NavLink></li>
		                            <li><NavLink to="#">{list4}</NavLink></li>
		                        </ul>
		                    </div>
		                </div>
		                )
		            }
	                	)
						
	                	}*/}

	                	<div className="col-lg-3">
	                    <div className="">
	                        <h5 className="footer-heading text-uppercase text-white">about club</h5>
	                        <p className=" mt-4 grey">Welcome to the home stadium of sports prowess! This is Top Scorer, NavLink premium sports theme.</p>
	                        
	                        <div className="mt-2">
	                            <ul className="list-inline">
	                                <li className="list-item row">
	                                	<div className="col-md-1">
		                                	<NavLink to="/" className="grey">
	                                		<i className="fa fa-map-marker map footer-social-icon grey" aria-hidden="true"></i>
	                               			</NavLink> 
			                            </div>
			                            <div className="col-md-11">
			                            <NavLink to="/" className="grey">
	                               			198 West 21th Street New York, NY 10010
	                               		</NavLink>      
			                            </div>
	                                </li>
	                                <li className="list-item row">
	                                <div className="col-md-1">
		                                <NavLink to="/" className="grey">
		                                <i class="fa fa-paper-plane send footer-social-icon grey" aria-hidden="true"></i>
		                                </NavLink>
		                            </div>
		                            <div className="col-md-11">
		                                <NavLink to="mailto:topscorer@qodeinteractive.com" className="grey">
		                
		                                	topscorer@qodeinteractive.com
		                                </NavLink>
		                                <NavLink to="tel:+88 (0) 101 0000 000" className="grey d-block">
		                                	+88 (0) 101 0000 000
		                                </NavLink>
		                            </div>
	                                </li>
	                         
	                            </ul>
	                        </div>
	                    </div>
	                </div>
	                <div className="col-lg-3">
	                    <div className="">
	                        <h5 className="footer-heading text-uppercase text-white">Our Services</h5>
	                       
	                        <div className="mt-4 service-col">
	                            <ul className="list-inline">
	                            {
	                			lists.map((value)=>{
			                		const {list1,id}=value
									return(
	                                <li className="list-item mb-3">
		                                <NavLink to="/" className="grey text-decoration-none">
		                               		{list1}
		                                </NavLink>
	                        		 </li>)

	                        		})}
	                                
	                            </ul>
	                        </div>
	                    </div>
	                </div>

	                <div className="col-lg-3 blog-col">
	                    <div className="">
	                        <h5 className="footer-heading text-uppercase text-white">
	                        latest blog posts</h5>
	                       
	                        <div className="mt-4">
	                            <ul className="list-inline">
	                                <li className="list-item mb-2">
		                                <NavLink to="/" className="grey text-decoration-none">
		                                 <span className="contact-info">Latest NFL firings </span>
		                        		 <span className="contact-info small-font d-block mt-2">February 13, 2020</span></NavLink>
	                        		 </li>
	                        		 <li className="list-item mb-2">
		                                <NavLink to="/" className="grey text-decoration-none">
		                                 <span className="contact-info">Biggest NFL veterans  </span>
		                        		 <span className="contact-info small-font d-block mt-2">February 13, 2020</span>
		                        		 </NavLink>
	                        		 </li>
	                        		 <li className="list-item mb-2">
		                                <NavLink to="/" className="grey text-decoration-none">
		                                 <span className="contact-info">Super Bowl halftime   </span>
		                        		 <span className="contact-info small-font d-block mt-2">February 13, 2020</span>
		                        		</NavLink>
	                        		 </li>
	                                
	                            </ul>
	                        </div>
	                    </div>
	                </div>


	                <div className="col-lg-3">
	                    <div className="">
	                        <h5 className="footer-heading text-uppercase text-white">Follow us on Instagram</h5>
	                    </div>
	                </div>

	            </div>
	        </div>
	        </footer>
	        <div className="copyright py-3">
		        <div className="text-center container">
		        	<div className="row align-items-center">
			        	<div className="col-lg-2 text-start">
				        	<NavLink class="navbar-brand text-white text-end" to="/">
				        		<img src="/static/media/logo.f394eaa48cbba3d66dc8.png" class="w-100" />
				        	</NavLink>
			        	</div>
			        	<div className="col-lg-8">
			            	<p className="footer-alt mb-0 f-14 grey">2022 © Anup, All Rights Reserved</p>
			            </div>
			            <div className="col-lg-2">
		                    <ul className="list-inline">
		                        <li className="list-inline-item"><NavLink to="/"><i className="fa facebook footer-social-icon fa-facebook-f"></i></NavLink></li>
		                        <li className="list-inline-item"><NavLink to="/"><i className="fa vimeo footer-social-icon fa-vimeo"></i></NavLink></li>
		                        <li className="list-inline-item"><NavLink to="/"><i className="fa twitter footer-social-icon fa-twitter"></i></NavLink></li>
		                        <li className="list-inline-item"><NavLink to="/"><i className="footer-social-icon fa fa-linkedin"></i></NavLink></li>
		                    </ul>
			            </div>
			        </div>
		        </div>
		    </div>
	  

		</>

	)
}


export default Footer