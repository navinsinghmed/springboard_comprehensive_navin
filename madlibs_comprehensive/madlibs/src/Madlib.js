import React, {useState, useRef} from 'react';
import MadlibForm from './MadlibForm';
import stories from './Stories';

const Madlib = () => {
    
    const sentence = useRef({
    })
    // retrieve story from form data and set in ref
    const setSentence = (formData) => {
        sentence.current.start = stories[formData.story].start;
        sentence.current.middle = stories[formData.story].middle;
        sentence.current.end = stories[formData.story].end;
    }
    
    //grammar --if first letter is a vowel, use 'an'
    const isVowel = (letter) => {
        const vowels = ['a', 'e', 'i', 'o', 'u']
        return vowels.includes(letter) ? true : false;
    }
    
    const [madlib, setMadlib] = useState("");
    
    const resetMadlib = () => {
        setMadlib("");
    }
    return (
        <>
        <h1>Madlibs</h1>
        {!madlib && <MadlibForm add={setMadlib} setSentence={setSentence}/>}
        <p>{madlib && `${sentence.current.start} ${isVowel(madlib.color[0].toLowerCase()) ? 'an' : 'a'} ${madlib.color} ${madlib.noun} ${sentence.current.middle} ${isVowel(madlib.adjective[0].toLowerCase()) ? 'an' : 'a'} ${madlib.adjective} ${madlib.noun2} ${sentence.current.end}`}</p>
        {madlib && <button onClick={resetMadlib}>Reset</button>}
        </>
    )
}

export default Madlib;