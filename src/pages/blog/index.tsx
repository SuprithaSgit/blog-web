import sanityClient from "lib"

export default function Home({ posts }: any) {
  console.log("posts from sanity", posts)
  return (
    <div>
      <h1>Latest Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
export async function getServerSideProps() {
  const query = `*[_type == "post"]`
  const posts = await sanityClient.fetch(query)

  return {
    props: {
      posts,
    },
  }
}
