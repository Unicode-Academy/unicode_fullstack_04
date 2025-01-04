export const a = 10;
function getHome() {
  console.log("Ahihi");
}

export const something = () => {
  console.log("bhihi");
};

export default getHome; //export default (Chỉ có 1)
// export { a }; //export named

//Lưu ý: Với kiểu export default viết tắt chỉ tác dụng với decration function và class
