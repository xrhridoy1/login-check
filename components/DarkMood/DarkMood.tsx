// 'use client'
// import React, { useEffect, useState } from 'react';

// const DarkMood = () => {
//     const [darkMood, setDarkMood] = useState<boolean | undefined>(false)
//     console.log(darkMood)
//     useEffect(() => {
//         if (darkMood) {
//             document.body.className = 'dark'
//         } else {
//             document.body.className = ''
//         }
//     }, [darkMood])
//     return (
//         <label htmlFor="mood" className='cursor-pointer ml-5 flex  gap-5'>
//             <input type="checkbox" name="" id="mood"
//                 className='cursor-pointer'
//                 onChange={() => setDarkMood(!darkMood)}
//             />
//             <p> {darkMood ? 'Dark Mood' : 'Light Mood'}</p>

//         </label>
//     );
// };

// export default DarkMood;