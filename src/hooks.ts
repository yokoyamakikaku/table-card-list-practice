import { useMemo } from "react";
import { Row } from "./types";

export function useOrderedRowsAsNested (originalRows: Row[]) {
  return useMemo(() => {
    const noParentRows: Row[] = []
    const rowsByParent: Record<string, Row[]> = {}

    const orderedRows = originalRows.sort((a, b) => a.number - b.number)

    for (const row of orderedRows) {
      if (row.parent === null) {
        noParentRows.push(row)
      } else {
        if (rowsByParent[row.parent] === undefined) {
          rowsByParent[row.parent] = []
        }
        rowsByParent[row.parent].push(row)
      }
    }

    const rows = []
    for (const row of noParentRows) {
      rows.push(row)
      if (rowsByParent[row.id] !== undefined) {
        rows.push(...rowsByParent[row.id])
      }
    }

    return rows
  }, [originalRows])
}
