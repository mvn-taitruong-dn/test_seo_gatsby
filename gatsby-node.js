
const path = require("path")
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */



exports.onCreatePage = async ({ page, actions }) => {
  const { createPage, createRedirect } = actions
  
  console.log("page.path.",page.path);
  if (page.path.match(/^\/app/)) {
    console.log("page.matchPath",page.matchPath);
    console.log("page",page);
    console.log("page.path.",page.path);
    page.matchPath = `/app/*`
    
    createPage(page);
  
  }
}

exports.createPages= async({ actions})=>{
  const { createPage, createRedirect } = actions
  const pages = [
    {path:'/',name:"Home"},
    {path:'/hello',name:"Hello"},
    {path:'/error/:code',name:"Error"},
  ]

  pages.forEach((page1)=>{
    const pageTemplate = path.resolve(`src/containers/${page1.name}.js`);
    createPage({
      path:page1.path,
      component: pageTemplate,
      
    })
  })

  

  // createRedirect({ fromPath: "/hello/*", toPath: "/404", isPermanent: true , redirectInBrowser: true});
  // createRedirect({ fromPath: "/*", toPath: "/404", isPermanent: true , redirectInBrowser: true});
}
