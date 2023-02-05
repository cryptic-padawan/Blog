export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
  
    // map data to an array of path objects with params (id)
    const paths = data.map(ninja => {
      return {
        params: { id: ninja.id.toString() }
      }
    })
  
    return {
      paths,
      fallback: false
    }
  }
  
  export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();
  
    return {
      props: { blog: data }
    }
  }
  
  const Details = ({ blog }) => {
    return (
      <div className="blog-view">
                    <h4>Name: { blog.name }</h4>
                    <p>Username: { blog.username }</p>
                    <p>Email: { blog.email }</p>
                    <p><u>Address: </u><br/>
                            <div className="space">
                                Street: { blog.address.street }<br/>
                                Suite: { blog.address.suite }<br/>
                                City: { blog.address.city }<br/>
                                Zipcode: { blog.address.zipcode }
                            </div></p>
                    <p>Phone No.: { blog.phone }</p>
                    <p>Website: { blog.website }</p>
                    <p><u>Company: </u><br/>
                            <div className="space">
                                Name: { blog.company.name }<br/>
                                Catch Phrase: { blog.company.catchPhrase }<br/>
                                Bs: { blog.company.bs }<br/>
                            </div></p>
        </div>
    );
  }
  
  export default Details;