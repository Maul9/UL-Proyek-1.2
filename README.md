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
