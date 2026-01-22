import {fetchNoteById} from "@/lib/api";
import { QueryClient, HydrationBoundary, dehydrate } from  "@tanstack/react-query";
import NotesClient from "./Notes.client";

type Props = {
  params: { id: string};
};
export default async function NotePage ({ params }: Props) {
   const queryClient = new QueryClient();
   const {id} = params;

   await queryClient.prefetchQuery({
    queryKey: ["notes", id],
    queryFn: () => fetchNoteById(id),
   });

   return <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient/>
   </HydrationBoundary>
}