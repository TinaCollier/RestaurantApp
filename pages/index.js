import React, { useState } from "react";
import Cart from "../components/cart"
import {ApolloProvider,ApolloClient,HttpLink, InMemoryCache} from '@apollo/client';
import RestaurantList from '../components/restaurantList';
import { InputGroup, InputGroupAddon,Input, InputGroupText } from "reactstrap";


function Home() {
    const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";
    console.log(`URL: ${API_URL}`)
    const [query, setQuery] = useState("");
    const link = new HttpLink({ uri: `${API_URL}/graphql`})
    const cache = new InMemoryCache()
    const client = new ApolloClient({link,cache});

    return (
        <ApolloProvider client={client}>
          <div className="search">

                <InputGroup >
                <InputGroupText style={{ background: "grey", opacity: ".7", color: "white" }}>Search Local Restaurants: </InputGroupText>
                <Input
                    onChange={(e) =>
                    setQuery(e.target.value.toLocaleLowerCase())
                    }
                    value={query}
                />
                <InputGroupAddon addonType="append"> Search </InputGroupAddon>
                </InputGroup><br></br>
            </div>
            <RestaurantList search={query} />
            <Cart> </Cart>
        </ApolloProvider>
  );
}
export default Home;
