import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { arrPriceRanges } from '../../util/idxToPriceRange';
import classes from './properties.module.css';
import { continentToIdx } from '../../util/idxToContinent';
import { request } from '../../util/fetchAPI';
import PropertyCard from '../propertyCard/PropertyCard';

const Properties = () => {
  const [allProperties, setAllProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [state, setState] = useState(null);
  const query = useLocation().search.slice(1); // slice(1) to remove "?"
  const arrQuery = query.split('&');
  const navigate = useNavigate();

  // fetch all properties
  useEffect(() => {
    const fetchAllProperties = async () => {
      const data = await request(`/property/getAll`, 'GET');
      setAllProperties(data);
    };
    fetchAllProperties();
  }, []);

  // parsing query params
  useEffect(() => {
    if (arrQuery && allProperties?.length > 0 && state === null) {
      let formattedQuery = {};
      arrQuery.forEach((option, idx) => {
        const key = option.split('=')[0];
        const value = option.split('=')[1];

        formattedQuery = { ...formattedQuery, [key]: value };

        // if we are on the last index, assign the formattedQuery obj to state
        if (idx === arrQuery.length - 1) {
          setState(formattedQuery);
          handleSearch(formattedQuery);
        }
      });
    }
  }, [allProperties, arrQuery]);

  // const handleState = (e) => {
  //   setState((prev) => {
  //     return { ...prev, [e.target.name]: e.target.value };
  //   });
  // };

  const handleState = (e) => {
    const { name, value } = e.target;
    if (value === 'All') {
      setState((prev) => {
        const { [name]: _, ...rest } = prev;
        return rest;
      });
    } else {
      setState((prev) => {
        return { ...prev, [name]: value };
      });
    }
  };
  
  const handleSearch = (options) => {
    const filteredProperties = allProperties.filter((property) => {
      const priceRange = arrPriceRanges[options.priceRange];
      const minPrice = Number(priceRange.split('-')[0]);
      const maxPrice = Number(priceRange.split('-')[1]);
      const continent = continentToIdx(property.continent);

      if (
        (options.type === 'All' || property.type === options.type) &&
        (options.continent === '0' || continent === Number(options.continent))
         &&
        (options.priceRange === '0' || (property.price >= minPrice && property.price <= maxPrice))
      ) {
        return property;
      }
      });

    setFilteredProperties(filteredProperties);
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.options}>
          <select value={state?.type || 'All'} name="type" onChange={handleState}>
            <option value="All">All</option>
            <option value="beach">Beach</option>
            <option value="mountain">Mountain</option>
            <option value="village">Village</option>
          </select>
          <select value={state?.priceRange || 'All'} name="priceRange" onChange={handleState}>
            <option value="All">All</option>
            <option value="1">0-100,000</option>
            <option value="2">100,000-200,000</option>
            <option value="3">200,000-300,000</option>
            <option value="4">300,000-400,000</option>
            <option value="5">400,000-500,000</option>
          </select>
          <select value={state?.continent || 'All'} name="continent" onChange={handleState}>
            <option value="All">All</option>
            <option value="1">Dubai</option>
            <option value="2">Abu Dhabi</option>
            <option value="3">Sharjah</option>
            <option value="4">Ajman</option>
          </select>
          <button className={classes.searchBtn} onClick={() => handleSearch(state)}>
            <AiOutlineSearch className={classes.searchIcon} />
          </button>
        </div>
        {filteredProperties?.length > 0 ? (
          <>
            <div className={classes.titles}>
              <h5>Selected properties</h5>
              <h2>Property you may like</h2>
            </div>
            <div className={classes.properties}>
              {filteredProperties.map((property) => (
                <PropertyCard key={property._id} property={property} />
              ))}
            </div>
          </>
        ) : (
          <h2 className={classes.noProperty}>We have no properties with the specified options.</h2>
        )}
      </div>
    </div>
  );
};

export default Properties;
