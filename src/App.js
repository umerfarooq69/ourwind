import './App.css';
import { Div, H1, P } from './styled-components/elements'

function App() {
  return (
    <>
      <Div classes='p[20px] bg[#f5f5f5] border[1px_solid_#eee]' child-hover='name name2 name4 name3'>
        <H1 name='color[red]'>Hello</H1>
        <H1 name4='color[yellow]'>Hello</H1>
        <H1>Hello</H1>
        <Div>
          <P name2='color[white]'>Wow</P>
        </Div>
        <H1 name3="color[green]">Hello</H1>
      </Div>
    </>
  );
}

export default App;
