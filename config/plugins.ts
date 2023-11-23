export default ({ env }) => {
  return {
    upload: {
      config: {
        provider: "strapi-provider-firebase-storage",
        providerOptions: {
          serviceAccount: JSON.parse(env("FIREBASE_SERVICE_ACCOUNT")),
          bucket: env("STORAGE_BUCKET_URL", "something.appspot.com"),
          sortInStorage: true,
          debug: true,
        },
      },
    },
    "vercel-deploy": {
      enabled: true,
    },
  };
};
