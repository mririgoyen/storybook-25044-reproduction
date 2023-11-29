import localFont from 'next/font/local';

const Roboto = localFont({
  src: [
    {
      path: '../roboto/Roboto-Regular.ttf',
      style: 'normal',
      weight: '500',
    },
  ],
  variable: '--font-body',
});

const preview = {
  decorators: [
    (Story) => (
      <div className={Roboto.variable}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
