import {gql,useQuery} from '@apollo/client';
import Dishes from "./dishes"
import {useContext, useState} from 'react';
import AppContext from "./context"
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Container,
  Row,
  Col,
  Table
} from "reactstrap";
import App from 'next/app';

function RestaurantList(props){
  const[restaurantID, setRestaurantID] = useState(0)
  const {cart } = useContext(AppContext);
  const [ showRestaurants, setShowRestaurants ] = useState(true);
  const [state, setState] = useState(cart)
  const GET_RESTAURANTS = gql`
    query {
      restaurants {
        id
        name
        description
        image {
          url
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_RESTAURANTS)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;
  console.log(`Query Data: ${data.restaurants}`)
  const appContext = useContext(AppContext)
  console.log('beep', appContext.setUser)
let searchQuery = data.restaurants.filter((res) =>{
    return res.name.toLowerCase().includes(props.search)
  })

let restId = searchQuery[0].id
 
// definet renderer for Dishes
  const renderDishes = (restaurantID) => {
    return (<Dishes restId={restaurantID}> </Dishes>)
  };
if(searchQuery.length > 0){
  const restList = searchQuery.map((res) => (
    <Col className="bg-light border" key={res.id}>
      <Card style={{ margin: "0 0.5rem 20px 0.5rem" }}>
        <CardImg
          top={true}
          style={{ height: 200 }}
          src={
          `http://localhost:1337`+ res.image.url
          }
        />
        <CardBody>
          <CardText style={{ fontSize:".8rem"}}>{res.description}</CardText>
        </CardBody>
        <div className="card-footer">
        
        <Button 
        active
        color="dark"
        style={{ fontSize:".8rem" }}
        onClick={()=> {setRestaurantID(res.id)}}>{res.name}</Button>
         
        </div>
      </Card>
    </Col>
  ))

  return(

    <Container>
      <Row xs="2">

        <Col className="bg-light border" xs="6" >
          
          <Row xs='2'>
            {restList}
          </Row>
        </Col>
        
        <Col className="bg-light border" xs="6">
          <Row>{restaurantID !== 0 ? 'Make your selections below or choose a different restaurant' : 'Select a restaurant for a list of dishes'}</Row>
          <Row xs='3'>
              <Table hover>
                <thead>
                  <tr>
                    <th>
                      Dish
                    </th>
                    <th>
                      Name
                    </th>
                    <th>
                      Description
                    </th>
                    <th>
                      Price
                    </th>
                    <th>
                      Select:
                    </th>
                  </tr>
                </thead>
                <tbody>
                {renderDishes(restaurantID)}
                </tbody>
              </Table>
          </Row>
        </Col>
      </Row>
 
    </Container>
 
  )
} else {
  return <h1> No Restaurants Found</h1>
}
}
   export default RestaurantList