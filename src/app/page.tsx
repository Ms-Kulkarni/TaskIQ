import { trpc, getQueryClient } from '@/trpc/server';
import { Client } from './client';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
const Page = async () => {
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(trpc.getUsers.queryOptions())

  return <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Client />
    </HydrationBoundary>
  </div>;
};
export default Page; 