import Link from 'next/link';
import { TAGS } from '@/constants/tags';

const SidebarNotes = async () => {
  return (
    <ul>
      <li>
        <Link href={`/notes/filter/all`}>All notes</Link>
      </li>
      {TAGS.map((tag) => (
        <li key={tag}>
          <Link href={`/notes/filter/${tag}`}>
          {tag}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SidebarNotes;