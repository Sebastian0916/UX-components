import { Stack } from "@mui/material";
import AutocompleteC from "./components/Autocomplete";
import Header from "./header/Header";
import Menu from "./menu/Menu";
import { ButtonGroup } from "./components/ButtonGroup";
import { IconButton } from "./components/IconButton";

function App() {
  return (
    <div>
      <Menu />
      <Header />
      <Stack
        ml={"240px"}
        alignItems={"center"}
        paddingTop={"36px"}
      >
        <AutocompleteC />
        <IconButton />
        <ButtonGroup />
      </Stack>
    </div>
  );
}

export default App;
