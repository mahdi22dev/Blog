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

export function readTime(content) {
  const WPS = 275 / 60;

  var images = 0;
  const regex = /\w/;

  let words = content.split(" ").filter((word) => {
    if (word.includes("<img")) {
      images += 1;
    }
    return regex.test(word);
  }).length;

  var imageAdjust = images * 4;
  var imageSecs = 0;
  var imageFactor = 12;

  while (images) {
    imageSecs += imageFactor;
    if (imageFactor > 3) {
      imageFactor -= 1;
    }
    images -= 1;
  }

  const minutes = Math.ceil(((words - imageAdjust) / WPS + imageSecs) / 60);

  return minutes;
}
