import { Main } from '../../pages/main/main';
import { Routes, Route } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Login } from '../../pages/login/login';
import { Room } from '../../pages/room/room';
import { ErrorPage } from '../../pages/error-page/error-page';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { store } from '../../store';
import { Spinner } from '../spinner/spinner';
import HistoryRouter from '../history-router/history-router';
import browserHistory from '../../browser-history';

function App(): JSX.Element {
  const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;

  const isOffersLoading = useAppSelector(
    (state) => state.isOffersLoading
  );

  if (
    isOffersLoading
  ) {
    return <Spinner />;
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main />}
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
    </HistoryRouter>
  );
}

export default App;
