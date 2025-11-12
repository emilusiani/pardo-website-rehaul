import ContactForm from '../app/ContactForm';

export default {
  title: 'Components/ContactForm',
  parameters: { controls: { disable: true } },
};

export const Basic = () => <ContactForm />;
