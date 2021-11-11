import React from 'react';

import Login from '../Login';

import {
    Container,
    Wrapper
} from './styles'

function Layout() {
    return(
        <Container>
            <Wrapper>
                <Login />
            </Wrapper>
        </Container>
    )
}

export default Layout;