import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Button from './ui/Button';
import Input from './ui/Input';

function App() {
  const H1 = styled.h1`
    font-size: 2rem;
    font-weight: 600;
  `;




  const StyledApp = styled.div`
    display: flex;
    padding: 20px;
    flex-direction: column;
    align-items: center;
  `;

  return (
    <>
      <GlobalStyles />

      <StyledApp>
        <H1>Hello</H1>
        <Button onClick={() => console.log('check-in')}>Check in</Button>
        <Button onClick={() => console.log('check-out')}>Check out</Button>
        <Input type='number' placeholder='Number of guests' />
      </StyledApp>
    </>
  );
}

export default App;
