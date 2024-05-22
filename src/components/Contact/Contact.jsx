import css from "./Contact.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";

export default function Contact({ data, onDelete }) {
  return (
    <div className={css.card}>
      <div className={css.info}>
        <p>
          <IoIosContact className={css.icon} />
          {data.name}
        </p>
        <p>
          <FaPhoneAlt className={css.icon} />
          {data.number}
        </p>
      </div>
      <button onClick={() => onDelete(data.id)}>Delete</button>
    </div>
  );
}
