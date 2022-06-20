
const path = require("path")
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

exports.createPages= async({actions})=>{
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
  createRedirect({ fromPath: "/*", toPath: "/404", isPermanent: true , redirectInBrowser: true});

 
 
}

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage, createRedirect } = actions
    // page.matchPath is a special key that's used for matching pages
  // only on the client.
  // console.log("page.matchPath",page.matchPath);
  // console.log("page",page);
  // console.log("page.path.",page.path);
  // if (page.path.match(/^\/)) {
   
  //   page.matchPath = `/*`
  //   // Update the page.
  //   createPage(page)
  // }
  
  console.log("page.path.",page.path);
  if (page.path.match(/^\/app/)) {
    console.log("page.matchPath",page.matchPath);
    console.log("page",page);
    console.log("page.path.",page.path);
    page.matchPath = `/*`
    // Update the page.
    await createPage(page);
    // page.matchPath = `/profile`;
    // // Update the page.
    // await createPage(page)
    // page.matchPath = `/details`;
    // // Update the page.
    // await createPage(page)
  }

  // if (page.path.match(/^\/login/)) {
  //   console.log("page.matchPath",page.matchPath);
  //   console.log("page",page);
  //   console.log("page.path.",page.path);
  //   page.matchPath = `/login`
  //   // Update the page.
  //   createPage(page)
  // }
  // if (page.path.match(/^\/login/)) {
  //   console.log("page.matchPath",page.matchPath);
  //   console.log("page",page);
  //   console.log("page.path.",page.path);
  //   page.matchPath = `/login`
  //   // Update the page.
  //   createPage(page)
  // }
  // if (page.path.match(/^\/profile/)) {
  //   console.log("page.matchPath",page.matchPath);
  //   console.log("page",page);
  //   console.log("page.path.",page.path);
  //   page.matchPath = `/profile`
  //   // Update the page.
  //   createPage(page)
  // }
  
  // if (page.path.match(/^\/error\/$/)) {
  //   console.log("sdsds");
  //   // Match all paths starting with this code (apart from other valid paths)
  //   page.matchPath = `/error/*`
  //   createPage(page)
  // }
  


}
