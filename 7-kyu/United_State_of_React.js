// https://www.codewars.com/kata/5a830fa2373c2ec8eb00019d

import React from 'react';

export class States extends React.Component {
    state = {
        united: false
    }
    unite() {
        this.setState({
            united: true
        })
    }
    render() {
        const message = this.state.united ? 'Code for everyone' : 'Make America code again';
        return <div className="status">{message}</div>
    }
}