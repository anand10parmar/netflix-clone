import React from 'react';
import { HeaderContainer } from '../containers/header';
import { Feature } from '../components'
import { OptForm } from '../components'
import { JumbotronContainer } from '../containers/jumbotron'
import { FooterContainer } from '../containers/footer'
import { FaqsContainer } from '../containers/faqs';


export default function Home() {
    return (<>
        <HeaderContainer>
            <Feature>
                <Feature.Title> Unlimited films, TV programmes and more </Feature.Title>
                <Feature.SubTitle> watch anywhere. cancle at any time. </Feature.SubTitle>
                <OptForm>
                <OptForm.Input placeholder="Email Address"></OptForm.Input>
                <OptForm.Button >Try it Now</OptForm.Button>
                <OptForm.Break> </OptForm.Break>
                <OptForm.SubText >Ready to watch? Enter your email addres to start your membership</OptForm.SubText>
            </OptForm>
            </Feature>
        </HeaderContainer>
        <JumbotronContainer />
        <FaqsContainer />
        <FooterContainer />

    </>
    )
}