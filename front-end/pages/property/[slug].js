import {sanityClient} from "../../sanity"
const Property = ({
	title,
	loaction,
	propertyType,
	mainImage,
	images,
	price,
	beds,
	bedrooms,
	description,
	host,
	reviews,
}) => {
	console.log(title)
	return (
		<div className="container">
			{title}
	    </div>
	)
}


export const getServerSideProps=async (pageContext) =>{
 const pageSlug = pageContext.query.slug
 const query=`*[_type == 'property' && slug.current == $pageSlug][0]{
   title,
   location,
   propertyType,
   mainImage,
   images,
   price,
   beds,
   bedsrooms,
   description,
   host->{
     _id,
	 name,
	 slug,
	 image,
   },
   reviews[]{
    ...,
	traveller->{
	 _id,
	 name,
	 slug,
	 image,
	}
   }
}`
	const property= await sanityClient.fetch(query,{pageSlug})

	if(!property){
	  return{
	    props:null,
		notFound:true,
	  }
	}
	else{
		return {
			props:{
				title:property.title,
				location:property.location,
				property:property.propertyType,
				mainImage:property.mainImage,
				images:property.images,
				price:property.price,
				beds:property.beds,
				bedsrooms:property.bedrooms,
				description:property.description,
				host:property.host,
				reviews:property.reviews,

			}
			
		}
	}
}

export default Property
