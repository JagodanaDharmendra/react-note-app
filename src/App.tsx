import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

// components
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";
import { IProps as IPropsNote } from "./components/Note";

function App() {
  const [notes, setNotes] = useState<Array<IPropsNote>>([
    {
      id: nanoid(),
      text: "This is my first note",
      date: "03/11/2021",
    },
    {
      id: nanoid(),
      text: "This is my second note",
      date: "03/11/2021",
    },
    {
      id: nanoid(),
      text: "This is my third note",
      date: "03/11/2021",
    },
  ]);

  const [searchNote, setSearchNote] = useState<string>("");
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const savedNotes: Array<IPropsNote> = JSON.parse(
      String(localStorage.getItem("react-notes-app-data"))
    );
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text: string) => {
    const date = new Date();
    const newNote: IPropsNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes: Array<IPropsNote> = [...notes, newNote];
    setNotes(newNotes);
  };

  const deletingNote = (id: string) => {
    const newNotes: Array<IPropsNote> = notes.filter(
      (note: IPropsNote) => note.id !== id
    );
    setNotes(newNotes);
  };

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />

        <Search handleSearch={setSearchNote} />

        <NotesList
          notes={notes.filter((note: IPropsNote) =>
            note.text.toLowerCase().includes(searchNote)
          )}
          handleAddNote={addNote}
          handleDelete={deletingNote}
        />
      </div>
    </div>
  );
}

export default App;
