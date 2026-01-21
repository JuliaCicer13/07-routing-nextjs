import Link from 'next/link';
import { getTags } from '@/lib/api';

const SidebarNotes = async () => {
  const tags = await getTags();

  return (
    <ul>
      <li>
        <Link href={`/notes/filter/all`}>All notes</Link>
      </li>
      {tags.map((tag) => (
        <li key={tag.id}>
          <Link href={`/notes/filter/${tag.id}`}>{tag.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default SidebarNotes;