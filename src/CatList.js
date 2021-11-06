import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';

class CatList extends Component {

    constructor(props) {
        super(props);
        this.state = { cats: [] };
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        fetch('/cats')
            .then(response => response.json())
            .then(data => this.setState({ cats: data }));
    }

    async remove(catId) {
        await fetch(`/cats/${catId}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedCats = [...this.state.cats].filter(i => i.catId !== catId);
            this.setState({ cats: updatedCats });
        });
    }

    render() {
        const { cats, isLoading } = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        const catList = cats.map(cat => {
            return <tr key={cat.catId}>
                <td style={{ whiteSpace: 'nowrap' }}>{cat.name}</td>
                <td>{cat.age}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link} to={"/cats/" + cat.catId}>Edit</Button>
                        <Button size="sm" color="danger" onClick={() => this.remove(cat.catId)}>Delete</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });

        return (
            <div>
                <AppNavbar />
                <Container fluid>
                    <div className="float-right">
                        <Button color="success" tag={Link} to="/cats/new">Add a Cat</Button>
                    </div>
                    <h3>Cats</h3>
                    <Table className="mt-4">
                        <thead>
                            <tr>
                                <th width="30%">Name</th>
                                <th width="30%">Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            {catList}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }
}

export default CatList;