import React from 'react'

const ChildMap = (props:any) => {
  return (
    <div>
        <h1 className ="text-4xl bg-slate-500 py-4 flex justify-center font-bold items-center"> CAR INFORMATION </h1>
    {
        props.Car.map( (vehicle:any) => {
            return(
             <div className="my-4 border to-blue-500 ">
                <h1>Model: {vehicle.carName}</h1>
                <h4>Price: {vehicle.carPrice}</h4>
                <h3>Review: {vehicle.carReviews}</h3>
             </div>
            );
        })
    }
    </div>
  )
}

export default ChildMap
