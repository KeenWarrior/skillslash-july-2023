import AnotherComponent from "@/components/AnotherComponent copy";

import ServerSideComponent from "@/components/ServerSideComponent";
import { Suspense, lazy } from "react";

export default function CustomPage() {
  const ClientComponents = lazy(() => import("@/components/ClientComponents"));

  return (
    <>
      {/* <Suspense fallback={<div>Loading...</div>}>
        <ClientComponents />
      </Suspense> */}
      <ServerSideComponent />
      {/* <AnotherComponent /> */}
    </>
  );
}
