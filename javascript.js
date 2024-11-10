"use strict";
// Khai báo sử dụng strict mode để xem xét nghiêm ngặt hơn quy tắc lập trình và tránh những lỗi thường gặp
//Call elemnt
const submit = document.querySelector(".button-submit");
// Lấy ra phần tử button có class "button-submit"
const ul = document.querySelector(".info");
// Lấy ra phần tử ul có class "info"
const email = document.querySelector(".email");
// Lấy ra phần tử input có class "email"
const form = document.getElementById("emailForm");
// Lấy ra form có id "emailForm"
const viewMore = document.querySelectorAll(".view-more");
// Lấy ra tất cả các phần tử có class "view-more"
const content1 = document.querySelectorAll(".content1");
// Lấy ra tất cả các phần tử có class "content1"
const content2 = document.querySelector(".content2");
// Lấy ra phần tử có class "content2"
const content3 = document.querySelectorAll(".content3");
// Lấy ra tất cả các phần tử có class "content3"
const job1 = document.querySelectorAll("#container-information-job1");
// Lấy ra tất cả các phần tử có id "container-information-job1"
const job2 = document.querySelectorAll("#container-information-job2");
// Lấy ra tất cả các phần tử có id "container-information-job2"
const viewLess = document.querySelectorAll("#view-less");
// Lấy ra tất cả các phần tử có id "view-less"

const addHidden = function (element) {
  // Hàm để thêm class "hidden" vào một phần tử
  element.classList.add("hidden");
};
const removeHidden = function (element) {
  // Hàm để loại bỏ class "hidden" khỏi một phần tử
  element.classList.remove("hidden");
};
const body = document.querySelector("body");
// Lấy ra phần tử body trong trang web
//Starting code

form.addEventListener("submit", function (event) {
  // Thêm sự kiện "submit" vào form
  // Ngăn chặn hành vi mặc định của form
  event.preventDefault();

  //Validator email (có thể tham khảo phần kiến thức js để thấy 1 cách khác validator email hay hơn thay vì dùng type)
  var contentOfEmail = email.value; // Lấy nội dung của input "email"
  if (contentOfEmail) {
    addHidden(form); // Thêm class "hidden" vào for
    removeHidden(ul); // Loại bỏ class "hidden" khỏi ul
    img_navbar.src = "images/avatar.jpg"; // Thay đổi src của ảnh img_navbar
  } else {
    alert(`PLease enter your email`); // Hiển thị thông báo nếu không nhập địa chỉ email
  }
  console.log(contentOfEmail); // Log nội dung email ra console
});

// View More
const button_ViewMore = function (i) {
  viewMore[i].addEventListener("click", function () {
    if (i < 3) {
      // Xử lý sự kiện khi click vào "view more"
      // Logic xử lý để mở rộng thông tin công việc
      // Xử lý sự kiện khi click vào "view less"
      // Logic xử lý để rút gọn thông tin công việc
      //Media querry
      // if(body.)

      job1[i].classList.remove("container-view");
      job1[i].classList.add("container1");
      // content1[i].classList.remove("hidden");
      removeHidden(content1[i]);
      job1[i].classList.add("height1");
    } else {
      job2[i - 3].classList.remove("container-view");
      job2[i - 3].classList.add("container2");
      job2[i - 3].classList.add("height2");
      if (i === 3) {
        // content2.classList.remove("hidden");
        removeHidden(content2);
      } else {
        removeHidden(content3[i - 4]);
      }
    }

    //VIEW LESS
    // viewLess[i].classList.remove("hidden");
    removeHidden(viewLess[i]);
    viewLess[i].addEventListener("click", function () {
      if (i < 3) {
        job1[i].classList.add("container-view");
        job1[i].classList.remove("container1");
        addHidden(content1[i]);
        job1[i].classList.remove("height1");
      } else {
        job2[i - 3].classList.add("container-view");
        job2[i - 3].classList.remove("container2");
        job2[i - 3].classList.remove("height2");
        if (i === 3) {
          addHidden(content2);
        } else {
          addHidden(content3[i - 4]);
        }
      }
      addHidden(viewLess[i]);
    });
  });
};
for (let i = 0; i < viewMore.length; ++i) {
  button_ViewMore(i); // Gắn sự kiện click vào "view more" cho từng phần tử
}

// Advanced
alert("You can click on image-project to come to Project Chapter😁");
// Đoạn mã trên sẽ hiển thị một thông báo khi người dùng có thể click vào hình ảnh để đến Chương về Dự án
