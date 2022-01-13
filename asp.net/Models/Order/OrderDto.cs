using Models.Customer;
using Models.Product;
using System.Collections.Generic;
using Utilities.Enums;

namespace Models.Order
{
    public class OrderDto
    {
        
            public OrderDto()
            {
                Products = new List<ProductDto>();
            }
            public int Id { get; set; }
            public double Price { get; set; }
            public City City { get; set; }
            public string Address { get; set; }
            public List<ProductDto> Products { get; set; }
            public CustomerDto Customer { get; set; }
            public OrderStatus OrderStatus { get; set; }
        
    }
}
