import { Checkbox, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import { format } from "date-fns"
import { useOrderedRowsAsNested } from "../hooks"

import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight'
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import { Row } from "../types"
import { useMemo } from "react"

export default function NestedAsIcon  ({ rows: originalRows} : { rows: Row[] }) {
  const rows = useOrderedRowsAsNested(originalRows)
  const hasChildrenById = useMemo(() => {
    return originalRows.reduce((acc, row) => {
      if (row.parent === null) return acc
      acc[row.parent] = true
      return acc
    }, {} as Record<string, boolean>)
  }, [originalRows])
  return (
    <Table size="small">
    <TableHead>
      <TableRow>
        <TableCell width={20} sx={{ p: 1, pr: 0 }} />
        <TableCell width={38} sx={{ p: 1, pl: 0 }}>
          <Checkbox size="small" />
        </TableCell>
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
          <TableCell sx={{ p: 1, pr: 0, pt: 1.5  }}>
            {hasChildrenById[row.id] && (
              <PanoramaFishEyeIcon
                color="disabled"
                fontSize="small" />
            )}
            {row.parent !== null && (
              <SubdirectoryArrowRightIcon
                color="disabled"
                fontSize="small" />
            )}
          </TableCell>
          <TableCell width={38} sx={{ p: 1, pl: 0 }}><Checkbox size="small" /></TableCell>
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
