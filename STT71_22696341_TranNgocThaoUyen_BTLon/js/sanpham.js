// Function to format the current date
function getCurrentDate() {
    var today = new Date();
    var weekday = today.toLocaleDateString('vi-VN', { weekday: 'long' });
    var day = today.getDate();
    var month = today.toLocaleDateString('vi-VN', { month: 'long' });
    var year = today.getFullYear();

    return weekday + ', ' + day + ' ' + month + ' ' + year;
}

// Update date on page load
window.onload = function() {
    var currentDate = getCurrentDate();
    document.getElementById("dateNow").textContent = currentDate;
};




document.addEventListener('DOMContentLoaded', function() {
    var countdownElement = document.getElementById('countdown');
    var progressBar = document.querySelector('.progress-bar');

    // Lấy thời gian hiện tại
    var currentTime = new Date();

    // Thiết lập thời gian bắt đầu đếm ngược đến giờ mới
    var targetTime = new Date(currentTime);
    targetTime.setHours(currentTime.getHours() + 1, 0, 0, 0); // Thiết lập giờ mới là giờ tiếp theo, phút và giây là 0

    function updateCountdown() {
        var now = new Date();
        var timeRemaining = targetTime - now;

        if (timeRemaining <= 0) {
            progressBar.style.width = "100%";
        } else {
            // Tính toán số giờ, phút, giây còn lại
            var hours = Math.floor(timeRemaining / (1000 * 60 * 60));
            var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            // Hiển thị đồng hồ đếm ngược
            // countdownElement.textContent = `Thời gian: ${hours} giờ ${minutes} phút ${seconds} giây` +`<i class="fa-solid fa-bolt"></i>`;
            countdownElement.innerHTML = `<i class="fas fa-bolt"></i> Thời gian: ${hours} giờ ${minutes} phút ${seconds} giây `;


            // Tính toán % tiến độ
            var progress = (timeRemaining / (60 * 60 * 1000)) * 100; // Tính theo giờ
            progressBar.style.width = `${100 - progress}%`;
        }
    }

    // Gọi hàm updateCountdown ban đầu
    updateCountdown();

    // Cập nhật đồng hồ đếm ngược mỗi giây
    setInterval(updateCountdown, 1000);
});


var itemsPerPage = 9;
var productList = [

    // Chăm sóc da mặt
    {
        name: "Sữa rửa mặt Cerave",
        image: "../images/chamsocdamat/srm_cerave.jpg",
        category: "Chăm sóc da mặt",
        description: "Làm sạch và loại bỏ dầu mà không phá vỡ hàng rào độ ẩm của da",
        price: 337000,
        get discountPrice() {
            return this.price; // Trả về giá gốc mà không áp dụng giảm giá
        }
    },
    {
        name: "Sữa rửa mặt Hada Labo",
        image: "../images/chamsocdamat/srm_hada_labo.jpg",
        category: "Chăm sóc da mặt",
        description: " Làm sạch hiệu quả giúp rửa sạch bị bẩn, giúp làn da thông thoáng, sạch và mềm mịn nhưng không bị khô.",
        price: 93000,
        get discountPrice() {
            return this.price; // Trả về giá gốc mà không áp dụng giảm giá
        }
    },
    {
        name: "Sữa rửa mặt Cetaphil",
        image: "../images/chamsocdamat/srm_cetaphil.jpg",
        category: "Chăm sóc da mặt",
        description: "Làm sạch sâu, loại bỏ hoàn toàn bụi bẩn, và tạp chất trên da một cách dịu nhẹ nhưng vẫn duy trì độ ẩm tự nhiên để bảo vệ da khỏi tình trạng khô ráp.",
        price: 279000,
        get discountPrice() {
            return this.price; // Trả về giá gốc mà không áp dụng giảm giá
        }
    },
    {
        name: " Tẩy trang Ganier",
        image: "../images/chamsocdamat/taytrang_garnier.jpg",
        category: "Chăm sóc da mặt",
        description: "Lấy đi bụi bẩn sâu bên trong lỗ chân lông theo cơ chế hoạt động của nam châm.",
        price: 159000,
        get discountPrice() {
            return this.price; // Trả về giá gốc mà không áp dụng giảm giá
        }
    },
    {
        name: "Tẩy trang Bioderma",
        image: "../images/chamsocdamat/taytrang_bioderma.jpg",
        category: "Chăm sóc da mặt",
        description: " Làm sạch sâu da và loại bỏ lớp trang điểm nhanh chóng mà không cần rửa lại bằng nước.",
        price: 350000,
        get discountPrice() {
            return this.price; // Trả về giá gốc mà không áp dụng giảm giá
        }
    },

    // Chăm sóc cơ thể
    {
        name: "Sữa dưỡng thể Hatomugi",
        image: "../images/chamsoccothe/Hatomugi.jpg",
        category: " Chăm sóc cơ thể",
        description: "Chiết xuất từ hạt ý dĩ giúp cung cấp dưỡng chất và độ ẩm cho da, mang đến làn da tươi sáng, mịn màng, đồng thời ngăn ngừa tình trạng khô da và nhăn da.",
        price: 80000,
        get discountPrice() {
            return this.price; // Trả về giá gốc mà không áp dụng giảm giá
        }
    },
    {
        name: "Chống nắng Biore",
        image: "../images/chamsoccothe/Biore.jpg",
        category: " Chăm sóc cơ thể",
        description: "Với kết cấu mỏng nhẹ của kem chống nắng, sản phẩm giúp da khô thoáng không gây bí bách lỗ chân lông.",
        price: 110000,
        get discountPrice() {
            return this.price; // Trả về giá gốc mà không áp dụng giảm giá
        }
    },

    {
        name: "Sữa tắm DrSoftly",
        image: "../images/chamsoccothe/drsoftly.jpg",
        category: " Chăm sóc cơ thể",
        description: "Dạng gel trong, với các thành phần được chiêt xuất từ thiên nhiên, giúp tẩy sạch bụi bẩn trên da nhưng vẫn nuôi dưỡng da mềm mịn.",
        price: 135000,
        get discountPrice() {
            return this.price; // Trả về giá gốc mà không áp dụng giảm giá
        }
    },

    // Chăm sóc tóc
    {
        name: "Mặt nạ tóc Avocat",
        image: "../images/chamsoctoc/Avocat.jpg",
        category: "Chăm sóc tóc",
        description: " Chiết xuất dừa và chiết xuất bơ dành cho từng loại tóc khác nhau giúp tóc chắc khỏe và suôn mượt.",
        price: 85000,
        get discountPrice() {
            return this.price; // Trả về giá gốc mà không áp dụng giảm giá
        }
    },
    {
        name: "Dầu dưỡng tóc Loreal",
        image: "../images/chamsoctoc/loreal.jpg",
        category: "Chăm sóc tóc",
        description: " nuôi dưỡng tóc từ sâu bên trong, tóc sẽ chắc khỏe hơn, bồng bềnh và dễ vào nếp.",
        price: 250000,
        get discountPrice() {
            return this.price; // Trả về giá gốc mà không áp dụng giảm giá
        }
    },
    {
        name: "Dầu gội Treseme",
        image: "../images/chamsoctoc/Treseme.jpg",
        category: "Chăm sóc tóc",
        description: " Phù hợp cho mái tóc xơ rối không thể vào nếp và cả tóc nhuộm.",
        price: 230000,
        get discountPrice() {
            return this.price; // Trả về giá gốc mà không áp dụng giảm giá
        }
    },
    {
        name: "Dầu gội Tràm Trà",
        image: "../images/chamsoctoc/tramtra.jpg",
        category: "Chăm sóc tóc",
        description: " Chiết xuất từ tinh dầu tràm trà cô đặc, có tác dụng hỗ trợ giảm tình trạng dầu nhờn trên da đầu và nấm ngứa hiệu quả.",
        price: 185000,
        get discountPrice() {
            return this.price; // Trả về giá gốc mà không áp dụng giảm giá
        }
    },

    // Trang điểm
    {
        name: "Cushion Innisfree",
        image: "../images/trangdiem/innisfree.jpg",
        category: "Trang điểm",
        description: "Với chiết xuất từ bạc hà và khoáng chất tự nhiên Jeju, kiềm dầu đồng thời tạo độ che phủ tự nhiên cho lớp nền khô thoáng.",
        price: 135000,
        get discountPrice() {
            return this.price; // Trả về giá gốc mà không áp dụng giảm giá
        }
    },
    {
        name: "Cushion Glow",
        image: "../images/trangdiem/glow.jpg",
        category: "Trang điểm",
        description: "Với chỉ số chống nắng, bạn có thể sử dụng như một lớp chống nắng hoàn hảo khi kết hợp giữa che phủ và bảo vệ da.",
        price: 319000,
        get discountPrice() {
            return this.price; // Trả về giá gốc mà không áp dụng giảm giá
        }
    },
    {
        name: "Mascara zeesea",
        image: "../images/trangdiem/zeesea.jpg",
        category: "Trang điểm",
        description: "Mascara chống thấm nước uper, giải quyết vấn đề lem trang điểm mắt, không thấm nước, không thấm mồ hôi, không chống rách.",
        price: 79000,
        get discountPrice() {
            return this.price; // Trả về giá gốc mà không áp dụng giảm giá
        }
    },
    {
        name: "Mascara peripera",
        image: "../images/trangdiem/peri.jpg",
        category: "Trang điểm",
        description: "Mascara tách và làm dài từng sợi mi, tạo hiệu ứng toàn thân cho người hâm mộ. Nó giống như được nối mi, không có phần mở rộng.",
        price: 188000,
        get discountPrice() {
            return this.price; // Trả về giá gốc mà không áp dụng giảm giá
        }
    },
    {
        name: "Son tint Romand",
        image: "../images/trangdiem/Romand.jpg",
        category: "Trang điểm",
        description: " Bảng màu đa dạng từ màu nude nhẹ nhàng đến những tông đỏ gạch trầm cùng chất son sáng bóng, trong trẻo tựa lớp đường kẹo hồ lô.",
        price: 179000,
        get discountPrice() {
            return this.price; // Trả về giá gốc mà không áp dụng giảm giá
        }
    },
    {
        name: "Son Black Rouge",
        image: "../images/trangdiem/black_rouge.jpg",
        category: "Trang điểm",
        description: " Đầu cọ vát chép với khoảng không giữa đầu cọ giúp kiểm soát lượng son lấy ra, đường di cọ lướt em trên môi, chất son mướt mịn.",
        price: 183000,
        get discountPrice() {
            return this.price; // Trả về giá gốc mà không áp dụng giảm giá
        }
    },


    // Nước Hoa
    {
        name: "Nước hoa Skinlax",
        image: "../images/nuochoa/Skinlax.jpg",
        category: "Nước Hoa",
        description: "Lời gọi mời từ hoa thơm, trái chín mang lại cảm giác trẻ trung, ngọt ngào cho người sử dụng.",
        price: 200000,
        get discountPrice() {
            return this.price; // Trả về giá gốc mà không áp dụng giảm giá
        }
    },
    {
        name: "Nước hoa Verites",
        image: "../images/nuochoa/verites.jpg",
        category: "Nước Hoa",
        description: "Lấy cảm hứng từ tiết trời trong lành sau những cơn mưa mùa hè, nước hoa cho nữ Verites HER Summer mở đầu với hương thơm đầy sự ngọt của các loại quả chín mọng.",
        price: 216000,
        get discountPrice() {
            return this.price; // Trả về giá gốc mà không áp dụng giảm giá
        }
    },
    {
        name: "Nước hoa Diane Castel Paris",
        image: "../images/nuochoa/Diane_Castel_Paris.jpg",
        category: "Nước Hoa",
        description: " làm bật lên sự mạnh mẽ và phong trần của các quý ông. Nét đặc trưng của nhóm hương gỗ hổ phách được khắc họa rõ nét nhờ gỗ đàn hương ấm áp và hoắc hương ngọt dịu.",
        price: 432000,
        get discountPrice() {
            return this.price; // Trả về giá gốc mà không áp dụng giảm giá
        }
    },
];



//hien thi san pham
function displayProducts(productList, categoryName) {
    var itemsPerPage = 12;
    var currentPage = 1;

    // Lọc danh sách sản phẩm theo danh mục nếu categoryName không phải là 'all'
    var filteredProducts = categoryName === 'all' ? productList : productList.filter(function(product) {
        return product.category === categoryName;
    });

    // Function to render products based on pagination
    function renderProducts(page) {
        $('#productList').empty();

        var startIndex = (page - 1) * itemsPerPage;
        var endIndex = Math.min(startIndex + itemsPerPage, filteredProducts.length);
        var productListHtml = '';

        for (var i = startIndex; i < endIndex; i++) {
            var product = filteredProducts[i];
            var hasDiscount = product.discountPercent > 0;

            var productHtml = `
                <div class="col-md-4 col-lg-3 col-6 my-1 px-1">
                    <div class="product-card" data-product='${JSON.stringify(product)}'>
                        <img src="${product.image}" alt="${product.name}" class="product-image img-fluid">
                        <div class="product-content d-flex flex-column">
                            <div class="product-title">${product.name}</div>
                            <div class="product-description">${product.description}</div>
                            <div class="product-price-container">
                                ${hasDiscount ? `<div class="product-discount">${product.price.toLocaleString()}₫</div>` : ''}
                                <div class="product-price">${product.discountPrice.toLocaleString()}₫</div>
                            </div>
                        </div>
                        <div class="btn-discount ${hasDiscount ? '' : 'd-none'}">${hasDiscount ? `-${product.discountPercent.toLocaleString()}%` : ''}</div>
                    </div>
                </div>
            `;

            productListHtml += productHtml;
        }

        $('#productList').html(productListHtml);

        // Create pagination
        var totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
        $('#pagination').empty();
        for (var i = 1; i <= totalPages; i++) {
            var activeClass = i === currentPage ? 'active' : '';
            $('#pagination').append(`
                <li class="page-item ${activeClass}"><a class="page-link" href="#" data-page="${i}">${i}</a></li>
            `);
        }
    }

    // Display initial products
    renderProducts(currentPage);

    // Handle pagination click
    $(document).on('click', '#pagination .page-link', function (e) {
        e.preventDefault();
        currentPage = $(this).data('page');
        renderProducts(currentPage);
        // Scroll to top of the page
        $('html, body').animate({ scrollTop: $('#top').offset().top }, 'slow');
    });

}





// Khai báo hàm khi tài liệu đã sẵn sàng hiển thị modal
$(document).ready(function () {
    // Sự kiện click vào .product-card
    $(document).on('click', '.product-card', function () {
        var product = $(this).data('product');
        showModal(product);
    });

    function showModal(product) {
        $('#productModalLabel').text(product.name);

        var modalContent = `
            <div class="row">
                <div class="col-md-6 col-lg-4 col-12">
                    <div class="zoomImg p-4">
                        <img src="${product.image}" alt="${product.name}" class="img-fluid">
                    </div>
                </div>
                <div class="col-md-6 col-lg-8 col-12">
                    <p><strong>Loại sản phẩm:</strong> ${product.category}</p>
                    <p><strong>Mô tả:</strong> ${product.description}</p>
                
        `;

        console.log(product.discountPercent + 'và' + product.discountPrice);

        // Kiểm tra và hiển thị chi tiết sản phẩm nếu có
        if (product.details && product.details.length > 0) {
            modalContent += `<p><strong>Chi tiết sản phẩm:</strong></p>`;
            modalContent += `<ul style="list-style:none">`;
            product.details.forEach(detail => {
                modalContent += `<li>${detail}</li>`;
            });
            modalContent += `</ul>`;
        }


        modalContent += `
            <div class="input-group mt-3">
                <span class="input-group-btn">
                    <button type="button" class="btn btn-outline-secondary btn-minus">-</button>
                </span>
                <input type="number" class="form-control text-center product-quantity" value="1">
                <span class="input-group-btn">
                    <button type="button" class="btn btn-outline-secondary btn-plus">+</button>
                </span>
            </div>
            <div class="d-flex flex-column flex-md-row  justify-content-between">
            <button class="btn btn-info  btn-add-to-cart m-2 w-100" data-name="${product.name}" data-price="${product.discountPrice}"> <i class="fa-solid fa-cart-plus text-light"></i> Thêm vào giỏ hàng</button>
            <button class="btn btn-warning  btn-buy-now m-2 w-100" data-name="${product.name}" data-price="${product.discountPrice}">Mua ngay</button>
            </div>
        </div>
        </div>`;

        $('#productModalBody').html(modalContent);
        $('#productModal').modal('show');


        // xử lý các nút bấm
        // Xử lý sự kiện click nút thêm số lượng
        $(document).on('click', '.btn-plus', function () {
            var input = $(this).closest('.input-group').find('input.product-quantity');
            var value = parseInt(input.val());
            input.val(value + 1);
        });

        // Xử lý sự kiện click nút trừ số lượng
        $(document).on('click', '.btn-minus', function () {
            var input = $(this).closest('.input-group').find('input.product-quantity');
            var value = parseInt(input.val());
            if (value > 1) {
                input.val(value - 1);
            }
        });





        //demo gpt

        function displayAddToCartAlert(name, discountPrice, quantity) {
            var alertHtml = `
            <div class="alert alert-success alert-dismissible fade show" role="alert">
                <strong>${quantity} x ${name}</strong> đã được thêm vào giỏ hàng với đơn giá ${discountPrice.toLocaleString()} VND.
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        `;

            // Hiển thị thông báo trong phần tử có id là 'alertContainer'
            $('#alertContainer').html(alertHtml);
        }



        // Xử lý sự kiện thêm sản phẩm vào giỏ hàng trong modal
        $(document).on('click', '#productModal .btn-add-to-cart', function () {
            // Lấy thông tin sản phẩm từ thuộc tính data-product trong modal

            // Lấy thông tin sản phẩm
            var name = product.name;
            var price = product.price; // Sử dụng giá khuyến mãi
            var discountPrice = product.discountPrice;
            var discountPercent = product.discountPercent;
            var image = product.image;
            var quantity = parseInt($('#productModal .product-quantity').val());

            // Thêm sản phẩm vào giỏ hàng
            addToCart(name, price, discountPrice, discountPercent, image, quantity);

            // Hiển thị thông báo khi sản phẩm được thêm vào giỏ hàng
            displayAddToCartAlert(name, discountPrice, quantity);

            // Cập nhật dropdown menu giỏ hàng
            updateCartDropdown();
        });


        // Function to add product to cart
        function addToCart(name, price, discountPrice, discountPercent, image, quantity) {
            var product = {
                name: name,
                price: price,
                discountPrice: discountPrice,
                discountPercent: discountPercent,
                image: image,
                quantity: quantity
            };

            // Lấy giỏ hàng từ localStorage
            var cartItems = JSON.parse(localStorage.getItem('cart')) || [];

            // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
            var existingProductIndex = cartItems.findIndex(item => item.name === name);
            if (existingProductIndex !== -1) {
                // Nếu sản phẩm đã tồn tại trong giỏ hàng, chỉ cập nhật số lượng
                cartItems[existingProductIndex].quantity += quantity;
            } else {
                // Nếu sản phẩm chưa tồn tại trong giỏ hàng, thêm vào giỏ hàng
                cartItems.push(product);
            }

            // Lưu giỏ hàng vào localStorage
            localStorage.setItem('cart', JSON.stringify(cartItems));

            // Cập nhật số lượng sản phẩm trong biểu tượng giỏ hàng
            updateCartIcon(cartItems.length);

            // Log để kiểm tra
            console.log('Đã thêm sản phẩm vào giỏ hàng:', product);
        }







        // Handle "Mua ngay" button click
        $(document).on('click', '.btn-buy-now', function () {
            // Lấy thông tin sản phẩm
            var name = product.name;
            var price = product.price; // Sử dụng giá khuyến mãi
            var discountPrice = product.discountPrice;
            var discountPercent = product.discountPercent;
            var image = product.image;
            var quantity = parseInt($('#productModal .product-quantity').val());

            // Thêm sản phẩm vào giỏ hàng
            addToCart(name, price, discountPrice, discountPercent, image, quantity);
            displayCheckoutRedirectAlert(name, discountPrice, quantity);
            updateCartIcon(cartItems.length);

            // Log để kiểm tra
            console.log('Đã thêm sản phẩm vào giỏ hàng:', product);
            console.log('Đang mua sản phẩm và chuyển hướng sang thanh toán');

        });

        // Hàm hiển thị thông báo khi mua ngay và chuyển hướng sang trang thanh toán
        function displayCheckoutRedirectAlert(name, discountPrice, quantity) {
            var total = discountPrice * quantity; // Tính tổng giá
            var alertHtml = `
                <div class="alert alert-primary alert-dismissible fade show" role="alert">
                    <strong>${quantity} x ${name}</strong> đã được mua với giá ${discountPrice.toLocaleString()} VND.
                    <br>
                    <strong>Total: ${total.toLocaleString()} VND</strong>
                    <div class="spinner-border"></div>
                    <p> Đang chuyển hướng sang trang thanh toán sau 3 giây ...</p>
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            `;

           
          
            // Hiển thị thông báo trong phần tử có id là 'alertContainer'
            $('#alertContainer').html(alertHtml);

            // Tự động đóng thông báo sau 10 giây
            setTimeout(function () {
                $('.alert').alert('close');

                // Chuyển hướng người dùng sang trang thanh toán sau 3 giây ...
                window.location.href = '../html/gio-hang.html'; // Thay 'trang-thanh-toan.html' bằng đường dẫn đến trang thanh toán của bạn
            }, 3000); // 3 giây
        }

    }

});








$(document).ready(function () {
    var images = $('.image-container img');
    var currentIndex = 0;

    function showImage(index) {
        images.removeClass('active');
        images.eq(index).addClass('active');
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    // Tự động chuyển ảnh sau mỗi 3 giây
    setInterval(nextImage, 5000);
});
$(document).ready(function () {
    // Lấy dữ liệu thành viên từ localStorage nếu có
    var users = JSON.parse(localStorage.getItem('users')) || [];

    // Hiển thị danh sách thành viên
    function displayMembers() {
      var memberTable = $('#memberList');
      memberTable.empty();
      users.forEach(function(user) {
        var row = $('<tr>');
        row.append('<td>' + user.fullName + '</td>');
        row.append('<td>' + user.username + '</td>');
        row.append('<td>' + user.email + '</td>');
        row.append('<td>' + user.phone + '</td>');
        row.append('<td>' + user.dob + '</td>');
        row.append('<td>' + user.address + '</td>');
        memberTable.append(row);
      });
    }

    displayMembers();

    $('#registerForm').submit(function (e) {
      e.preventDefault();
      if (this.checkValidity()) {
        var formData = $(this).serializeArray();
        var userObject = {};
        $.each(formData, function (i, field) {
          userObject[field.name] = field.value;
        });
        users.push(userObject);
        localStorage.setItem('users', JSON.stringify(users)); // Lưu vào localStorage
        displayMembers(); // Hiển thị lại danh sách thành viên
        alert('Đăng ký thành công!');
        $('#registerForm')[0].reset();
      } else {
        e.stopPropagation();
        $(this).addClass('was-validated');
      }
    });

    $('#loginForm').submit(function (e) {
        e.preventDefault();
        var username = $('#loginUsername').val();
        var password = $('#loginPassword').val();
        var foundUser = users.find(function(user) {
          return user.username === username && user.password === password;
        });
        if (foundUser) {
          alert('Đăng nhập thành công!');
          // Thực hiện các hành động sau khi đăng nhập thành công
        } else {
          alert('Tên đăng nhập hoặc mật khẩu không đúng!');
        }
      });

  });


// Hàm cập nhật dropdown menu giỏ hàng
function updateCartDropdown() {
    // Lấy giỏ hàng từ localStorage
    var cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Lấy phần tử chứa danh sách sản phẩm trong giỏ hàng
    var cartItemsContainer = $('.cart-items-container');

    // Kiểm tra nếu giỏ hàng rỗng
    if (cartItems.length === 0) {
        // Ẩn danh sách sản phẩm trong giỏ hàng và hiển thị thông báo "Chưa có sản phẩm nào trong giỏ hàng"
        cartItemsContainer.hide();
        $('.empty-cart-message').show();
    } else {
        // Hiển thị danh sách sản phẩm trong giỏ hàng và ẩn thông báo
        $('.empty-cart-message').hide();
        cartItemsContainer.empty(); // Xóa nội dung hiện tại của danh sách sản phẩm trong giỏ hàng

        // Duyệt qua từng sản phẩm trong giỏ hàng và hiển thị
        cartItems.forEach(function (item) {
            var productHtml = `
        <div class="dropdown-item">
            <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center">
                    <img src="${item.image}" alt="${item.name}" class="mr-3" style="width: 50px;">
                    <div>
                        <div class="font-weight-bold">${item.name}</div>
                        <div>${item.quantity} x ${item.discountPrice.toLocaleString()} VND</div>
                    </div>
                </div>
                <button class="btn btn-danger btn-sm remove-from-cart" data-name="${item.name}">Xóa</button>
            </div>
        </div>
    `;
            // Thêm sản phẩm vào danh sách sản phẩm trong giỏ hàng
            cartItemsContainer.append(productHtml);
        });
        // Hiển thị danh sách sản phẩm trong giỏ hàng
        cartItemsContainer.show();
    }
    // Cập nhật số lượng sản phẩm trong biểu tượng giỏ hàng
    updateCartIcon(cartItems.length);
}

$(document).ready(function () {
    updateCartDropdown();
});

// Gán sự kiện cho nút "Xóa" bằng cách sử dụng $(document).on()
$(document).on('click', '.remove-from-cart', function () {
    var productName = $(this).data('name');
    removeFromCart(productName);
});

// Hàm loại bỏ sản phẩm khỏi giỏ hàng
function removeFromCart(productName) {
    // Lấy giỏ hàng từ localStorage
    var cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Lọc sản phẩm có tên trùng khớp với tên được chọn để loại bỏ
    var updatedCartItems = cartItems.filter(function (item) {
        return item.name !== productName;
    });

    // Lưu giỏ hàng đã được cập nhật vào localStorage
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));

    // Cập nhật dropdown menu giỏ hàng
    updateCartDropdown();
}

function updateCartIcon(numItems) {
    // Cập nhật số lượng sản phẩm trong biểu tượng giỏ hàng
    $('#cart-count').text(numItems);  // Cập nhật số lượng trong phần tử có id="cart-count"
}

$(document).ready(function () {
    // Trích xuất dữ liệu từ Local Storage
    var cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Lấy phần tử chứa danh sách sản phẩm trong giỏ hàng
    var cartItemsContainer = $('#cart-items-container');

    // Hiển thị danh sách sản phẩm trong giỏ hàng
    if (cartItems.length === 0) {
        cartItemsContainer.html('<p>Giỏ hàng của bạn đang trống.</p>');
    } else {
        cartItemsContainer.empty();
        cartItems.forEach(function (item) {
            // Tính tổng cộng
            var total = item.discountPrice * item.quantity;

            var productHtml = `
                <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${item.image}" alt="${item.name}" class="img-fluid rounded-start">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${item.name}</h5>
                                <p class="product-discount">Giá gốc: ${item.price.toLocaleString()} VND</p>
                            </div>
                            <div class="input-group">
                                <button class="btn btn-minus">-</button>
                                <input type="number" class="form-control product-quantity" value="${item.quantity}" min="1">
                                <button class="btn btn-plus">+</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            `;
            cartItemsContainer.append(productHtml);
        });
    }
});

$(document).ready(function () {
    // Trích xuất dữ liệu từ Local Storage
    var cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Lấy phần tử chứa danh sách sản phẩm trong giỏ hàng
    var cartItemsContainer = $('#cart-items-container');

    // Hàm cập nhật lại giỏ hàng vào Local Storage
    function updateCartItems() {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }

    // Hàm hiển thị lại bảng hóa đơn
    function renderBillTable() {
        var billTable = $('#bill-table');
        if (cartItems.length === 0) {
            billTable.html('<p>Không có sản phẩm nào trong giỏ hàng.</p>');
        } else {
            // Tạo lại header cho bảng hóa đơn
            var tableHtml = `
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">STT</th>
                            <th scope="col">Tên sản phẩm</th>
                            <th scope="col">Giá sản phẩm (VND)</th>
                            <th scope="col">Số lượng</th>
                            <th scope="col">Tổng cộng (VND)</th>
                        </tr>
                    </thead>
                    <tbody id="bill-body"></tbody>
                </table>
            `;
            billTable.html(tableHtml);

            var billBody = $('#bill-body');

            // Duyệt qua từng sản phẩm và thêm vào bảng hóa đơn
            cartItems.forEach(function (item, index) {
                var total = item.discountPrice * item.quantity;

                var rowHtml = `
                    <tr>
                        <th scope="row">${index + 1}</th>
                        <td>${item.name}</td>
                        <td>${item.price.toLocaleString()}</td>
                        <td>${item.quantity}</td>
                        <td>${total.toLocaleString()}</td>
                    </tr>
                `;
                billBody.append(rowHtml);
            });
        }
    }

    // Hàm tính toán và cập nhật tổng số lượng và tổng giá trị
    function updateTotal() {
        var totalQuantity = 0;
        var totalPrice = 0;

        cartItems.forEach(function (item) {
            totalQuantity += item.quantity;
            totalPrice += item.quantity * item.discountPrice;
        });

        // Cập nhật lại hiển thị
        $('#total-items').text(totalQuantity);
        $('#total-price').text(totalPrice.toLocaleString() + ' VND');

        // Hiển thị hoặc ẩn nút thanh toán
        if (totalQuantity > 0) {
            $('#checkout-btn').show();
        } else {
            $('#checkout-btn').hide();
        }
    }

    // Hàm hiển thị danh sách sản phẩm trong giỏ hàng
    function renderCartItems() {
        if (cartItems.length === 0) {
            cartItemsContainer.html('<p>Giỏ hàng của bạn đang trống.</p>');
        } else {
            cartItemsContainer.empty();
            cartItems.forEach(function (item, index) {
                var total = item.discountPrice * item.quantity;

                var productHtml = `
                    <div class="card mb-3">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="${item.image}" alt="${item.name}" class="img-fluid rounded-start">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">${item.name}</h5>
                                    <p class="product-discount">Giá gốc: ${item.price.toLocaleString()} VND</p>
                                </div>
                                <div class="input-group">
                                    <button class="btn btn-minus">-</button>
                                    <input type="number" class="form-control product-quantity" value="${item.quantity}" min="0">
                                    <button class="btn btn-plus">+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                cartItemsContainer.append(productHtml);
            });
        }
    }

    // Xử lý sự kiện khi nhấn nút cộng số lượng
    $(document).on('click', '.btn-plus', function () {
        var input = $(this).closest('.input-group').find('input.product-quantity');
        var value = parseInt(input.val());
        input.val(value + 1);

        // Cập nhật lại số lượng trong cartItems và Local Storage
        var index = $(this).closest('.card').index();
        cartItems[index].quantity = value + 1;
        updateCartItems();

        // Tính toán lại tổng tiền, số lượng và hiển thị lại bảng hóa đơn
        updateTotal();
        renderBillTable();
    });

    // Xử lý sự kiện khi nhấn nút trừ số lượng
    $(document).on('click', '.btn-minus', function () {
        var input = $(this).closest('.input-group').find('input.product-quantity');
        var value = parseInt(input.val());
        if (value > 0) {
            input.val(value - 1);
        }

        var index = $(this).closest('.card').index();
        if (value === 1) {
            // Xóa sản phẩm khỏi giỏ hàng nếu số lượng về 0
            cartItems.splice(index, 1);
        } else {
            // Cập nhật lại số lượng trong cartItems
            cartItems[index].quantity = value - 1;
        }
        
        // Cập nhật lại Local Storage
        updateCartItems();

        // Tính toán lại tổng tiền, số lượng và hiển thị lại bảng hóa đơn và giỏ hàng
        updateTotal();
        renderBillTable();
        renderCartItems();
    });

    // Gọi hàm để hiển thị tổng tiền, số lượng và bảng hóa đơn ban đầu
    updateTotal();
    renderBillTable();
    renderCartItems();

    // Xử lý sự kiện khi nhấn nút thanh toán
    $('#checkout-btn').click(function () {
        alert('Bạn đã nhấn vào nút thanh toán!');
        // Bạn có thể thêm chức năng điều hướng đến trang thanh toán tại đây
    });
});



function handleLogin(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Simulate a successful login (replace this with your actual login logic)
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Check username and password (mockup)
    if (username === "yourUsername" && password === "yourPassword") {
        // Redirect to homepage if login is successful
        window.location.href = '../html/index.html'; // Redirect to the homepage
    } else {
        alert("Tên đăng nhập hoặc mật khẩu không đúng!");
    }
}


function adjustCartPadding() {
    const cart = document.querySelector('.cart');
    const productCount = document.querySelectorAll('.cart-item').length; // Đếm số sản phẩm trong giỏ

    if (productCount > 0) {
        cart.style.paddingBottom = '100px'; // Thêm khoảng cách để tránh bị footer che
    } else {
        cart.style.paddingBottom = '0';
    }
}

// Gọi hàm khi thêm hoặc xóa sản phẩm
adjustCartPadding();