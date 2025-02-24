import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Button from './ui/Button';
import Heading from './ui/Heading';
import Input from './ui/Input';
import Row from './ui/Row';

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
        <Row>
          <Row type='horizontal'>
            <Heading as='h1'>The Wild Oasis</Heading>
            <div>
              <Heading as='h2'>Check in and out</Heading>

              <Button onClick={() => console.log('check-in')}>Check in</Button>
              <Button variation='secondary' size='small' onClick={() => console.log('check-out')}>
                Check out
              </Button>
            </div>
          </Row>

          <Row>
            <Heading as='h3'>Form</Heading>
            <form>
              <Input type='number' placeholder='Number of guests' />
              <Input type='number' placeholder='Number of rooms' />
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
