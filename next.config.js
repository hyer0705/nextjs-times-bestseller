module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/lists",
        destination: "https://books-api.nomadcoders.workers.dev/lists",
      },
      {
        source: "/api/list/:id",
        destination: "https://books-api.nomadcoders.workers.dev/list?name=:id",
      },
    ];
  },
};
