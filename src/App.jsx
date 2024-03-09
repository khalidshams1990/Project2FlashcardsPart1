import { useState } from 'react';
import './App.css'; // Make sure the CSS file is correctly imported

function Flashcard({ question, answer, image, subject }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardStyle = getCardStyle(subject);

  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`}  style={cardStyle}  onClick={() => setIsFlipped(!isFlipped)}>
      <div className="card-front" style={cardStyle}>
        {question} 
      </div>
      <div className="card-back" style={cardStyle}>
        {answer}
        {image && <img src={image} alt="Visual representation" className="card-image"/>}
      </div>
    </div>
  );
}

function getCardStyle(subject) {
  const styles = {
    math: { backgroundColor: '#ADD8E6' },       
    history: { backgroundColor: '#E6E6FA' },
    biology: { backgroundColor: '#FFB6C1' },  
    chemistry: { backgroundColor: '#90EE90' },  
    english: { backgroundColor: '#FFFFE0' },  
  };
  return styles[subject] || { backgroundColor: '#ffd3b6' }; 
}

function App() {
  const [cards, setCards] = useState([
    {
      question: 'What is the Pythagorean theorem?',
      answer: 'The Pythagorean theorem states that in a right-angled triangle, the square of the hypotenuse is equal to the sum of the squares of the other two sides (a^2 + B^2 = c^2)',
      subject: 'math',
      image: 'https://image3.slideserve.com/5772825/pythagorean-theorem-a-2-b-2-2-l.jpg',
    },
    {
      question: 'What is a derivative in calculus?',
      answer: 'A derivative represents an instantaneous rate of change or the slope of the tangent line at any point on a graph.',
      subject: 'math',
      image: 'https://i.ytimg.com/vi/FLAm7Hqm-58/maxresdefault.jpg',
    },
    {
      question: 'Who was the first president of the United States?',
      answer: 'George Washington',
      subject: 'history',
      image: 'https://www.whitehouse.gov/wp-content/uploads/2021/01/01_george_washington.jpg',
    },
    {
      question: 'What event started World War I',
      answer: 'The assassination of Archduke Franz Ferdinand of Austria in 1914.',
      subject: 'history'
    },
    {
      question: 'What is photosynthesis?',
      answer: 'Photosynthesis is the process by which green plants and some other organisms use sunlight to synthesize nutrients from carbon dioxide and water.',
      subject: 'biology',
      image: 'https://cdn1.vectorstock.com/i/1000x1000/26/35/diagram-showing-photosynthesis-in-plant-vector-42102635.jpg'
    },
    {
      question: 'What is the difference between mitosis and meiosis',
      answer: 'Mitosis is cell division that results in two identical daughter cells, while meiosis is a type of cell division that reduces the chromosome number by half, creating four haploid cells.',
      subject: 'biology',
      image: 'https://www.edplace.com/userfiles/image/mitosis%20and%20meiosis.jpg',
    },
    {
      question: 'Define covalent bond.',
      answer: 'A covalent bond is a chemical bond that involves the sharing of electron pairs between atoms.',
      subject: 'chemistry',
      image: 'https://pixfeeds.com/images/42/511192/1280-511192-covalent-bond-examples.png',
    },
    {
      question: 'Describe the structure of an atom.',
      answer: 'An atom consists of a nucleus made of protons and neutrons, surrounded by electrons in electron shells.',
      subject: 'chemistry',
      image: 'https://www.sciencefacts.net/wp-content/uploads/2020/11/Parts-of-an-Atom-Diagram-768x768.jpg',
    },
    {
      question: 'Define metaphor.',
      answer: 'A metaphor is a figure of speech that directly compares one thing to another for rhetorical effect.',
      subject: 'english',
      image: 'https://assets.ltkcontent.com/images/941235/Metaphor-Examples-Definition-and-Types-22_27c5571306.jpg',
    },
    {
      question: 'What is the difference between a simile and a metaphor?',
      answer: 'A simile compares two things using "like" or "as," whereas a metaphor directly states something is something else.',
      subject: 'english',
      image: 'https://blog.inkforall.com/wp-content/uploads/2021/01/metaphor-vs-simile.jpg',
    },
    // Add more questions and answers as desired.
  ]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const nextCard = () => {
    let randomIndex = Math.floor(Math.random() * cards.length);
    setCurrentCardIndex(randomIndex);
  };

  return (
    <div className="app-container">
      <header>
        <h1>The Ultimate Trivia game!</h1>
        <h2>How much do you think you think you really know? Test your knowledge!</h2>
        <h2>Math = Blue</h2>
        <h2>History = Purple </h2>
        <h2>Biology = Pink</h2>
        <h2>Chemistry = Green </h2>
        <h2>English = Yellow</h2>
        <span>Number of cards: {cards.length}</span>
      </header>
      
      <div className="card-container">
        <Flashcard 
          question={cards[currentCardIndex].question}
          answer={cards[currentCardIndex].answer}
          image={cards[currentCardIndex].image} 
          subject={cards[currentCardIndex].subject}
        />
      </div>
      
      <button className="next-button" onClick={nextCard}>Next</button>
      
    </div>
  );
}

export default App;


