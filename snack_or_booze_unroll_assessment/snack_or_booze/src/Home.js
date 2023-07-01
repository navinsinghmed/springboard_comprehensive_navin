import React from 'react';
import { Card, CardBody, CardTitle } from "reactstrap";

function Home({snacks, drinks}) {
    return (
        <section className="col-md-8">
            <Card>
                <CardBody className="text-center">
                    <CardTitle>
                        <h3 className="font-weight-bold">
                            Welcome to our Navin Singh Tampa Bay Storm Chaser Cafe!
                        </h3>
                        <p>On the menu we have {snacks.length} food items & {drinks.length} drink options available.</p>
                    </CardTitle>
                </CardBody>
            </Card>
        </section>
    );
}

export default Home;