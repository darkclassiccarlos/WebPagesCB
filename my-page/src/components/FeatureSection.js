import React, { useState } from 'react';
import Modal from 'react-modal';
import './styles/featureSection.css'; // Importamos los estilos CSS


Modal.setAppElement('#root');

const FeatureSection = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedFeature, setSelectedFeature] = useState('');
    const [modalContent, setModalContent] = useState('');

    const openModal = (feature) => {
        setSelectedFeature(feature);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <section className="py-12 bg-white sm:py-16 lg:py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="card-container">
                    {/* Support */}
                    <div className="card" onClick={() => openModal('Ecommerce')}>
                        <img className="mx-auto" src="https://img.icons8.com/external-prettycons-flat-prettycons/47/external-ecommerce-shopping-prettycons-flat-prettycons-2.png" alt="Support Icon" />
                        <h3 className="text-xl font-bold text-gray-900 font-pj">Ecommerce</h3>
                        <p className="mt-2 text-base text-gray-600 font-pj">Tiendas en linea, mejora tus ventas a traves de tu propio sitio web de ventas</p>
                    </div>
                    {/* Sales */}
                    <div className="card" onClick={() => openModal('Web Pages')}>
                        <img className="mx-auto" src="https://img.icons8.com/cute-clipart/64/web.png" alt="Support Icon" />
                        <h3 className="text-xl font-bold text-gray-900 font-pj">Web Pages</h3>
                        <p className="mt-2 text-base text-gray-600 font-pj">Define tu pagina web de presentacion para que tus clientes te reconoscan en linea.</p>
                    </div>
                    {/* Products */}
                    <div className="card" onClick={() => openModal('Apps Web')}>
                        <img className="mx-auto" src="https://img.icons8.com/pulsar-color/48/web-apps.png" alt="Support Icon" />
                        <h3 className="text-xl font-bold text-gray-900 font-pj">Products</h3>
                        <p className="mt-2 text-base text-gray-600 font-pj">Implementa tu aplicacion web para que tus servicios esten al alcance de todos.</p>
                    </div>
                </div>
            </div>
            {/* Modal */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
            >
                <h2>{selectedFeature}</h2>
                <p>Contenido del modal para {selectedFeature}</p>
                <button onClick={closeModal}>Cerrar</button>
            </Modal>
        </section>
    );
}

export default FeatureSection;
