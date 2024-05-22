import css from "./SearchBox.module.css";
import { useId } from "react";

export default function SearchBox({ filter, onFilter }) {
  const searchId = useId();
  return (
    <div className={css.container}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input
        type="text"
        id={searchId}
        value={filter}
        onChange={(event) => {
          onFilter(event.target.value);
        }}
      />
    </div>
  );
}
