import React, { Component } from 'react'; // eslint-disable-line import/no-unresolved


class CustomRouteLayout extends Component {


    submit(e) {
        e.preventDefault();
        var fileName = document.getElementById('test').files[0];  
        console.log(fileName);
        const data = new FormData();
        data.append('file', fileName);
        const options = {
            method: 'POST',
            body: data
          };
        fetch('http://localhost:1337/import', options);
    };

    render() {
   

        return (
            <div>         
                <form id="uploadFile" onSubmit={this.submit}>
                    <input type="file" name="file" id="test"accept=".csv" />
                    <input type="submit" value="Envoyer"/>
                </form>
            </div>
        );
    }
}


export default CustomRouteLayout;
