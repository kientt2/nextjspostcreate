import { useRouter } from 'next/router';
import * as React from 'react';

export interface IPostCreateProps {
}

export default function PostCreate (props: IPostCreateProps) {
  const router = useRouter();
  console.log(router);


  return (
    <div>
      <h1>Post Create</h1>
      <p>Query: {JSON.stringify(router.query)}</p>
      <div>
          Title: <input type="text" />
      </div>
      <div>
          Content: <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>
      <div>
          <a href="/form/preview">preview</a>
      </div>
    </div>
  );
}
