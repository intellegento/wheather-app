import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoAPIOptions } from "../../api";

const Search = ({onSeaarchChange}) => {

    const [search, setSearch] = useState(null);

    const loadOptions = async (inputValue) => {
        // try {
        //     const response = await fetch(
        //       `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
        //       geoAPIOptions
        //     );
        //     const result = await response.text();
        //     console.log(result);
        //   } catch (error) {
        //     console.error(error);
        //   }
        return fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, geoAPIOptions)
        .then(response => response.json())
        .then(response => {
            return {
                options: response.data.map((city) => {
                    return {
                        value: `${city.latitude} ${city.longitude}`,
                        label: `${city.name}, ${city.countryCode}`,
                    }
                })
            }
        })
        .catch(err => console.log(err));
    }

    const handleOnChaange = (searchData) => {
        setSearch(searchData);
        onSeaarchChange(searchData)
    };

    return (
        <AsyncPaginate 
            placeholder="Search for city"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChaange}
            loadOptions={loadOptions}
        />
    )
}

export default Search;