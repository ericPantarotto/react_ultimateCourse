import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Button from './ui/Button';
import Heading from './ui/Heading';
import Input from './ui/Input';

function App() {
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
        <Heading as='h1'>The Wild Oasis</Heading>
        <Heading as='h2'>Checkin and out</Heading>

        <Button onClick={() => console.log('check-in')}>Check in</Button>
        <Button onClick={() => console.log('check-out')}>Check out</Button>

        <Heading as='h3'>Form</Heading>
        <Input type='number' placeholder='Number of guests' />
      </StyledApp>
    </>
  );
}

export default App;
