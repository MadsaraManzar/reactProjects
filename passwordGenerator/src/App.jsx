import { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';

// function App() {
//   const [length, setLength] = useState(8);
//   const [numAllowed, setNumAllowed] = useState(false);
//   const [charAllowed, setCharAllowed] = useState(false);
//   const [password, setPassword] = useState("");

//   // useRef Hook: to give the client better ui
//   const passwordRef = useRef(null);

//   const passwordGenerator = useCallback(() => {
//     let pass = "";
//     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//     if (numAllowed) str += "0123456789";
//     if (charAllowed) str += "!@#$%^&*=-[]{}~`";

//     for (let i = 0; i < length; i++) {
//       let char = Math.floor(Math.random() * str.length);
//       pass += str.charAt(char);
//     }
//     setPassword(pass);
//   }, [length, numAllowed, charAllowed]);

//   // Here we did optimization
//   // Usecallback memorizes as much as it can
//   const copyPasswordToClipboard = useCallback(() => {
//     if (passwordRef.current) {
//       passwordRef.current.select();
//       passwordRef.current.setSelectionRange(0, 80);
//       window.navigator.clipboard.writeText(password);
//     }
//   }, [password]);

//   useEffect(() => {
//     passwordGenerator();
//   }, [length, numAllowed, charAllowed, passwordGenerator]);

//   return (
//     <>
//       <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
//         <h1 className='text-white text-center my-3'>Password Generator</h1>
//         <div className="flex shadow rounded-lg overflow-hidden mb-4">
//           <input 
//             type="text"
//             value={password}
//             ref={passwordRef}
//             className="outline-none w-full py-1 px-3"
//             readOnly
//           />
//           <button
//             onClick={copyPasswordToClipboard}
//             className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
//           >
//             Copy
//           </button>
//         </div>

//         <div className="flex text-sm gap-x-2">
//           <div className="flex items-center gap-x-1">
//             <input 
//               type="range"
//               min={6}
//               max={100}
//               value={length}
//               className='cursor-pointer'
//               onChange={(e) => setLength(Number(e.target.value))}
//             />
//             <label>Length: {length}</label>
//           </div>
//           <div className="flex items-center gap-x-1">
//             <input 
//               type="checkbox"
//               checked={numAllowed}
//               id='numberInput'
//               onChange={() => setNumAllowed(prev => !prev)}
//             />
//             <label htmlFor="numberInput">Numbers</label>
//           </div>
//           <div className="flex items-center gap-x-1">
//             <input 
//               type="checkbox"
//               checked={charAllowed}
//               id='characterInput'
//               onChange={() => setCharAllowed(prev => !prev)}
//             />
//             <label htmlFor="characterInput">Characters</label>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  return (
    <>
      <div 
        className='flex items-center justify-center flex-col m-4 rounded-sm bg-orange-400 py-4'>
        <div className='flex items-center'>
          <input 
            className='outline-none px-2 py-1'
            type="text" 
          />
          <button className='bg-sky-500 px-4 py-1 text-white rounded'>Copy</button>
        </div>
        <div className="flex items-center mt-4">
          <input 
            className='outline-none px-2 py-1'
            type="range" 
            min={8} 
            max={100} 
            value={length} 
            onChange={(e) => {
              setLength(e.target.value)
            }}
          />
          <span>Length : {length}</span>
          <input 
          type="checkbox" 
          className='ml-2' onChange={(prev) => {
            setNumAllowed(!prev)
            console.log(setNumAllowed)
            }}/>
          <span>Numbers</span>
          <input 
          type="checkbox" 
          className='ml-2' onChange={(prev) => {
            setCharAllowed(!prev)
            console.log(setCharAllowed)
            }}/>
          <span>Character</span>
        </div>
      </div>
    </>
  );
}

export default App;
