const Pricing = () => {
  const tiers = [
    {
      id: 1,
      name: "TIER 1 / Basic",
      price: 19.99,
      features: [
        "Record Incoming Items",
        "Record Outgoing Items",
        "Record Daily Profits",
      ],
    },
    {
      id: 2,
      name: "TIER 2 / Business",
      price: 49.99,
      features: [
        "Record Incoming and Outgoing Items",
        "Record Daily Profits",
        "Analyze Sales with Charts",
        "24/7 Support",
      ],
    },
    {
      id: 3,
      name: "TIER 3 / Entrepreneur",
      price: 99.99,
      features: [
        "Record Incoming and Outgoing Items",
        "Record Daily Profits",
        "Analyze Sales with Charts",
        "24/7 Support",
        "Export Data to Excel",
        "AI Earnings Prediction",
      ],
    },
  ];

  return (
    <div id="pricing" className="py-12 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-2">Pricing</h2>
      <p className="text-center mb-4 max-w-lg mx-auto">
        We provide a flexible TIER System where customers can purchase our
        product by category/level. Here’s what each tier offers:
      </p>
      <div className="tiers flex flex-wrap justify-center">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className="tier bg-white shadow-lg rounded-lg p-6 m-4 max-w-sm w-full"
          >
            <h3 className="text-xl font-semibold mb-4">{tier.name}</h3>
            <p className="text-2xl font-bold mb-4">
              ${tier.price}
              <span className="text-base font-normal">/month</span>
            </p>
            <ul className="list-disc list-inside text-left">
              {tier.features.map((feature, index) => (
                <li key={index} className="mb-2">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
