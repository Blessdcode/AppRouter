import Link from "next/link";
import React from "react";

const Page = (props: { params: { id: string } }) => {
 
  return (
    <div className="h-full pb-80">
      <div className="grid m-auto max-w-full px-12 py 12 lg:max-w-6xl lg:grid-cols-2">
        <div className="mb-2 mt-24 text-2xl font-bold hover:text-white transition-all">
          <Link href="/">Back to home</Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
