
async function generateProfile() {

  const api_url = 'https://random-data-api.com/api/users/random_user?size=1';

	return fetch(api_url)
		.then(res => res.json())
		.then(data => {
			return data[0];
		});
}

export default generateProfile;