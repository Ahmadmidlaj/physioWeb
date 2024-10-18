// components/Card.js

const Card = ({ title, content }) => {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      margin: '16px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    }}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Card;
