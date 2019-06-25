import React from 'react';

class RestOfList extends React.Component {
    state = {
        list: [],
        loading: false
    }

    componentDidMount = () => {
        this.setState({ loading: true });
        var httpChannel = 'https://dykpfvcbgl.execute-api.us-east-1.amazonaws.com/Prod/items/';
        fetch(httpChannel)
            .then(response => response.json())
            .then(data => this.setState({ list: data.items, loading: false }))
    }

    componentDidUpdate = () => {
        console.log("The component just updated")
    }

    render() {
        return (
            <div>
                <div className="ui header">Items retrieved from API</div>
                <div>
                    {this.state.loading
                        ? "Loading..."
                        : <div>
                            {this.state.list.map(item => (
                                <div key={item.id} > {item.title}</div>
                            ))
                            }
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default RestOfList;