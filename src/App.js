import logo from './logo.svg';
import Customer from './components/Customer';
import './App.css';

const customers = [{
  'id' : 1,
  'image' : 'https://placeimg.com/100/100/1',
  'name' : '나동빈',
  'birthday' : '961222',
  'gender' : '남자',
  'job' : '대학생'
},
{
  'id' : 2,
  'image' : 'https://placeimg.com/100/100/2',
  'name' : '이민아',
  'birthday' : '961222',
  'gender' : '여자',
  'job' : '프로그래머'
},
{
  'id' : 3,
  'image' : 'https://placeimg.com/100/100/3',
  'name' : '홍길동',
  'birthday' : '961222',
  'gender' : '남자',
  'job' : '디자이너'
}
]

function App() {
  return (
    <div>
      { customers.map(c => { return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/>)})}
    </div>
  );
}

export default App;
