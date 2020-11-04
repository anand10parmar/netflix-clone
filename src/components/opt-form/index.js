import React from 'react';
import {Input, Button, SubText, Container, Break} from '../opt-form/styles/opt-form'
export default function OptForm({ children, ...restProps }) {
    return <Container {...restProps}>
            {children}
    </Container>
}

OptForm.Input = function OptFormInput({children, ...restProps}){
    return <Input {...restProps} />
}

OptForm.Button = function OptFormButton({children, ...restProps}){
    return <Button {...restProps}>{children} <img src="/images/icons/chevron-right.png" /></Button>
}

OptForm.SubText = function OptFormSubText({children, ...restProps}){
    return <SubText {...restProps}>{children}
     </SubText>
}


OptForm.Break = function OptFormBreak({children, ...restProps}){
    return <Break {...restProps}>{children}
     </Break>
}


