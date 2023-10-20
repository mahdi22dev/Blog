const moment = require("moment/moment");

export const dateFormater = (date) => {
  const fromatedDate = moment(date).format("MMMM Do, YYYY");
  return fromatedDate;
};

export const Generatesharelink = (link, title) => {
  let sharelink = "";
  if (link.title == "facebook") {
    return (sharelink = `https://www.facebook.com/sharer/sharer.php?u=https://blog-website-m.vercel.app/post/float-team-scheduling-done-right`);
  }
  if (link.title == "twitter") {
    return (sharelink = `https://twitter.com/intent/tweet?text=${title}&url=https://blog-website-m.vercel.app/post/float-team-scheduling-done-right`);
  }
  if (link.title == "whatsApp") {
    return (sharelink = `https://api.whatsapp.com/send?text=Check out this blog post: https://blog-website-m.vercel.app/post/float-team-scheduling-done-right`);
  }
  if (link.title == "linkedin") {
    return (sharelink = `https://www.linkedin.com/shareArticle?mini=true&url=https://blog-website-m.vercel.app/post/float-team-scheduling-done-right&title=${title}`);
  }
  if (link.title == "email") {
    return (sharelink = `mailto:?subject=Check out this blog post&body=I thought you might find this blog post interesting: https://blog-website-m.vercel.app/post/float-team-scheduling-done-right`);
  }
  return link.title;
};
