import React, {useState, useEffect} from 'react'

function Search() {

    const [datas, setDatas] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => setDatas(json))
    }, [])

    const handleSearchTerm = (e) => {
        setSearchTerm(e.target.value)
    }

    return (
        <>
            <div>
                <input
                    placeholder = "rechercher"
                    type = "text"
                    id = "searchBar"
                    name = "searchBar"
                    onChange = {handleSearchTerm}
                />
            </div>
            
            <div className = "search__results">

                {datas
                .filter((val) => {
                    return val.title.includes(searchTerm)
                })
                .map((val) => {
                    return <div className = "search__result" key = {val.id}>{val.title}</div>
                })}
                
            </div>
        </>
    )
}

export default Search
