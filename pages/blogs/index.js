import styles from '../../styles/Blogs.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { blogs: data }
  }
}

const Blogs = ({ blogs }) => {

  return (
    <div className={styles.listing}>
      <h1>All Blogs</h1>
      {blogs.map(blog => (
        <div className={styles.preview} key={blog.id}>
          <Link href={'/blogs/' + blog.id}>
            <a>
              <h2>{ blog.name }</h2>
              <p style={{fontFamily:"cursive"}}>Username: { blog.username }</p>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default Blogs;