export default {
  title: 'Components/Button',
  argTypes: {
    label: { control: 'text' },
    variant: { control: { type: 'select' }, options: ['solid', 'outline'] },
    disabled: { control: 'boolean' }
  }
};

export const Primary = (args) => (
  <button className={args.variant === 'outline' ? 'btn outline' : 'btn'} disabled={args.disabled}>
    {args.label || 'Button'}
  </button>
);
Primary.args = { label: 'Button', variant: 'solid' };

export const Outline = (args) => (
  <button className={'btn outline'} disabled={args.disabled}>
    {args.label || 'Button'}
  </button>
);

export const Disabled = (args) => (
  <button className={'btn'} disabled>
    {args.label || 'Button'}
  </button>
);
