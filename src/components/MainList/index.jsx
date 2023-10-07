import { useState } from "react"
import Card from "../Card"

export default function MainList(){
    const [type,setType] = useState('micro')
    const [cardData , setCardData] = useState([])
    return(
        <>
            <Filter setType={setType}/>
            <ListStyled>
                {cardData.length > 0 && 
                    cardData.map((card)=>{
                        const info = {
                                title:'',
                                address: card["address_1"],
                                country: card.country,
                                postalCode: card["postal_code"],
                                state: card.state,
                                breweryType: card["brewery_type"],
                                city: card.city,
                            }
                    return <Card info={info} />
                    })
                }
            </ListStyled>
        </>
    )
}