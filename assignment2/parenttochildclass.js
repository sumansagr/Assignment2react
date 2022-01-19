class Parent extends React.Component{
    //     constructor(props){
    //         super(props);
    //         this.state = {
    //             data: 'Data from parent'
    //         }
    //     }
    
    //     render(){
    //         const {data} = this.state;
    //         return(
    //             <div>
    //                 <Child dataParentToChild = {data}/>
    //             </div>
    //         )
    //     }
    // }
    
    // class Child extends React.Component{
    //     constructor(props){
    //         super(props);
    //         this.state = {
    //             data: this.props.dataParentToChild
    //         }
    //     }
    
    //     render(){
    //         const {data} = this.state;
    //         return(
    //             <div>
    //                 {data}
    //             </div>
    //         )
    //     }
    // }
    // ReactDOM.render(<Parent/>,document.getElementById('container'))
    
    
    
    
    
    
    
    
    
    
    
    class Parent extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                username: 'Amith'
            }
        }
    
        render(){
            const {username} = this.state;
            return(
                <div>
                    <Child dataParentToChild = {username}/>
                </div>
            )
        }
    }
    
    class Child extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                data: this.props.dataParentToChild
            }
        }
    
        render(){
            const {username} = this.state;
            return(
                <div>
                    {username}
                </div>
            )
        }
    }
    ReactDOM.render(<Parent/>,document.getElementById('container'))