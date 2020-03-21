import React from 'react';


class Section extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    ref = (node) => {
        this.ref = node;
        window.addEventListener('scroll', this.onScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll);
    }

    onScroll = event => {
        const {changeHeaderColor} = this.props;
        // calculate if the top value is inside your header by using the ref
        changeHeaderColor();
    };

    render() {
        const {id, children} = this.props;

        return (
            <div id={id} className="section" ref={this.ref}>{children}</div>
        );
    }
}