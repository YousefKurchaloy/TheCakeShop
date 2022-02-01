using Models.Ingredient;
using Models.Order;
using System.Collections.Generic;

namespace Models.Product
{
    public class ProductCreateEditDto
    {
        public ProductCreateEditDto()
        {
            IngredientsIds = new List<int>();
        }
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public double ProductPrice { get; set; }
        public List<int> IngredientsIds { get; set; }
        public List<OrderDto> Orders { get; set; }
    }
}
