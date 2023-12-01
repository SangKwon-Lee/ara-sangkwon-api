export default ({ env }) => ({
  upload: {
    config: {
      providerOptions: {
        localServer: {
          maxage: 1000000000,
        },
      },
    },
  },
});
