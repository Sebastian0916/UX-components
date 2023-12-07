import { Stack } from "@mui/material";
import AutocompleteC from "./components/Autocomplete";
import Header from "./header/Header";
import Menu from "./menu/Menu";
import ButtonC from "./components/Button";
function App() {
  return (
    <div>
      <Menu />
      <Header />
      <Stack ml={"240px"} alignItems={"center"} paddingTop={"36px"} gap={4}>
        <AutocompleteC />
        <ButtonC />
      </Stack>
    </div>
  );
}

export default App;
