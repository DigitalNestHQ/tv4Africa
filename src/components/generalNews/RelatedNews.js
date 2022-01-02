import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Card } from 'react-bootstrap'


const RelatedNews = ({ slug, featured_image, post_type }) => {
  return (
    <Col className="related-card">
      <Link to={`/post/${slug}`} className="related-link">
        <Card className="l-card">
          <Card.Img
            variant="top"
            src={`https://api.tv24africa.com/public/storage/post_image/${featured_image}`}
            className="mb-3 card-img-related"
          />
          <p className="premium-badge-left">
            {post_type === 'premium' ? `${post_type}` : ''}
          </p>
          <Card.Body className="l-card-body">
            <Card.Text>{slug}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  )
}

export default RelatedNews