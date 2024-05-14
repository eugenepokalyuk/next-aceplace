import SearchForm from '../components/SearchForm';

const Home = () => {
    return (
        <div className='search-form-container'>
            {/* <h1>Поиск организации по ИНН</h1> */}
            <SearchForm />
        </div>
    );
};

export default Home;