import './App.css';
import styled, {ThemeProvider} from "styled-components";

const Button = styled.button`
  font-family: GT Flexa Mono Trial Md;
  background-color: ${(props) => (props.primary ? '#E4F0FF' : '#FFEAEA' )};
  color: ${(props) => (props.primary ? '#0C3DFF' : '#F7652D' )};
  /* height: 30vh; */
  width: 23vw;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  transition: .3s;
  padding: 5px 10px;
  margin: 5px 10px;
  &:hover {
    background-color: #F4FFCF;
    border: none;
  }
`
const H1 = styled.h1` 
    font-size: 48px;
    align-self: left;
    color: white;
    margin-top: 0px;
    margin: 1vh 0vw 1vh 2vw;
`
const IMAGE = styled.image`

`
function App() {
  return (
    <div className="App">
      <H1>DAILY SKITTLE</H1>
        <Button primary>Primary
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div>
        </Button>
        <Button secondary>Secondary
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum </div>
        </Button>
        <Button primary>Primary
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </div>
        </Button>
        <Button secondary>Secondary
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div>
        </Button>
        <Button primary>Primary
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div>
        </Button>
         <Button secondary>Secondary
        <div>Lorem ipsum dolor sit amet, consectetunim id est laborum</div>
        </Button>
        <Button primary>Primary
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div>
        </Button>
         <Button secondary>Secondary
        <div>Lorem ipsum dolor sit amet, consectetunim id est laborum</div>
        </Button>
        <Button primary>Primary
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div>
        </Button>
        <Button secondary>Secondary
        <div>Lorem ipsum dolor sit amet, consectetunim id est laborum</div>
        </Button>
        <Button primary>Primary
        <div>Lorem ipsum dolor sit amet,ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div>
        </Button>
        <Button secondary>Secondary</Button>
        <Button primary>Primary</Button>
        <Button secondary>Secondary</Button>
        <Button secondary>Secondary</Button>
    </div>
  );
}

export default App;
