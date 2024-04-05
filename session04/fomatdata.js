function formatDate(date) {
    // Lấy ngày, tháng, năm từ đối tượng Date
    const day = date.getDate();
    const month = date.getMonth() + 1; // Tháng bắt đầu từ 0
    const year = date.getFullYear();

    // Đảm bảo ngày và tháng đều có hai chữ số bằng cách thêm '0' phía trước nếu cần
    const formattedDay = (day < 10) ? '0' + day : day;
    const formattedMonth = (month < 10) ? '0' + month : month;

    // Trả về chuỗi đã định dạng
    return `${formattedDay}/${formattedMonth}/${year}`;
}
export default formatDate;