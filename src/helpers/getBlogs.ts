

export const GetBlogs = async ()=> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`, {
        cache: "no-store"
    });
    const blogs = await res.json();
    return blogs;
}