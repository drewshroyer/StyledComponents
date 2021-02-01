import './App.css';
import styled, {ThemeProvider} from "styled-components";

const theme = {
  primary: 'white',
  secondary: 'black',
  font: 'Futura',
  alert: 'yellow'
}

const Button = styled.button`
  font-family: Futura;
  background-color: ${(props) => (props.primary ? 'blue' : 'green' )};
  font-size: 18px;
  color: white;
  border: none;
  border-radius: 5px;
  transition: .3s;
  padding: 5px 10px;
  margin: 10px;
  &:hover {
    background-color: lightblue;
    border: none;
  }
`
const H1 = styled.h1`   
    font-size: 48px;
`
function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <H1> Styled Components</H1>
        <Button primary>Primary</Button>
        <Button secondary>Secondary</Button>
    </div>
    </ThemeProvider>
  );
}

export default App;
