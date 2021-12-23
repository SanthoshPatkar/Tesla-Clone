import React from 'react'
import styled from "styled-components"
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section 
            title="Model S"
            description="Order Online for Touchless Delivery"
            image="model-s.jpg"
            leftbutton="custom order"
            rightbutton="exsisting order"
            />
            <Section 
            title="Model Y"
            description="Order Online for Touchless Delivery"
            image="model-y.jpg"
            leftbutton="custom order"
            rightbutton="exsisting order"
            />
            <Section 
            title="Model 3"
            description="Order Online for Touchless Delivery"
            image="model-3.jpg"
            leftbutton="custom order"
            rightbutton="exsisting order"
            />
            <Section 
            title="Model X"
            description="Order Online for Touchless Delivery"
            image="model-x.jpg"
            leftbutton="custom order"
            rightbutton="exsisting order"
            />
            <Section 
            title="Solar Panels"
            description="Lowest Cost Solar Panels in America"
            image="solar-panel.jpg"
            leftbutton="Order now"
            rightbutton="Learn more"
            />
            <Section 
            title="Solar Roof"
            description="Produce Clean Energy From Your Roof"
            image="solar-roof.jpg"
            leftbutton="Order now"
            rightbutton="Learn more"
            />
            <Section 
            title="Accessories"
            description=""
            image="accessories.jpg"
            leftbutton="Order now"
            />
            
        </Container>
    )
}

export default Home

const Container =styled.div `
height:100vh;
`