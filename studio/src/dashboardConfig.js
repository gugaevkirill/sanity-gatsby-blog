export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6089d5044712b500d8566065",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-2s56wwes",
                  apiId: "c715a5ff-762c-4877-a126-0e0da9549124",
                },
                {
                  buildHookId: "6089d50446e71700ab2d2f3c",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-vggi2fto",
                  apiId: "37e11ace-5c16-4915-a2f1-1c2815d41cc0",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/gugaevkirill/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-vggi2fto.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
