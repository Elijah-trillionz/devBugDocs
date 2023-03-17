module.exports = {
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
}
