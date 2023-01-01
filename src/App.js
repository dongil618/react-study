import './App.css';

function App() {
  const name = '동일';
  const naver = {
    name: "네이버",
    url : "https://www.naver.com"
  }

  return (
    <div className="App">
      <h1 style={{
        color: 'red',
        backgroundColor: 'yellow'
      }}
      >
        Welcome, {name} 내 나이는 {27+1}살 입니다.
      </h1>
      <a href={naver.url} target="_blank" rel="noopener noreferrer">{naver.name}</a>
    </div>
  );
}

export default App;
