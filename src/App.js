import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Select from '@mui/material/Select';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import LOGO from './assets/logo.png';


function App() {
  const [config, setConfig] = useState({
    length: 10,
    numbers: false,
    symbols: false,
    lowercase: false,
    uppercase: false
  });

  return (
    <section style={{ backgroundColor: '#2d2e32', width: window.innerWidth, height: window.innerHeight, minWidth: '100%', minHeight: '100%' }}>
      <div style={{ paddingTop: '150px', paddingLeft: '150px', paddingRight: '150px' }}>
        <Paper>
          <div style={{ padding: '50px' }}>
            <center>
              <img src={LOGO} style={{ width: '100px', height: '150px' }} />
              <Typography variant="h3" component="h2" fontWeight='bold'>
                SecurePass
              </Typography>
            </center>
          </div>

          <Grid container spacing={2} style={{ paddingBottom: '30px' }}>
            <Grid item xs={6}>
              <div style={{ padding: '10px' }}>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell align="center" style={{ fontWeight: 'bold', backgroundColor: '#2d2e32', color: '#64f4ab' }}>Requisitos para a senha</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell align='left'><span style={{ paddingLeft: '36%' }}>
                          <Select
                            value={0}
                            // onChange={handleChange}
                            style={{ paddingLeft: '10px' }}
                          >
                            <MenuItem value={0}>0</MenuItem>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={6}>6</MenuItem>
                            <MenuItem value={7}>7</MenuItem>
                            <MenuItem value={8}>8</MenuItem>
                            <MenuItem value={9}>9</MenuItem>
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={11}>11</MenuItem>
                            <MenuItem value={12}>12</MenuItem>
                            <MenuItem value={13}>13</MenuItem>
                            <MenuItem value={14}>14</MenuItem>
                            <MenuItem value={15}>15</MenuItem>
                            <MenuItem value={16}>16</MenuItem>
                            <MenuItem value={17}>17</MenuItem>
                            <MenuItem value={18}>18</MenuItem>
                            <MenuItem value={19}>19</MenuItem>
                            <MenuItem value={20}>20</MenuItem>
                          </Select><span style={{ paddingLeft: '10px' }}>Caracteres na senha</span></span></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell align='left'><span style={{ paddingLeft: '35%' }}><Checkbox />Incluir Letras</span></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell align='left'><span style={{ paddingLeft: '35%' }}><Checkbox />Incluir Simbolos</span></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell align='left'><span style={{ paddingLeft: '35%' }}><Checkbox />Incluir letras maiúsculas</span></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell align='left'><span style={{ paddingLeft: '35%' }}><Checkbox />Incluir letras minusculas</span></TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div style={{ padding: '10px' }}>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell align="center" style={{ fontWeight: 'bold', backgroundColor: '#2d2e32', color: '#64f4ab' }}>Senhas Geradas</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell align='center' style={{ fontWeight: 'bold' }}>Nenhuma senha gerada</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </section>
  );
}

export default App;
