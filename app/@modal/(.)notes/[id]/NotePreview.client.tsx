'use client';

import { getSingleNote } from '@/lib/api';
import { useQuery } from "@tanstack/react-query";
import { useParams } from 'next/navigation';
import Modal from '@/components/Modal/Modal';

type Props = {
  params: Promise<{ id: string }>;
};

const NotePreview = async ({ params }: Props) => {
  const { id } = await params;
  const note = await getSingleNote(id);

  return (
    <Modal onClick={close}>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
    </Modal>
  );
};

export default NotePreview;