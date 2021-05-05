import React, { Component } from 'react';
import Counter from './counter'
function Counters(props) {
   
   
   
       const {onReset,counters,onDelete,onIncrement,onDecrement}=props;
        return (<div> 
            <button className="btn btn-primary btn-sm m-2"
             onClick={onReset}>Reset</button>
            {counters.map((counter)=>
            <Counter key={counter.id} value={counter.value}
             onDelete={onDelete} selected={true} id={counter.id} onIncrement={onIncrement} onDecrement={onDecrement} >
            
            </Counter>)}
        </div>  );
    

}
 
export default Counters;