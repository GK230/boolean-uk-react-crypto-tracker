import NewsCard from "./NewsCard";

function NewsFeedSection({ criptoNews }) {
  return (
    <ul className="newsfeed">
      {criptoNews.map((newsItem) => (
        <NewsCard newsItem={newsItem} />
      ))}
    </ul>
  );
}

export default NewsFeedSection;
