using System.Collections.Generic;

namespace Entities
{
    public class Product
    {
        public Product()
        {
            Orders = new List<Order>(); 
            Ingredients = new List<Ingredient>();
        }
        public int Id { get; set; }
        public string Name { get; set; } 
        public string Description { get; set; }
        public double ProductPrice { get; set; }
        public List<Ingredient> Ingredients { get; set; }
        public List<Order> Orders { get; set; }

    }
}
