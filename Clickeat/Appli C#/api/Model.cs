using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Json;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace Appli
{
	public class Model
	{
		private static HttpClient client;
		private static HttpRequestMessage req;
		public static void startClient() {
			if (client == null) client = new HttpClient();
			if (req == null) req = new HttpRequestMessage() { RequestUri = new Uri("http://localhost:4000/AuthDB/user")};
		}

		public static void DeleteUser(IEnumerable<int> Ids) {
			try {
				foreach (int i in Ids) {
					req.Method = HttpMethod.Delete;
					req.Content = JsonContent.Create(new { id_user = i });
					client.SendAsync(req);
				}
			} catch (Exception e) {
				System.Windows.MessageBox.Show(e.ToString());
			}
		}
		public static void UpdateUser(IEnumerable<User> Users) {
			try {
				foreach (User u in Users) {
					req.Method = HttpMethod.Put;
					req.Content = JsonContent.Create(new { id_user = u.IdUser,
														   id_role=u.IdRole, 
														   email_user=u.Email, 
														   sponsored_by_user=u.Sponsor });
					client.SendAsync(req);
				}
			} catch (Exception e) {
				System.Windows.MessageBox.Show(e.ToString());
			}
		}
		public static async Task<IEnumerable<User>> GetData()
		{
			var msg = await client.GetStringAsync("http://localhost:4000/AuthDB/data");
			return JsonConvert.DeserializeObject<IEnumerable<User>>(msg);
		}


		public class User
		{
			[JsonProperty("email_user")]
			public string Email { get; set; }

			[JsonProperty("id_user")]
			public int IdUser { get; set; }

			[JsonProperty("id_role")]
			public int? IdRole { get; set; }

			[JsonProperty("sponsored_by_user")]
			public string? Sponsor { get; set; }
		}

	}
}
