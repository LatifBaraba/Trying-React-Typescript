import * as React from 'react'
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Grid, Paper } from '@mui/material'

export default function SignIn() {
    const theme = createTheme({
        typography: {
            fontFamily: 'Poppins, sans-serif',
        },
    })

    return (
        <ThemeProvider theme={theme}>
            <Paper sx={{ p: 2, margin: 2, backgroundColor: 'transparent', boxShadow: 'none'}}>
                <Grid container spacing={2} sx={{ p: 2}}>
                    <Typography variant="h3" component="div">
                        Task List
                    </Typography>
                </Grid>
            </Paper>
        </ThemeProvider>
    )
}
