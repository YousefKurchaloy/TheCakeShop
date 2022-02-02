using Models.Ingredient;
using Models.Order;
using System.Collections.Generic;

namespace Models.Product
{
    public class ProductDto
    {
        public ProductDto()
        {
            Orders = new List<OrderDto>();
            Ingredients = new List<IngredientDto>();
        }
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public double ProductPrice { get; set; }
        public string PicUrl { get; set; }
        public List<IngredientDto> Ingredients { get; set; }
        public List<OrderDto> Orders { get; set; }
    }
}
