import styles from "./styles.module.css";
import { useState } from "react";

type Props = {
  mainColor: string;
  onSearch: (searchValue: string) => void;
};
export const SearchInput = ({ mainColor, onSearch }: Props) => {
  const [focused, setFocused] = useState(false);
  const [searchValue, setsearchValue] = useState("");

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Enter") {
      onSearch(searchValue);
    }
  };

  return (
    <div
      className={styles.container}
      style={{ borderColor: focused ? mainColor : "#ffff" }}
    >
      <div className={styles.button} onClick={() => onSearch(searchValue)}>
        <img src="/tmp/search.svg" />
      </div>
      <input
        type="text"
        className={styles.input}
        placeholder="Digite o nome do produto"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onKeyUp={handleKeyUp}
        value={searchValue}
        onChange={(e) => setsearchValue(e.target.value)}
      />
    </div>
  );
};
