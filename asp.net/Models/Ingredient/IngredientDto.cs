using Dtos.Product;
using System.Collections.Generic;

namespace Dtos.Ingredient
{
    public class IngredientDto
    {
        public IngredientDto()
        {
            Products = new List<ProductDto>();
        }
        public int Id { get; set; }
        public string Name { get; set; }
        public bool IsVegan { get; set; }
        public List<ProductDto> Products { get; set; }
    }
}
