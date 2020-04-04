const is_username_valid = (username) =>  /^[a-zA-Z][\w]{4,9}$/.test(username);

console.log(is_username_valid('SABRINA991'));
console.log(is_username_valid('1Diana'));
console.log(is_username_valid('0999Maul'));


const is_password_valid = (password) =>  /(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[\W|_])(?=.*[=]).{8,}$/.test(password);

console.log(is_password_valid('passW0rd='));
console.log(is_password_valid('Cuci#Tangan'));
console.log(is_password_valid('#DirumahAj4'));
