import Link from 'next/link';

const posts = [
    { id: 1, title: 'First Post', content: 'This is the content of my first post.' },
];

export default function Blog() {
    return (
        <div>
            <h1>My Blog</h1>
            {posts.map((post) => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                    <Link href={`/blog/${post.id}`}>
                        <a>Read more...</a>
                    </Link>
                </div>
            ))}
        </div>
    );
}

