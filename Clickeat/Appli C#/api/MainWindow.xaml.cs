using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace Appli
{
	/// <summary>
	/// Interaction logic for MainWindow.xaml
	/// </summary>
	public partial class MainWindow : Window
	{
		public MainWindow()
		{
			Model.startClient();
			InitializeComponent();
			UpdateDatagrid();
		}

		public async void UpdateDatagrid() {
			DG.ItemsSource =  await Model.GetData();
		}

		private void Reset_Click(object sender, RoutedEventArgs e)
		{
			UpdateDatagrid();
		}
		
		private async void Save_Click(object sender, RoutedEventArgs e)
		{
			IEnumerable<Model.User> oldData = await Model.GetData();

			var CommonUser = from n in DG.ItemsSource.Cast<Model.User>()
								join old in oldData
								on n.IdUser equals old.IdUser
								select new {nUser = n,oUser = old };
			var CommonUserId = CommonUser.Select(c => c.nUser.IdUser);

			Model.DeleteUser(oldData.Where(o => !CommonUserId.Contains(o.IdUser)).Select(d => d.IdUser));
			Model.UpdateUser(CommonUser.Where(c =>
											  c.nUser.Email != c.oUser.Email ||
											  c.nUser.IdRole != c.oUser.IdRole ||
											  c.nUser.Sponsor != c.oUser.Sponsor)
									   .Select(c => c.nUser));

		}
	}
}
