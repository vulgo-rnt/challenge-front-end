import { useEffect, useState } from "react"
import Card from "../Card"
import Filter from "../Filter"
import styled from "styled-components"

const ListStyled = styled.main`
    display: flex;
    flex-wrap:wrap;
    overflow-x: hidden;
`

export default function MainList(){
    const [type,setType] = useState('micro')
    const [cardData , setCardData] = useState([])
    const [page, setPage] = useState('1')

    useEffect(()=>{
        fetch(`https://api.openbrewerydb.org/v1/breweries?by_type=${type}&page=${page}&per_page=20`)
        .then((data)=> data.json())
        .then((data)=> setCardData(data))
    },[type,page])

 
    return(
        <>
            <Filter setType={(param)=>setType(param)}/>
            <ListStyled>
                {cardData.length > 0 && 
                    cardData.map((card,index)=>{
                        const info = {
                                title: card.name,
                                address: card["address_1"] ,
                                country: card.country,
                                postalCode: card["postal_code"],
                                state: card.state,
                                breweryType: card["brewery_type"],
                                city: card.city,
                            }
                    return <Card key={index} info={info} />
                    })
                }
            </ListStyled>
            <div>
                <button onClick={(event)=> 
                    setPage(event.target.innerText)}>1</button>
                <button onClick={(event)=> 
                    setPage(event.target.innerText)}>2</button>
                <button onClick={(event)=> 
                    setPage(event.target.innerText)}>3</button>
            </div>
        </>
    )
}