import Error from '../app/error';

export default { title: 'Feedback/Error' };

export const Basic = () => (
  <Error error={new Error('Example error')} reset={() => alert('Reset clicked')} />
);
