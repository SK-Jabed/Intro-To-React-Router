import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {
    const priceOptions = [
      {
        "id": 1,
        "name": "Basic Plan",
        "price": 29.99,
        "features": [
          "Access to gym equipment",
          "1 personal training session per month",
          "Locker room access",
          "Free WiFi",
          "Access during off-peak hours",
          "Basic nutrition guidance",
          "One-time fitness assessment"
        ]
      },
      {
        "id": 2,
        "name": "Standard Plan",
        "price": 49.99,
        "features": [
          "Access to gym equipment",
          "4 personal training sessions per month",
          "Access to group fitness classes",
          "Locker room access",
          "Free WiFi & mobile charging station",
          "Extended gym hours",
          "Advanced nutrition consultation",
          "Unlimited access to cardio & weight zones"
        ]
      },
      {
        "id": 3,
        "name": "Premium Plan",
        "price": 79.99,
        "features": [
          "Unlimited gym access",
          "8 personal training sessions per month",
          "Access to group fitness classes",
          "Locker room & sauna access",
          "Free WiFi & mobile charging station",
          "Priority booking for fitness classes",
          "Advanced body composition analysis",
          "Free water & protein shake",
          "Special discounts on sports merchandise"
        ]
      }
    ]


    return (
        <div className="container w-11/12 mx-auto">
            <h2 className="text-3xl font-bold text-center">Best Prices in The Town</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">                
            {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;