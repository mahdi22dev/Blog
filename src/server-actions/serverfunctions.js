import { client } from "../../sanity/lib/client";

export async function Initialsearch(search) {
  const query =
    '*[_type == "post" && title match $search]{ _id, title, mainImage,"slug":slug.current,categories[]->{title},_createdAt, "authorname": author->name }[0..5]';
  const posts = await client.fetch(query, { search });
  return posts;
}

export async function Paginationsearch(search, start, end) {
  const query =
    '*[_type == "post" && title match $search]{ _id, title, mainImage,"slug":slug.current,categories[]->{title},_createdAt, "authorname": author->name }[$start..$end]';
  const posts = await client.fetch(query, { search, start, end });
  return posts;
}
export async function Paginationsearch2(search, start, end) {
  const query =
    '*[_type == "post" && title match $search]{ _id, title, mainImage,"slug":slug.current,categories[]->{title},_createdAt, "authorname": author->name }[$start..$end]';
  const posts = await client.fetch(query, { search, start, end });
  return posts;
}
