import React from "react";
import styled from "styled-components";

const StyleTest = () => {
  // Create a Title component that'll render an <h1> tag with some styles
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  `;

  // Create a Wrapper component that'll render a <section> tag with some styles
  const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
  `;
  const Button = styled.button`
    display: inline-block;
    color: palevioletred;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    display: block;
    max-width: 300px
  `;

  const TomatoButton = styled(Button)`
    color: tomato;
    border-color: tomato;
  `;

  return(
    <div>
      <Button>Normal Button</Button>
      <Button as="a" href="#">
        Link with Button styles
      </Button>
      <TomatoButton as="a" href="#">
        Link with Tomato Button styles
      </TomatoButton>
    </div>
  );
  // Use Title and Wrapper like any other React component – except they're styled!
//   return (
//     <Wrapper>
//       <Title>Hello World!</Title>
//     </Wrapper>
//   );
};

export default StyleTest;
