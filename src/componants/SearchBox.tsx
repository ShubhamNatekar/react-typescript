import { memo } from "react";
interface SearchBoxProps {
    onSearch: (query: string) => void;
}   

function SearchBox(props: SearchBoxProps) {
    console.log("SearchBox rendered");
    return (
        <input
            type="text"
             onChange={(e) => props.onSearch(e.target.value)}
        />
    );
}
export default memo(SearchBox);