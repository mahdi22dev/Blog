"use server";
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
export async function Paginationblog(start, end) {
  const query =
    '*[_type == "post"]{ _id, title, mainImage,"slug":slug.current,categories[]->{title},_createdAt, "authorname": author->name }[$start..$end]';
  const posts = await client.fetch(query, { start, end });
  return posts;
}

export async function Initialblog() {
  const query =
    '*[_type == "post"]{ _id, title, mainImage,"slug":slug.current,categories[]->{title},_createdAt, "authorname": author->name }[0..5]';
  const posts = await client.fetch(query);
  return posts;
}

export async function Paginationtags(id, start, end) {
  const query = `*[_type == "post" && references($id) ] | order(_createdAt desc) {
  _id,
  title,
  mainImage,
  "slug": slug.current,
  categories[]->{title},
  _createdAt,
  "authorname": author->name
}[$start..$end]`;

  const posts = await client.fetch(query, { id, start, end });
  return posts;
}

export async function Initialtags(id) {
  const query = `*[_type == "post" && references($id) ] | order(_createdAt desc) {
  _id,
  title,
  mainImage,
  "slug": slug.current,
  categories[]->{title},
  _createdAt,
  "authorname": author->name
}[0..5]`;
  const posts = await client.fetch(query, { id: id });
  return posts;
}
