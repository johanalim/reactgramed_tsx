import React from "react";
import AuthServices  from "../services/Auth";
import { Button,Grid,Typography,TextField,Container,Stack,Divider } from "@mui/material";

interface LoginState{
    authService:AuthServices
}
export class Login extends React.Component<LoginState> {
    
    render(){
        return(
            <Container maxWidth="sm">
                <Stack spacing={2}>
                    <Grid item xs={6}>
                        <Typography variant="h4" gutterBottom>
                            Masuk
                        </Typography>
                    </Grid>
                    <Stack spacing={2} direction="row" divider={<Divider orientation="vertical" flexItem />}>
                        <Grid  item spacing={3}>
                            <Button variant="contained">Facebook</Button>
                        </Grid>
                        <Grid  item spacing={3}>
                            <Button variant="contained">Google</Button>
                        </Grid>
                    </Stack>
                    <Grid item xs={6}>
                        <TextField placeholder="UserName"/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField placeholder="PassWord"/>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="subtitle1">Belum punya akun? <a href="/SignIn">Daftar</a></Typography>
                    </Grid>
                </Stack>
            </Container>
        )
    }
}
