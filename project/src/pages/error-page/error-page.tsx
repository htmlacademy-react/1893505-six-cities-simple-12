import {Link} from 'react-router-dom';

export function ErrorPage(): JSX.Element {
  return (
    <div style={{ fontStyle: 'oblique', textAlign: 'center' }}>
      <h1>404. Page not found</h1>
      <Link to="/">Вернуться на главную</Link>
    </div>
  );
}
