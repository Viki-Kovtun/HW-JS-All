function userInfo() {
	if (this.registered) {
  	console.log('registered')
	console.log(first.data)
  } else {
  	console.log('незарагестрированый пользователь')
	console.log(second.data)
  }
}

let first = {
	name: 'строка',
	registered: true,
	data: new Date(),
  getInfo: userInfo
}

let second = {
	name: 'строка',
	registered: false,
	data: '15.05.2019',
  getInfo: userInfo
}

first.getInfo();
second.getInfo();