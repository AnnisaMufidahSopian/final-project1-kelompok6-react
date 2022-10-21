import React, {Component} from 'react';
import Container from 'react-bootstrap/esm/Container';
import NewsCard from '../molecule/card';
import Col from 'react-bootstrap/esm/Col';
import { Row } from 'react-bootstrap';

class ProgrammingApi extends Component {
    
    constructor(props){    
      super(props)
      this.state = {
        items:[],
        loading:false
      }
    }
    
  
    componentDidMount(){
      fetch(`https://newsapi.org/v2/everything?q=${this.props.kategori}&apiKey=593e27d61fbb44d383e11ea4422f7a66`)
      .then((Response) => Response.json())
      .then((Response) => {
        this.setState({
          items:Response.articles,
          loading:true
        })
      })
    }
  
    render(){
      var {items,loading} = this.state
          if(!loading){
              return(
              <>loading.......</>
              )
          }
          else{
              return(
                  <>
                  <Container>
                    <h1>{this.props.kategori}</h1>
                    <Row>
                    {
                        items.map(item => (
                            <Col>
                                <NewsCard 
                                idx={ item.source.id } 
                                name={ item.source.name } 
                                judul={ item.title } 
                                pengarang={ item.author } 
                                deskripsi={ item.description } 
                                url={ item.url }
                                gambar={ item.urlToImage }
                                tgl={ item.publishedAt }
                                />
                            </Col>
                            
                        
                        ))
                    }
                    </Row>
                  
                  </Container>
                  
              </>
              )
          }
    }
    
  }
  export default ProgrammingApi;