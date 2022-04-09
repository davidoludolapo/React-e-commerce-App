import  styled  from 'styled-components'
import React from 'react'

const Container = styled.div`
    height: 30px;
    background-color: teal;
    width: 100%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size:  14px;
    font-weight: 500px;
`


function Announcement() {
    return (
   
            <Container>
                Super Deal! Free shipping
            </Container>

    )
}

export default Announcement
