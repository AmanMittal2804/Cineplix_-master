import React from 'react' 
import * as S from './Title.styled';

function Title(props) {
    return (
        <>
            <S.Wrapper> <h1>{props.name}</h1></S.Wrapper>
        </>
    )
}

export default Title