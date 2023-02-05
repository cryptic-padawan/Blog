import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <h1>The Dojo blog</h1>
        <div className="links">
          <Link href="/"><a>Home</a></Link>
          <Link href="/blogs/"><a>Blogs Listing</a></Link>
        </div>
      </div>
    </nav>
  );
}
 
export default Navbar;