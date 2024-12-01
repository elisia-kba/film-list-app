import ReactDOM from 'react-dom';
import Film from './Film';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Film />, div);
  ReactDOM.unmountComponentAtNode(div);
});