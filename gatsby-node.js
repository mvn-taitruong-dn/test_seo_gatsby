
const path = require("path")
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  const pages = [
    {path:'/',name:"Home"},
    {path:'/hello',name:"Hello"},
  ]

  pages.forEach((page1)=>{
    const pageTemplate = path.resolve(`src/containers/${page1.name}.js`);
    createPage({
      path:page1.path,
      component: pageTemplate,
    })
  })

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/app/)) {
    console.log("page.matchPath",page.matchPath);
    console.log("page",page);
    page.matchPath = `/app/*`
    

    // Update the page.
    createPage(page)
  }


}
