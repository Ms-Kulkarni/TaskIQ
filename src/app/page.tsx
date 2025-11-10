import { caller } from '@/trpc/server';
const Page = async () => {
  const users = await caller.getUsers();
  
  return <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    {JSON.stringify(users)}
  </div>;
};
export default Page; 