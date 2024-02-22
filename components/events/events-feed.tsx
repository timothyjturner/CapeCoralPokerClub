import EventCard from "./event-card";
import Image from "next/image";

function decodeHtml(text) {
  var entities = [
    ['amp', '&'],
    ['#8217', '\''],
    ['apos', '\''],
    ['#x27', '\''],
    ['#x2F', '/'],
    ['#39', '\''],
    ['#47', '/'],
    ['lt', '<'],
    ['gt', '>'],
    ['nbsp', ' '],
    ['quot', '"']
];

for (var i = 0, max = entities.length; i < max; ++i)
    text = text.replace(new RegExp('&' + entities[i][0] + ';', 'g'), entities[i][1]);

return text;
}

export default function EventsFeed(posts) {

  return (
    <section className="ccpc-events-feed mx-auto mt-8 flex flex-col items-center">
      {posts.posts.map((post) => {
          console.log(post.node.isSticky);
          let imageURL = post.node.featuredImage.node.sourceUrl;
          let exceprtFormatted = decodeHtml(post.node.excerpt.replace(/(<([^>]+)>)/gi, ""));
          return <EventCard key={post.node.slug} order={post.node.isSticky ? "1" : "2"}><Image src={imageURL} className="p-8" alt="Event Card" width={250} height={250} /><div className="flex flex-col p-8 justify-start gap-1"><h3 className="text-lg text-black w-full font-semibold">{post.node.title}</h3><p>{exceprtFormatted}</p></div></EventCard>;
        })}
    </section>
  );
}
