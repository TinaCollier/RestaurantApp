import {useRouter} from "next/router"
import {gql,useQuery} from '@apollo/client';
import {useState, useContext} from 'react'
import AppContext from "./context"
import {
  Button,
  Spinner} from "reactstrap";
import RestaurantList from "./restaurantList";
function Dishes({restId}){
  const [restaurantID, setRestaurantID] = useState()
  const {addItem} = useContext(AppContext)

const GET_RESTAURANT_DISHES = gql`
  query($id: ID!) {
    restaurant(id: $id) {
      id
      name
      dishes {
        id
        name
        description
        price
        image {
          url
        }
      }
    }
  }
`;

  const router = useRouter();

  const { loading, error, data } = useQuery(GET_RESTAURANT_DISHES, {
    variables: { id: restId},
  });

  if (loading) return <tr><th>Loading...</th></tr>;
  if (error) return <tr><th>ERROR here</th></tr>;
  if (!data) return <tr><th>Not found</th></tr>;

  let restaurant = data.restaurant;

  if (restId > 0){

    return (
      <>
{restaurant.dishes.map((res) => (
        <tr key={res.id}>
          <th>
            <img style={{ height: "auto", width: "100px" }}
          src={`http://localhost:1337${res.image.url}`}></img>
          </th>
          <th>
            {res.name}
          </th>
          <th style={{ fontSize:".8rem"}}>
            {res.description}
          </th>
          <th>
            {res.price}
          </th>
          <th>
            <Button 
              style={{ fontSize:".8rem"}}
              color="dark"
              onClick = {()=> addItem(res)}
            > + </Button>
          </th>
        </tr>
      ))}
        </>

        )}
        else{
          return <tr></tr>
        }
        
    }
    export default Dishes