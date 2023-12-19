import { useColorScheme, Button, ButtonGroup } from "@mui/material";


export default function ColorSwitch() {

    const { mode, setMode } = useColorScheme();

    return (
        <ButtonGroup>
            <Button size="small" sx={{ margin: 1, padding: 1 }} variant={mode === 'light' ? "contained" : "outlined"} onClick={() => { setMode('light') }}>
                LIGHT
            </Button>
            <Button size="small" sx={{ margin: 1, padding: 1 }} variant={mode === 'dark' ? "contained" : "outlined"} onClick={() => { setMode('dark') }}>
                DARK
            </Button>
        </ButtonGroup>
    );
};

