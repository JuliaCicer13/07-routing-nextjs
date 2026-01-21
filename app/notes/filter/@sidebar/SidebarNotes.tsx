import css from "../@sidebar/SidebarNote.module.css";
import Link from 'next/link';

const SidebarNotes = () => {
return (
    <ul className={css.menuList}>
    {/* список тегів */}
      <li className={css.menuItem}>
         <Link href='/notes/filter/all'className={css.menuLink}>Notes</Link>
          All notes
      </li>
      <li className={css.menuItem}>
        <Link href={`/notes/filter/${tag}`} className={css.menuLink}></Link>
          Назва тегу
      </li>
    </ul>
)
}

export default SidebarNotes