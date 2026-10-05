const bookingReservation = {
  bookingId: "BK-2024-8891",
  guestName: "Trần Minh Quang",
  roomType: "Deluxe Ocean View",
  roomPrice: 1500000,
  checkInHour: 9
};

const priceKey = "roomPrice";

// Lấy giá phòng bằng Bracket Notation
const basePrice = bookingReservation[priceKey];

let surcharge = 0;

// Nếu nhận phòng trước 12 giờ thì phụ thu 30%
if (bookingReservation.checkInHour < 12) {
  surcharge = basePrice * 0.3;
  bookingReservation.surcharge = surcharge;
}

// Tính tổng tiền
const totalAmount = basePrice + surcharge;
bookingReservation.totalAmount = totalAmount;

// Hiển thị thông tin
console.log("Mã đặt phòng:", bookingReservation.bookingId);
console.log("Khách hàng:", bookingReservation.guestName);
console.log("Loại phòng:", bookingReservation.roomType);
console.log("Giá phòng:", basePrice);
console.log("Phụ thu nhận phòng sớm:", bookingReservation.surcharge);
console.log("Tổng số tiền thanh toán:", bookingReservation.totalAmount);