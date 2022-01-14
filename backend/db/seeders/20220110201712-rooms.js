'use strict';

const { DataTypes } = require("sequelize");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Rooms",
      [
        {
          userId: 1,
          name: "Luxury 1 bedroom. Near Downtown!" ,
          description: "Welcome to your en-suite prive room just blocks away from Houston's most popular attractions,such as the Toyota Center, Minute Maid Park, BBVA Stadium, Discovery Green, GRB Convention Center and more.",
          address:"17866 Pecan Drive Houston",
          city: "Houston",
          state: "Texas",
          zipcode: "77094",
          numberRooms: 1,
          maxGuest:3,
          pricePerNight: "109",
          link: "https://i.ibb.co/XxwdRYN/images.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          name: "3B/3B Midtown Houston. Great Location" ,
          description: "Budget friendly second floor 1 Bedroom unit with parking. Located in Houston’s Midtown. Complimentary TV with Roku: Netflix, Hulu, Prime Video, HBO. Washer/Dryer available. Walking distance to restaurants, pubs, coffee shops, supermarkets, parks, pharmacies, liquor stores, banks and Metro rail. 7 minutes to Medical Center, Museum district, Rice university, NRG park, 5 minutes to Downtown, Discovery Park, Convention Center, Downtown University of Houston, Court houses, Opera house John's Hall",
          address:"21165 Snow Hill Lane",
          city: "Houston",
          state: "Texas",
          zipcode: "77094",
          numberRooms: 3,
          maxGuest:8,
          pricePerNight: "67",
          link: "https://i.ibb.co/xmHL9bL/gallery-inspired-ny-apartment-with-artistic-and-fun-flair-3.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          name: "The Tiny Green House" ,
          description: "Property is a 100% fully rehabbed 1940 colonial style homestead. We made every effort to keep or reuse all the materials we could, to minimize the waste that ends up in the landfill. We also used only most modern new construction materials and techniques to make these units super efficient with the most minimal long-term carbon footprint available.",
          address:"56953 Space City Street",
          city: "Houston",
          state: "Texas",
          zipcode: "77094",
          numberRooms: 1,
          maxGuest:4,
          pricePerNight: "50",
          link: "https://i.ibb.co/LpfnSv6/Florham-Park.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          name: "Super Cozy TownHome. Pet friendly and has a pool." ,
          description: "Front patio with barbecue. Supplied with beach towels, beach chairs, boogie boards & sand toys for the kids. Family friendly - high chair, pack & play, and stroller supplied. Features garage for parking and washer/dryer. Even has window A/Cs (a rare luxury in this area). 2 miles from Sea World.",
          address:"45689 Hollywood Drive",
          city: "Los Angelos",
          state: "California",
          zipcode: "88641",
          numberRooms: 3,
          maxGuest:8,
          pricePerNight: "91",
          link: "https://i.ibb.co/wLv3twF/house-4.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          name: "Entire Cabin Next to Big Bear Lake" ,
          description: "From romantic getaways to fun family outings, Milo Bear Cabin is the perfect Big Bear retreat. Stargazing & sunset views from the spa with close proximity to the Village & Lake. Pets stay for free & our deck as well as backyard are fenced in for dogs!",
          address:"16593 Carpenter Lane",
          city: "San Francisco",
          state: "California",
          zipcode: "65921",
          numberRooms: 4,
          maxGuest:10,
          pricePerNight: "351",
          link: "https://i.ibb.co/YyRp2HQ/house-5.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          name: "New Condo Right Next to Downtown!! City View From Balcony" ,
          description: "Welcome to New York City! Our two bedroom 1.5 bathroom condo is located where the Entertainment District, waterfront, and Financial District merge. It is just stepping away from the city's most popular attractions and destinations. It features a stunning city view. The kitchen is fully equipped, the bedrooms are comfortable, the living room is cozy, and the balcony is spacious.",
          address:"56777 Angel Falls Drive",
          city: "New York",
          state: "New York",
          zipcode: "65866",
          numberRooms: 3,
          maxGuest:7,
          pricePerNight: "316",
          link: "https://i.ibb.co/FbG2FkF/house-6.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          name: "Entire Serviced Apartment. Next to the Beach" ,
          description: "Welcome friends! Come relax in your private beach retreat on Crescent Beach, where white sand and beautiful sunsets span the coast. Coquina is located just 13 mi. from St. Augustine, bustling with family friendly cuisine, activities, and historical sites. Suitable for any beach goer; Coquina features private beach access where guests enjoy amazing views and uncrowded beaches for family fun! ",
          address:"56777 Beach Island Way",
          city: "Orlando ",
          state: "Florida",
          zipcode: "12128",
          numberRooms: 5,
          maxGuest:13,
          pricePerNight: "400",
          link: "https://i.ibb.co/7QQh0Z2/house-7.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {

   return queryInterface.bulkDelete('Rooms', null, {});
  }
};
