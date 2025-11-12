import '../styles/theme.css?sb';
import '../app/globals.css?sb';

// Mock next/image to render a plain img and normalize relative srcs
try {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const NextImage = require('next/image');
  // Force unoptimized img rendering in Storybook
  Object.defineProperty(NextImage, 'default', {
    configurable: true,
    value: ({ src, ...rest }) => {
      const s = typeof src === 'string' ? (src.startsWith('/') ? src : `/${src}`) : src;
      // eslint-disable-next-line react/jsx-no-target-blank
      return <img src={s} {...rest} />;
    }
  });
} catch {}

export const parameters = {
  controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } }
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: 'light', title: 'Light' },
        { value: 'dark', title: 'Dark' },
        { value: 'high', title: 'High Contrast' }
      ]
    }
  }
};

export const decorators = [
  (Story, context) => {
    const theme = context.globals.theme;
    const contrast = theme === 'high' ? 'high' : undefined;
    return (
      <div data-theme={theme === 'dark' ? 'dark' : undefined} data-contrast={contrast} style={{ background: 'var(--color-bg)', color: 'var(--color-fg)', minHeight: '100vh', padding: '1rem' }}>
        <Story />
      </div>
    );
  }
];
