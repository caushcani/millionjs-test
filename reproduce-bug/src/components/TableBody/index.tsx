import { For, block } from "million/react";
import StringManager from "../StringManager";

const TableBody = (props: any) => {
  const { columns, rows } = props;

  return (
    <tbody>
      <For each={rows}>
        {(row, index) => (
          <BlockRow
            row={row}
            index={index}
            columns={columns.filter((column: any) => !column.hidden)}
          />
        )}
      </For>
    </tbody>
  );
};

export default TableBody;

const BlockRow = block(function (props) {
  const { row, index, columns } = props;

  return (
    <tr key={`row-${row[index]}-${index}`}>
      <For each={columns}>
        {(column: any, colIndex: number) => (
          <BlockCell column={column} row={row} />
        )}
      </For>
    </tr>
  );
});

const BlockCell = block(function (props) {
  const { column, row } = props;
  const propName = StringManager.CamelCase(column.propertyName);
  const cellValue = row[propName];
  return <td>{cellValue}</td>;
});
