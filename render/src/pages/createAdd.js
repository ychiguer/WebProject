import React, { Component } from 'react';
import { useState } from "react";
import { Form, Button, Col, Container, Row, InputGroup } from 'react-bootstrap';


function CreateAdd() {
    const [name, setName] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
        return (
            <Container>
                <Form>   
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridTitle">
                            <Form.Label>Titre de l'annonce</Form.Label>
                            <Form.Control type="texte" placeholder="Entrer le titre de votre annonce" />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridMarque">
                            <Form.Label>Marque</Form.Label>
                            <Form.Control as="select">
                                <option value="merc">Mercedes-Benz</option>
                                <option value="ren">Renault</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridModel">
                            <Form.Label>Modèle</Form.Label>
                            <Form.Control type="texte" placeholder="Entrer le modèle exacte" />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridPrice">
                            <Form.Label>Prix</Form.Label>
                            <InputGroup>
                                <Form.Control type="texte" placeholder="0000" />
                                <InputGroup.Text id="basic-addon1">€</InputGroup.Text>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridMilage">
                            <Form.Label>Kilométrage</Form.Label>
                            <InputGroup>
                                <Form.Control type="texte" placeholder="20000" />
                                <InputGroup.Text id="basic-addon1">KM</InputGroup.Text>
                            </InputGroup>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCylindree">
                            <Form.Label>Cylindree</Form.Label>
                            <InputGroup>
                                <Form.Control type="texte" placeholder="1996" />
                                <InputGroup.Text id="basic-addon1">ccm</InputGroup.Text>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridEmission">
                            <Form.Label>Emission CO2</Form.Label>
                            <InputGroup>
                                <Form.Control type="texte" placeholder="100" />
                                <InputGroup.Text id="basic-addon1">g/km</InputGroup.Text>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridTransmission">
                            <Form.Label>Transmission</Form.Label>
                            <Form.Control as="select">
                                <option value="aut">Automatique</option>
                                <option value="man">Manuelle</option>
                            </Form.Control>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEnergie">
                            <Form.Label>Energie</Form.Label>
                            <Form.Control as="select">
                                <option value="dies">Diesel</option>
                                <option value="ess">Essence</option>
                                <option value="elec">Electrique</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridRegistration">
                            <Form.Label>Date Immatriculation</Form.Label>
                            <InputGroup>
                                <Form.Control type="date" />
                            </InputGroup>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridSellerType">
                            <Form.Label>Type vendeur</Form.Label>
                            <Form.Control as="select">
                                <option value="aut">Particulier</option>
                                <option value="man">Professionnel</option>
                            </Form.Control>
                        </Form.Group>
                    </Row>

                </Form>
            </Container>
            
        );
    }


export default CreateAdd;