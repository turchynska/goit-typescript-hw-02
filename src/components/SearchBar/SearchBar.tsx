import css from "./SearchBar.module.css";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

type Props = {
  onSubmit: (value: string | number) => void;
};

const SearchBar: React.FC<Props> = ({ onSubmit }) => {
  const [value, setValue] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (value.trim() === "") {
      return toast.error("Please enter the text", {
        duration: 3000,
        position: "top-right",
      });
      }
      onSubmit(value);
    };
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }
    
    return (
        <header className={css.header}>
            <form className={css.form} onSubmit={handleSubmit}>
                <input
                className={css.input}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={value}
                    onChange={handleChange}
                />
                <button type="submit" className={css.btn}>Search</button>
            </form>
               <Toaster/>
        </header>
    )
};
export default SearchBar