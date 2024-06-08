import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { FaCheck } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import './Pricing.css';

const FreeCard = () => (
  <Card className='individual-card'>
    <Card.Body>
      <Card.Title>FREE</Card.Title>
      <Card.Text>
        <h2>$0</h2>
      </Card.Text>
      <Card.Text>
        <p><span><FaCheck className='icon-check-card' /></span>This content is a little bit longer.</p>
        <p><span><FaCheck className='icon-check-card' /></span>This content is a little bit longer.</p>
        <p><span><FaCheck className='icon-check-card' /></span>This content is a little bit longer.</p>
        <p><span><FaCheck className='icon-check-card' /></span>This content is a little bit longer.</p>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <Button className='button-card'>GET STARTED</Button>
    </Card.Footer>
  </Card>
);

const MonthlyCard = () => (
  <Card className='individual-card'>
    <Card.Body>
      <Card.Title>MONTHLY</Card.Title>
      <Card.Text>
        <h2>$12</h2>
      </Card.Text>
      <Card.Text>
        <p><span><FaCheck className='icon-check-card' /></span>This content is a little bit longer.</p>
        <p><span><FaCheck className='icon-check-card' /></span>This content is a little bit longer.</p>
        <p><span><FaCheck className='icon-check-card' /></span>This content is a little bit longer.</p>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <Button className='button-card'>GET STARTED</Button>
    </Card.Footer>
  </Card>
);

const AnnualCard = () => (
  <Card className='individual-card'>
    <Card.Body>
      <Card.Title>ANNUAL</Card.Title>
      <Card.Text>
        <h2>$100</h2>
      </Card.Text>
      <Card.Text>
        <p><span><FaCheck className='icon-check-card' /></span>This content is a little bit longer.</p>
        <p><span><FaCheck className='icon-check-card' /></span>This content is a little bit longer.</p>
        <p><span><FaCheck className='icon-check-card' /></span>This content is a little bit longer.</p>
        <p><span><FaCheck className='icon-check-card' /></span>This content is a little bit longer.</p>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <Button className='button-card'>GET STARTED</Button>
    </Card.Footer>
  </Card>
);

const cards = {
  FREE: <FreeCard />,
  MONTHLY: <MonthlyCard />,
  ANNUAL: <AnnualCard />,
};

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState('FREE');

  return (
    <>
      <div className='pricing-container'>
        <h1>MEMBER SHIP PLANS</h1>
        <div className='button-group-plans'>
          <Button className={`button-secondary-global ${selectedPlan === 'FREE' ? 'active' : ''}`}
           onClick={() => setSelectedPlan('FREE')}>Free Plan</Button>
          <Button  className={`button-secondary-global ${selectedPlan === 'MONTHLY' ? 'active' : ''}`} 
           onClick={() => setSelectedPlan('MONTHLY')}>Monthly Plan</Button>
          <Button className={`button-secondary-global ${selectedPlan === 'ANNUAL' ? 'active' : ''}`}onClick={() => setSelectedPlan('ANNUAL')}>Annual Plan</Button>
        </div>
        <CardGroup>
          {cards[selectedPlan]}
        </CardGroup>
      </div>
    </>
  );
}

export default Pricing;
