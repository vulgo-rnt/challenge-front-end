import styled from "styled-components"
import FooterCard from "./FooterCard"

const CardStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 200px;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3); 
`

function Card({info}){
    return(
        <CardStyled>
                    <h1>{info.title}</h1>
                    <div>
                        <p>{info.address}</p>
                        <p>{`${info.city} ${info.state} - ${info.postalCode}`}</p>
                        <p>{info.country}</p>
                    </div>
                <FooterCard breweryType={info.breweryType}/>
        </CardStyled>
    )
}

export default Card