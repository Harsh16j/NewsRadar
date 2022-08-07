import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export class NewsItem extends Component {
  render() {
    let {title, description, imageURL, newsURL}=this.props;
    console.log(typeof description)
    return (
      <div className="my-3">
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageURL} style={{ width:'100%',
    height:'200px'}}/>
      <Card.Body>
        <Card.Title>{title.slice(0,45)}</Card.Title>
        <Card.Text>
          {description==null?"---":description.slice(0,88)}
        </Card.Text>
        <Button variant="primary" size="sm" href={newsURL} target="_blank">Read more</Button>
      </Card.Body>
    </Card>
      </div>
    )
  }
}

export default NewsItem