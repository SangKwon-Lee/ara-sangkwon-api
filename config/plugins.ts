module.exports = ({ env }) => ({
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook:
        "https://api.vercel.com/v1/integrations/deploy/prj_ZyKVjdpVoP9LJKXhb4TQzLB2OIyN/tyzk90sI2q",
      apiToken: "ACrPx7Meg9R3CFzIsa62ZZDY",
      appFilter: "ara-sangkwon-api",
      teamFilter: "ara-sangkwon-api",
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
});
