const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    dest: 'public',
    swSrc: 'service-worker.js',
    skipWaiting: true,
    register: true,
  },
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/callback/:path*',
        destination: '/dashboard',
        permanent: false,
        has: [
          {
            type: 'cookie',
            key: '_access_token_',
            value: undefined,
          },
        ],
      },
      {
        source: '/dashboard/:path*',
        destination: '/',
        permanent: false,
        has: [
          {
            type: 'cookie',
            key: '_new_user_',
            value: undefined,
          },
        ],
      },
    ];
  },
});
