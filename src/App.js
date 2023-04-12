import { useState } from 'react';
import './App.scss';
import Header from './components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Blog from './components/Blog/Blog';
import Plans from './components/Plans/Plans';
import Trending from './components/Trending/Trending';
import Sports from './components/Sports/Sports';
import Sponsored from './components/Sponsored/Sponsored';
import Support from './components/Support/Support';
import Footer from './components/Footer/Footer';

function App() {
  const[theme, setTheme] = useState(localStorage.getItem('theme')); 
  localStorage.setItem('theme', theme);
  // const dark = ()=> setTheme((theme === 'dark' && '' || 'dark'));
  // const light = ()=> setTheme((theme === '' && 'dark'));

  const dark = ()=>{
    const copyTheme = [...theme]
    if(copyTheme === 'dark'){
      setTheme('')
    } else{
      setTheme('dark')
    }
  }
  const light = ()=>{
    const copyTheme = [...theme]
    if(copyTheme !== 'dark'){
      setTheme('')
    } else{
      setTheme('dark')
    }
  }

  return (
    <div className={`App ${theme}`}>
      <Header dark={dark} light={light}/>

      <Blog/>
      <Plans/>
      <Trending/>
      <Sports/>
      <Sponsored/>
      <Support/>
      {/* footer */}
      <Footer/>
    </div>
  );
}

export default App;
