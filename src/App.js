import React, {Component} from 'react'
import Form from './Form'
import Table from './Table'

class App extends Component {

    state = {
        characters: [],
    }

    removeCharacter = (index) => {
        console.log('removeCharacters()')
        const { characters } = this.state

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            }),
        }, () => {
            // this callback runs after the setState is complete - this.state will show updated data!
            console.log('Update done!')
            console.log(this.state.characters.length)
        })
    }

    handleSubmit = (character) => {
        this.setState({ characters: [...this.state.characters, character] })
    }

    render() {

        console.log('Rendering App')
        return (
            <div className="container">
                <Table characterDataFromApp={this.state.characters} removeCharacterFromApp={this.removeCharacter} />
                <Form handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

export default App