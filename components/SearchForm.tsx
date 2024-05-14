// import { useRouter } from 'next/router';
// import { useState } from 'react';

// const SearchForm = () => {
//     const [inn, setInn] = useState('');
//     const router = useRouter();

//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();
//         if (inn) {
//             router.push(`/info/${inn}`);
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit} className='form'>
//             <input
//                 type="text"
//                 value={inn}
//                 onChange={(e) => setInn(e.target.value)}
//                 placeholder="Введите ИНН"
//             />
//             <button type="submit">
//                 <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 50 50"
//                     width="24px"
//                     height="24px"
//                 >
//                     <path
//                         d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"
//                     />
//                 </svg>
//             </button>
//         </form>
//     );
// };

// export default SearchForm;
import { useRouter } from 'next/router';
import { useState } from 'react';

const SearchForm = () => {
    const [inn, setInn] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (inn) {
            setError('');  // Сброс ошибки, если поле не пустое
            router.push(`/info/${inn}`);
        } else {
            setError('Необходимо ввести ИНН');
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className='form'>
                <input
                    type="text"
                    value={inn}
                    onChange={(e) => setInn(e.target.value)}
                    placeholder="Введите ИНН"
                />
                <button type="submit">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50 50"
                        width="24px"
                        height="24px"
                    >
                        <path
                            d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"
                        />
                    </svg>
                </button>
            </form>
            {error && <p className='error'>{error}</p>}
        </>
    );
};

export default SearchForm;