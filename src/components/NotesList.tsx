import Note, { IProps as IPropsNote } from "./Note";
import AddNote from "./AddNote";

interface IProps {
  notes: Array<IPropsNote>;
  handleAddNote: (value: string) => void;
  handleDelete: (id: string) => void;
}

function NotesList({ notes, handleAddNote, handleDelete }: IProps) {
  return (
    <div className="notes-list">
      {notes?.map((note: IPropsNote) => (
        <Note
          id={note.id}
          text={note.text}
          date={note.date}
          handleDelete={handleDelete}
        />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
}

export default NotesList;
