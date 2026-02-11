"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";

const Page = () => {
  const { data } = authClient.useSession();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {JSON.stringify(data)}
      {data && (
        <Button onClick={() => authClient.signout()}>Logout <Button/>
      )}
    </div>
  );
}

export default Page;
