const DishesModel= require("../Model/dishesModel");
 const getDishes = async(req,res) =>{
  const results= await DishesModel.find();
  return res.status(200).send(results);
 }

module.exports= getDishes;
//  const getProducts = (req, res) => {
//   res.send([
//     {
//       id: 1,
//       itemId: "dal",
//       name: "Dal Makhni",
//       imgSrc:
//         "https://recipes.timesofindia.com/thumb/53097626.cms?width=1200&height=900",
//         price: "₹325"
//     },
//     {
//       id: 2,
//       itemId: "chicken",
//       name: "Tandoori Chicken",
//       imgSrc:
//         "https://pipingpotcurry.com/wp-content/uploads/2022/04/Tandoori-Chicken-Wings-Masala-Indian-Recipe-Piping-Pot-Curry.jpg",
//         price:"₹475"
//       },
//     {
//       id: 3,
//       itemId: "thali",
//       name: "Special Veg Thali",
//       imgSrc:
//         "https://eastindianrecipes.net/wp-content/uploads/2022/09/How-to-Make-North-Indian-Thali-Vegetarian-7.jpg",
//         price:"₹250"
//       },
//     {
//       id: 4,
//       itemId: "chaap",
//       name: "Soya Chaap",
//       imgSrc:
//         "https://www.funfoodfrolic.com/wp-content/uploads/2022/08/Soya-Chaap-1.jpg",
//         price:"₹150"
//     },
//     {
//       id: 5,
//       itemId: "chaap",
//       name: "Malai Chaap",
//       imgSrc:
//         "https://www.temptingtreat.com/wp-content/uploads/2022/02/DSC_1130-copy.jpg",
//         price:"₹220"
//     },
//     {
//       id: 6,
//       itemId: "paneer",
//       name: "Kadhai Paneer",
//       imgSrc:
//         "https://www.spiceupthecurry.com/wp-content/uploads/2021/02/kadai-paneer-2.jpg",
//         price:"₹275"
//     },
//         {
//           id: 7,
//           itemId: "paneer",
//           name: "Paneer Butter Masala",
//           imgSrc:
//             "https://www.cubesnjuliennes.com/wp-content/uploads/2019/11/Paneer-Butter-Masala-1.jpg",
//             price:"₹285"
//         },
//         {
//           id: 8,
//           itemId: "paneer",
//           name: "Paneer Do Pyaza",
//           imgSrc:
//             "https://pipingpotcurry.com/wp-content/uploads/2019/09/Paneer-jalfrezi-Piping-Pot-Curry-2-1040x1536.jpg",
//             price:"₹250"
//           },
//         {
//           id: 9,
//           itemId: "dal",
//           name: "Dal Tadka",
//           imgSrc:
//             "https://pipingpotcurry.com/wp-content/uploads/2017/03/Dal-Tadka-Instant-Pot-Pressure-Cooker-3.jpg",
//             price:"₹275"
//           },
//         {
//           id: 10,
//           itemId: "chicken",
//           name: "Chicken Rara",
//           imgSrc:
//             "https://media-cdn.tripadvisor.com/media/photo-s/14/a1/7f/34/rara-chicken.jpg",
//             price:"₹425"
//           },
//         {
//           id: 11,
//           itemId: "thali",
//           name: "Non Veg Thali",
//           imgSrc:
//             "https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2017/10/07/Pictures/_df6cfee8-ab4b-11e7-8fa9-3a95f17ae4d1.jpg",
//             price:"₹325"
//           },
//         {
//           id: 12,
//           itemId: "friedrice",
//           name: "Fried Rice",
//           imgSrc:
//             "https://img.freepik.com/free-photo/american-shrimp-fried-rice-served-with-chili-fish-sauce-thai-food_1150-26576.jpg?w=900&t=st=1697038347~exp=1697038947~hmac=bee8a1202df7888ed0b10f7088d6ed094d4539680bb6e759594923ff2f463b65",
//             price:"₹150"
//           },
//         {
//             id: 13,
//             itemId: "bread",
//             name: "Tawa Roti",
//             imgSrc:
//               "https://thumbs.dreamstime.com/z/indian-bread-roti-made-whole-wheat-flour-refind-added-yeast-tawa-dough-190429504.jpg?w=768",
//               price:"₹8"
//             },
//           {
//             id: 14,
//             itemId: "bread",
//             name: "Butter Roti",
//             imgSrc:
//               "https://www.vkrusa.com/wp-content/uploads/2020/04/Tandoori-Butter-Roti.jpg",
//               price:"₹10"
//           },
//           {
//             id: 15,
//             itemId: "bread",
//             name: "Kulcha",
//             imgSrc:
//               "https://1.bp.blogspot.com/-z0mlXh3oM2k/X1rUrA9WZTI/AAAAAAAAR4Y/C2nsztIcWXcQUtBdlCfQVpcNzl_uSxAmQCLcBGAsYHQ/s1000/Chole%2BKulche.webp",
//               price:"₹25"
//             },
//   ]);
// };

