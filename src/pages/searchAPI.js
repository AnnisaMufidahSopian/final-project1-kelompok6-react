import React, { useState, useEffect } from "react";
import NewsCard from '../molecule/card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function SearchApi() {
    
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("Indonesia");
  const [text, setText] = useState("");


  useEffect(() => {
    const fetchArticle = async () => {
      const res = await fetch(
        `https://newsapi.org/v2/everything?q=${query}&apiKey=93f8780438b44379bd04827ffc96fc1f`
      );
      const data = await res.json();
      setItems(data.articles);
      
    };

    fetchArticle();
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Masukan inputan");
    } else {
      setQuery(text);
      setText("");
    }
  };

  return (
    <>
      <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand>{query}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
          </Nav>
          <Form className="d-flex" 
                role="search"
                autoComplete="off"
                onSubmit={handleSubmit}
            >
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <Button variant="outline-success" type="submit">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <section className="section">
        <div className="card">
            <div className="row hidden-md-up">
              {items.map(
                (
                  source,
                  author,
                  publishedAt,
                  title,
                  url,
                  objectId,
                  description,
                  urlToImage,
                  index,

                ) => (
                  <div className="col-md-4">
                    <NewsCard 
                                key={index}
                                idx={objectId}
                                name={ source.name } 
                                judul={ title } 
                                pengarang={ author } 
                                deskripsi={ description } 
                                url={ url }
                                gambar={ urlToImage }
                                tgl={ publishedAt }
                                />
                  </div>
                )
              )}
            </div>
          </div>
      </section>
    </>
  );
}

export default SearchApi;
