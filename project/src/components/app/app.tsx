import { Main } from '../../pages/main1/main1';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Login } from '../../pages/login1/login1';
import { Room } from '../../pages/room1/room1';
import { ErrorPage } from '../../pages/error-page/error-page';
import { Offer } from '../../mocks/offers';

type AppProps = {
  placesCount: number;
  offers: Offer[];
}

function App({placesCount, offers}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main placesCount={placesCount} offers={offers}/>}
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={AppRoute.Room}
          element={<Room/>}
        />
        <Route
          path="*"
          element={<ErrorPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
