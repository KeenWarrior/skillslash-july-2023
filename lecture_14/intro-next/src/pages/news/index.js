export default function NewsToday({ newsList, lastUpdated }) {
  return (
    <>
      <h1>News Today</h1>
      <h3>Last Updated on : {lastUpdated}</h3>

      {newsList.map((news) => {
        return <h3>{news.title}</h3>;
      })}
    </>
  );
}

export async function getStaticProps(context) {
  const response = await fetch(
    "https://newsdata.io/api/1/news?apikey=pub_287021d39545615d06b9e901ed8de6d3950f4&q=pegasus&language=en"
  );

  const data = await response.json();

  console.log(data);

  const newsList = data.results;
  const lastUpdated = new Date().toLocaleString();

  return {
    props: {
      newsList,
      lastUpdated,
    },
    revalidate: 60,
  };
}
