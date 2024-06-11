import PricingCard from "./PricingCard";

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
    <div id="pricing" className="py-12 bg-gray-100 px-4">
      <h2 className="text-3xl font-bold text-center mb-3 underline underline-offset-4 decoration-[#56b6f4]">
        Pricing
      </h2>
      <p className="text-center mb-4 max-w-lg mx-auto font-medium">
        We provide a flexible TIER System where customers can purchase our
        product by category/level. Here’s what each tier offers:
      </p>
      <div className="tiers flex flex-wrap justify-center">
        {tiers.map((tier) => (
          <PricingCard key={tier.id} tier={tier} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
