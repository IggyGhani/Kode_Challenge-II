import { createClient } from "contentful";

export default async function Service() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  });
  const response = await client.getEntries({
    content_type: process.env.CONTENTFUL_CONTENT_TYPE!,
  });
  const collection = response.items;

  console.log(collection);

  return (
    <div>
      {collection.map((item: any) => (
        <>
          <h1>{item?.fields?.title}</h1>
          <p>{item?.fields?.prices}</p>
          <img
            src={`https://${item?.fields?.image?.fields?.file?.url}`}
            alt=""
          />
        </>
      ))}
    </div>
  );
}
