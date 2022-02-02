type IType = {
  (value: boolean): boolean;
};

interface IProps {
  handleToggleDarkMode: (value: IType) => void;
}

function Header({ handleToggleDarkMode }: IProps) {
  return (
    <div className="header">
      <h1>
        <span style={{ color: "#308d46" }}>React</span> Notes
      </h1>
      <button
        onClick={() =>
          handleToggleDarkMode((previousDarkMode: boolean) => !previousDarkMode)
        }
        className="save"
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default Header;
