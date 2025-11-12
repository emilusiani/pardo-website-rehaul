export default {
  title: 'Components/Card',
  argTypes: { title: { control: 'text' }, body: { control: 'text' } }
};

export const Basic = (args) => (
  <article className="card" style={{ maxWidth: 360 }}>
    <div className="icon" aria-hidden="true">★</div>
    <h3>{args.title || 'Card Title'}</h3>
    <p>{args.body || 'Card supporting copy goes here.'}</p>
    <a className="more" href="#">Learn More →</a>
  </article>
);
