import React from 'react'
import ReactDom from 'react-dom';
import Button from './Button'
import Card from './Card'
import './ErrorModel.css'

const Backdrop = (props) => {
    return <div className="backdrop"></div>
}

const Overlay = (props) => {
    return <Card className="modal">
        <header className="header">
            <h2>
                {props.title}
            </h2>
        </header>
        <div className="content">
            <p>
                {props.message}
            </p>
        </div>
        <footer className="actions">
            <Button onClick={props.onCancel}>Okay</Button>
        </footer>
    </Card>
}


const ErrorModel = (props) => {
    return <React.Fragment>

        {ReactDom.createPortal(
            <Backdrop />,
            document.getElementById('backdrop-root'))}

        {ReactDom.createPortal(
            <Overlay
                onCancel={props.onCancel}
                title={props.title}
                message={props.message} />,
            document.getElementById('overlay-root'))}

    </React.Fragment>
}

export default ErrorModel