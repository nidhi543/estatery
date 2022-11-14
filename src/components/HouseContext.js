import React, { createContext, useState, useEffect } from 'react';
import housesData from '../data';

export const HouseContext = createContext();

const HouseContextProvider = ({children}) => {
    const [houses, setHouses] = useState(housesData);
    const [country, setCountry] = useState('Location (any)');
    const [countries, setCountries] = useState([]);
    const [property, setProperty] = useState('Property type (any)');
    const [properties, setProperties] = useState([]);
    const [price, setPrice] = useState('Price range (any)');
    const [loading, setLoading] = useState(false);

    //set countries state
    useEffect(() => {
      const allCountries = houses.map((house) => {
         return house.country;
      });
      const uniqueCountries = ['Location(any)', ...new Set(allCountries)];
      setCountries(uniqueCountries);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
     //set property state
     useEffect(() => {
        const allProperties = houses.map((house) => {
           return house.type;
        });
        const uniqueProperties = ['Location(any)', ...new Set(allProperties)];
        setProperties(uniqueProperties);
        // eslint-disable-next-line react-hooks/exhaustive-deps
      },[]);
    
    const handleClick = () => {
      setLoading(true);
      // check the string if includes '(any)'
      const isDefault = (str) => {
        return str.split(' ').includes('(any)');
      };
      
      //setting price range
      const minPrice = parseInt(price.split(' ')[0]);
      const maxPrice = parseInt(price.split(' ')[2]);
       
      //setting filters
      // eslint-disable-next-line
      const newHouses = housesData.filter((house) => {
        const housePrice = parseInt(house.price);
        // all values are selected
        if (
          house.country === country &&
          house.type === property &&
          housePrice >= minPrice &&
          housePrice <= maxPrice
        ) {
          return true;
        }
        // all values are default
        if (isDefault(country) && isDefault(property) && isDefault(price)) {
          return true;
        }
        // country is not default
        if (!isDefault(country) && isDefault(property) && isDefault(price)) {
          return house.country === country;
        }
        // property is not default
        if (!isDefault(property) && isDefault(country) && isDefault(price)) {
          return house.type === property;
        }
        // price is not default
        if (!isDefault(price) && isDefault(country) && isDefault(property)) {
          if (housePrice >= minPrice && housePrice <= maxPrice) {
            return true;
          }
        }
        // country and property is not default
        if (!isDefault(country) && !isDefault(property) && isDefault(price)) {
          return house.country === country && house.type === property;
        }
        // country and price is not default
        if (!isDefault(country) && isDefault(property) && !isDefault(price)) {
          if (housePrice >= minPrice && housePrice <= maxPrice) {
            return house.country === country;
          }
        }
        // property and price is not default
        if (isDefault(country) && !isDefault(property) && !isDefault(price)) {
          if (housePrice >= minPrice && housePrice <= maxPrice) {
            return house.type === property;
          }
        }
      });
      
      setTimeout(() => {
        return (
          newHouses.length < 1 ? setHouses([]) : setHouses(newHouses),
          setLoading(false)
        );
      }, 1000);
    };
    return (
        <HouseContext.Provider
        value={{
          country,
          setCountry,
          countries,
          property,
          setProperty,
          properties,
          price,
          setPrice,
          handleClick,
          houses,
          loading,
        }}
      >
        {children}
      </HouseContext.Provider>
    );
};

export default HouseContextProvider;

