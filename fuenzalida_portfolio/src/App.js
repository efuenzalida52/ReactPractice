import React, {Component} from 'react';

class RegularClass{}
class ComponentClass extends Component{}

const regularClassInstance = new RegularClass();
const componentClassInstance = new ComponentClass();

console.log('regularClassInstance', regularClassInstance);
console.log('componentClassInstance', componentClassInstance);


class App extends Component{
    render(){
        return(
            <div> 
                <h1>Hello World!</h1>
                <p>
                    My name is Elizabeth ~ I'm a software developer.
                </p>
                <p>
                    I am looking forward to more meaningful projects.
                </p>
            </div>
        )
    }
}

export default App;