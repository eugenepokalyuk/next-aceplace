import { useRouter } from 'next/router';
import { useState } from 'react';

const SearchForm = () => {
    const [inn, setInn] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (inn) {
            setError('');
            router.push(`/info/${inn}`);
        } else {
            setError('Необходимо ввести ИНН или ОГРН');
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className='form'>
                <input
                    type="text"
                    value={inn}
                    onChange={(e) => setInn(e.target.value)}
                    placeholder="Введите ИНН или ОГРН"
                />
                <button type="submit">🔍</button>
            </form>
            {error && <p className='error'>{error}</p>}
        </>
    );
};

export default SearchForm;