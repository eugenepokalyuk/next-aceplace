import SearchForm from '@/components/SearchForm';
import { GetServerSideProps } from 'next';
import { useState } from 'react';
import Modal from '../../components/Modal';

interface Management {
    name: string;
    post: string;
}

interface Organization {
    name: string;
    address: string;
    kpp: string;
    management: Management;
    inn: string;
    ogrn: string;
    okpo: string;
    okato: string;
    oktmo: string;
    okogu: string;
    okfs: string;
    okved: string;
    opf: string;
}

interface Props {
    organization?: Organization;
    error?: string;
}

const Info = ({ organization, error }: Props) => {
    const [showModal, setShowModal] = useState(false);
    const [redirectUrl, setRedirectUrl] = useState('');

    const handleAddressClick = () => {
        if (organization?.address) {
            setRedirectUrl(`https://yandex.ru/maps/?text=${organization.address}`);
            setShowModal(true);
        }
    };

    const handleRedirect = () => {
        window.location.href = redirectUrl;
    };

    return (
        <div className='inn-container'>
            <SearchForm />
            <div className='hr'></div>
            {organization ? (
                <div>
                    <h1>{organization.name || 'Нет данных'}</h1>
                    <p>Адрес: <span className='link' onClick={handleAddressClick}>{organization.address || 'Нет данных'}</span></p>
                    <p>КПП: {organization.kpp || 'Нет данных'}</p>
                    <p>Руководитель: {organization.management.name || 'Нет данных'}</p>
                    <p>Должность: {organization.management.post || 'Нет данных'}</p>
                    <p>ИНН: {organization.inn || 'Нет данных'}</p>
                    <p>ОГРН: {organization.ogrn || 'Нет данных'}</p>
                    <p>ОКПО: {organization.okpo || 'Нет данных'}</p>
                    <p>ОКАТО: {organization.okato || 'Нет данных'}</p>
                    <p>ОКТМО: {organization.oktmo || 'Нет данных'}</p>
                    <p>ОКОГУ: {organization.okogu || 'Нет данных'}</p>
                    <p>ОКФС: {organization.okfs || 'Нет данных'}</p>
                    <p>ОКВЭД: {organization.okved || 'Нет данных'}</p>
                    <p>Организационно-правовая форма: {organization.opf || 'Нет данных'}</p>
                </div>
            ) : error ? (
                <div>{error}</div>
            ) : (
                <div>Уууупс... Неопознанная ошибка</div>
            ) && (
                <div>Загрузка...</div>
            )}

            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <p>Вы действительно хотите перейти на внешний ресурс?</p>
                    <div className='modal-buttons-content'>
                        <button onClick={() => setShowModal(false)}>Отказаться</button>
                        <button onClick={handleRedirect}>Перейти</button>
                    </div>
                </Modal>
            )}
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { inn } = context.params!;
    let organization = null;
    let error = null;

    try {
        const url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party";
        const token = process.env.NEXT_PUBLIC_DADATE_API_KEY;
        const query = inn;

        const options: RequestInit = {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Token " + token
            },
            body: JSON.stringify({ query: query })
        }

        const response = await fetch(url, options);
        const data = await response.json();

        if (data.suggestions && data.suggestions.length > 0) {
            const suggestion = data.suggestions[0];
            const organizationData = suggestion.data;

            organization = {
                name: suggestion.value,
                address: organizationData.address?.value || 'Нет данных',
                kpp: organizationData.kpp || 'Нет данных',
                management: {
                    name: organizationData.management?.name || 'Нет данных',
                    post: organizationData.management?.post || 'Нет данных',
                },
                inn: organizationData.inn || 'Нет данных',
                ogrn: organizationData.ogrn || 'Нет данных',
                okpo: organizationData.okpo || 'Нет данных',
                okato: organizationData.okato || 'Нет данных',
                oktmo: organizationData.oktmo || 'Нет данных',
                okogu: organizationData.okogu || 'Нет данных',
                okfs: organizationData.okfs || 'Нет данных',
                okved: organizationData.okved || 'Нет данных',
                opf: organizationData.opf?.full || 'Нет данных',
            };
        } else {
            error = 'Организация с указанным ИНН не найдена';
        }
    } catch (err) {
        error = 'Ошибка при получении данных';
    }

    return {
        props: {
            organization,
            error,
        },
    };
};

export default Info;