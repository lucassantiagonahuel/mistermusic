import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';

function AvatarCustom(props) {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar sx={{ bgcolor: deepPurple[500] }}>{props.initialName}</Avatar>
    </Stack>
  );
}
export default AvatarCustom;
