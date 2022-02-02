import { MdDeleteForever } from "react-icons/md";

export interface IProps {
  id: string;
  text: string;
  date: string;
  handleDelete?: (id: string) => void;
}

function Note({ id, text, date, handleDelete }: IProps) {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever
          onClick={() => handleDelete?.(id)}
          className="delete-icon"
          size="1.3em"
        />
      </div>
    </div>
  );
}

export default Note;
