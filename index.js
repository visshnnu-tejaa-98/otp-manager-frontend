module.exports = {
	generateOTP: (EMAIL) => {
		const BACKEND_ENDPOINT = 'https://my-otp-manager.herokuapp.com';
		let response;
		// const [email, setEmail] = useState(EMAIL);
		const data = { EMAIL };
		const postData = async () => {
			const req = await fetch(`${BACKEND_ENDPOINT}/generate`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});
			const res = await req.json();
			console.log(res);
			response = res;
		};
		postData();
		return response;
	},
	verifyOTP: (EMAIL, OTP) => {
		const BACKEND_ENDPOINT = 'https://my-otp-manager.herokuapp.com';
		let response;
		let data = { EMAIL, OTP };
		console.log(data);
		const getData = async () => {
			const req = await fetch(`${BACKEND_ENDPOINT}/verify`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});
			const res = await req.json();
			console.log(res);
			return res;
		};
		getData();
		return response;
	},
};
