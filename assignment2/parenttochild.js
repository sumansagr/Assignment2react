function Parent(){
    //     const data = 'Data from parent';
    //     return(
    //         <div>
    //             <Child dataParentToChild = {data}/>
    //         </div>
    //     )
    // }
    
    // function Child ({dataParentToChild}){
    //     return(
    //         <div>
    //             {dataParentToChild}
    //         </div>
    //     )
    // }
    //ReactDOM.render(<Parent/>,document.getElementById('container'))
    
    
    
    //2 nd example
    
    function ParentComponent () {
        const username='Amith'
        return <div>
            <h3>ParentComponent</h3>
            <ChildComponent
            parentName={username}
            />
        </div>
    }
    
    
    function ChildComponent(props) {
        console.log(props);
        return <p>ChildComponent {props.parentName}</p>
        
    }
    ReactDOM.render(<ParentComponent/>,
        document.getElementById('container'))
    
    
    
    // function ParentComponent () {
    //         const age=80
    //         return <div>
    //             <h3>ParentComponent</h3>
    //             <ChildComponent
    //             parentAge={age}
    //             />
    //         </div>
    //     }
        
        
    //     function ChildComponent(props) {
    //         console.log(props);
    //         return <p>ChildComponent {props.parentAge}</p>
    //     }
    //     ReactDOM.render(<ParentComponent/>,
    //         document.getElementById('container'))