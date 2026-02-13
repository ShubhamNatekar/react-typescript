import React, { useCallback } from "react";
import SearchBox from "./SearchBox";
function ShuffleArray() {
  const sourceArray = React.useMemo(() => ["abc", "def", "ghi", "jkl", "mno"], []);
  const [array, setArray] = React.useState<string[]>(sourceArray);

  const shuffleArray = () => {
    setArray((prev) => {
      const next = [...prev];

      for (let i = next.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [next[i], next[j]] = [next[j], next[i]];
      }

      return next;
    });
  };

  const doSearch = useCallback(
    (searchTerm: string) => {
      const term = searchTerm.trim().toLowerCase();

      if (term.length === 0) {
        setArray(sourceArray);
        return;
      }

      setArray(sourceArray.filter((item) => item.toLowerCase().includes(term)));
    },
    [sourceArray]
  );

  return (
    <>
    <div style={{ textAlign: "center" }}>
      <h2>Shuffle Array Component</h2>
      <ul>
        {array.map((value, index) => (
          <li key={`${value}-${index}`}>{value}</li>
        ))}
      </ul>

      <button onClick={shuffleArray}>Shuffle Array</button>
      <hr />
      <SearchBox  onSearch={doSearch}/>

    </div>
    </>
  );
}

export default ShuffleArray;