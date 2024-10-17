import { useRouter } from 'next/router';

const posts = [
    { title: 'First Post', content: 'This is the content of my first post.' },
    { title: 'Second Post', content: 'This is the content of my second post.' },
];

export default function Post() {
    const router = useRouter();
    const { id } = router.query;

    const post = posts[id];

    if (!post) return <div>Loading...</div>;

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <Link href="/posts">
                <a>Back to posts</a>
            </Link>
        </div>
    );
}

