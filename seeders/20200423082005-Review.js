'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [
      {
        CabangId: 1,
        UserId: 3,
        review: "Makanannya enak",
        rating: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        CabangId: 3,
        UserId: 1,
        review: "Pelayanan kurang ramah",
        rating: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        CabangId: 7,
        UserId: 2,
        review: "Tempatnya jorok padahal mahal",
        rating: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        CabangId: 8,
        UserId: 5,
        review: "Banyak pilihan menu makanan sehat",
        rating: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        CabangId: 11,
        UserId: 5,
        review: "Cukup terjangkau harganya untuk mahasiswa",
        rating: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        CabangId: 15,
        UserId: 3,
        review: "Parking sempit",
        rating: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        CabangId: 17,
        UserId: 4,
        review: "Kamar mandi hanya ada satu padahal tempatnya luas dan pengunjungnya cenderung banyak",
        rating: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        CabangId: 19,
        UserId: 2,
        review: "Minum gratis sepuasnya disini. Sayang gak boleh bawa botol sendiri :)",
        rating: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        CabangId: 22,
        UserId: 4,
        review: "Tempatnya romantis. Cocok untuk berduaan sama pacar",
        rating: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        CabangId: 24,
        UserId: 1,
        review: "Tempatnya cukup cozy dan sejuk",
        rating: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {})
  }
};