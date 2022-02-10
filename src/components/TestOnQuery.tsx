import React from "react";
import { client, PageIdType } from "client";

function TestOnQuery(): JSX.Element {
  const { useQuery, usePage } = client;
  const page = usePage({ id: "/about", idType: PageIdType.URI });

  const postOrPage = useQuery().nodeByUri({ uri: "/about" });
  // 1) When I uncomment the "Post" I get a runtime error `TypeError: can't access property "title", _Post is undefined`
  const {
    $on: {
      //   Post: { title: postTitle, content: postContent },
      Page: { title: pageTitle, content: pageContent },
    },
  } = postOrPage;

  // const title = postTitle || pageTitle;
  // const content = postContent || pageContent;

  return (
    <section>
      Test On Query
      <pre>{JSON.stringify(postOrPage.id, null, 4)}</pre>
      <pre>pageTitle: {JSON.stringify(pageTitle(), null, 4)}</pre>
      <pre>usePage() id: {JSON.stringify(page?.id, null, 4)}</pre>
      <pre>usePage() title: {JSON.stringify(page?.title(), null, 4)}</pre>
      {/* {/* <pre>{JSON.stringify(title(), null, 4)}</pre> */}
      {/* <pre>{JSON.stringify(content, null, 4)}</pre> */}
    </section>
  );
}

export default TestOnQuery;
