import { Main } from '../../pages/Main/Main';

type AppProps = {
  offerCount: number;
}

function App({offerCount}: AppProps): JSX.Element {
  return <Main offerCount={offerCount}/>;
}

export default App;
