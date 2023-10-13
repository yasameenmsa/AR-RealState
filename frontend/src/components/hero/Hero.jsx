// import React from 'react'
// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { AiOutlineSearch } from 'react-icons/ai'
// import classes from './hero.module.css'

// const Hero = () => {
//   const [state, setState] = useState({})
//   const [type, setType] = useState("All")
//   const [continent, setContinent] = useState("0")
//   const [priceRange, setPriceRange] = useState("0")
//   const navigate = useNavigate()

//   // TODO here or somewhere home(fetching properties)

//   const handleSearch = () => {
//     handleState(type,continent,priceRange)
//     // navigating to properties
//     navigate(`/properties?type=${type}&continent=${continent}&priceRange=${priceRange}`)
//   }

//   const handleState = (e) => {
//     setState(prev => {
//       return { ...prev, [e.target.name]: e.target.value }
//     })
//   }


//   return (
//     <div className={classes.container}>
//       <div className={classes.wrapper}>
//         <h2>Let me find your dream place right now</h2>
//         <h5>Search the best selection of luxury real estate</h5>
//         <div className={classes.options}>
//           <select defaultValue={"Select type"} onChange={(e) => setType(e.target.value)}>
//             <option disabled>Select type</option>
//             <option value="all">All</option>
//             <option value="beach">Beach</option>
//             <option value="mountain">Mountain</option>
//             <option value="village">Village</option>
//           </select>
//           <select defaultValue={"Select Price Range"} onChange={(e) => setPriceRange(e.target.value)}>
//             <option disabled>Select Price Range</option>
//             <option value="0">All</option>
//             <option value="1">0-100,000</option>
//             <option value="2">100,000-200,000</option>
//             <option value="3">200,000-300,000</option>
//             <option value="4">300,000-400,000</option>
//             <option value="5">400,000-500,000</option>
//           </select>
//           <select defaultValue={"Select Emirate"} onChange={(e) => setContinent(e.target.value)}>
//             <option disabled>Select Emirate</option>
//             <option value="0">All</option>
//             <option value="1">Dubai</option>
//             <option value="2">Abu Dhabi</option>
//             <option value="3">Sharjah</option>
//             <option value="4">Ajman</option>
//           </select>
//           <AiOutlineSearch className={classes.searchIcon} onClick={handleSearch} />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Hero

// import React from 'react';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { AiOutlineSearch } from 'react-icons/ai';
// import classes from './hero.module.css';

// const Hero = () => {
//   const [type, setType] = useState('All');
//   const [continent, setContinent] = useState('0');
//   const [priceRange, setPriceRange] = useState('0');
//   const navigate = useNavigate();

//   const customNavigate = (type, continent, priceRange) => {
//     // Define your custom navigation logic here
//     // For example, you can construct the URL and use the `navigate` function
//     navigate(`/properties?type=${type}&continent=${continent}&priceRange=${priceRange}`);
//   };
  
//   const handleSearch = () => {
//     customNavigate(type, continent, priceRange);
//     console.log(type, continent, priceRange)
//   };
  


//   // const handleSearch = () => {
//   //   // console.log('Search criteria:', type, continent, priceRange); // Debugging line
//   //   // window.location.reload();
//   //   // Navigate to the properties page with the selected search criteria
//   //   navigate(`/properties?type=${type}&continent=${continent}&priceRange=${priceRange}`);
//   // };

//   return (
//     <div className={classes.container}>
//       <div className={classes.wrapper}>
//         <h2>Let me find your dream place right now</h2>
//         <h5>Search the best selection of luxury real estate</h5>
//         <div className={classes.options}>

//            <select defaultValue={"Select type"} onChange={(e) => setType(e.target.value)}>
//              <option disabled>Select type</option>
//              <option value="all">All</option>
//              <option value="beach">Beach</option>
//              <option value="mountain">Mountain</option>
//              <option value="village">Village</option>
//            </select>
//            <select defaultValue={"Select Price Range"} onChange={(e) => setPriceRange(e.target.value)}>
//              <option disabled>Select Price Range</option>
//              <option value="0">All</option>
//              <option value="1">0-100,000</option>
//              <option value="2">100,000-200,000</option>
//              <option value="3">200,000-300,000</option>
//              <option value="4">300,000-400,000</option>
//              <option value="5">400,000-500,000</option>
//            </select>
//            <select defaultValue={"Select Emirate"} onChange={(e) => setContinent(e.target.value)}>
//              <option disabled>Select Emirate</option>
//              <option value="0">All</option>
//              <option value="1">Dubai</option>
//              <option value="2">Abu Dhabi</option>
//              <option value="3">Sharjah</option>
//              <option value="4">Ajman</option>
//            </select>
//           <AiOutlineSearch className={classes.searchIcon} onClick={handleSearch} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
////
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import classes from './hero.module.css';

const Hero = () => {
  const [searchCriteria, setSearchCriteria] = useState({
    type: 'All',
    continent: '0',
    priceRange: '0',
  });

  const navigate = useNavigate();

  const handleSearch = () => {
    const { type, continent, priceRange } = searchCriteria;
    navigate(`/properties?type=${type}&continent=${continent}&priceRange=${priceRange}`);
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setSearchCriteria((prevCriteria) => ({
      ...prevCriteria,
      [name]: value,
    }));
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2>Let me find your dream place right now</h2>
        <h5>Search the best selection of luxury real estate</h5>
        <div className={classes.options}>
          <select name="type" value={searchCriteria.type} onChange={handleSelectChange}>
            <option value="All">All</option>
            <option value="beach">Beach</option>
            <option value="mountain">Mountain</option>
            <option value="village">Village</option>
          </select>
          <select name="priceRange" value={searchCriteria.priceRange} onChange={handleSelectChange}>
            <option value="0">All</option>
            <option value="1">0-100,000</option>
            <option value="2">100,000-200,000</option>
            <option value="3">200,000-300,000</option>
            <option value="4">300,000-400,000</option>
            <option value="5">400,000-500,000</option>
          </select>
          
          <select name="continent" value={searchCriteria.continent} onChange={handleSelectChange}>
            <option value="0">All</option>
            <option value="1">Dubai</option>
            <option value="2">Abu Dhabi</option>
            <option value="3">Sharjah</option>
            <option value="4">Ajman</option>
          </select>
          <AiOutlineSearch className={classes.searchIcon} onClick={handleSearch} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
