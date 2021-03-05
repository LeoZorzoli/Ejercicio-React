import React, { useState, useEffect } from 'react';
import { Container, Form } from 'react-bootstrap';
import personsService from '../services/persons';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import './Table.css';
import Loading from './Loading';

const Table = () => {
    const [persons, setPersons] = useState([]);

    useEffect(() => {
        personsService
            .getPersons()
            .then(personsList => {
                setPersons(personsList);
            })
    }, []);

    const columns = [
        { dataField: 'id', text: 'ID'},
        { dataField: 'firstName', text: 'First Name'},
        { dataField: 'lastName', text: 'Last Name'},
        { dataField: 'age', text: 'Age'}
    ]

    const { SearchBar } = Search;

    const rowStyle = {
        backgroundColor: '#f5f5f5',
    }

    if(persons.length === 0) {
        return (
            <Loading />
        )
    } else {
        return (
            <Container>
                <ToolkitProvider
                    keyField="id"
                    data={ persons }
                    columns={ columns }
                    search
                >
                    {
                        props => (
                            <div>
                                <Form inline className="search">
                                    <Form.Group>
                                        <h4>Search:</h4>
                                        <SearchBar { ...props.searchProps } className="mx-sm-3" />
                                    </Form.Group>
                                </Form>
                                <BootstrapTable
                                    keyField="id"
                                    data={persons}
                                    columns={columns}
                                    pagination={paginationFactory()}
                                    { ...props.baseProps }
                                    rowStyle={rowStyle}
                                />
                            </div>
                        )
                    }
                </ToolkitProvider>
            </Container>
        )
    }
}

export default Table