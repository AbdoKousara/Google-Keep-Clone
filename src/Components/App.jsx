import React from 'react';
import {Header}  from './Header/Header.jsx';
import {Footer} from './Footer';
import {Note} from './Note';
import notes from '.././notes';

export default function App(){
    
     return(
          <div>
            
            <Header />
            {notes.map((note) => {
              return <Note key={note.key} title={note.title} content={note.content}/>
            })}
            <Footer />
            
          </div>
            
     );
}


