// app/countries/[country]/page.tsx

import { countriesData } from '../../data/countriesData';
import CountryInfo from '../../component/CountryInFo';

interface CountryPageProps {
  params: { country: string };
}

export default function CountryPage({ params }: CountryPageProps) {
  const countryName = params.country;
  const country = countriesData[countryName as keyof typeof countriesData];

  if (!country) {
    return <div className="text-center text-red-500">Country not found</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-lg w-full bg-white shadow-lg p-8 rounded-lg">
        <h1 className="text-3xl font-bold text-center mb-6">{country.name}</h1>
        <CountryInfo
          name={country.name}
          capital={country.capital}
          population={country.population}
          popularfood={country.PopularFood}
        />
      </div>
    </div>
  );
}