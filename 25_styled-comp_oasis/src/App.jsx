import styled from 'styled-components';

function App() {
  const H1 = styled.h1`
    font-size: 2rem;
    font-weight: 600;
  `;

  const Button = styled.button`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    border: none;
    border-radius: 0.4rem;
    background-color: var(--color-primary);
    color: var(--color-white);
    cursor: pointer;
    margin: 20px;
  `;

  const Input = styled.input`
    border: 1px solid var(--color-grey-300);
    border-radius: 5px;
    padding: 0.8rem 11.2rem;
  `;

  const StyledApp = styled.div`
    display: flex;
    padding: 20px;
    flex-direction: column;
    align-items: center;
  `;

  return (
    <StyledApp>
      <H1>Hello</H1>
      <Button onClick={() => console.log('check-in')}>Check in</Button>
      <Button onClick={() => console.log('check-out')}>Check out</Button>
      <Input type='number' placeholder='Number of guests' />
    </StyledApp>
  );
}

export default App;
