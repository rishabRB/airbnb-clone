import {sanityClient} from '../sanity'

const Home = ({properties}) =>{
	console.log(properties)
	return(
		<div className="main">
		 <div className="feed-container">
			 <h1>Places to stay near you</h1>
			 <div className="feed">
			 </div>
		 </div>
		</div>
	)
}
//will be passed to the page component as props
export const getServerSideProps = async () =>{
  const query = `*[_type== "property"]`
  const properties = await sanityClient.fetch(query)
  
	if(!properties.length){
       return{
	    props:{
		 properties:[],
		}
	   }
	}
	else{
	  return{
	   props:{
	     properties
	   }
	  }
	}
}

export default Home


