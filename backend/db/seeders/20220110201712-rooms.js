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
          hasWifi: true,
          hasAc:true,
          hasFreeParking: false,
          pricePerNight: "109",
          link: "https://photos.mandarinoriental.com/is/image/MandarinOriental/shanghai-apartment-1bed-harbour-view-living-room?wid=4000&fmt=jpeg,rgb&qlt=63,0&op_sharpen=0&resMode=sharp2&op_usm=0,0,0,0&icc=sRGB%20IEC61966-2.1&iccEmbed=1&printRes=72&fit=wrap&qlt=45,0",
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
          hasWifi: true,
          hasAc:true,
          hasFreeParking: true,
          pricePerNight: "67",
          link: "https://images1.apartments.com/i2/9-Yr_zQSH37g_6c6G41Wl-LT2jAXTHZJftkt-jTa18c/117/excelsior-on-the-park-houston-tx-building-photo.jpg",
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
          hasWifi: true,
          hasAc:true,
          hasFreeParking: true,
          pricePerNight: "50",
          link: "https://i.pinimg.com/originals/0f/ea/bb/0feabb5d6500c13f4c8a10c91acd2d8b.jpg",
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
