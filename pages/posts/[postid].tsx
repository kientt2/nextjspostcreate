import { route } from 'next/dist/server/router';
import { useRouter } from 'next/router';
import * as React from 'react';

export interface IPostDetailPageProps {
}

export default function PostDetailPage (props: IPostDetailPageProps) {
    const router = useRouter();
    console.log(router);
  
    return (
    <div>
      <h1>Post Detail</h1>
      <p>Query: {JSON.stringify(router.query)}</p>
    </div>
  );
}
