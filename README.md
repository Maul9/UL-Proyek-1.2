# UL-Proyek-1.
------------------
# Arkademy Bootcamp

# Soal No. 1
Kegunaan JSON pada REST API adalah sebagai format untuk mengirim (sending) dan meminta (requesting) data pada REST API. Selain JSON format data transfer bisa berupa XML (eXtensible Markup Language) dan plain text, tetapi format data JSON lebih populer karena berukuran ringan dan formatnya lebih mudah untuk dibaca dan dimengerti.

# Soal No. 2
Format username: merupakan kombinasi dari huruf kecil, huruf besar dan angka dengan panjang 5-9 karakter. Username tidak boleh diawali dengan angka / karakter special.
Tanpa *

*const is_username_valid = (username) =>  /^[a-zA-Z][\w]{4,9}$/.test(username);*

*console.log(is_username_valid('SABRINA991'));*
*console.log(is_username_valid('1Diana'));*
*console.log(is_username_valid('0999Maul'));*

Format password: merupakan kombinasi dari huruf kecil, huruf besar minimal satu karakter, angka minimal satu karakter, dan karakter spesial minimal satu karakter dan harus memiliki karakter simbol “=” dan panjang minimal 8 karakter.

*const is_password_valid = (password) =>  /(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[\W|_])(?=.*[=]).{8,}$/.test(password);*

*console.log(is_password_valid('passW0rd='));*
*console.log(is_password_valid('Cuci#Tangan'));*
*console.log(is_password_valid('#DirumahAj4'));*

# Soal No.3
Buatlah sebuah fungsi untuk membagi sebuah array pada parameter pertama menjadi sub sub array dengan isi masing-masing sub array sesuai parameter kedua.

# Soal No.4
Buatlah fungsi/method untuk memvalidasi input parameter yang diberikan merupakan kode hex yang valid atau tidak.

# Soal No.5
Buatlah sebuah fungsi/method yang hanya menerima parameter "string", lalu menentukan karakter apa saja yang berulang dan berapa banyak karakter yang berulang tersebut. Buatlah pengecekan parameter.

# Soal No.6
Buatlah project berdasarkan ketentuan dibawah ini:
  - Buatlah database dengan tabel Product, Category, dan Cashier. Dalam tabel Product terdapat kolom id, name, price,     id_category, dan id_cashier. Di tabel Category hanya terdapat kolom id dan name. Sedangkan di tabel Cashier terdapat kolom id dan name.
  Note: Gantilah Nama Anda dan Makanan Favorit anda dengan nama anda dan makanan favorit anda.
  - Buatlah sebuah tampilan Website sesuai dengan mockup di figma https://www.figma.com/file/IHRk44f4aM8C2KXIvPNnoa/POS-App-Test-(Copy) menggunakan data statik dengan HTML, CSS, dan JS. Boleh menggunakan Bootstrap, Material UI, atau yang lainnya. HARUS DIPISAH (BERBEDA FILE/FOLDER) DENGAN NOMOR 6.C DAN SERTAKAN SCREENSHOT!
  - Buatlah sebuah tampilan Website sesuai dengan mockup di figma pada point 6.B menggunakan data dinamis yang berasal dari point 6.A  serta ditambahkan fitur CRUD ke database pada point 6.A. SERTAKAN SCREENSHOT!
