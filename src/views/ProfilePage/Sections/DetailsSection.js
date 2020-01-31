import React, { Component } from "react";
import Button from "components/CustomButtons/Button.js";

// import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import queryString from 'query-string';
// import { Box } from "@material-ui/core";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import profile from "https://avatars0.githubusercontent.com/u/1?v=4";
import CardBody from "components/Card/CardBody";
import CardFooter from "components/Card/CardFooter";
import Card from "components/Card/Card";

export default class DetailsSection extends Component{
  constructor(props){
    super(props);
    this.state = {
      itens: [],
      isLoaded: false,
      repos: [],
    }
  }

  componentDidMount(){
    // console.log(this.props.location);
    const values= queryString.parse(this.props.location);

    // console.log(values.user);

    ////fazer depois
    fetch(`https://livany-backend.herokuapp.com/api/users/${values.user}/details`)
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded:true,
        itens:json,
      })
    });

    fetch(`https://livany-backend.herokuapp.com/api/users/${values.user}/repos`)
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded:true,
        repos:json,
      })
    });

  }

  render() {
    var{ isLoaded, itens,repos} = this.state;

    if(!isLoaded){
      return <div style={{color: "red"}}>Loading....</div>;
    }
    else{
        return (
            <React.Fragment>
              
                <div>
                    <Card>
                        <CardBody>
                            <GridContainer justify="center">
                                <GridItem xs={12} md={6} >
                                    <img src={itens.avatar_url} alt="..." />
                                    
                                </GridItem>
                                <GridItem xs={12} md={6}>
                                    <h3>{itens.login}</h3>
                                    <h6>#{itens.id} | Criado em: {(new Date(itens.created_at)).toLocaleDateString('pt-BR', {year: 'numeric', month: '2-digit', day: '2-digit'})} </h6>
                                    
                                    <Button color="github" href={itens.html_url} target="_blank" github>
                                        <i className={" fab fa-github "}/>{" "}
                                        {itens.html_url}
                                    </Button>
                                   
                                </GridItem>
                                <GridItem xs={12}> 
                                    
                                </GridItem>
                            </GridContainer>
                            

                        </CardBody>
                        <CardFooter>
                            <GridContainer>
                                <GridItem xs={12}>
                                    <h2>Repositórios publicos</h2>
                                
                                </GridItem>
                                <GridItem xs={12}>
                                    <TableContainer component={Paper}>
                                        <Table aria-label="simple table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>#id</TableCell>
                                                    <TableCell>Nome</TableCell>
                                                    <TableCell></TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {repos.map(item => (
                                                    <TableRow key={item.id}>
                                                        <TableCell component="th" scope="row">
                                                            {item.id}
                                                        </TableCell>
                                                        <TableCell component="th" scope="row">
                                                            {item.name}
                                                        </TableCell>
                                                        <TableCell component="th" scope="row">
                                                            <Button color="github" href={item.html_url} target="_blank"  simple>
                                                                <i className={" fab fa-github "} />{" "}
                                                                {item.html_url}
                                                            </Button>
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </GridItem>
                            </GridContainer>
                        </CardFooter>
                    </Card>
                </div>

              

            

          </React.Fragment>
      );
    }
  }
}

