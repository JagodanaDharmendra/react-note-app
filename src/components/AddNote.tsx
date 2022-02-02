import { useState } from "react";

export interface IProps {
  handleAddNote: (value: string) => void;
}

function AddNote({ handleAddNote }: IProps) {
  const charLimit: number = 300;

  const [noteText, setNoteText] = useState<string>("");

  const handleChange = (event: any) => {
    if (charLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };

  return (
    <div className="note new">
      <textarea
        cols={10}
        rows={8}
        placeholder="Type here to add a new note..."
        onChange={handleChange}
        value={noteText}
      />
      <div className="note-footer">
        <small>{charLimit - noteText.length} Remaining</small>
        <button className="save" onClick={handleSaveClick}>
          Save Note
        </button>
      </div>
    </div>
  );
}

export default AddNote;
