using System.Collections.Generic;

namespace Entities
{
    public class Ingredient
    {
        public Ingredient()
        {
            Products = new List<Product>();
        }
        public int Id { get; set; }
        public string Name { get; set; }
        public bool IsVegan { get; set; }
        public List<Product> Products { get; set; }


    }
}
