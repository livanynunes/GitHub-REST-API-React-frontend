import React, { Component } from "react";


// components for pagination ;(
import Paginations from "components/Pagination/Pagination.js";

import Button from "components/CustomButtons/Button.js";

// import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Box } from "@material-ui/core";

export default class UsersSection extends Component{

  constructor(props){
    super(props);
    this.state = {
      itens: [],
      isLoaded: false,
    }
  }

  componentDidMount(adr){
    fetch(`https://livany-backend.herokuapp.com/api/users?since=${adr===undefined?0:adr}`)
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded:true,
        itens:json,
      })
    });
  }

  render() {
    var{ isLoaded, itens} = this.state;

    if(!isLoaded){
      return <div style={{color: "red"}}>Loading....</div>;
    }
    else{
      return (
      
          <React.Fragment>
            <Box p={2}>
              <Paginations pages={[
                  { text: "FIRST", onClick: ()=>{this.componentDidMount(0)}},
                  { text: "NEXT", onClick: ()=>{this.componentDidMount(itens.data[itens.data.length-1].id)} }
                ]}
                color="info"
              />
            </Box>

              <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Login</TableCell>
                    <TableCell>#id</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {itens.data.map(item => (
                    <TableRow key={item.id}>
                      <TableCell component="th" scope="row">
                        {item.login}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {item.id}
                      </TableCell>
                      <TableCell align="right">
                        <Button color="github" href={`/profile-page?user=${item.login}`} round>
                            <i className={" fab fa-github "}/>{" "}
                            Mais detalhes
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            
          
            <Box p={5}>
              <Paginations pages={[
                  { text: "FIRST", onClick: ()=>{this.componentDidMount(0)}},
                  { text: "NEXT", onClick: ()=>{this.componentDidMount(itens.data[itens.data.length-1].id)} }
                ]}
                color="info"
              />
            </Box>
          </React.Fragment>
  
      );
    }
    
  }
}

