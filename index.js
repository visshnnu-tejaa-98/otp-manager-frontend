export const GenerateOTP = (EMAIL) => {
	const BACKEND_ENDPOINT = 'https://my-otp-manager.herokuapp.com';
	const [email, setEmail] = useState(EMAIL);
	let data = { email };
	console.log(data);
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
		return res;
	};
	postData();
};

export const VerifyOTP = (EMAIL, OTP) => {
	const BACKEND_ENDPOINT = 'https://my-otp-manager.herokuapp.com';
	const [email, setEmail] = useState(EMAIL);
	const [otp, setOpt] = useState(OTP);
	let data = { email, otp };
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
};
