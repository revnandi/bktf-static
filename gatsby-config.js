module.exports = {
  siteMetadata: {
    siteUrl: "https://kortars.tanc.org.hu/",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-sass",
      options: {
        sassOptions: {
          includePaths: ["src/variables.scss"],
        }
      }
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -108
      }
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-robots-txt",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: "./src/locales/",
        name: "locale"
      }
    },
    {
      resolve: "gatsby-plugin-react-i18next",
      options: {
        localeJsonSourceName: "locale", // name given to "gatsby-source-filesystem" plugin.
        languages: ["hu", "en"],
        defaultLanguage: "hu",
        // if you are using Helmet, you must include siteUrl, and make sure you add http:https
        siteUrl: "https://kortars.tanc.org.hu/",
        // you can pass any i18next options
        i18nextOptions: {
          interpolation: {
            escapeValue: false // not needed for react as it escapes by default
          },
          keySeparator: false,
          nsSeparator: false
        }
      }
    }
  ],
};
