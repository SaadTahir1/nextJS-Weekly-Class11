import ChildMap from "./ChildMap"

const MapFunc = () => {
    const Car =[
        { carName: "Toyota", carPrice: "PKR 52,00,000", carImage:"", carReviews:"***** 5 Stars" },
        { carName: "Civic", carPrice: "PKR 76,00,000", carImage:"", carReviews:"**** 4 Stars" },
        { carName: "Alto", carPrice: "PKR 27,00,000", carImage:"", carReviews:"*** 3 Stars" },
        { carName: "Sportage", carPrice: "PKR 56,00,000", carImage:"", carReviews:"**** 4 Stars" }]

  return (
    <div>
        <ChildMap 
        Car = {Car}/>
    </div>
  )
}

export default MapFunc
