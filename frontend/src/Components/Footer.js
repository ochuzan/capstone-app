import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Link } from '@mui/material';

function Footer (){
    return(
        // <div>
        //     <h1>
        //         Footer Goes Here with about us info , etc. 
        //     </h1>
        // </div>
        <Box px={{ xs: 3, sm: 4}} py={{xs: 3, sm: 4 }} 
        // sx={{position:"fixed", bottom: 0}}
        sx={{display:"flex", flexDirection: "column", minHeight: "50%", marginTop: "auto", padding: "60px"}}
        bgcolor="#4366F5" color="white">
            <Container maxWidth="lg">
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>About Us</Box>
                        {/* <Box>
                            <Link href="#" color={inherit}>
                                About us
                            </Link>
                        </Box> */}
                        <Box>
                            <Link href="#" color="inherit">
                                LinkedIn
                            </Link>
                        </Box>
                        <Box>
                            <Link href="#" color="inherit">
                                GitHub
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Help</Box>
                        <Box>
                            <Link href="#" color="inherit">
                                Contact
                            </Link>
                        </Box>
                        <Box>
                            <Link href="#" color="inherit">
                                Support
                            </Link>
                        </Box>
                        <Box>
                            <Link href="#" color="inherit">
                                Privacy
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
                <Box textAlign="center" pt={{ xs: 3, sm: 5}} pb={{xs: 4, sm: 0}}>
                        CryptoTalk &reg; {new Date().getFullYear()}
                </Box>
            </Container>
        </Box>
    )
}
export default Footer;