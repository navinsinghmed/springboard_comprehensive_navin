import React, {useLocation} from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    ListGroup,
    ListGroupItem
} from "reactstrap";

function Menu({ items, path }) {
    return (
        <section className="col-md-4">
            <Card>
                <CardBody>
                    <CardTitle className="font-weight-bold text-center">
                        Menu
                    </CardTitle>
                    <CardText>
                        Select An Item from the Menu:
                    </CardText>
                    <ListGroup>
                        {items.map(item => (
                            <Link to={`/${path}/${item.id}`} key={item.id}>
                                <ListGroupItem>{item.name}</ListGroupItem>
                            </Link>
                        ))}
                    </ListGroup>
                </CardBody>
            </Card>
        </section>
    );
}

export default Menu;