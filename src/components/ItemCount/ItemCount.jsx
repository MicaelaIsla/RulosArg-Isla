import './ItemCount.css'
import { Card, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';

const ItemCount = ({ stock, initial, setInitial, price }) => {

    const [disableAdd, setdisableAdd] = useState(true)
    const [disableDelet, setdisableDelet] = useState(true)

    useEffect(() => {
        if(initial === 0){
            setdisableDelet(false)
        }

        if(initial === stock){
            setdisableAdd(false)
            alert("Ya no tenemos stock, volve pronto!")
        }
        return () => {}
    }, [initial])

    const addfunction = () => {
        if (initial <= stock) {
            setInitial(initial + 1)
            setdisableAdd(true)
            setdisableDelet(true)
        } 
    }

    const deletefunction = () => {
        if (initial > 0) {
            setInitial(initial - 1)
            setdisableDelet(true)
            setdisableAdd(true)
        }
    }
    return (
        <Card className='container-btnCounter'>
            <Card.Header as="h5" className="title-card-btnCounter">Agrega a tu carrito:</Card.Header>
            <Card.Body>
                <div className="container-counter">
                    <Button
                        disabled={!disableAdd}
                        variant="outline-secondary"
                        onClick={() => addfunction()}
                    >+</Button>
                    <p>{initial}</p>
                    <Button
                        disabled={!disableDelet}
                        variant="outline-secondary"
                        onClick={() => deletefunction()}
                    >-</Button>
                </div>
                <Button
                    className="btn-cart"
                    variant="outline-success">
                    Agregar al carrito
                </Button>
            </Card.Body>
        </Card>
    );
};

export default ItemCount;