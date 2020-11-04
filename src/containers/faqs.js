import React from 'react';
import { Accordion } from '../components'
import { OptForm } from '../components'
import faqsData from '../fixtures/faqs.json'


export function FaqsContainer() {
    return (
        <Accordion>
            <Accordion.Title> Frequently Asked Questions </Accordion.Title>
            {faqsData.map(item => (
                <Accordion.Item key={item.id}>
                    <Accordion.Header>{item.header} </Accordion.Header>
                    <Accordion.Body> {item.body} </Accordion.Body>
                </Accordion.Item>
            ))}

            <OptForm>
                <OptForm.Input placeholder="Email Address"></OptForm.Input>
                <OptForm.Button >Try it Now</OptForm.Button>
                <OptForm.Break> </OptForm.Break>
                <OptForm.SubText >Ready to watch? Enter your email addres to start your membership</OptForm.SubText>
            </OptForm>
        </Accordion>
    )
}