type Variant = "display" | "edit";

interface RowProps {
  variant: Variant;
  fname: string;
  lname: string;
}

function Row({ fname, lname }: RowProps) {
  return (
    <tr>
      <td>{fname}</td>
      <td>{lname}</td>
      <td>
        <button type="button">Edit</button>
      </td>
      <td>
        <button type="button">Remove</button>
      </td>
    </tr>
  );
}

export default Row;
