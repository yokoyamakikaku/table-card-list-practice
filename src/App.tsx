import { Box, Card, Container, Divider, Stack, Typography } from "@mui/material"

import NestedAsBorder from "./components/NestedAsBorder"
import NestedAsIcon from "./components/NestedAsIcon"
import NestedAsGap from "./components/NestedAsGap"

import {
  rows,
  hasParentRows,
}  from './data'
import NestedAsJoin from "./components/NestedAsJoin"

export default function App() {
  return (
    <Container sx={{ py: 12 }}>
      <Stack gap={8}>
        <Box>
          <Typography variant="h4" mb={4}>
            線を使った階層化
          </Typography>
          <Stack gap={4}>
            <Card variant="outlined">
              <NestedAsBorder rows={rows} />
            </Card>
            <Card variant="outlined">
              <NestedAsBorder rows={hasParentRows} />
            </Card>
          </Stack>
          <Divider />
        </Box>
        <Box>
          <Typography variant="h4" mb={4}>
            アイコンを使った階層化
          </Typography>
          <Stack gap={4}>
            <Card variant="outlined">
              <NestedAsIcon rows={rows} />
            </Card>
            <Card variant="outlined">
              <NestedAsIcon rows={hasParentRows} />
            </Card>
          </Stack>
          <Divider />
        </Box>
        <Box>
          <Typography variant="h4" mb={4}>
            隙間を使った階層化
          </Typography>
          <Stack gap={4}>
            <Card variant="outlined">
              <NestedAsGap rows={rows} />
            </Card>
            <Card variant="outlined">
              <NestedAsGap rows={hasParentRows} />
            </Card>
          </Stack>
        </Box>
        <Box>
          <Typography variant="h4" mb={4}>
            結合を使った階層化
          </Typography>
          <Stack gap={4}>
            <Card variant="outlined">
              <NestedAsJoin rows={rows} />
            </Card>
            <Card variant="outlined">
              <NestedAsJoin rows={hasParentRows} />
            </Card>
          </Stack>
        </Box>
      </Stack>



    </Container>
  )
}
