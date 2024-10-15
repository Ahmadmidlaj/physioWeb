"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import { sendEmail } from "../../../utils/send-email";

export type FormData = {
  name: string;
  city: string;
  phonenumber: number;
};

const HeroSection: FC = () => {
  const router = useRouter();
  const { register, handleSubmit, watch } = useForm<FormData>();
  const [isOther, setIsOther] = useState(false);
  const [otherCity, setOtherCity] = useState("");
  const [selectedMainCity, setSelectedMainCity] = useState("");

  const mainCities = [
    { value: "", label: "Select a city" },
    { value: "mangalore", label: "Mangalore" },
    { value: "bangalore", label: "Bangalore" },
  ];

  const mangaloreCities = [
    "Kankanady", "Hampankatta", "Falnir", "Jeppu", "StateBank", "Kavoor",
    "Marnamikatta", "Pandeshwar", "ShakthiNagar", "Padil", "Bikarnakatte",
    "Nanthoor", "KPT", "Kadri", "BuntsHostel", "Pumpwell", "Jyothi"
  ];

  const bangaloreCities = [
    "Koramangala", "Indiranagar", "Jayanagar", "JP Nagar", "Whitefield",
    "Electronic City", "Marathahalli", "HSR Layout", "Banashankari", "Malleswaram"
  ];

  async function onSubmit(data: FormData) {
    try {
      const formData = isOther ? { ...data, city: `${selectedMainCity} - ${otherCity}` } : data;
      await sendEmail(formData);
      router.push("/success");
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const handleMainCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCity = event.target.value;
    setSelectedMainCity(selectedCity);
    setIsOther(false);
    setOtherCity("");
  };

  const handleAreaChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedArea = event.target.value;
    setIsOther(selectedArea === "other");
    setOtherCity("");
  };

  const phoneNumber = "+919980369237"; 

  return (
    <div id="booking" className="relative bg-gradient-to-bl from-blue-100 via-transparent dark:from-blue-950 dark:via-transparent">
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid items-center md:grid-cols-2 gap-8 lg:gap-12">
          {/* Left column content */}
          <div>
            <p className="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400"></p>

            <div className="mt-4 md:mb-12 max-w-2xl">
              <h1 className="mb-4 font-semibold text-gray-800 text-4xl lg:text-5xl dark:text-neutral-200">
                Physio-Home-Fit
              </h1>
              <p className="text-gray-600 dark:text-neutral-400">
                Get expert physiotherapy treatment in the comfort of your home.
                Our qualified physiotherapists provide personalized care and
                rehabilitation services at your doorstep
              </p>
            </div>
          </div>

          {/* Right column with booking form and call option */}
          <div>
            <div className="lg:max-w-lg lg:mx-auto lg:me-0 ms-auto">
              <div className="p-4 sm:p-7 flex flex-col bg-white rounded-2xl shadow-lg dark:bg-neutral-900">
                <div className="text-center">
                  <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                    Book Your Home Visit
                  </h1>
                  <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                    Fill out the form below or call us directly
                  </p>
                </div>

                <div className="mt-5">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Name field */}
                    <div className="mb-5">
                      <label htmlFor="name" className="mb-3 block text-base font-medium text-gray-500">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
                        {...register("name", { required: true })}
                      />
                    </div>

                    {/* Phone number field */}
                    <div className="mb-5">
                      <label htmlFor="phonenumber" className="mb-3 block text-base font-medium text-gray-500">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        placeholder="123456789"
                        className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
                        {...register("phonenumber", { required: true })}
                      />
                    </div>

                    {/* Main city selection */}
                    <div className="mb-5">
                      <label htmlFor="mainCity" className="mb-3 block text-base font-medium text-gray-500">
                        Select Main City
                      </label>
                      <select
                        id="mainCity"
                        className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
                        onChange={handleMainCityChange}
                        value={selectedMainCity}
                      >
                        {mainCities.map((city) => (
                          <option key={city.value} value={city.value}>{city.label}</option>
                        ))}
                      </select>
                    </div>

                    {/* Area selection (only visible if a main city is selected) */}
                    {selectedMainCity && (
                      <div className="mb-5">
                        <label htmlFor="city" className="mb-3 block text-base font-medium text-gray-500">
                          Select Area
                        </label>
                        <select
                          id="city"
                          className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
                          {...register("city", { required: true })}
                          onChange={handleAreaChange}
                        >
                          <option value="">Select an area</option>
                          {selectedMainCity === "mangalore" && 
                            mangaloreCities.map((city) => (
                              <option key={city} value={city}>{city}</option>
                            ))
                          }
                          {selectedMainCity === "bangalore" && 
                            bangaloreCities.map((city) => (
                              <option key={city} value={city}>{city}</option>
                            ))
                          }
                          <option value="other">Other</option>
                        </select>
                      </div>
                    )}

                    {/* Other city input (only visible if "Other" is selected) */}
                    {isOther && (
                      <div className="mb-5">
                        <label htmlFor="otherCity" className="mb-3 block text-base font-medium text-gray-500">
                          Enter Other Area
                        </label>
                        <input
                          type="text"
                          id="otherCity"
                          placeholder="Enter your area"
                          className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
                          value={otherCity}
                          onChange={(e) => setOtherCity(e.target.value)}
                        />
                      </div>
                    )}

                    {/* Submit button */}
                    <div className="flex justify-center">
                      <button className="hover:shadow-form rounded-md bg-purple-500 py-3 px-8 text-base font-semibold text-white outline-none">
                        Book Now
                      </button>
                    </div>
                  </form>

                  {/* Divider */}
                  <div className="my-6 flex items-center">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="flex-shrink mx-4 text-gray-600">or</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                  </div>

                  {/* Direct call option */}
                  <div className="text-center">
                    <p className="mb-2 text-sm text-gray-600">Prefer to book over the phone?</p>
                    <a
                      href={`tel:${phoneNumber}`}
                      className="inline-block hover:shadow-form rounded-md bg-green-500 py-3 px-8 text-base font-semibold text-white outline-none"
                    >
                      Call to Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

