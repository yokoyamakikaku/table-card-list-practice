import { Checkbox, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import { format } from "date-fns"
import { useOrderedRowsAsNested } from "../hooks"
import { Row } from "../types"

export default function NestedAsBorder ({ rows: originalRows} : { rows: Row[] }) {
  const rows = useOrderedRowsAsNested(originalRows)
  return (
    <Table size="small">
    <TableHead>
      <TableRow>
        <TableCell width={12} sx={{ padding: 0 }} />
        <TableCell width={38}sx={{
            p: 1,
            pl: 0,
          }}><Checkbox size="small" /></TableCell>
        <TableCell width={30}>番号</TableCell>
        <TableCell width={120}>分類</TableCell>
        <TableCell>名称</TableCell>
        <TableCell width={120}>数量</TableCell>
        <TableCell width={120}>価格</TableCell>
        <TableCell width={120}>登録日</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {rows.map((row) => (
        <TableRow key={row.id}>
          <TableCell
            width={12}
            sx={{
              padding: 0,
              bgcolor: theme => row.parent === null ? 'transparent' : theme.palette.divider,
            }} />
          <TableCell width={38} sx={{
            p: 1,
            pl: 0,
          }}>
            <Checkbox size="small" />
          </TableCell>
          <TableCell sx={{ textAlign: 'end' }}>{row.number}</TableCell>
          <TableCell>{row.category}</TableCell>
          <TableCell>{row.name}</TableCell>
          <TableCell>{row.quantity}</TableCell>
          <TableCell>{row.price}</TableCell>
          <TableCell>{format(row.registeredAt, 'yyyy年MM月dd日')}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
  )
}
