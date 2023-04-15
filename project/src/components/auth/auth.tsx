import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { store } from '../../store';

export function Auth(): JSX.Element {
  const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;
  const isAuth = useAppSelector((state) => state.authorizationStatus);
  const authUser = useAppSelector((state) => state.userAuth);

  return (
    <nav className="header__nav">
      {isAuth ?
        <ul className="header__nav-list">
          <li className="header__nav-item user">
            <div className="header__nav-profile">
              <div className="header__avatar-wrapper user__avatar-wrapper"></div>
              <span className="header__user-name user__name">{authUser?.email}</span>
            </div>
          </li>
          <li className="header__nav-item">
            <a className="header__nav-link" href="#">
              <span className="header__signout">Sign out</span>
            </a>
          </li>
        </ul>
        :
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <Link to={AppRoute.Login} className='header__nav-link'>
              <span className="header__signout">Sign in</span>
            </Link>
          </li>
        </ul>}
    </nav>
  );
}
