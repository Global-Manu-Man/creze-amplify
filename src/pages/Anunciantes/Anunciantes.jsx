import React, { useState } from 'react';
import './Anunciantes.css';
import { Row, Col, Form } from 'react-bootstrap';
// import bakery from '../../assets/images/logo-4-01.jpg';
import Footer from '../HomeBanner/Footer';
import Navigation from '../HomeBanner/Navigation';
import BusinessMap from './BusinessMap';
import { SlArrowUp, SlArrowDown } from 'react-icons/sl';
import { toast } from 'react-toastify';


const category = [
    {id: 1, lable: 'Comida',
        subCategories: [
            {id: 1, lable: 'Pasteles'},
            {id: 2, lable: 'Botanas'},
            {id: 3, lable: 'Catering'},
            {id: 4, lable: 'Panadería'},
        ]
    },
    {id: 2, lable: 'Infantil/Bebés',
        subCategories: [
            {id: 1, lable: 'Muebles'},
            {id: 2, lable: 'Accesorios'},
            {id: 3, lable: 'Letreros de Maternidad'},
            {id: 4, lable: 'Rentas'},
            {id: 5, lable: 'Clases'},
        ]
    },
    {id: 3, lable: 'Hogar',
        subCategories: [
            {id: 1, lable: 'Muebles'},
            {id: 2, lable: 'Fragancias'},
            {id: 3, lable: 'Decoración'},
            {id: 4, lable: 'Cocinas / Exterior'},
            {id: 5, lable: 'Diseño de Interiores'},
            {id: 6, lable: 'Concept Store'},
        ]
    },
    {id: 4, lable: 'Papelería',
        subCategories: [
            {id: 1, lable: 'Social'},
            {id: 2, lable: 'Impresiones'},
        ]
    },
    {id: 5, lable: 'Eventos',
        subCategories: [
            {id: 1, lable: 'Decoración'},
            {id: 2, lable: 'Caterings'},
            {id: 3, lable: 'Renta de mobiliario'},
            {id: 4, lable: 'Invitaciones'},
            {id: 5, lable: 'Shows'},
        ]
    },
    {id: 6, lable: 'Regalos',
        subCategories: [
            {id: 1, lable: 'Fragancias'},
            {id: 2, lable: 'Florerías'},
            {id: 3, lable: 'Mesas de regalo'},
            {id: 4, lable: 'Regalos Generales'},
            {id: 5, lable: 'Concept Store'},
        ]
    },
    {id: 7, lable: 'Bienestar',
        subCategories: [
            {id: 1, lable: 'Fragancias'},
            {id: 2, lable: 'Florerías'},
            {id: 3, lable: 'Mesas de regalo'},
            {id: 4, lable: 'Regalos Generales'},
            {id: 5, lable: 'Concept Store'},
        ]
    },
    {id: 8, lable: 'Shopping',
        subCategories: [
            {id: 1, lable: 'Zapatos'},
            {id: 2, lable: 'Ropa / Vestidos'},
            {id: 3, lable: 'Trajes de baño'},
            {id: 4, lable: 'Accesorios'},
            {id: 5, lable: 'Cosméticos'},
        ]
    }
]
// const Subcategoría = [
//     {id: 1, lable: 'Muebles'},
//     {id: 2, lable: 'Fragancias'},
//     {id: 3, lable: 'Decoración General'},
//     {id: 4, lable: 'Cocina'},
//     {id: 5, lable: 'Mudanza'},
//     {id: 6, lable: 'Exterior'},
//     {id: 7, lable: 'Casa Inteligente'},
//     {id: 8, lable: 'Diseño de Interiores'},
// ]
const OtrosFiltros = [
    {id: 1, lable: 'Facturacion', title: 'bill'},
    {id: 2, lable: 'Tienda Física', title: 'physical_store'},
    {id: 3, lable: 'Tienda Online', title: 'online_store'},
    {id: 4, lable: 'Envíos nacionales', title: 'shipping'},
    {id: 5, lable: 'Negocio verificado', title: 'is_owner_verified'},
]


const Anunciantes = () => {
    const [showCategory, setShowCategory] = useState(true);
    const [showSub, setShowSub] = useState(true);
    const [showFil, setShowFil] = useState(true);
    const [showSubCategories, setShowSubCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedSubCategory, setSelectedSubCategory] = useState('');
    const [selectedOtherFilter, setSelectedOtherFilter] = useState('');
    const handleCategoryChange = (event, category) => {
        const isChecked = event.target.checked;
        if (isChecked) {
            setShowSubCategories(category.subCategories);
            setSelectedCategory(category.lable);
        } else {
            setSelectedCategory('');
            setSelectedSubCategory('');
            setShowSubCategories([]);
        }
    };
    const handleSubCategoryChange = (event, subCategory) => {
        const isChecked = event.target.checked;
        if (isChecked && selectedCategory) {
            setSelectedSubCategory(subCategory);
        } else {
            setSelectedSubCategory('');
            if (!selectedCategory) {
                toast.warn('Please Select Category first');
            }
        }
    };
    const handleOtherFilltersChange = (event, other) => {
        const isChecked = event.target.checked;
        if (isChecked) {
            setSelectedOtherFilter(other);
        } else {
            setSelectedOtherFilter('');
        }
    };
    return (
        <div>
            <Navigation />
            <div className="container mt-3 pb-3">
            <Row >
                <Col lg={3} md={12} sm={12}>
                    <div className="anunciantes">
                        {/* <div className="biMenudiv">
                            <div onClick={() => setShowFilter(!showFilter)} className='biMenu'>
                                <BiMenuAltLeft style={{ fontSize: '15px' }}/>
                            </div>
                        </div> */}
                        <div>
                            <hr className='my-2'/>
                            <div onClick={() => setShowCategory(!showCategory)} className='d-flex justify-content-between cursor-pointer'>
                                <p className="fs-6 fw-medium">Categoría</p>
                                {
                                    showCategory ? 
                                    <SlArrowUp className='mt-2' style={{ fontSize: '15px' }} />
                                    :
                                    <SlArrowDown className='mt-2' style={{ fontSize: '15px' }} />
                                }
                            </div> 
                            <hr className='mt-0 mb-2' />
                            {
                                showCategory && 
                                <div>
                                    {
                                        category.map(item => (
                                            <Form.Check
                                            key={item.id}
                                            type='checkbox'
                                            className='fs-6'
                                            id={`category-${item.id}`}
                                            label={item.lable}
                                            checked={selectedCategory && selectedCategory === item.lable}
                                            onChange={(event) => handleCategoryChange(event, item)}
                                        />
                                        ))
                                    }
                                </div>
                            }
                        </div>
                        <div>
                            <hr className='my-2'/>
                            <div onClick={() => setShowSub(!showSub)} className='d-flex justify-content-between cursor-pointer'>
                                <p className="fs-6 fw-medium">Subcategoría</p>
                                {
                                    showSub ? 
                                    <SlArrowUp className='mt-2' style={{ fontSize: '15px' }} />
                                    :
                                    <SlArrowDown className='mt-2' style={{ fontSize: '15px' }} />
                                }
                            </div> 
                            <hr className='mt-0 mb-2' />
                            {
                                showSub &&
                                <div>
                                    {
                                        showSubCategories.map(item => (
                                            <Form.Check
                                            key={item.id}
                                            type='checkbox'
                                            className='fs-6'
                                            id={`subcategoría-${item.id}`}
                                            label={item.lable}
                                            checked={selectedSubCategory && selectedSubCategory === item.lable}
                                            onChange={(event) => handleSubCategoryChange(event, item.lable)}
                                        />
                                        ))
                                    }
                                </div>
                            }
                        </div>
                        <div>
                            <hr className='my-2'/>
                            <div onClick={() => setShowFil(!showFil)} className='d-flex justify-content-between cursor-pointer'>
                                <p className="fs-6 fw-medium">Otros filtros</p>
                                {
                                    showFil ? 
                                    <SlArrowUp className='mt-2' style={{ fontSize: '15px' }} />
                                    :
                                    <SlArrowDown className='mt-2' style={{ fontSize: '15px' }} />
                                }
                            </div> 
                            <hr className='mt-0 mb-2' />
                            {
                                showFil && 
                                <div>
                                    {
                                        OtrosFiltros.map(item => (
                                            <Form.Check
                                            key={item.id}
                                            type='checkbox'
                                            className='fs-6'
                                            id={`filtros-${item.id}`}
                                            label={item.lable}
                                            checked={selectedOtherFilter && selectedOtherFilter.id === item.id}
                                            onChange={(event) => handleOtherFilltersChange(event, item)}
                                        />
                                        ))
                                    }
                                </div>
                            }
                        </div>
                    </div>
                </Col>
                <Col lg={9} md={12} sm={12}>
                   
                        <BusinessMap
                            setCategorie={setSelectedCategory}
                            categorie={selectedCategory}
                            setSubCategory={setSelectedSubCategory}
                            subCategory={selectedSubCategory}
                            setOtherFilter={setSelectedOtherFilter}
                            otherFilter={selectedOtherFilter}
                            setShowSubCategories={setShowSubCategories}
                        />
                        
                </Col>
            </Row>
            </div>
            <hr />
            <Footer />
        </div>
    );
};

export default Anunciantes;
