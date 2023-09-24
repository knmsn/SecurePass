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
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
var generator = require('generate-password-browser');

function App() {
  const [config, setConfig] = useState({
    length: 10,
    numbers: false,
    symbols: false,
    lowercase: true,
    uppercase: false
  });

  const [generatedPasswordList, setGeneratedPasswordList] = useState([]);

  const handleGenerate = () => {
    const generatedPasswords = [
      generator.generate({
        ...config
      }),
      generator.generate({
        ...config
      }),
      generator.generate({
        ...config
      })
    ]
    setGeneratedPasswordList(generatedPasswords)
  }

  return (
    <section style={styles?.body}>
      <div style={styles?.cardContainer}>
        <Paper>
          <div style={{ padding: '20px' }}>
            <center>
              <img src={LOGO} style={styles?.logo} />
              <Typography variant="h3" component="h2" fontWeight='bold'>
                SecurePass
              </Typography>
              <Button variant="contained" style={{ marginTop: '20px', ...styles?.button }} onClick={handleGenerate}>Gerar</Button>
            </center>
          </div>

          <Grid container spacing={2} style={{ paddingBottom: '30px' }}>
            <Grid item xs={6}>
              <div style={{ padding: '10px' }}>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell align="center" style={styles?.tableHeader}>Requisitos para a senha</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell align='left'><span style={{ paddingLeft: '36%' }}>
                          <Select
                            value={config?.length}
                            onChange={(e) => {
                              setConfig({
                                ...config,
                                length: Number(e.target.value)
                              })
                            }}
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
                        <TableCell align='left'><span style={{ paddingLeft: '35%' }}><Checkbox checked={config?.numbers}
                          onChange={(e) => {
                            setConfig({
                              ...config,
                              numbers: Number(e.target.checked)
                            })
                          }} />Incluir Numeros</span></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell align='left'><span style={{ paddingLeft: '35%' }}><Checkbox checked={config?.symbols}
                          onChange={(e) => {
                            setConfig({
                              ...config,
                              symbols: Number(e.target.checked)
                            })
                          }} />Incluir Simbolos</span></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell align='left'><span style={{ paddingLeft: '35%' }} ><Checkbox checked={config?.uppercase}
                          onChange={(e) => {
                            setConfig({
                              ...config,
                              uppercase: Number(e.target.checked)
                            })
                          }} />Incluir letras maiúsculas</span></TableCell>
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
                        <TableCell align="center" style={styles?.tableHeader}>Senhas Geradas</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {
                        generatedPasswordList.length === 0 && <TableRow>
                          <TableCell align='center' style={{ fontWeight: 'bold' }}>Você não gerou nenhuma senha.</TableCell>
                        </TableRow>
                      }
                      {
                        generatedPasswordList.length !== 0 && <>
                          {
                            generatedPasswordList.map((password) => {
                              return <TableRow>
                                <TableCell align='center' style={{ fontWeight: 'bold' }}>{password}</TableCell>
                              </TableRow>
                            })
                          }
                        </>
                      }
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </Grid>
          </Grid>
        </Paper>
        <center>
          <div style={{ paddingTop: '30px' }}>
            <Button variant="outlined" startIcon={<GitHubIcon />} style={{ marginTop: '20px', ...styles?.button }} onClick={() =>{
              window.open('https://github.com/black-ctrl-alt-del/SecurePass')
            }}>
              Colaborar no github
            </Button>
          </div>
        </center>
      </div>
    </section>
  );
}

export default App;

const styles = {
  body: { backgroundColor: '#2d2e32', width: window.innerWidth, height: window.innerHeight, minWidth: '100%', minHeight: '100%' },
  cardContainer: { paddingTop: '150px', paddingLeft: '150px', paddingRight: '150px' },
  logo: { width: '100px', height: '150px' },
  button: {backgroundColor: '#2d2e32', color: '#64f4ab', fontWeight: 'bold'},
  tableHeader: { fontWeight: 'bold', backgroundColor: '#2d2e32', color: '#64f4ab' }
}