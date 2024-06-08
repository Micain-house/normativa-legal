import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import SearchBar from '../../components/SearchBar/SearchBar'
import './Blog.css'
import imgBlog from '../../assets/img-blog.webp'
import imgBlog2 from '../../assets/img-blog2.webp'

const Blog =()=> {
  return (
    <>
    <div className='blog'>
        <section className='blog-header'>
        <div className='blog-header-img'>
                <img src={imgBlog2} alt='img-blog' width="500px"/>
            </div>
            <div className='blog-header-title'>
            <h1>BLOG</h1>
            <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam"</p>
            </div>  
        </section>

        <section className='blog-content'>
        <div className='blog-content-header'>
        <SearchBar/>
        </div>
    <Row xs={1} md={4} className="g-4 card-group-blog">
      {Array.from({ length: 8 }).map((_, idx) => (
        <Col key={idx} className='col-card-blog'>
          <Card>
            <Card.Img variant="top" src={imgBlog} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </section>
    </div>
    </>
  );
}

export default Blog;