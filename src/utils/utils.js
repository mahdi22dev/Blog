const moment = require("moment/moment");

export const dateFormater = (date) => {
  const fromatedDate = moment(date).format("MMMM Do, YYYY");
  return fromatedDate;
};

export const Generatesharelink = (link, title, slug) => {
  let sharelink = "";
  if (link.title == "facebook") {
    return (sharelink = `https://www.facebook.com/sharer/sharer.php?u=https://blog-website-m.vercel.app/post/${slug}`);
  }
  if (link.title == "twitter") {
    return (sharelink = `https://twitter.com/intent/tweet?text=${title}&url=https://blog-website-m.vercel.app/post/${slug}`);
  }
  if (link.title == "whatsApp") {
    return (sharelink = `https://api.whatsapp.com/send?text=Check out this blog post: https://blog-website-m.vercel.app/post/${slug}`);
  }
  if (link.title == "linkedin") {
    return (sharelink = `https://www.linkedin.com/shareArticle?mini=true&url=https://blog-website-m.vercel.app/post/${slug}&title=${title}`);
  }
  if (link.title == "email") {
    return (sharelink = `mailto:?subject=Check out this blog post&body=I thought you might find this blog post interesting: https://blog-website-m.vercel.app/post/${slug}`);
  }

  return link.title;
};

export function estimateReadTime(body) {
  // Define the average words per minute
  const wordsPerMinute = 200; // You can adjust this based on your content and reader's speed.

  // Initialize a variable to keep track of the total word count
  let totalWords = 0;

  // Iterate through the body content and extract plain text
  body.forEach((block) => {
    if (block._type === "block" && block.children) {
      block.children.forEach((span) => {
        if (span._type === "span" && span.text) {
          const textWords = span.text.split(" ").length;
          totalWords += textWords;
        }
      });
    }
  });

  // Calculate estimated read time
  const readTimeMinutes = totalWords / wordsPerMinute;

  return Math.ceil(readTimeMinutes); // Round up to the nearest minute
}
