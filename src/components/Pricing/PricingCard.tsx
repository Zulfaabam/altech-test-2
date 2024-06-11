interface TTier {
  id: number;
  name: string;
  price: number;
  features: Array<string>;
}

interface TPricingCardProps {
  tier: TTier;
}

const PricingCard = ({ tier }: TPricingCardProps) => {
  return (
    <div className="tier bg-white shadow-lg rounded-lg p-6 m-4 max-w-sm w-full hover:-translate-y-2 transition-all">
      <h3 className="text-xl font-semibold mb-4">{tier.name}</h3>
      <p className="text-2xl font-bold mb-4 text-[#6C63FF]">
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
  );
};

export default PricingCard;
