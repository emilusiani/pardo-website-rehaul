import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  "stories": [
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    { "name": "@storybook/addon-essentials", "options": { "docs": false } },
    "@storybook/addon-a11y",
    "@storybook/addon-themes"
  ],
  "framework": {
    "name": "@storybook/react-webpack5",
    "options": {}
  },
  "staticDirs": [
    "..\\public"
  ]
  ,
  webpackFinal: async (config) => {
    // Transpile JSX stories
    (config.module ||= { rules: [] as any }).rules?.push({
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: require.resolve('babel-loader'),
        options: {
          presets: [
            require.resolve('@babel/preset-env'),
            [require.resolve('@babel/preset-react'), { runtime: 'automatic' }]
          ]
        }
      }
    });
    // Exclude ?sb CSS imports from default rules to avoid double-processing
    const rules = (config.module?.rules ?? []) as any[];
    for (const r of rules) {
      if (r && r.test && r.test.toString().includes('\\.css')) {
        r.resourceQuery = r.resourceQuery || {};
        const notArr = (r.resourceQuery.not = r.resourceQuery.not || []);
        notArr.push(/sb/);
      }
    }
    // Custom CSS handling for Storybook imports with ?sb query (single css-loader chain)
    (config.module.rules as any[]).push({
      test: /\.css$/,
      resourceQuery: /sb/,
      include: [require('path').resolve(__dirname, '../app'), require('path').resolve(__dirname, '../styles')],
      use: [
        require.resolve('style-loader'),
        {
          loader: require.resolve('css-loader'),
          options: {
            url: { filter: (url: string) => !url.startsWith('/') }
          }
        }
      ]
    });
    (config.resolve ||= { extensions: [] as any }).extensions?.push('.js', '.jsx');
    return config;
  }
};
export default config;