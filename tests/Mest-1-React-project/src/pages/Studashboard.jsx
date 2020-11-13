

import React, { useState,useEffect } from 'react';

import axios from 'axios';

import Navbar from '../component/Navbar';

import Carousel from '../component/Carousel';
import Container from '../component/Container';
import Footer from '../component/Footer';
import ArticleCard from '../component/ArticleCard';
import Hero from '../component/Hero';

import chem from '../images/chem.jpg';
import math from '../images/math.jpg';
import biology from '../images/biolog.jpg';




export default function Studashboard() {
  
	const [list, setList ] = useState([]);
	const [isEditMode, setIsEditMode ] = useState(false);
	const [state, setState ] = useState(false);

	const getslist = () => {
		axios.get('http://localhost:5000/api/getList', {})
		.then(function (response) {
			setList(response.data.data)
			
		}).catch(function (error) {
			console.log(error);
		})
	}

	const handleToggleMode = () => {
		if(isEditMode) {
			postData()
		}
		setIsEditMode(!isEditMode)
	}

	const addCourse = (courseIndex) => {
		let tempList = list;
		tempList[courseIndex].status = "added";
		setList(tempList);
		setState(!state);
	}

	const removeCourse = (courseIndex) => {
		let tempList = list;
		tempList[courseIndex].status = "not added";
		setList(tempList);
		setState(!state)
	}

	const postData = () => {
		axios.post(`http://localhost:5000/api/signup`, { user: {firstnamex : "testuser1" , lastnamex : "testuser1" }})
    .then(res => {
      console.log(res);
      console.log(res.data);
    })

	}

	useEffect(() => {
		setTimeout(function () {
			getslist()
		}, 2000)
	}, []);


  return (
	<>
		<Navbar />
		<Container>
				<div className="container mx-auto my-5">
					<h1 className="  ml-5 ">  Students Portal</h1>
					{ isEditMode &&
						<button className="btn btn-success" onClick={handleToggleMode} >
							Save Changes
						</button>
					}
					{ !isEditMode &&
						<button className="btn btn-primary" onClick={handleToggleMode} >
							Edit Courses
						</button>
					}
				</div>
		 
				<div className="container-fluid h-100 w-100" style={{ maxWidth: "800px", margin: "auto" }} > 
		 
					<div className="card-deck">
						
						{
							list.map( (course, index) => {
								return ( 

									<CardDisplay 
										key={course.id}
										id={course.id}
										index={index}
										people={course.people} 
										rating={course.rating} 
										status={course.status} 
										subject={course.subject} 
										onAdd={addCourse} 
										onRemove={removeCourse}
										isEditMode={isEditMode}
									/> 
								)
							})
						}

					</div>
					
				</div>

		</Container>
		<Footer />
	</>
  )
}


function CardDisplay ({ id, index, people, rating, status, subject, onAdd, onRemove, isEditMode }) {
	
	const removeCourse = () => {
		onRemove(index);
	}

	const addCourse = () => {
		onAdd(index);
	}

	return (
		<div className="card">

			<img className="card-img-top" src={chem} alt="Card image cap"/>
			<div className="card-body">
				<h5 className="card-title"> { subject } </h5>
				<h3 className="card-title">{ rating }~<small className="text-muted">ratings</small></h3>

				<div className="btn-group-toggle  w-50 mx-auto " data-toggle="buttons">
					<label className="btn btn-secondary active">
						<input type="checkbox" defaultChecked autoComplete="off"/> {status}
					</label>
				</div> 
				<p className="card-text">
					<small className="text-muted">{ people }k people  registered for this course</small>
				</p>

				{ isEditMode && status.toLowerCase() === "not added" &&
					<button className="btn btn-success" onClick={addCourse} >
						Add
					</button>
				}
				{ isEditMode && status.toLowerCase() === "added" &&
					<button className="btn btn-primary" onClick={removeCourse} >
						Remove
					</button>
				}

			</div> 		
		</div>  
	)
}

/*


*/








