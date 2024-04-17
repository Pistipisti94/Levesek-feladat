using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Levesek;

namespace Levesek
{
    internal class Program
    {
        static async Task Main(string[] args)
        {
            await LevesAdatok();
            Console.Title = "Ugyfelek";


        }
        private static async Task LevesAdatok()
        {            
            HttpClient httpClient = new HttpClient();
            HttpResponseMessage responseMessage = await httpClient.GetAsync("http://localhost/Levesek-feladat/backend/index.php?levesek");
            if (responseMessage.IsSuccessStatusCode)
            {
                string jsonString = await responseMessage.Content.ReadAsStringAsync();
                var etelek = Etelek.FromJson(jsonString);
               
                    Console.WriteLine($"{etelek.Length}");
                
                Console.ReadLine();
            }
        }
    }
    
}
