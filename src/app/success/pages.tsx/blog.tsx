import Link from 'next/link';

const posts = [
    { id: 1, title: 'First Post', content: 'This is the content of my first post.' },
    { id: 2, title: 'Second Post', content: 'This is the content of my second post.' },
];


                    <p>{post.content}</p>
                    <Link href={`/blog/${post.id}`}>
                        <a>Read more...</a>
                    </Link>
                </div>
            ))}
        </div>
    );
}


