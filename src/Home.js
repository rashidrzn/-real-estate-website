import {useState, useEffect} from 'react'
import Bloglist from './Bloglist';

const Home = () => {

    const [blogs,setblogs] = useState(null)

    const [name,setName] = useState('Rashid');
    const [ispending,setIsPending] =useState(true);



    useEffect(()=>{
        console.log('csbdyiw');
        setTimeout(()=>{
            fetch('http://localhost:8000/blogs')
        .then(res =>{
            if(!res.ok){
                throw Error('could not fetch the data');
            }
            return res.json();
        })
        .then(data =>{
            console.log(data)
            setIsPending(false) 
            setblogs(data)
        });
        },1000)
    },[])
    
    return ( 
        
        <div className="home">
          {ispending && <div>loading</div>}
          {blogs && <Bloglist blogs={blogs} title="Rashid Created This."/>}
        
           
        </div>
     );
}
export default Home;