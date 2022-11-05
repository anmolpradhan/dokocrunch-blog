import Nav from "./nav"

const Layout = ({ children, categories, seo }) => (
  <div className="bg-[#f3f5ff]">
    <Nav categories={categories} />
    {children}
  </div>
)

export default Layout
