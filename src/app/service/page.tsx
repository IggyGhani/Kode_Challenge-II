import { createClient } from "contentful";

export default async function Service() {
  const client = createClient({
    space: "wbyms5ifytgt",
    accessToken: "J30sD7ayEYIwZa6QeS08GC8W7BaanRyGGQPX-kCDgks",
  });
  const response = await client.getEntries({
    content_type: "exhibit",
  });
  const collection = response.items;

  console.log(collection);

  return (
    <div>
      {collection.map((item: any) => (
        <>
          <h1>{item?.fields?.title}</h1>
          <p>{item?.fields?.prices}</p>
          <img src={`https://${item?.fields?.image?.fields?.file?.url}`} alt="" />
        </>
      ))}
    </div>
  );
}
