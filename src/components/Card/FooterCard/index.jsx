import styled from "styled-components"

const DivStyled = styled.div`
    border-top: 1px 0.5px 10px black ;
`

function FooterCard({breweryType}){
    return(
        <p>{breweryType}</p>
    )
}

export default FooterCard