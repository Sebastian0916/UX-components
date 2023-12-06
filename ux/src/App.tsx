import { Stack } from "@mui/material";
import AutocompleteC from "./components/Autocomplete";
import Header from "./header/Header";
import Menu from "./menu/Menu";
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
      </Stack>
    </div>
  );
}

export default App;
