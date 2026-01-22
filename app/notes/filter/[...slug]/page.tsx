import { getTags } from '@/lib/api';
import NoteList from '@/components/NoteList/NoteList';

type Props = {
  params: Promise<{ slug: string[] }>;
};

const NotesByCategory = async ({ params }: Props) => {
  const { slug } = await params;
  const tag = slug[0] === 'all' ? undefined : slug[0];
  const response = await getTags(tag);

  return (
    <div>
      <h1>Notes List</h1>
      {response?.tag?.length > 0 && <NoteList notes={response.tag} />}
    </div>
  );
};

export default NotesByCategory;